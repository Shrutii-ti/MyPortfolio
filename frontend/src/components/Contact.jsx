import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/contact`, formData);

      setStatus({
        loading: false,
        message: response.data.message,
        type: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: '', type: '' });
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
        type: 'error',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, message: '', type: '' });
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>

        <motion.p className="contact-subtitle" variants={itemVariants}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>Feel free to reach out through any of these channels:</p>

            <div className="contact-links">
              <a
                href="mailto:shrutild67@gmail.com"
                className="contact-link-card"
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>shrutild67@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Shrutii-ti"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <p>@Shrutii-ti</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-lal-das/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Shruti Lal Das</p>
                </div>
              </a>

              <a
                href="/resume.pdf"
                download
                className="contact-link-card"
              >
                <FaFileDownload className="contact-icon" />
                <div>
                  <h4>Resume</h4>
                  <p>Download PDF</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status.loading}
            >
              {status.loading ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
