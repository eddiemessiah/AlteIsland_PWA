"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import DesktopNav from "./DesktopNav";
import PWAInstallPrompt from "./PWAInstallPrompt";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0e10] overflow-hidden"
          >
            {/* Animated liquid background orb */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
               <div className="w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[150px] opacity-30 animate-gradient-xy mix-blend-screen" />
            </div>

            <motion.div 
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto"
            >
              <motion.div 
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border border-white/20 glass-grain flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(255,137,171,0.5)] rotate-3"
              >
                <span className="text-5xl md:text-7xl font-black bg-gradient-to-br from-[#ff89ab] to-[#00e3fd] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">A</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-black tracking-tighter mb-6 leading-[1.1]">
                Welcome to the <br />
                <span className="bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-clip-text text-transparent animate-gradient-xy">
                  Afro Club Universe
                </span>
              </h1>
              
              <p className="text-[#aeaaad] font-['Manrope'] font-medium uppercase tracking-[0.3em] text-xs md:text-sm mb-16">
                Connecting the Diaspora
              </p>

              {/* Enter Button animates in after 3.5 seconds total perceived entry time */}
              <motion.button 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
                onClick={() => setShowSplash(false)}
                className="relative group overflow-hidden px-12 py-5 rounded-full bg-transparent border border-white/20 hover:border-[#00e3fd] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff89ab] to-[#00e3fd] opacity-0 group-hover:opacity-20 transition-opacity animate-gradient-xy" />
                <span className="relative font-['Plus_Jakarta_Sans'] font-extrabold text-lg md:text-xl text-white group-hover:text-[#00e3fd] transition-colors flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00e3fd] animate-pulse shadow-[0_0_10px_#00e3fd]"></span>
                  Enter Experience
                </span>
              </motion.button>
            </motion.div>
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
