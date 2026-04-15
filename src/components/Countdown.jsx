import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  const targetDate = new Date('2026-04-26T12:24:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center bg-maroon/10 backdrop-blur-md rounded-2xl w-24 h-24 md:w-32 md:h-32 border border-royal-gold/30 shadow-lg relative overflow-hidden group"
    >
      <div className="absolute inset-0 shimmer opacity-10 group-hover:opacity-20 transition-opacity"></div>
      <span className="text-4xl md:text-5xl font-royal-title text-maroon font-bold drop-shadow-sm">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs md:text-sm font-marathi-body text-royal-gold uppercase tracking-[0.2em] mt-1">{label}</span>
      <div className="absolute bottom-1 w-1/2 h-0.5 bg-royal-gold/30 rounded-full"></div>
    </motion.div>
  );

  return (
    <section className="py-24 px-4 bg-ivory/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-royal-title text-4xl md:text-6xl text-maroon mb-16 sparkle-text"
        >
          Counting Down to the Big Day
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Unit value={timeLeft.days} label="Days" />
          <Unit value={timeLeft.hours} label="Hours" />
          <Unit value={timeLeft.minutes} label="Mins" />
          <Unit value={timeLeft.seconds} label="Secs" />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-marathi-body text-xl text-maroon/70 italic"
        >
          - उत्सव लग्नाचा, सोहळा सुखाचा -
        </motion.p>
      </div>
    </section>
  );
}
