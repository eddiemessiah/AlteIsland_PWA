"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import DesktopNav from "./DesktopNav";
import PWAInstallPrompt from "./PWAInstallPrompt";
import { Music } from "lucide-react";

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
  const [showSpotify, setShowSpotify] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const oceanAudioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setIsEntering(true);
    
    // Play audio synchronously on click (fixes Mobile Safari blocking un-triggered audio)
    if (oceanAudioRef.current) {
      oceanAudioRef.current.volume = 0.5;
      oceanAudioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }

    if (videoRef.current) {
        videoRef.current.play().catch(e => console.log(e));
    }

    // End splash portal transition
    setTimeout(() => {
      setShowSplash(false);
      setIsEntering(false);
    }, 2500);

    // Fade in the Spotify widget 6 seconds after hitting Enter
    setTimeout(() => {
      setShowSpotify(true);
    }, 6000);
  };

  return (
    <>
      {/* Hidden audio element in the DOM for mobile support */}
      <audio 
        ref={oceanAudioRef} 
        src="https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg" 
        preload="auto" 
      />

      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0e10] overflow-hidden"
          >
            {/* Festival Vibe: Radial Outward Waves */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-screen">
               {/* 4 layered radial waves pulsing outwards */}
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[100px] animate-radial-wave" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#00e3fd] via-[#ff89ab] to-[#ffb155] blur-[100px] animate-radial-wave delay-1000" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#ffb155] via-[#00e3fd] to-[#ff89ab] blur-[100px] animate-radial-wave delay-2000" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[100px] animate-radial-wave delay-3000" />
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

        {/* Global Spotify Music Player Overlay (Appears 6 seconds after entry) */}
        <AnimatePresence>
          {showSpotify && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="fixed bottom-[100px] md:bottom-24 right-4 md:right-8 z-50 w-80 rounded-2xl bg-[#141315]/80 backdrop-blur-3xl border border-[#ff89ab]/30 p-2 shadow-[0_10px_40px_rgba(255,137,171,0.2)]"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#272528] flex items-center justify-center border border-white/10 z-10 hover:bg-[#ff89ab] transition-colors cursor-pointer" onClick={() => setShowSpotify(false)}>
                <span className="text-white text-xs font-bold">✕</span>
              </div>
              <div className="flex items-center gap-2 mb-2 px-2 pt-1 text-[#00e3fd] animate-pulse">
                <Music className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Now Playing in the Club</span>
              </div>
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/track/1287AbMqcpiBacZDZ6pWIP?utm_source=generator&theme=0" 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
