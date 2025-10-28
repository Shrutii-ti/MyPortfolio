# Quick Start Guide

## Step 1: Configure Backend Email

1. Open `backend/.env` file
2. Update with your Gmail credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECEIVER_EMAIL=shrutild67@gmail.com
   PORT=5000
   ```

### How to Get Gmail App Password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Generate password
6. Copy and paste into `EMAIL_PASS`

## Step 2: Start Backend Server

```bash
cd backend
npm run dev
```

You should see: ✅ Server is running on port 5000

## Step 3: Start Frontend (New Terminal)

```bash
cd frontend
npm run dev
```

You should see a local URL like: http://localhost:5173

## Step 4: Open in Browser

Open http://localhost:5173 in your browser

## Step 5: Test Contact Form

1. Scroll to Contact section
2. Fill in the form
3. Click "Send Message"
4. You should receive an email!

## Step 6: Customize Your Portfolio

### Update Personal Info:
- `frontend/src/components/Hero.jsx` - Hero section
- `frontend/src/components/About.jsx` - About section
- `frontend/src/components/Projects.jsx` - Projects (add your live demo & GitHub links)
- `frontend/src/components/Contact.jsx` - Contact links

### Add Your Resume:
Replace `frontend/public/resume.pdf` with your actual resume PDF

### Customize Colors:
Edit `frontend/src/App.css` - Look for `:root` section

## Common Issues

### Issue: Email not sending
**Solution:**
- Check your Gmail credentials in `.env`
- Make sure you're using an App Password, not your regular password
- Check if 2-Step Verification is enabled

### Issue: Backend not connecting
**Solution:**
- Make sure backend is running on port 5000
- Check `frontend/src/components/Contact.jsx` - API URL should be `http://localhost:5000/api/contact`

### Issue: Animations not working
**Solution:**
- Clear browser cache
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Next Steps

1. Add your project live demo URLs
2. Upload your resume PDF
3. Customize colors and content
4. Test on mobile devices
5. Deploy to Vercel (frontend) and Render (backend)

## Need Help?

Check the main README.md file for detailed documentation!
