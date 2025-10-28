import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              I'm a passionate full-stack web developer. I enjoy building projects that blend creativity
              and functionality, transforming ideas into elegant digital solutions.
            </p>
            <p>
              Currently exploring modern web technologies like React, Node.js, and AI
              integrations. I believe in continuous learning and staying updated with
              the latest industry trends. My goal is to create applications that not
              only solve problems but also provide delightful user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or learning about the latest
              developments in web development.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <div className="info-icon">
                <FaGraduationCap />
              </div>
              <div className="info-details">
                <h3>Education</h3>
                <p>Bachelor of Computer Applications</p>
                <p className="info-sub">Jain University</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Bangalore, India</p>
                <p className="info-sub">Open to remote opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
