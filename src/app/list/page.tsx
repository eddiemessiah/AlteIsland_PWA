"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Plus, ListMusic, Globe, Utensils, Scissors, Palette } from "lucide-react";

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
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#00e3fd]/10 via-[#ff89ab]/5 to-transparent pointer-events-none -z-10" />

      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
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

      <main className="pt-32 px-6 max-w-5xl mx-auto space-y-8 md:space-y-12">
        
        {/* Info Banner */}
        <div className="list-stagger p-4 rounded-xl bg-[#272528]/40 border border-white/5 text-[#aeaaad] text-xs md:text-sm flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00e3fd] mt-1.5 shrink-0" />
          <p>
            Your lists are saved locally on this device. Sign in to sync across devices and make lists public.
          </p>
        </div>

        {/* Empty State */}
        <div className="list-stagger py-12 md:py-20 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-[#272528] mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(255,137,171,0.1)]">
            <ListMusic className="w-10 h-10 text-[#aeaaad] opacity-50" />
          </div>
          <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-3">No lists yet</h2>
          <p className="text-[#aeaaad] max-w-sm mb-8 text-sm md:text-base">
            Create curated lists of your favorite businesses to organize and share your discoveries.
          </p>
          <button className="bg-white text-[#0f0e10] px-8 py-4 rounded-full font-bold hover:bg-[#ff89ab] hover:shadow-[0_0_20px_rgba(255,137,171,0.4)] transition-all">
            Create Your First List
          </button>
        </div>

        {/* List Ideas */}
        <div className="list-stagger space-y-4">
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg md:text-xl flex items-center gap-2">
            <span className="text-2xl">💡</span> List Ideas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {ideas.map((idea, index) => (
              <div key={index} className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:bg-[#272528]/80 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#272528] group-hover:bg-[#141315] transition-colors`} style={{ color: idea.color }}>
                  <idea.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm md:text-base text-[#aeaaad] group-hover:text-white transition-colors">{idea.title}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
