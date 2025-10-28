import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          <span className="wave">👋</span> Hi, I'm
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Shruti Lal Das
        </motion.h1>

        <motion.h2 className="hero-title" variants={itemVariants}>
          Aspiring Software Developer
        </motion.h2>

        <motion.p className="hero-tagline" variants={itemVariants}>
          I build creative and functional web apps that make life simpler.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="/resume.pdf" download className="btn btn-outline">
            <FaFileDownload /> Download Resume
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href="https://github.com/Shrutii-ti"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-lal-das/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shrutild67@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
