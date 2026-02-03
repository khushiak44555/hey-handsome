import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './InteractiveButtons.css';

const InteractiveButtons = ({ onYes }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [attemptCount, setAttemptCount] = useState(0);

  const moveNoButton = () => {
    // Increase difficulty with each attempt
    setAttemptCount(prev => prev + 1);
    
    const maxDistance = 150;
    
    // Generate random position around the button
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + (attemptCount * 30);
    
    const randomX = Math.cos(angle) * Math.min(distance, maxDistance);
    const randomY = Math.sin(angle) * Math.min(distance, maxDistance);
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <div className="buttons-container">
      <motion.button
        className="yes-button"
        onClick={onYes}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 40px rgba(255, 20, 147, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 5px 20px rgba(255, 20, 147, 0.3)",
            "0 8px 30px rgba(255, 20, 147, 0.5)",
            "0 5px 20px rgba(255, 20, 147, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        Yes 💗
      </motion.button>

      <motion.button
        className="no-button"
        onMouseEnter={handleNoHover}
        onClick={handleNoClick}
        animate={{
          x: noButtonPosition.x,
          y: noButtonPosition.y,
          rotate: attemptCount > 0 ? [0, -5, 5, -5, 0] : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5
        }}
        whileHover={{ 
          scale: 0.9,
        }}
      >
        No 💔
      </motion.button>

      {attemptCount > 0 && (
        <motion.div
          className="teasing-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {attemptCount === 1 && "Hey! Come back! 😊"}
          {attemptCount === 2 && "You can't escape love! 💕"}
          {attemptCount === 3 && "Just say yes already! 🥰"}
          {attemptCount >= 4 && "I know you want to say yes! 💖"}
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveButtons;
