"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import DesktopNav from "./DesktopNav";
import PWAInstallPrompt from "./PWAInstallPrompt";

// The Zero-JS CSS Falling Crystals Particle System
const FallingCrystals = () => {
  const [crystals, setCrystals] = useState<any[]>([]);
  
  // Render crystals only on client to avoid hydration mismatch
  useEffect(() => {
    setCrystals(
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 2}s`,
        size: `${10 + Math.random() * 25}px`,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {crystals.map((c) => (
        <div
          key={c.id}
          className="crystal shadow-[0_0_25px_rgba(255,255,255,0.7)]"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            animationDuration: c.animationDuration,
            animationDelay: c.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    
    // The "Sound of Many Waters" Creative Swoosh
    // High quality rushing wave/water crash sound effect
    const audio = new Audio("https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg");
    audio.volume = 0.6;
    audio.play().catch((e) => console.log("Audio play blocked by browser:", e));

    // The GIF portal expands and transitions after 2 seconds
    setTimeout(() => {
      setShowSplash(false);
      setIsEntering(false); // reset state just in case
    }, 2000);
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0e10] overflow-hidden"
          >
            {/* Festival Vibe: Hyper-Speed Liquid Background with strobing colors */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
               <div className="w-[250vw] h-[250vw] md:w-[120vw] md:h-[120vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[150px] opacity-40 animate-hyper-liquid" />
               <div className="absolute w-full h-full bg-[#00e3fd]/20 mix-blend-overlay animate-pulse" />
            </div>

            {/* Falling Crystals Particle System */}
            <FallingCrystals />

            {/* Core Splash Content */}
            <motion.div 
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 1.5, ease: "circOut" }}
              className={`relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto ${isEntering ? "opacity-0 transition-opacity duration-300" : "opacity-100"}`}
            >
              <motion.div 
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border-2 border-white/40 glass-grain flex items-center justify-center mb-8 shadow-[0_0_100px_rgba(255,137,171,0.8)] rotate-3 overflow-hidden group"
              >
                {/* Glowing A Logo */}
                <span className="text-5xl md:text-7xl font-black bg-gradient-to-br from-[#ff89ab] to-[#00e3fd] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] group-hover:scale-110 transition-transform duration-500">A</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-black tracking-tighter mb-6 leading-[1.1] drop-shadow-[0_0_20px_rgba(255,137,171,0.5)]">
                Welcome to the <br />
                <span className="bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-clip-text text-transparent animate-hyper-liquid inline-block">
                  Afro Club Universe
                </span>
              </h1>
              
              <p className="text-white font-['Manrope'] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-16 shadow-black drop-shadow-lg">
                Connecting the Diaspora
              </p>

              {/* Enter Button (Burna Boy Festival Pass) animates in fast */}
              <motion.button 
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6, type: "spring", bounce: 0.6 }}
                onClick={handleEnter}
                className="relative group overflow-hidden px-14 py-6 rounded-full bg-black/50 backdrop-blur-2xl border-2 border-[#00e3fd] hover:border-[#ff89ab] transition-all shadow-[0_0_40px_rgba(0,227,253,0.5)] hover:shadow-[0_0_60px_rgba(255,137,171,0.8)]"
              >
                {/* Embedded subtle GIF inside the button for extreme style */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity mix-blend-screen bg-[url('https://media.giphy.com/media/l41YcWtsO5KjEw4aQ/giphy.gif')] bg-cover bg-center" />
                
                <span className="relative font-['Plus_Jakarta_Sans'] font-black text-xl md:text-2xl text-white group-hover:text-[#ff89ab] transition-colors flex items-center gap-3 tracking-widest uppercase">
                  <span className="w-3 h-3 rounded-full bg-[#00e3fd] animate-ping shadow-[0_0_15px_#00e3fd]"></span>
                  ENTER THE FESTIVAL
                </span>
              </motion.button>
            </motion.div>

            {/* The Opener: Full Screen Concert Portal GIF Transition */}
            <AnimatePresence>
              {isEntering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-[110] flex items-center justify-center bg-[#0f0e10]"
                >
                  {/* High Energy Crowd / Light Show GIF */}
                  <div className="absolute inset-0 opacity-80 bg-[url('https://media.giphy.com/media/l41YcWtsO5KjEw4aQ/giphy.gif')] bg-cover bg-center mix-blend-screen" />
                  
                  {/* Neon Portal Ring expanding towards the camera to shatter the screen */}
                  <motion.div
                    initial={{ scale: 0, opacity: 1, borderWidth: "50px" }}
                    animate={{ scale: [1, 5, 20], opacity: [1, 1, 0], borderWidth: ["50px", "20px", "2px"] }}
                    transition={{ duration: 1.5, ease: "circIn" }}
                    className="w-32 h-32 rounded-full border-[#00e3fd] shadow-[0_0_150px_#00e3fd] mix-blend-screen"
                  />
                  <h1 className="absolute z-10 text-white font-['Plus_Jakarta_Sans'] font-black text-7xl tracking-widest drop-shadow-[0_0_30px_#ff89ab] animate-pulse">
                    LET'S GO
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-0 min-h-screen">
        <DesktopNav />
        {children}
        <BottomNav />
        <PWAInstallPrompt />
      </div>
    </>
  );
}
