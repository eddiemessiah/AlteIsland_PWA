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
    { title: "Best African Restaurants in London", icon: Utensils, color: "#F2863E" },
    { title: "Natural Hair Salons I Love", icon: Scissors, color: "#F0B15A" },
    { title: "Afro Fashion Designers to Watch", icon: Palette, color: "#BCB0FF" },
    { title: "Berlin's Hidden Gems", icon: Globe, color: "#FFC7D5" },
    { title: "Black-Owned Beauty Brands", icon: ListMusic, color: "#F2863E" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-black font-['Inter'] pb-32 overflow-hidden relative">
      
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-3xl border-b border-black/10 px-6 py-4 flex flex-col gap-4 md:hidden">
        <div className="flex justify-between items-center md:justify-start md:gap-4">
          <h1 className="text-xl font-black text-white font-['Inter']">
            Lists
          </h1>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white text-black transition-colors shadow-lg">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/20 pb-2">
          <button className="text-white font-bold text-sm relative after:content-[''] after:absolute after:-bottom-[9px] after:left-0 after:w-full after:h-0.5 after:bg-white">
            My Lists
          </button>
          <button className="text-white/60 hover:text-white font-medium text-sm transition-colors">
            Discover
          </button>
        </div>
      </header>

      <main className="pt-32 md:pt-24 px-6 max-w-5xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Desktop Header Variant */}
        <div className="hidden md:flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-black text-black font-['Inter'] mb-2">
                Your Lists
              </h1>
              <p className="text-black/60 font-medium">Curate and share the best spots in the diaspora.</p>
            </div>
            <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest">
               <Plus className="w-4 h-4" /> Create List
            </button>
          </div>
          <div className="flex gap-8 border-b border-black/10 pb-2 w-1/2">
            <button className="text-black font-bold text-lg relative after:content-[''] after:absolute after:-bottom-[9px] after:left-0 after:w-full after:h-0.5 after:bg-black">
              My Lists
            </button>
            <button className="text-black/50 hover:text-black font-medium text-lg transition-colors">
              Discover
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="list-stagger p-5 rounded-[20px] bg-[rgba(0,0,0,0.32)] border border-white/10 text-white text-sm flex items-center gap-4 backdrop-blur-xl shadow-xl">
          <div className="w-2 h-2 rounded-full bg-white shrink-0 animate-pulse shadow-[0_0_10px_white]" />
          <p className="font-medium text-white/90">
            Your lists are saved locally on this device. Sign in to sync across devices and make lists public.
          </p>
        </div>

        {/* Empty State */}
        <div className="list-stagger py-12 md:py-20 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-[30px] bg-[rgba(0,0,0,0.32)] backdrop-blur-md mb-8 flex items-center justify-center shadow-2xl border border-white/10 rotate-3">
            <ListMusic strokeWidth={1.5} className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-['Inter'] mb-4 text-black">No lists yet</h2>
          <p className="text-black/60 max-w-md mb-10 text-base md:text-lg font-medium leading-relaxed">
            Create curated lists of your favorite businesses to organize and share your discoveries with the culture.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-black text-sm md:text-base hover:scale-105 shadow-2xl transition-all uppercase tracking-widest">
            Create First List
          </button>
        </div>

        {/* List Ideas */}
        <div className="list-stagger space-y-6 md:space-y-8">
          <h3 className="font-['Inter'] font-black text-2xl md:text-3xl flex items-center gap-3 text-black">
            <span className="text-3xl md:text-4xl animate-bounce drop-shadow-lg">💡</span> List Ideas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-[rgba(0,0,0,0.32)] p-6 rounded-[25px] flex items-center gap-5 hover:bg-black/50 transition-all cursor-pointer group border border-white/10 shadow-xl backdrop-blur-md hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors shadow-lg`} style={{ color: idea.color }}>
                  <idea.icon strokeWidth={2} className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-bold text-base md:text-lg text-white/90 group-hover:text-white transition-colors leading-tight">{idea.title}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
