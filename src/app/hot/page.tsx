"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Sparkle, Snowflake, Heart } from "lucide-react";
import DesktopNav from "@/components/DesktopNav";

export default function Hot() {
  useEffect(() => {
    gsap.fromTo(
      ".stagger-slide",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white font-['Inter'] pb-32">
      
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-3xl border-b border-white/5 px-6 py-4 md:hidden">
        <h1 className="text-xl font-black text-white font-['Inter']">
          The Culture
        </h1>
      </header>

      <main className="pt-24 md:pt-32 px-6 max-w-5xl mx-auto space-y-12">
        
        {/* Header Desktop Variant */}
        <div className="hidden md:block mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white font-['Inter'] mb-2">
            Trending
          </h1>
          <p className="text-white/60">What the diaspora is talking about right now.</p>
        </div>

        {/* Swipeable Stories / Vibes */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black font-['Inter'] flex items-center gap-2 text-black drop-shadow-md">
              <Sparkle className="text-black" /> On Fire Right Now
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 snap-x snap-mandatory">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="stagger-slide snap-center shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[480px] rounded-[30px] relative overflow-hidden group cursor-pointer border border-white/20 shadow-2xl">
                <Image 
                  src={`https://images.unsplash.com/photo-${1514525253161 + i * 100}?w=600&q=80`} 
                  fill 
                  alt="Vibe" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold border border-white/20 flex items-center gap-1 shadow-lg">
                  <Snowflake className="w-3 h-3 text-white" /> ICE COLD
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black font-['Inter'] mb-2 text-white">Lagos Fashion Week Preview</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">Exclusive behind the scenes look at the designers shaping the future of African fashion.</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20" />
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20" />
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-white/20 flex items-center justify-center text-black text-[10px] font-bold">
                        +84
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feed List */}
        <section className="space-y-6">
          <div className="flex items-center justify-between mb-4 md:mb-6 px-2 stagger-slide">
            <h2 className="text-2xl font-black font-['Inter'] text-black drop-shadow-md">The Feed</h2>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className="stagger-slide glass-panel rounded-[25px] p-4 flex gap-4 items-center group cursor-pointer hover:bg-black/60 transition-colors border border-white/10 shadow-xl bg-black/40">
              <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${1555396273 + i * 10}?w=200&q=80`} 
                  fill 
                  alt="Thumbnail" 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-['Inter'] text-lg mb-1 group-hover:text-white text-white/90 transition-colors">Best new spaces in Berlin</h3>
                <p className="text-white/50 text-xs">A curated list of where the diaspora is meeting up this summer.</p>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
