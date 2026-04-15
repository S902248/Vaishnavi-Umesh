import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Petal = ({ id }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const left = Math.random() * 100;
    const duration = 15 + Math.random() * 20;
    const delay = Math.random() * 20;
    const size = 10 + Math.random() * 20;
    const colors = ['#7a1c2e', '#d4af37', '#f8f1e7', '#b8860b', '#7a1c2e'];
    const background = colors[Math.floor(Math.random() * colors.length)];
    setStyle({
      left: `${left}%`,
      bottom: `-50px`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      background: background,
      borderRadius: '50% 0 50% 50%',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.1)',
      transform: `rotate(${Math.random() * 360}deg)`,
      opacity: Math.random() * 0.4 + 0.2
    });
  }, []);
  return <div className="petal" style={style} />;
};

const Firefly = ({ id }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 5 + Math.random() * 10;
    setStyle({
      left: `${left}%`,
      top: `${top}%`,
      animation: `firefly ${duration}s infinite ease-in-out`,
      animationDelay: `${delay}s`,
    });
  }, []);
  return (
    <div 
      className="absolute w-1 h-1 bg-royal-gold rounded-full opacity-40 blur-[1px]" 
      style={style} 
    />
  );
};

const SparkleBurst = ({ id, onComplete }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  useEffect(() => {
    setPosition({ x: 20 + Math.random() * 60, y: 20 + Math.random() * 40 });
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200, scale: [0, 1, 0], opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-1 h-1 bg-royal-gold rounded-full"
          style={{ boxShadow: '0 0 10px #d4af37' }}
        />
      ))}
    </div>
  );
};

export default function Decorations() {
  const [items, setItems] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setItems(Array.from({ length: 40 }, (_, i) => i));
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const id = Date.now();
        setSparkles(prev => [...prev.slice(-4), id]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Petals */}
      {items.slice(0, 15).map(id => <Petal key={`petal-${id}`} />)}
      
      {/* Fireflies */}
      {items.slice(0, 25).map(id => <Firefly key={`firefly-${id}`} />)}
      
      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map(id => (
          <SparkleBurst key={id} onComplete={() => setSparkles(prev => prev.filter(s => s !== id))} />
        ))}
      </AnimatePresence>

      {/* Bokeh Royal Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-maroon/[0.03] rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-royal-gold/[0.03] rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-ivory/[0.02] mix-blend-overlay"></div>
    </div>
  );
}
