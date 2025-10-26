import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create nodemailer transporter
    let transporter;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    } else {
      // Fallback for development: try Ethereal first, then jsonTransport as a last resort
      try {
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass
          }
        });
        console.warn('EMAIL_USER/EMAIL_PASS not set. Using Ethereal test SMTP.');
      } catch (ethErr) {
        console.warn('Ethereal setup failed, falling back to jsonTransport. Reason:', ethErr?.message || ethErr);
        transporter = nodemailer.createTransport({
          jsonTransport: true
        });
      }
    }

    // Determine a valid from address in all environments
    const fromAddress = process.env.EMAIL_USER || (transporter?.options?.auth?.user) || 'no-reply@portfolio.local';

    // Email options
    const mailOptions = {
      from: fromAddress,
      to: process.env.RECEIVER_EMAIL || 'shrutild67@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #9b87f5;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #9b87f5;">
              ${message}
            </p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `
    };

    // Send email, with retry using fallback transport if first attempt fails
    let info;
    let previewUrl = null;
    try {
      info = await transporter.sendMail(mailOptions);
    } catch (sendErr) {
      console.warn('Primary transporter failed, attempting fallback. Reason:', sendErr?.message || sendErr);
      try {
        // Build a fallback transporter chain (Ethereal -> jsonTransport)
        let fallbackTransporter;
        try {
          const testAccount = await nodemailer.createTestAccount();
          fallbackTransporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: { user: testAccount.user, pass: testAccount.pass }
          });
        } catch {
          fallbackTransporter = nodemailer.createTransport({ jsonTransport: true });
        }
        info = await fallbackTransporter.sendMail({ ...mailOptions, from: fallbackTransporter?.options?.auth?.user || 'no-reply@portfolio.local' });
        previewUrl = nodemailer.getTestMessageUrl(info);
      } catch (fallbackErr) {
        throw fallbackErr;
      }
    }
    if (!previewUrl) {
      previewUrl = nodemailer.getTestMessageUrl(info);
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      previewUrl
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
