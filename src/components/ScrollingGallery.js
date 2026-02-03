import React from 'react';
import { motion } from 'framer-motion';
import './ScrollingGallery.css';

// Import images
import img1 from '../images/WhatsApp Image 2026-02-03 at 6.46.02 PM.jpeg';
import img2 from '../images/WhatsApp Image 2026-02-03 at 6.55.11 PM.jpeg';
import img3 from '../images/WhatsApp Image 2026-02-03 at 6.55.12 PM.jpeg';
import img4 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM.jpeg';
import img5 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (1).jpeg';
import img6 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (2).jpeg';
import img7 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (3).jpeg';
import img8 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (4).jpeg';
import img9 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (5).jpeg';
import img10 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (6).jpeg';
import img11 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (7).jpeg';
import img12 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (8).jpeg';
import img13 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (9).jpeg';
import img14 from '../images/WhatsApp Image 2026-02-03 at 6.55.19 PM (10).jpeg';

const ScrollingGallery = () => {
  // Left side images (scrolling upward)
  const leftImages = [img1, img2, img3, img4, img5, img6, img7];
  
  // Right side images (scrolling downward)
  const rightImages = [img8, img9, img10, img11, img12, img13, img14];

  return (
    <>
      {/* Left scrolling column - moving upward */}
      <div className="scrolling-gallery left">
        <motion.div
          className="gallery-track"
          animate={{
            y: ['0%', '-100%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Render images twice for seamless loop */}
          {[...leftImages, ...leftImages, ...leftImages].map((img, index) => (
            <div key={`left-${index}`} className="gallery-image-wrapper">
              <img src={img} alt={`Memory ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right scrolling column - moving downward */}
      <div className="scrolling-gallery right">
        <motion.div
          className="gallery-track"
          animate={{
            y: ['-100%', '0%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Render images twice for seamless loop */}
          {[...rightImages, ...rightImages, ...rightImages].map((img, index) => (
            <div key={`right-${index}`} className="gallery-image-wrapper">
              <img src={img} alt={`Memory ${index + 8}`} className="gallery-image" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default ScrollingGallery;
