"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0e10] via-[#0f0e10] to-[#0f0e10]"
          >
            {/* Animated liquid background orb */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
               <div className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full bg-gradient-to-tr from-[#ff89ab] via-[#ffb155] to-[#00e3fd] blur-[120px] opacity-40 animate-gradient-xy mix-blend-screen" />
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center text-center px-6"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 glass-grain flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,137,171,0.5)]">
                <span className="text-3xl font-black bg-gradient-to-r from-[#ff89ab] to-[#00e3fd] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">A</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-black tracking-tight mb-4">
                Welcome to the <br />
                <span className="bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-clip-text text-transparent animate-gradient-xy">
                  Afro Club Universe
                </span>
              </h1>
              <p className="text-[#aeaaad] font-['Manrope'] font-medium uppercase tracking-widest text-xs">
                Connecting the Diaspora
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-0 min-h-screen">
        {children}
        <BottomNav />
      </div>
    </>
  );
}
