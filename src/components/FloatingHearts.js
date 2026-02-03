import React from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

const FloatingHearts = () => {
  // Create array of heart configurations with variety
  const heartEmojis = ['💖', '💕', '💗', '💓', '💝'];
  
  const hearts = [
    { id: 1, size: 25, duration: 8, delay: 0, left: '10%', emoji: heartEmojis[0] },
    { id: 2, size: 20, duration: 10, delay: 1, left: '20%', emoji: heartEmojis[1] },
    { id: 3, size: 30, duration: 12, delay: 2, left: '30%', emoji: heartEmojis[2] },
    { id: 4, size: 22, duration: 9, delay: 0.5, left: '40%', emoji: heartEmojis[3] },
    { id: 5, size: 28, duration: 11, delay: 1.5, left: '50%', emoji: heartEmojis[4] },
    { id: 6, size: 24, duration: 10, delay: 2.5, left: '60%', emoji: heartEmojis[0] },
    { id: 7, size: 26, duration: 13, delay: 1, left: '70%', emoji: heartEmojis[1] },
    { id: 8, size: 21, duration: 9, delay: 3, left: '80%', emoji: heartEmojis[2] },
    { id: 9, size: 29, duration: 11, delay: 0.8, left: '90%', emoji: heartEmojis[3] },
    { id: 10, size: 23, duration: 12, delay: 2.2, left: '15%', emoji: heartEmojis[4] },
    { id: 11, size: 27, duration: 10, delay: 1.8, left: '45%', emoji: heartEmojis[0] },
    { id: 12, size: 25, duration: 14, delay: 2.8, left: '75%', emoji: heartEmojis[1] },
    { id: 13, size: 20, duration: 9, delay: 0.3, left: '35%', emoji: heartEmojis[2] },
    { id: 14, size: 31, duration: 13, delay: 1.3, left: '65%', emoji: heartEmojis[3] },
    { id: 15, size: 22, duration: 11, delay: 2.3, left: '85%', emoji: heartEmojis[4] },
  ];

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.5, 0.7, 0.5, 0],
            rotate: [0, 360],
            x: [0, Math.sin(heart.id) * 60, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
