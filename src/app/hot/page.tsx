"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Flame, Snowflake, Heart } from "lucide-react";

export default function HotLeaderboard() {
  const [satisfaction, setSatisfaction] = useState(92);

  useEffect(() => {
    gsap.fromTo(
      ".stagger-slide",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".liquid-melt",
      { width: "0%" },
      { width: `${satisfaction}%`, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );
  }, [satisfaction]);

  const handleVote = (type: "HOT" | "NOT") => {
    // Simulate spring physics on vote
    gsap.fromTo(".voting-card", { scale: 0.95 }, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    if (type === "HOT") setSatisfaction(Math.min(100, satisfaction + 2));
    else setSatisfaction(Math.max(0, satisfaction - 2));
  };

  const leaderboard = [
    { rank: "01", name: "The Gilded Root", city: "Johannesburg", votes: "12.4k", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80" },
    { rank: "02", name: "Cobalt Oasis", city: "Nairobi", votes: "9.8k", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" },
    { rank: "03", name: "Rhythm Room", city: "Accra", votes: "8.2k", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80" },
    { rank: "04", name: "Terra Coffee", city: "Abidjan", votes: "7.5k", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80" },
    { rank: "05", name: "Maison d'Ebene", city: "Berlin", votes: "6.9k", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80" },
    { rank: "06", name: "Zanzibar Spice", city: "London", votes: "6.1k", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" },
    { rank: "07", name: "Kijiji Lounge", city: "Paris", votes: "5.8k", image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80" },
    { rank: "08", name: "Sahara Nights", city: "Edinburgh", votes: "4.2k", image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-['Manrope'] pb-32 overflow-hidden">
      {/* Dynamic Background Glow - Desert/Sunset Vibe */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff89ab]/10 blur-[120px] rounded-full pointer-events-none -z-10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00e3fd]/10 blur-[100px] rounded-full pointer-events-none -z-10 translate-y-1/3 -translate-x-1/3" />

      <header className="fixed top-0 w-full z-50 bg-transparent/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
          Afro Club World
        </h1>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column: Vetting Now */}
        <div className="lg:col-span-5 space-y-8 stagger-slide">
          <div className="glass-panel rounded-3xl p-6 md:p-8 glass-grain border border-white/5 shadow-2xl lg:sticky lg:top-28 voting-card">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#ff89ab]">Vetting Now</h2>
              <span className="bg-[#00e3fd]/10 text-[#00e3fd] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00e3fd] animate-pulse"></span> Live Pulse
              </span>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 group">
              <img 
                src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Indigo Sky Lounge"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold mb-1">Indigo Sky Lounge</h3>
                <p className="text-[#00e3fd] font-medium text-sm">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#aeaaad] font-medium leading-relaxed italic text-sm md:text-base">
                "The percussion layers are unmatched. Best acoustics in the city."
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => handleVote("HOT")}
                  className="flex-1 bg-gradient-to-r from-[#ff89ab] to-[#e30071] text-white font-bold py-3 md:py-4 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,137,171,0.3)] text-sm md:text-base"
                >
                  <Flame className="w-4 h-4 md:w-5 md:h-5 fill-current" /> HOT
                </button>
                <button 
                  onClick={() => handleVote("NOT")}
                  className="flex-1 bg-[#272528]/40 border border-white/10 text-white font-bold py-3 md:py-4 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-[#272528] text-sm md:text-base"
                >
                  <Snowflake className="w-4 h-4 md:w-5 md:h-5" /> NOT
                </button>
              </div>
            </div>

            {/* Liquid Melt Simulation */}
            <div className="mt-8 pt-6 md:pt-8 border-t border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs md:text-sm font-['Manrope'] uppercase tracking-widest text-[#aeaaad]">Satisfaction</span>
                <span className="text-[#00e3fd] font-bold text-base md:text-lg">{satisfaction}%</span>
              </div>
              <div className="h-3 md:h-4 w-full bg-[#141315] rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-[#00e3fd] to-[#ff89ab] rounded-full relative liquid-melt shadow-[0_0_15px_rgba(0,227,253,0.5)]">
                  <div className="absolute right-0 top-0 h-8 w-2 bg-white/50 blur-[2px] rounded-full mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Leaderboard */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between mb-4 md:mb-6 px-2 stagger-slide">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl md:text-3xl tracking-tight">
              The <span className="text-[#ff89ab]">Top 100</span>
            </h2>
            <div className="flex gap-2">
              <button className="bg-[#272528] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold border border-[#00e3fd]/20 text-[#00e3fd]">Weekly</button>
              <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold text-[#aeaaad] opacity-60">All-Time</button>
            </div>
          </div>

          <div className="space-y-3">
            {leaderboard.map((item, index) => (
              <div key={index} className="group glass-panel rounded-2xl p-3 md:p-4 flex items-center gap-4 hover:bg-[#272528]/80 transition-all duration-300 stagger-slide cursor-pointer border border-transparent hover:border-white/10">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-black text-xl md:text-2xl text-[#00e3fd] opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.rank}
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base md:text-xl mb-0.5 truncate">{item.name}</h4>
                  <p className="text-xs md:text-sm text-[#aeaaad] font-medium truncate">{item.city}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center justify-end gap-1 text-[#ff89ab] mb-1">
                    <span className="font-bold text-sm md:text-lg">{item.votes}</span>
                    <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-4 rounded-xl border border-white/5 bg-[#141315] font-['Plus_Jakarta_Sans'] font-bold text-[#aeaaad] hover:text-white hover:bg-[#272528] transition-colors stagger-slide text-sm">
            Reveal Next 20 Destinations
          </button>
        </div>
      </main>
    </div>
  );
}
