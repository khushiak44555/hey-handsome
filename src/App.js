import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import ValentineCard from './components/ValentineCard';
import Celebration from './components/Celebration';
import FloatingHearts from './components/FloatingHearts';
import ScrollingGallery from './components/ScrollingGallery';

function App() {
  const [answered, setAnswered] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYes = () => {
    setAnswered(true);
    setTimeout(() => {
      setShowCelebration(true);
    }, 300);
  };

  return (
    <div className="app">
      <ScrollingGallery />
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {!showCelebration ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <ValentineCard onYes={handleYes} />
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Celebration />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
