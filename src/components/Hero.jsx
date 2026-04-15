import { motion } from 'framer-motion';


export default function Hero({ images }) {
  const name1 = "वैष्णवी";
  const name2 = "उमेश";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: i * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 spotlight-radial pointer-events-none"></div>

      <div className="z-10 text-center px-4 max-w-5xl flex flex-col items-center">
        {/* Blessings with royal shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative px-8 py-2 mb-4"
        >
          <div className="absolute inset-0 shimmering-gold opacity-30 blur-xl"></div>
          <p className="font-marathi-body text-maroon text-2xl md:text-3xl tracking-[0.3em] font-bold drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="font-marathi-body text-gold-deep text-lg md:text-xl tracking-widest mb-10 italic"
        >
          - श्री स्वामी समर्थ -
        </motion.p>

        {/* Arched Palace Framed Photo with Ornament */}
        <div className="relative mb-20 group">

          
          {/* Glowing Outer Glow */}
          <div className="absolute -inset-6 border border-royal-gold/10 rounded-[140px_140px_0_0] blur-xl animate-pulse"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-72 h-[380px] md:w-[450px] md:h-[580px] mx-auto royal-frame palace-arch z-10"
          >
            <div className="w-full h-full overflow-hidden rounded-inherit relative">
              <motion.img 
                src={images[2]} 
                alt="Vaishnavi & Umesh" 
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.25 }}
                animate={{ 
                  scale: [1.15, 1.3, 1.15],
                  x: [0, 8, -8, 0],
                  y: [0, -8, 8, 0]
                }}
                transition={{ 
                  scale: { duration: 25, repeat: Infinity, ease: "linear" },
                  x: { duration: 30, repeat: Infinity, ease: "linear" },
                  y: { duration: 35, repeat: Infinity, ease: "linear" }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/25 via-transparent to-transparent"></div>
            </div>
            
            {/* Soft Inner Glow Placeholder (via CSS in index.css) */}
          </motion.div>
        </div>

        {/* Introduction Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="font-royal-title text-maroon/80 text-xl md:text-2xl mb-4 italic"
        >
          Together with their families...
        </motion.p>

        {/* Names with Staggered Reveal */}
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-maroon text-7xl md:text-9xl lg:text-[10rem] my-8 flex flex-wrap justify-center items-center gap-8"
        >
          <motion.span variants={child} className="font-marathi-body font-bold drop-shadow-lg text-maroon whitespace-nowrap">
            {name1}
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, type: 'spring', damping: 10 }}
            className="font-royal-script text-royal-gold text-6xl md:text-8xl mx-4 sparkle-text"
          >
            &
          </motion.span>

          <motion.span variants={child} className="font-marathi-body font-bold drop-shadow-lg text-maroon whitespace-nowrap">
            {name2}
          </motion.span>
        </motion.h1>

        {/* Date & Venue Plaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 relative group"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-6 bg-royal-gold/10 rounded-[2.5rem] blur-2xl group-hover:bg-royal-gold/20 transition-all"></div>
          
          <div className="relative py-8 px-12 md:px-20 bg-ivory/70 backdrop-blur-md rounded-[2.5rem] border-2 border-royal-gold/40 shadow-2xl overflow-hidden flex flex-col items-center gap-4">
            <div className="absolute inset-0 shimmer opacity-10"></div>
            
            {/* Date */}
            <p className="font-marathi-body text-maroon tracking-[0.2em] text-3xl md:text-4xl font-bold whitespace-nowrap drop-shadow-sm">
              २६ एप्रिल २०२६
            </p>
            
            <div className="w-16 h-[1px] bg-royal-gold/30"></div>
            
            {/* Venue */}
            <p className="font-marathi-body text-maroon/80 text-xl md:text-2xl font-medium tracking-wide text-center">
              📍 भागिरथी लॉन्स, मानोरी, जि. अहिल्यानगर
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Mandala (Background) */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.08, rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] border-4 border-royal-gold rounded-full pointer-events-none flex items-center justify-center opacity-30"
      >
        <div className="w-[600px] h-[600px] border-2 border-royal-gold rounded-full opacity-50"></div>
        <div className="w-[400px] h-[400px] border border-royal-gold rounded-full opacity-30"></div>
      </motion.div>
    </section>
  );
}

