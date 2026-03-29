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
            {[
  { id: 1, title: "Lagos Fashion Week", desc: "Exclusive behind the scenes look at the designers shaping the future of African fashion.", tag: "ICE COLD", img: "1514525253161-7a46d19cd819", p1: "1531123897727-8f129e1688ce", p2: "1507003211169-0a1dd7228f2d" },
  { id: 2, title: "Berlin Fashion Week", desc: "The diaspora's influence on Berlin's underground streetwear scene. Meeting the creators redefining European aesthetics.", tag: "TRENDING", img: "1555396273-367ea4eb4db5", p1: "1441986300917-64674bd600d8", p2: "1520006403909-838d6b92c22e" },
  { id: 3, title: "Paris Runway Moments", desc: "Afrobeats takes over the Paris runway. The ultimate crossover of music, fashion, and culture.", tag: "MUST SEE", img: "1566737236500-c8ac43014a67", p1: "1507003211169-0a1dd7228f2d", p2: "1531123897727-8f129e1688ce" },
  { id: 4, title: "Top Spots in Berlin", desc: "Where the community gathers. The best restaurants and creative hubs in the heart of Berlin.", tag: "GUIDE", img: "1552566626-52f8b828add9", p1: "1520006403909-838d6b92c22e", p2: "1441986300917-64674bd600d8" }
].map((item) => (
              <div key={item.id} className="stagger-slide snap-center shrink-0 w-[333px] h-[664px] bg-[rgba(0,0,0,0.32)] rounded-[25px] relative overflow-hidden group cursor-pointer border border-black/20 shadow-2xl backdrop-blur-md">
                <Image 
                  src={`https://images.unsplash.com/photo-${item.img}?w=800&q=100`} 
                  fill 
                  alt={item.title} 
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-xs font-bold text-white border border-black/20 flex items-center gap-2 shadow-lg">
                  <Snowflake className="w-4 h-4 text-white" /> {item.tag}
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="text-3xl font-black font-['Inter'] mb-2 text-white drop-shadow-lg leading-tight">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-6 line-clamp-3 leading-relaxed">{item.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-black/20">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-black/20 overflow-hidden relative"><Image src={`https://images.unsplash.com/photo-${item.p1}?w=100&q=80`} fill alt="User" className="object-cover"/></div>
                      <div className="w-10 h-10 rounded-full border-2 border-black/20 overflow-hidden relative"><Image src={`https://images.unsplash.com/photo-${item.p2}?w=100&q=80`} fill alt="User" className="object-cover"/></div>
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-black/20 flex items-center justify-center text-black text-xs font-bold shadow-lg relative z-10">
                        +84
                      </div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors border border-black/20 shadow-xl relative z-10">
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

          {[
  { id: 1, title: "Afrochella Announcement", desc: "The biggest acts hitting the stage this year.", img: photos[2] },
  { id: 2, title: "Best new spaces in Berlin", desc: "A curated list of where the diaspora is meeting up.", img: photos[3] },
  { id: 3, title: "London's Underground Scene", desc: "How Afrobeats is reshaping the UK club scene.", img: photos[4] }
].map((item) => (
            <div key={item.id} className="stagger-slide bg-[rgba(0,0,0,0.32)] rounded-[25px] p-4 flex gap-4 items-center group cursor-pointer hover:bg-black/50 transition-colors border border-black/20 shadow-xl backdrop-blur-xl">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden relative shrink-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${item.img}?w=300&q=100`} 
                  fill 
                  alt="Thumbnail" 
                  className="object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold font-['Inter'] text-lg md:text-xl mb-1 group-hover:text-black/70 text-black/90 transition-colors truncate">{item.title}</h3>
                <p className="text-black/60 text-xs md:text-sm truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
