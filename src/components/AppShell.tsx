"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import DesktopNav from "./DesktopNav";
import PWAInstallPrompt from "./PWAInstallPrompt";
import ListModal from "./ListModal";
import { Music, Play } from "lucide-react";

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
  const [isSpotifyMinimized, setIsSpotifyMinimized] = useState(false);

  const oceanAudioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setIsEntering(true);
    
    // Play audio synchronously on click
    if (oceanAudioRef.current) {
      oceanAudioRef.current.volume = 0.5;
      oceanAudioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }

    // End splash portal transition
    setTimeout(() => {
      setShowSplash(false);
      setIsEntering(false);
    }, 2500);

    // Fade in the Spotify widget
    setTimeout(() => {
      setShowSpotify(true);
    }, 6000);
  };

  return (
    <>
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
            {/* Bright syncing background for welcome screen */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#F2863E] via-[#FFC7D5] to-[#BCB0FF] opacity-90" />
            
            {/* Festival Vibe: Radial Outward Waves synced to background colors */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-screen">
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#F2863E] via-[#FFC7D5] to-[#BCB0FF] blur-[100px] animate-radial-wave" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#BCB0FF] via-[#F2863E] to-[#F0B15A] blur-[100px] animate-radial-wave delay-1000" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#F0B15A] via-[#BCB0FF] to-[#F2863E] blur-[100px] animate-radial-wave delay-2000" />
               <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-tr from-[#F2863E] via-[#F0B15A] to-[#BCB0FF] blur-[100px] animate-radial-wave delay-3000" />
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
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border border-white/40 glass-grain flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(255,255,255,0.4)] rotate-3 overflow-hidden group backdrop-blur-3xl"
              >
                <span className="text-5xl md:text-7xl font-black text-white font-['Inter'] group-hover:scale-110 transition-transform duration-500">A</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-['Inter'] font-black tracking-tighter mb-6 leading-[1.1] drop-shadow-2xl text-white">
                Welcome to the <br />
                Afro Club World
              </h1>
              
              <p className="text-white/90 font-['Manrope'] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-16 drop-shadow-md">
                Connecting the Diaspora
              </p>

              <motion.button 
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.6 }}
                onClick={handleEnter}
                className="relative group overflow-hidden px-14 py-6 rounded-full bg-[#FFFFFF] transition-all shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)] hover:scale-105"
              >
                <span className="relative z-10 font-['Inter'] font-black text-xl md:text-2xl text-black transition-colors flex items-center gap-3 tracking-widest uppercase">
                  ENTER EXPERIENCE
                </span>
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {isEntering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 z-[110] flex items-center justify-center bg-gradient-to-b from-[#F2863E] to-[#BCB0FF]"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 1, borderWidth: "50px" }}
                    animate={{ scale: [1, 5, 20], opacity: [1, 1, 0], borderWidth: ["50px", "20px", "2px"] }}
                    transition={{ duration: 2, ease: "circIn" }}
                    className="w-32 h-32 rounded-full border-white shadow-[0_0_150px_#ffffff] mix-blend-screen"
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
        <ListModal />
        <PWAInstallPrompt />

        {/* Global Spotify Music Player Overlay */}
        <AnimatePresence>
          {showSpotify && !isSpotifyMinimized && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="fixed bottom-[100px] md:bottom-24 right-4 md:right-8 z-50 w-80 rounded-2xl bg-[#141315]/80 backdrop-blur-3xl border border-[#ff89ab]/30 p-2 shadow-[0_10px_40px_rgba(255,137,171,0.2)]"
            >
              <div 
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#272528] flex items-center justify-center border border-white/10 z-10 hover:bg-[#ff89ab] transition-colors cursor-pointer" 
                onClick={() => setIsSpotifyMinimized(true)}
              >
                <span className="text-white text-xs font-bold">✕</span>
              </div>
              <div className="flex items-center gap-2 mb-2 px-2 pt-1 text-[#00e3fd] animate-pulse">
                <Music className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-['Inter']">Now Playing in the Club</span>
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

          {/* Minimized Beaming Spotify Icon */}
          {showSpotify && isSpotifyMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setIsSpotifyMinimized(false)}
              className="fixed bottom-[100px] md:bottom-24 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_30px_rgba(29,185,84,0.5)] cursor-pointer overflow-hidden border-2 border-[#141315]"
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#1DB954]" style={{ animationDuration: '3s' }}></div>
              <Play className="w-6 h-6 text-white ml-1 relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
