import { motion } from 'framer-motion';

export default function Events() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const events = [
    {
      title: "हळदी समारंभ",
      time: "शनिवार, दि. २५/०४/२०२६",
      detail: "सायंकाळी ६:४५ वाजता",
      icon: "✨",
     
    },
    {
      title: "शुभविवाह",
      time: "रविवार, दि. २६/०४/२०२६",
      detail: "दुपारी १२:२४ वाजता (शुभ मुहूर्त)",
      icon: "🌿",
      tagline: "मंगलमयी सोहळा!"
    }
  ];

  return (
    <section className="py-32 px-4 bg-transparent text-center relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "8px" }}
            className="text-royal-gold uppercase tracking-[0.5em] text-sm mb-4 block"
          >
            The Celebration
          </motion.span>
          <motion.h2 variants={cardVariants} className="font-marathi-body font-bold text-maroon text-6xl md:text-7xl sparkle-text">
            शुभेच्छा व कार्यक्रम
          </motion.h2>
          <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants} 
              whileHover={{ y: -10 }}
              className="glass-card-royal p-12 relative overflow-hidden group gold-border-glow"
            >
              <div className="absolute inset-0 shimmer opacity-10 pointer-events-none"></div>
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">{event.icon}</div>
              <h3 className="font-marathi-title text-4xl md:text-5xl text-maroon mb-6 group-hover:text-gold-deep transition-colors">{event.title}</h3>
              <p className="font-marathi-body text-maroon/90 text-xl md:text-2xl leading-relaxed font-bold border-y border-royal-gold/20 py-8 my-6 italic">
                {event.time}<br/>
                {event.detail}
              </p>
              <div className="mt-4">
                <p className="font-marathi-body text-gold-deep text-lg font-medium italic tracking-widest">{event.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Section with Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto glass-card-royal p-0 relative gold-border-glow overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center text-left border-r border-royal-gold/10">
            <div className="text-5xl mb-10 text-maroon">📍</div>
            <h3 className="font-marathi-body font-bold text-5xl md:text-6xl text-maroon mb-8">विवाहस्थळ</h3>
            <p className="font-marathi-body text-maroon/90 text-2xl md:text-3xl leading-relaxed font-bold mb-6">
              भागिरथी लॉन्स, मानोरी
            </p>
            <p className="text-xl text-maroon/70 font-marathi-body leading-relaxed mb-12 italic">
              राहुरी–मांजरी रोड, मानोरी, ता. राहुरी, जि. अहिल्यानगर
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.google.com/?q=Bhagirathi+Lawns,+Manori,+Rahuri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block w-fit px-14 py-5 bg-maroon text-royal-gold font-bold rounded-full font-modern tracking-[0.2em] shadow-2xl hover:bg-[#b3002d] transition-all uppercase border border-royal-gold/30 text-lg"
            >
              Get Directions
              ठिकाण बघा

            </motion.a>
          </div>

          <div className="md:w-1/2 h-[450px] md:h-auto bg-ivory/30 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.475475143003!2d74.65345715!3d19.27712395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc97805903b0d1%3A0x892a01340b0709f1!2sManori%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713200000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(0.9) sepia(0.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
