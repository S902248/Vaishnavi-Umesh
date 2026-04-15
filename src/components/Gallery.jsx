import { motion } from 'framer-motion';

export default function Gallery({ images }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, rotate: -3 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-28">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-marathi-title text-maroon text-center text-6xl md:text-7xl mb-6 sparkle-text"
          >
            
          </motion.h2>
          <p className="font-royal-script text-royal-gold text-5xl italic drop-shadow-sm">Moments to Cherish Forever</p>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent mx-auto mt-10"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {images.map((src, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] border-[12px] border-ivory shadow-2xl relative gold-border-glow"
            >
              <img 
                src={src} 
                alt={`Wedding moment ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {/* Gold overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center p-8">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-royal-gold font-royal-script text-4xl block mb-4 sparkle-text">Beautiful Memories</span>
                  <div className="h-[1px] w-16 bg-royal-gold/40 mx-auto"></div>
                </div>
              </div>
              
              {/* Inner ornate border */}
              <div className="absolute inset-4 border border-royal-gold/20 rounded-[2rem] pointer-events-none group-hover:inset-3 transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
