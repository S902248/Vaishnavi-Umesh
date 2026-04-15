import { motion } from 'framer-motion';

export default function Invitation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-4 bg-transparent text-center relative overflow-hidden">
      {/* Subtle Mughal background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #d4af37 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto glass-card-royal p-8 md:p-24 relative z-10 gold-border-glow overflow-hidden"
      >
        {/* Ornate corner decorations - more refined */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-royal-gold/40 rounded-tl-2xl opacity-60"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-royal-gold/40 rounded-br-2xl opacity-60"></div>

        <div className="text-center mb-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-royal-gold/20 rounded-full mx-auto mb-8 flex items-center justify-center relative"
          >
             <div className="absolute inset-2 border border-royal-gold/10 rounded-full animate-pulse"></div>
            <span className="text-royal-gold text-3xl">⚜</span>
          </motion.div>
          
          <div className="relative inline-block px-10">
            <motion.h2 
              variants={itemVariants} 
              className="font-marathi-body font-bold text-maroon text-6xl md:text-7xl flex flex-wrap justify-center gap-4 py-2 drop-shadow-sm sparkle-text"
            >
              {"सस्नेह निमंत्रण".split(" ").map((word, i) => (
                <motion.span key={i}>{word}</motion.span>
              ))}
            </motion.h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-royal-gold to-transparent mt-4"></div>
          </div>
        </div>

        <motion.p variants={itemVariants} className="font-marathi-body text-3xl text-maroon mb-16 leading-relaxed font-semibold">
          स. न. वि. वि. आमच्या येथे <span className="text-royal-gold sparkle-text font-bold">श्रीहरी कृपेकरून</span>
        </motion.p>

        {/* Bride & Groom Container */}
        <div className="grid grid-cols-1 gap-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-royal-gold/20 to-transparent hidden md:block"></div>

          {/* Bride Section */}
          <motion.div variants={itemVariants} className="relative group">
            <h3 className="font-marathi-title text-5xl md:text-6xl text-maroon mb-8 relative z-10">
              चि. सौ. कां. <span className="font-marathi-body font-bold text-6xl md:text-7xl">वैष्णवी</span>
              <span className="text-xl font-modern text-gold-deep block mt-3 tracking-widest uppercase opacity-80">(MCA)</span>
            </h3>
            <p className="font-marathi-body text-maroon/90 text-2xl leading-relaxed font-medium relative z-10 max-w-2xl mx-auto italic">
              कै. श्रीपती नारायण पा. आढाव यांची नात व<br/>
              श्री. रामदास श्रीपती पा. आढाव (मा. चेअरमन) यांची पुतणी व<br/>
              सौ. शोभा व श्री. शिवाजी श्रीपती पा. आढाव यांची कन्या<br/>
              रा. केंदळ खुर्द, ता. राहुरी, जि. अहिल्यानगर 
            </p>
          </motion.div>

          {/* Groom Section */}
          <motion.div variants={itemVariants} className="relative group">
             <div className="w-12 h-[1px] bg-royal-gold/30 mx-auto mb-16"></div>
            <h3 className="font-marathi-title text-5xl md:text-6xl text-maroon mb-8 relative z-10">
              चि. <span className="font-marathi-body font-bold text-6xl md:text-7xl">उमेश</span>
              <span className="text-xl font-modern text-gold-deep block mt-3 tracking-widest uppercase opacity-80">(M.Sc., MBA)</span>
            </h3>
            <p className="font-marathi-body text-maroon/90 text-2xl leading-relaxed font-medium relative z-10 max-w-2xl mx-auto italic">
              कै. गणपत रघुनाथ पा. गागरे यांचे नातू व<br/>
              सौ. कमल व श्री. अशोक गणपत पा. गागरे याांचे चिरंजीव<br/>
              रा. तांभेरे, ता. राहुरी, जि. अहिल्यानगर
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-20 pt-16 border-t border-royal-gold/10">
          <motion.p 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="font-marathi-body text-4xl text-royal-gold leading-relaxed font-bold tracking-[0.3em] uppercase sparkle-text mb-12"
          >
            यांचा शुभविवाह...
          </motion.p>
          
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-royal-gold/20 blur-3xl rounded-full"></div>
            <div className="text-7xl relative z-10 animate-bounce">💍</div>
          </div>

          <p className="font-marathi-body text-2xl md:text-3xl text-maroon leading-relaxed font-medium max-w-2xl mx-auto italic">
            या शुभमुहूर्तावर करण्याचे योजिले आहे तरी आपण सहकुटुंब सहपरिवार कार्यक्रमास उपस्थित राहून वधू-वरास <span className="text-maroon font-bold underline decoration-royal-gold/40 underline-offset-[12px] sparkle-text">शुभाशिर्वाद</span> द्यावा ही नम्र विनंती.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
