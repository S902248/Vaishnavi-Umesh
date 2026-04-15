import { motion } from 'framer-motion';

export default function Family() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-32 px-4 bg-transparent relative">
      {/* Background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-maroon/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-marathi-title text-maroon text-6xl md:text-7xl mb-6 sparkle-text"
          >
            आप्तपरिवार
          </motion.h2>
          <p className="font-royal-script text-royal-gold text-5xl italic drop-shadow-sm">The Beloved Family</p>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-maroon/20 to-transparent mx-auto mt-10"></div>
        </div>

        {/* Ashirwad & Punyasmaran Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto text-center">
          <motion.div variants={item} className="glass-card-royal p-10 border border-royal-gold/20">
            <h4 className="font-marathi-body text-gold-deep text-2xl uppercase tracking-[0.2em] mb-6 font-bold underline underline-offset-8 decoration-maroon/20">आशीर्वाद</h4>
            <p className="font-marathi-body text-maroon text-2xl font-bold leading-relaxed">
              ह.भ.प. महंत रामगिरीजी महाराज<br/>
              <span className="text-lg opacity-80 font-medium">(मठाधिपती, सराला बेट)</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="glass-card-royal p-10 border border-royal-gold/20">
            <h4 className="font-marathi-body text-gold-deep text-2xl uppercase tracking-[0.2em] mb-6 font-bold underline underline-offset-8 decoration-maroon/20">पुण्यस्मरण</h4>
            <div className="space-y-4 font-marathi-body text-maroon text-xl font-bold">
              <p>कै. गणपत नारायण पा. आढाव</p>
              <p>कै. श्रीपती नारायण पा. आढाव</p>
              <p>कै. रंगनाथ नारायण पा. आढाव</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Main Elders */}
          <motion.div variants={container} initial="hidden" whileInView="visible" className="text-center space-y-12">
            <motion.div variants={item} className="inline-block px-10 py-4 border-2 border-royal-gold/30 rounded-full mb-6 gold-border-glow">
              <span className="text-maroon text-3xl font-royal-title italic">निमंत्रक / स्वागतोत्सुक</span>
            </motion.div>
            
            <div className="space-y-10">
              <motion.div variants={item} className="group">
                <p className="font-marathi-body text-maroon text-3xl font-bold">श्री. रामदास श्रीपती पा. आढाव <span className="text-lg opacity-70">(मा. चेअरमन)</span></p>
                <div className="h-[1px] w-12 bg-royal-gold/20 mx-auto my-4"></div>
                <p className="font-marathi-body text-maroon text-3xl font-bold">श्री. जनार्दन रंगनाथ पा. आढाव</p>
                <div className="h-[1px] w-12 bg-royal-gold/20 mx-auto my-4"></div>
                <p className="font-marathi-body text-maroon text-3xl font-bold">श्री. शिवाजी श्रीपती पा. आढाव</p>
                <div className="h-[1px] w-12 bg-royal-gold/20 mx-auto my-4"></div>
                <p className="font-marathi-body text-maroon text-3xl font-bold">श्री. दिनकर रंगनाथ पा. आढाव</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Extended Family & Youth */}
          <motion.div variants={container} initial="hidden" whileInView="visible" className="text-center space-y-12">
             <motion.div variants={item} className="inline-block px-10 py-4 border-2 border-royal-gold/30 rounded-full mb-6 gold-border-glow">
              <span className="text-maroon text-3xl font-royal-title italic">आप्त परिवार</span>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-maroon font-marathi-body font-bold text-xl">
              <div className="space-y-4">
                <p>श्री. ज्ञानदेव आण्णासाहेब पा. गावडे</p>
                <p>श्री. रोहीत एकनाथ पा. शेळके <span className="text-xs opacity-60">(ग्रामपंचायत सदस्य)</span></p>
                <p>श्री. योगेश जनार्दन पा. आढाव <span className="text-xs opacity-60">(MBA)</span></p>
                <p>श्री. शनैश्वर जनार्दन पा. आढाव</p>
              </div>
              <div className="space-y-4">
                <p>चि. गौरव शिवाजी पा. आढाव <span className="text-xs opacity-60">(M.Sc. Chem.)</span></p>
                <p>चि. शुभम दिनकर पा. आढाव <span className="text-xs opacity-60">(MCA)</span></p>
                <p>चि. शिवम रामदास पा. आढाव</p>
                <p>चि. सत्यम रामदास पा. आढाव <span className="text-xs opacity-60">(M.Sc. Elc.)</span></p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 text-center glass-card-royal p-12 md:p-20 max-w-5xl mx-auto gold-border-glow relative overflow-hidden"
        >
          <div className="absolute inset-0 shimmer opacity-10"></div>
          <p className="font-marathi-body text-3xl text-maroon font-bold mb-6">समस्त आढाव पाटील परिवार</p>
          <div className="h-[1px] w-24 bg-royal-gold/30 mx-auto mb-8"></div>
          <p className="font-marathi-body text-2xl md:text-3xl text-maroon/90 leading-relaxed font-bold italic sparkle-text">
            "स्नेह आदर आणि आपुलकीचे आमंत्रण स्वीकारून आमच्या या आनंदात सहभागी व्हावे अशी आमची आग्रहाची विनंती आहे."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
