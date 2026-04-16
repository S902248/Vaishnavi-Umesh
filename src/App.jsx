import { useState, useRef, useEffect, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Decorations from './components/Decorations'
import SmoothScroll from './components/SmoothScroll'
import DoorEntry from './components/DoorEntry'
import Countdown from './components/Countdown'
import GoldParticles from './components/GoldParticles'

// Lazy load below-the-fold components
const Events = lazy(() => import('./components/Events'));
const Gallery = lazy(() => import('./components/Gallery'));
const Family = lazy(() => import('./components/Family'));
const Footer = lazy(() => import('./components/Footer'));


// Import assets safely
import img1 from './assets/KSP_3468 copy.jpg.jpeg'
import img2 from './assets/KSP_3470 copy.jpg.jpeg'
import img3 from './assets/KSP_3483 copy.jpg.jpeg'
import img4 from './assets/KSP_3504 copy.jpg.jpeg'
import bgVideo from './assets/video.mp4'
import bgMusic from './assets/mp3.mp3'

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted for a better wedding experience
  const [isMusicStarted, setIsMusicStarted] = useState(false);
  const bgAudioRef = useRef(null);
  const images = [img1, img2, img3, img4];

  // Scroll-linked background color animation
  const { scrollYProgress } = useScroll();
  
  // Transitioning through royal colors: Ivory -> Warm Gold -> Deep Maroon -> Soft Pearl -> Ivory
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#F8F1E7", "#fdf1d6", "#f8e7b9", "#fdf1d6", "#F8F1E7"]
  );

  const bgOverlay = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(248, 241, 231, 0.85)", "rgba(248, 241, 231, 0.92)", "rgba(248, 241, 231, 0.85)"]
  );

  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        if (isMusicStarted && !isMuted) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (e) {
        console.log("Audio playback failed", e);
      }
    };

    playAudio();

    // Interaction handler to "unlock" audio in browsers that block auto-play
    const handleInteraction = () => {
      if (isMusicStarted && !isMuted && audio.paused) {
        audio.play().catch(() => {});
      }
      // Don't remove listener yet, we want to catch any click while unmuted
    };

    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isMusicStarted, isMuted]);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <>
      <Analytics />
      <audio 
        ref={bgAudioRef} 
        src={bgMusic} 
        loop 
        preload="auto"
      />

      {/* Fixed Music Control Button - Outside scroll container to stay perfectly fixed */}
      <motion.div 
        className="fixed top-8 left-8 z-[110]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button 
          onClick={toggleMute}
          className={`group relative flex items-center justify-center p-4 rounded-full backdrop-blur-xl border-2 transition-all duration-700 shadow-2xl ${isMuted ? 'bg-maroon/10 border-royal-gold/30 hover:bg-maroon/20' : 'bg-maroon/60 border-royal-gold animate-pulse'}`}
        >
          <div className="text-lg md:text-xl drop-shadow-sm group-hover:scale-110 transition-transform">
            {isMuted ? "🔇" : "🔊"}
          </div>
          {!isMuted && (
            <div className="absolute -inset-2 rounded-full border border-royal-gold/20 animate-ping"></div>
          )}
          <span className="absolute left-full ml-4 px-4 py-2 bg-maroon/90 text-royal-gold text-xs font-modern rounded-full opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-royal-gold/20 backdrop-blur-md -translate-x-4 group-hover:translate-x-0">
            {isMuted ? "Play Shehnai" : "Mute Music"}
          </span>
        </button>
      </motion.div>

      <SmoothScroll>
        {!hasEntered && <DoorEntry onEnter={() => setHasEntered(true)} onOpen={() => setIsMusicStarted(true)} />}
        
        <motion.div 
          style={{ backgroundColor: bgColor }}
          className={`relative w-full min-h-screen transition-opacity duration-1000 royal-bg-texture ${hasEntered ? 'opacity-100' : 'opacity-0'}`}
        >
          <Decorations />
          <GoldParticles />

        {/* Global Fixed Background Video */}
        <div className="fixed inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-20"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <motion.div 
            style={{ backgroundColor: bgOverlay }}
            className="absolute inset-0 backdrop-brightness-[0.95]"
          ></motion.div>
        </div>

        <div className="relative z-10">
          <Hero images={images} />
          <Invitation />
          <Countdown />
          
          <Suspense fallback={<div className="h-20" />}>
            <Events />
            <Gallery images={images} />
            <Family />
            <Footer />
          </Suspense>
        </div>
      </motion.div>
      </SmoothScroll>
    </>
  )
}

export default App
