import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    Frontend: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
    ],
    Database: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    ],
    Tools: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'REST APIs', icon: <FaDatabase />, color: '#9b87f5' },
    ],
    'Currently Learning': [
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const leafVariants = {
    hidden: { scale: 0, opacity: 0, y: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const categories = Object.entries(skills);

  return (
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants}>Skills & Technologies</motion.h2>

        <motion.p className="skills-subtitle" variants={itemVariants}>
          My technical toolkit grows like a tree, branching into different domains
        </motion.p>

        <div className="skills-tree">
          {/* Tree Trunk */}
          <div className="tree-trunk"></div>

          {/* Tree Branches with Skills */}
          {categories.map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className={`tree-branch branch-${categoryIndex}`}
              variants={itemVariants}
            >
              {/* Branch Line */}
              <div className="branch-line"></div>

              {/* Category Label */}
              <div className="branch-label">
                <h3 className="category-title">{category}</h3>
              </div>

              {/* Skills on this branch */}
              <div className="branch-skills">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-leaf"
                    initial="hidden"
                    animate="visible"
                    variants={leafVariants}
                    whileHover={{
                      scale: 1.15,
                      y: -8,
                      rotate: Math.random() > 0.5 ? 5 : -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`,
                    }}
                  >
                    <div className="leaf-stem"></div>
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
