"use client";

import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Wait a few seconds before showing to not bombard the user instantly
      setTimeout(() => setShow(true), 3000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-28 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] p-[1px] rounded-2xl shadow-[0_0_40px_rgba(255,137,171,0.4)]"
        >
          <div className="bg-[#0f0e10]/90 backdrop-blur-xl px-4 py-3 rounded-2xl flex items-center gap-4 whitespace-nowrap">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff89ab] to-[#00e3fd] flex items-center justify-center font-['Plus_Jakarta_Sans'] font-black text-white text-lg shadow-inner">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white">Afro Club World</span>
              <span className="text-[10px] text-[#aeaaad] uppercase tracking-widest">Install App</span>
            </div>
            <button 
              onClick={handleInstall} 
              className="ml-2 bg-[#00e3fd] text-[#0f0e10] hover:scale-105 active:scale-95 px-5 py-2 rounded-full font-bold text-xs transition-transform shadow-[0_0_15px_rgba(0,227,253,0.3)] flex items-center gap-1.5"
            >
              <Download className="w-3 h-3" /> Get
            </button>
            <button onClick={() => setShow(false)} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white/50 hover:text-white transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
