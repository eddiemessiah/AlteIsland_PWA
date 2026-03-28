"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Search, MapPin, Heart, ArrowRight, SlidersHorizontal } from "lucide-react";


export default function Directory() {
  useEffect(() => {
    gsap.fromTo(
      ".stagger-fade",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const filters = ["All", "Shops", "Restaurants", "Salons", "Designers", "Beauty", "Creative"];

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#ff89ab]/10 via-[#00e3fd]/5 to-transparent pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
          AlteIsland Directory
        </h1>
        <div className="flex gap-4 text-white/70">
          <Search className="w-6 h-6 hover:text-white transition-colors" />
          <SlidersHorizontal className="w-6 h-6 hover:text-white transition-colors" />
        </div>
      </header>

      <main className="pt-24 px-6 space-y-8 max-w-md mx-auto">
        {/* Category Pills */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 -mx-6 px-6 stagger-fade">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                index === 0
                  ? "bg-[#00e3fd] text-[#0f0e10] shadow-[0_0_15px_rgba(0,227,253,0.3)]"
                  : "bg-[#272528]/40 border border-white/5 text-white/70 hover:bg-[#272528] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="space-y-6">
          {/* Card 1: Featured */}
          <div className="relative overflow-hidden rounded-3xl bg-[#272528]/40 border border-white/10 aspect-[4/5] glass-grain stagger-fade group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10] via-[#0f0e10]/50 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Maison d'Ebene"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#ff89ab]/20 text-[#ff89ab] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#ff89ab]/20">
                  Featured Designer
                </span>
                <h3 className="text-3xl font-black font-['Plus_Jakarta_Sans'] mb-1">Maison d'Ebene</h3>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Berlin, Kreuzberg
                </p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#00e3fd] text-[#0f0e10] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,227,253,0.3)]">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <button className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:bg-[#ff89ab] hover:border-[#ff89ab] transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Card 2: standard */}
          <div className="relative overflow-hidden rounded-3xl bg-[#272528]/40 border border-white/10 aspect-square glass-grain stagger-fade group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10] via-[#0f0e10]/30 to-transparent z-10" />
             <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              alt="Lagos Soul Restaurant"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <h3 className="text-2xl font-black font-['Plus_Jakarta_Sans'] mb-1">Lagos Soul</h3>
              <p className="text-white/70 text-sm mb-3">Modern Nigerian Tapas & Cocktails</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-[#ffb155]/20 text-[#ffb155] rounded-md text-xs font-bold">★ 4.9</span>
                <span className="text-[10px] font-bold text-[#00e3fd] uppercase tracking-widest">Open Now</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      
    </div>
  );
}
