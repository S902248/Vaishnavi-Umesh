import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import doorImg from '../assets/fort-door.png';
import doorSound from '../assets/mp3.mp3';

export default function DoorEntry({ onEnter, onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onOpen) onOpen();
    
    setTimeout(() => {
      onEnter();
    }, 2500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center">
      {/* Perspective Container */}
      <div className="relative w-full h-full flex" style={{ perspective: '1200px' }}>
        
        {/* Left Door */}
        <motion.div
          onClick={handleOpen}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -110 : 0 }}
          transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
          style={{ transformOrigin: 'left center', backgroundImage: `url(${doorImg})` }}
          className="w-1/2 h-full bg-cover bg-left cursor-pointer border-r border-gold-deep/30 relative"
        >
          {/* Decorative Particles Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none shimmer opacity-30"></div>
        </motion.div>

        {/* Right Door */}
        <motion.div
          onClick={handleOpen}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 110 : 0 }}
          transition={{ duration: 2.5, ease: [0.45, 0, 0.55, 1] }}
          style={{ transformOrigin: 'right center', backgroundImage: `url(${doorImg})` }}
          className="w-1/2 h-full bg-cover bg-right cursor-pointer border-l border-gold-deep/30 relative"
        >
          <div className="absolute inset-0 bg-black/20 pointer-events-none shimmer opacity-30"></div>
        </motion.div>

        {/* Floating CTA Overlay */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <p className="mt-6 text-royal-gold font-marathi-body text-2xl tracking-[0.2em] text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] sparkle-text px-4">
                विवाह सोहळ्यात आपले सहर्ष स्वागत...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip Button */}
        <button 
          onClick={onEnter}
          className="absolute top-8 right-8 z-10 px-6 py-2 bg-white/10 hover:bg-white/20 text-white/70 font-marathi-body text-sm rounded-full backdrop-blur-sm transition-all"
        >
          
        </button>

        {/* Royal Particles (Dust/Fireflies) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-royal-gold rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2,
                animation: `firefly ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
