"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Plus, ListMusic, Globe, Utensils, Scissors, Palette } from "lucide-react";
import DesktopNav from "@/components/DesktopNav";

export default function Lists() {
  useEffect(() => {
    gsap.fromTo(
      ".list-stagger",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const ideas = [
    { title: "Best African Restaurants in London", icon: Utensils, color: "#ff89ab" },
    { title: "Natural Hair Salons I Love", icon: Scissors, color: "#ffb155" },
    { title: "Afro Fashion Designers to Watch", icon: Palette, color: "#00e3fd" },
    { title: "Berlin's Hidden Gems", icon: Globe, color: "#ff89ab" },
    { title: "Black-Owned Beauty Brands", icon: ListMusic, color: "#ffb155" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-['Manrope'] pb-32 overflow-hidden relative">
      {/* Animated Liquid Background mapped across screen */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-[#00e3fd]/10 via-[#ff89ab]/10 to-transparent blur-[120px] pointer-events-none -z-10 animate-liquid-blob opacity-60" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-gradient-to-tl from-[#ffb155]/10 via-[#ff89ab]/5 to-transparent blur-[100px] pointer-events-none -z-10 animate-liquid-blob opacity-60 -translate-y-1/2" />

      <header className="fixed top-0 w-full z-50 bg-transparent/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4 md:hidden">
        <div className="flex justify-between items-center md:justify-start md:gap-4">
          <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Inter']">
            Lists
          </h1>
          <button className="w-8 h-8 rounded-full bg-[#272528] flex items-center justify-center hover:bg-[#ff89ab] hover:text-[#0f0e10] transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 pb-2">
          <button className="text-[#00e3fd] font-bold text-sm relative after:content-[''] after:absolute after:-bottom-[9px] after:left-0 after:w-full after:h-0.5 after:bg-[#00e3fd]">
            My Lists
          </button>
          <button className="text-[#aeaaad] hover:text-white font-medium text-sm transition-colors">
            Discover
          </button>
        </div>
      </header>

      <main className="pt-32 md:pt-24 px-6 max-w-5xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Desktop Header Variant */}
        <div className="hidden md:flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-[#ff89ab] to-[#00e3fd] bg-clip-text text-transparent font-['Inter'] mb-2">
                Your Lists
              </h1>
              <p className="text-[#aeaaad]">Curate and share the best spots in the diaspora.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#ff89ab] text-[#0f0e10] px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,137,171,0.4)]">
               <Plus className="w-4 h-4" /> Create List
            </button>
          </div>
          <div className="flex gap-6 border-b border-white/10 pb-2 w-1/3">
            <button className="text-[#00e3fd] font-bold text-base relative after:content-[''] after:absolute after:-bottom-[9px] after:left-0 after:w-full after:h-0.5 after:bg-[#00e3fd]">
              My Lists
            </button>
            <button className="text-[#aeaaad] hover:text-white font-medium text-base transition-colors">
              Discover
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="list-stagger p-4 rounded-xl bg-[#272528]/40 border border-white/5 text-[#aeaaad] text-xs md:text-sm flex items-start gap-3 backdrop-blur-md animate-float-slow" style={{ animationDelay: '0.2s' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00e3fd] mt-1.5 shrink-0 animate-pulse" />
          <p>
            Your lists are saved locally on this device. Sign in to sync across devices and make lists public.
          </p>
        </div>

        {/* Empty State */}
        <div className="list-stagger py-12 md:py-20 flex flex-col items-center justify-center text-center animate-float-slow" style={{ animationDelay: '0.4s' }}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#141315] to-[#272528] mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(255,137,171,0.2)] border border-[#ff89ab]/10">
            <ListMusic className="w-10 h-10 text-[#ff89ab] opacity-80" />
          </div>
          <h2 className="text-2xl md:text-3xl font-['Inter'] font-bold mb-3">No lists yet</h2>
          <p className="text-[#aeaaad] max-w-sm mb-8 text-sm md:text-base">
            Create curated lists of your favorite businesses to organize and share your discoveries.
          </p>
          <button className="bg-gradient-to-r from-[#ff89ab] to-[#ffb155] text-[#0f0e10] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base hover:scale-105 shadow-[0_0_30px_rgba(255,137,171,0.4)] transition-all">
            Create Your First List
          </button>
        </div>

        {/* List Ideas */}
        <div className="list-stagger space-y-4 md:space-y-6">
          <h3 className="font-['Inter'] font-bold text-lg md:text-2xl flex items-center gap-2">
            <span className="text-2xl md:text-3xl animate-bounce">💡</span> List Ideas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {ideas.map((idea, index) => (
              <div key={index} className="glass-panel p-4 md:p-6 rounded-2xl md:rounded-3xl flex items-center gap-4 md:gap-5 hover:bg-[#272528]/80 transition-all cursor-pointer group border border-transparent hover:border-white/10 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#272528] group-hover:bg-[#141315] transition-colors border border-white/5`} style={{ color: idea.color }}>
                  <idea.icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-sm md:text-lg text-[#aeaaad] group-hover:text-white transition-colors">{idea.title}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
