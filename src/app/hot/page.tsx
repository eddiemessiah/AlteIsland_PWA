"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Sparkle, Snowflake, Heart } from "lucide-react";

export default function Hot() {
  const photos = ["1514525253161-7a46d19cd819", "1555396273-367ea4eb4db5", "1566737236500-c8ac43014a67", "1441986300917-64674bd600d8", "1552566626-52f8b828add9", "1520006403909-838d6b92c22e"];

  useEffect(() => {
    gsap.fromTo(
      ".stagger-slide",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-black font-['Inter'] pb-32">
      
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-3xl border-b border-black/10 px-6 py-4 md:hidden">
        <h1 className="text-xl font-black text-white font-['Inter']">
          The Culture
        </h1>
      </header>

      <main className="pt-24 md:pt-32 px-6 max-w-5xl mx-auto space-y-12">
        
        {/* Header Desktop Variant */}
        <div className="hidden md:block mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-black font-['Inter'] mb-2">
            Trending
          </h1>
          <p className="text-black/60">What the diaspora is talking about right now.</p>
        </div>

        {/* Swipeable Stories / Vibes matching CEO Figma dimensions */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black font-['Inter'] flex items-center gap-2 text-black">
              <Sparkle className="text-black" /> On Fire Right Now
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 snap-x snap-mandatory items-start">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="stagger-slide snap-center shrink-0 w-[333px] h-[664px] bg-[rgba(0,0,0,0.32)] rounded-[25px] relative overflow-hidden group cursor-pointer border border-white/20 shadow-2xl backdrop-blur-md">
                <Image 
                  src={`https://images.unsplash.com/photo-${photos[i]}?w=600&q=80`} 
                  fill 
                  alt="Vibe" 
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-xs font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
                  <Snowflake className="w-4 h-4 text-white" /> ICE COLD
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="text-3xl font-black font-['Inter'] mb-2 text-white drop-shadow-lg leading-tight">Lagos Fashion Week Preview</h3>
                  <p className="text-white/80 text-sm mb-6 line-clamp-3 leading-relaxed">Exclusive behind the scenes look at the designers shaping the future of African fashion. A cultural reset in real-time.</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-black border-2 border-white/20" />
                      <div className="w-10 h-10 rounded-full bg-black border-2 border-white/20" />
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-white/20 flex items-center justify-center text-black text-xs font-bold shadow-lg">
                        +84
                      </div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors border border-white/10 shadow-xl">
                      <Heart className="w-5 h-5" />
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
            <div key={i} className="stagger-slide bg-[rgba(0,0,0,0.32)] rounded-[25px] p-4 flex gap-4 items-center group cursor-pointer hover:bg-black/50 transition-colors border border-white/10 shadow-xl backdrop-blur-xl">
              <div className="w-24 h-24 rounded-2xl overflow-hidden relative shrink-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${photos[i+2]}?w=200&q=80`} 
                  fill 
                  alt="Thumbnail" 
                  className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-['Inter'] text-xl mb-1 group-hover:text-white text-white/90 transition-colors">Best new spaces in Berlin</h3>
                <p className="text-white/60 text-sm">A curated list of where the diaspora is meeting up this summer.</p>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
