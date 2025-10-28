import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker',
      description:
        'A full-featured web app to track daily expenses and manage budgets efficiently. Shows monthly summaries and charts to visualize spending patterns.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      liveDemo: 'https://lnkd.in/dwBJ-gPC',
      github: 'https://github.com/Shrutii-ti/ExpenseTracker',
      image: '💰',
    },
    {
      id: 2,
      title: 'URL Shortener',
      description:
        'A web app to shorten long URLs into compact links with instant redirects. Features analytics like total clicks and time-based tracking.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'CSS'],
      liveDemo: 'https://url-shortener-00gl.onrender.com/',
      github: 'https://github.com/Shrutii-ti/URL_shortener',
      image: '🔗',
    },
    {
      id: 3,
      title: 'Voice Note AI',
      description:
        'A smart voice note application that records, transcribes, and saves audio notes using AI. Helps users manage ideas hands-free with speech recognition.',
      techStack: ['React', 'Web Speech API', 'Local Storage'],
      liveDemo: 'https://voicenoteai12.netlify.app/',
      github: 'https://github.com/Shrutii-ti/VoiceNote.AI',
      image: '🗣️',
    },
  ];

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
    <section className="projects" id="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants}>Featured Projects</motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-emoji">{project.image}</div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
