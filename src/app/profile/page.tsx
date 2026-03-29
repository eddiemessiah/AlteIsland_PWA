"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { LogOut, CheckCircle2, QrCode } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { createClient } from "@/utils/supabase/client";

export default function Profile() {
  const { profile, isLoading, setProfile } = useUserStore();
  const supabase = createClient();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.fromTo(
      ".profile-stagger",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 15;
    const y = -(clientY - top - height / 2) / 15;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setProfile(null)
  }

  return (
    <div className="min-h-screen bg-transparent text-white font-['Inter'] pb-32 overflow-hidden">
      
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-3xl border-b border-white/10 px-6 py-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-black text-white font-['Inter']">
          Afro Club Profile
        </h1>
        {profile && (
          <button onClick={handleSignOut} className="text-white/50 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        )}
      </header>

      <main className="pt-24 md:pt-32 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Desktop Header */}
        <div className="hidden md:flex w-full justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-['Inter'] mb-2">
              Identity
            </h1>
            <p className="text-white/60">Your global access pass to the diaspora.</p>
          </div>
          {profile && (
            <button onClick={handleSignOut} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 font-bold text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10">
              Sign Out <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
          </div>
        ) : profile ? (
          /* Interactive Holographic Business Card */
          <motion.div 
            className="profile-stagger relative w-full max-w-sm md:max-w-md aspect-[3/4] md:aspect-[16/9] rounded-[30px] p-6 flex flex-col justify-between overflow-hidden shadow-2xl cursor-pointer border border-white/20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: mousePosition.y,
              rotateY: mousePosition.x,
              transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            {/* Holographic/GIF Background */}
            <div className="absolute inset-0 z-0 bg-black">
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2J2cGpsbXRyZGVnZXF4cGwweWlwdHFuZWJ2eXNxZXBxbnZ6cHF2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YcGT5ShJa0nCM0/giphy.gif" 
                alt="Holographic Vibe" 
                className="w-full h-full object-cover opacity-40 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/40" />
              {/* Dynamic glare effect based on mouse */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 mix-blend-overlay"
                animate={{
                  x: mousePosition.x * 10,
                  y: mousePosition.y * 10,
                }}
              />
            </div>

            {/* Card Content (Elevated in 3D) */}
            <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(30px)" }}>
              <div className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </div>
              <div className="text-white/30 text-xs font-mono tracking-widest uppercase">
                ID: {profile.id.split('-')[0]}
              </div>
            </div>

            <div className="relative z-10 mt-auto flex justify-between items-end" style={{ transform: "translateZ(50px)" }}>
              <div>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Member</p>
                <h2 className="text-3xl md:text-4xl font-black text-white font-['Inter'] tracking-tighter drop-shadow-lg uppercase">
                  {profile.full_name || profile.username || 'Afro Explorer'}
                </h2>
                <p className="text-white/80 text-sm font-mono mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" /> Active Global
                </p>
              </div>
              
              <div className="w-16 h-16 bg-white rounded-xl p-1 flex items-center justify-center shadow-2xl">
                <QrCode className="w-full h-full text-black" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Logged Out State */
          <section className="profile-stagger text-center flex flex-col items-center justify-center max-w-lg">
            <div className="w-24 h-24 rounded-[30px] border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center mb-8 shadow-2xl rotate-3">
              <span className="text-5xl font-black text-white font-['Inter']">A</span>
            </div>
            <h1 className="font-['Inter'] font-black text-4xl md:text-5xl tracking-tighter mb-4 leading-tight text-white drop-shadow-lg">
              Unlock the World
            </h1>
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-8">
              Sign in to claim your global ID, curate your culture, and connect with the diaspora. One of one.
            </p>
            <button onClick={handleSignIn} className="bg-white text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Authenticate
            </button>
          </section>
        )}

      </main>
    </div>
  );
}
