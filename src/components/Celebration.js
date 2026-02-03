import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './Celebration.css';

const Celebration = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="celebration-container">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          recycle={true}
          colors={['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FFE5EC', '#FF91A4']}
          gravity={0.15}
        />
      )}

      <motion.div 
        className="celebration-content"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.6 
        }}
      >
        {/* Floating hearts */}
        <div className="celebration-hearts">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="celebration-heart"
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: -100, 
                opacity: [0, 1, 1, 0],
                x: Math.sin(i) * 50
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              💖
            </motion.div>
          ))}
        </div>

        {/* Main celebration message */}
        <motion.div
          className="celebration-message"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1 
            className="celebration-title"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            YAY!!! 💕
          </motion.h1>

          <motion.p 
            className="celebration-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I knew you'd say yes, Piyush!
          </motion.p>

          <motion.p 
            className="celebration-subtext"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            You just made me the happiest person 💖
          </motion.p>

          <motion.div 
            className="celebration-emoji-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              💑
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              💖
            </motion.span>
          </motion.div>

          <motion.div
            className="celebration-footer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="celebration-footer-text">
              Happy Valentine's Day, my love! 🌹
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative glow */}
        <div className="celebration-glow"></div>
      </motion.div>
    </div>
  );
};

export default Celebration;
