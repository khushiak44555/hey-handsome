import React from 'react';
import { motion } from 'framer-motion';
import './ValentineCard.css';
import InteractiveButtons from './InteractiveButtons';

const ValentineCard = ({ onYes }) => {
  return (
    <motion.div 
      className="valentine-card"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated hearts decoration */}
      <div className="card-hearts">
        <motion.span 
          className="heart-emoji"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💕
        </motion.span>
        <motion.span 
          className="heart-emoji heart-2"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          💖
        </motion.span>
        <motion.span 
          className="heart-emoji heart-3"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        >
          💗
        </motion.span>
      </div>

      {/* Main content */}
      <motion.div 
        className="card-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.p 
          className="intro-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hey Piyush... 💭
        </motion.p>

        <motion.h1 
          className="main-question"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Will you be my Valentine?
          <span className="heart-icon">💖</span>
        </motion.h1>

        <motion.p 
          className="sub-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          I promise unlimited love, laughs & cuddles 💕
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <InteractiveButtons onYes={onYes} />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="card-glow"></div>
    </motion.div>
  );
};

export default ValentineCard;
