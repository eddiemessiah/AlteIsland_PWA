"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import DesktopNav from "./DesktopNav";
import PWAInstallPrompt from "./PWAInstallPrompt";

const FallingCrystals = () => {
  const [crystals, setCrystals] = useState<any[]>([]);
  
  useEffect(() => {
    setCrystals(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 3}s`,
        size: `${8 + Math.random() * 20}px`,
        opacity: 0.3 + Math.random() * 0.4
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none mix-blend-screen">
      {crystals.map((c) => (
        <div
          key={c.id}
          className="crystal"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            animationDuration: c.animationDuration,
            animationDelay: c.animationDelay,
            opacity: c.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isEntering, setIsEntering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setIsEntering(true);
    
    const audio = new Audio("https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio play blocked by browser:", e));

    if (videoRef.current) {
        videoRef.current.play().catch(e => console.log(e));
    }

    setTimeout(() => {
      setShowSplash(false);
      setIsEntering(false);
    }, 2500);
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
            {/* Festival Vibe: On-Brand Controlled Liquid */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
               <div className="w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[150px] animate-hyper-liquid mix-blend-screen" />
            </div>

            <FallingCrystals />

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
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border border-[#ff89ab]/30 glass-grain flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(255,137,171,0.5)] rotate-3 overflow-hidden group backdrop-blur-3xl"
              >
                <span className="text-5xl md:text-7xl font-black bg-gradient-to-br from-[#ff89ab] to-[#00e3fd] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] group-hover:scale-110 transition-transform duration-500">A</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-black tracking-tighter mb-6 leading-[1.1] drop-shadow-xl text-white">
                Welcome to the <br />
                <span className="bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-clip-text text-transparent inline-block animate-text-energy">
                  Afro Club Universe
                </span>
              </h1>
              
              <p className="text-[#aeaaad] font-['Manrope'] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-16 drop-shadow-md">
                Connecting the Diaspora
              </p>

              {/* Secure HTML5 Video background button to replace broken Giphy link */}
              <motion.button 
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.6 }}
                onClick={handleEnter}
                className="relative group overflow-hidden px-14 py-6 rounded-full bg-[#141315]/80 backdrop-blur-2xl border-2 transition-all shadow-[0_0_40px_rgba(0,227,253,0.3)] hover:shadow-[0_0_60px_rgba(255,137,171,0.6)] animate-border-glow"
              >
                <video 
                  src="/festival.mp4" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity mix-blend-screen pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <span className="relative z-10 font-['Plus_Jakarta_Sans'] font-black text-xl md:text-2xl text-white transition-colors flex items-center gap-3 tracking-widest uppercase drop-shadow-md">
                  <span className="w-3 h-3 rounded-full bg-[#00e3fd] animate-pulse shadow-[0_0_15px_#00e3fd]"></span>
                  ENTER EXPERIENCE
                </span>
              </motion.button>
            </motion.div>

            {/* The Opener: User-Provided GIF Portal */}
            <AnimatePresence>
              {isEntering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 z-[110] flex items-center justify-center bg-[#0f0e10]"
                >
                  <video 
                    ref={videoRef}
                    src="/festival.mp4" 
                    className="absolute inset-0 w-full h-full object-cover opacity-100 contrast-[1.3] brightness-110 saturate-[1.2] mix-blend-screen"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  
                  {/* Expanding Neon Portal Ring */}
                  <motion.div
                    initial={{ scale: 0, opacity: 1, borderWidth: "50px" }}
                    animate={{ scale: [1, 5, 20], opacity: [1, 1, 0], borderWidth: ["50px", "20px", "2px"] }}
                    transition={{ duration: 2, ease: "circIn" }}
                    className="w-32 h-32 rounded-full border-[#00e3fd] shadow-[0_0_150px_#00e3fd] mix-blend-screen"
                  />
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
