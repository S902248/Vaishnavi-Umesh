import { motion } from 'framer-motion';

export default function GoldParticles() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            scale: Math.random() * 0.5 + 0.5,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100 + 100}%` 
          }}
          animate={{ 
            opacity: [0, 0.8, 0],
            y: "-10%",
            x: `calc(${Math.random() * 100}% + ${Math.random() * 50 - 25}px)`
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-royal-gold rounded-full blur-[1px]"
          style={{
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)'
          }}
        />
      ))}
    </div>
  );
}
