import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-20 px-4 bg-transparent text-center relative z-20 overflow-hidden border-t border-royal-gold/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold/40"></div>
          <span className="text-royal-gold text-2xl">⚜</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold/40"></div>
        </div>

        <p className="font-marathi-body text-maroon/60 text-lg tracking-[0.2em] mb-4 uppercase">
          Digitally Crafted with Love
        </p>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <h2 className="font-royal-script text-royal-gold text-4xl md:text-5xl sparkle-text drop-shadow-sm">
            Made by Shubham Adhav
          </h2>
        </motion.div>

        <div className="mt-12 text-maroon/40 font-modern text-xs tracking-widest">
          © {new Date().getFullYear()} • THE ROYAL UNION
        </div>
      </motion.div>
    </footer>
  );
}
