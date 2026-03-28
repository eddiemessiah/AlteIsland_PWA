"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Search, MapPin, Heart, ArrowRight, SlidersHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filters = ["All", "Shops", "Restaurants", "Salons", "Designers", "Beauty", "Creative"];

  const businesses = [
    // Shops
    { id: 1, name: "Maison d'Ebene", category: "Shops", city: "Berlin, Kreuzberg", rating: 4.9, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80", featured: true },
    { id: 2, name: "Kente & Silk", category: "Shops", city: "London, Brixton", rating: 4.7, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", featured: false },
    { id: 3, name: "Oasis Market", category: "Shops", city: "Paris, Le Marais", rating: 4.8, image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80", featured: false },
    
    // Restaurants
    { id: 4, name: "Lagos Soul", category: "Restaurants", city: "Berlin, Neukölln", rating: 4.8, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", featured: false },
    { id: 5, name: "Zanzibar Spice", category: "Restaurants", city: "London, Soho", rating: 4.9, image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80", featured: false },
    { id: 6, name: "Mama's Kitchen", category: "Restaurants", city: "Edinburgh, Old Town", rating: 4.6, image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800&q=80", featured: false },
    
    // Salons
    { id: 7, name: "Crown Braids", category: "Salons", city: "Berlin, Mitte", rating: 4.9, image: "https://images.unsplash.com/photo-1562322140810-519b7a466098?w=800&q=80", featured: false },
    { id: 8, name: "The Fade Lounge", category: "Salons", city: "Paris, Montmartre", rating: 4.8, image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80", featured: false },
    { id: 9, name: "Roots Studio", category: "Salons", city: "London, Camden", rating: 4.7, image: "https://images.unsplash.com/photo-1516975080661-422fc9969197?w=800&q=80", featured: false },
    
    // Designers
    { id: 10, name: "Afro-Chic Boutique", category: "Designers", city: "Paris, St-Germain", rating: 4.8, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80", featured: false },
    { id: 11, name: "Sartorial Africa", category: "Designers", city: "Berlin, Charlottenburg", rating: 4.9, image: "https://images.unsplash.com/photo-1558769132-cb1fac0840f2?w=800&q=80", featured: false },
    { id: 12, name: "Nubian Threads", category: "Designers", city: "London, Shoreditch", rating: 4.7, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80", featured: false },
    
    // Beauty
    { id: 13, name: "Melanin Glow", category: "Beauty", city: "Berlin, Friedrichshain", rating: 4.9, image: "https://images.unsplash.com/photo-1596462502278-27bf84033e54?w=800&q=80", featured: false },
    { id: 14, name: "Shea & Cocoa", category: "Beauty", city: "London, Notting Hill", rating: 4.8, image: "https://images.unsplash.com/photo-1611080766336-d442db0b12eb?w=800&q=80", featured: false },
    { id: 15, name: "Desert Rose", category: "Beauty", city: "Paris, Bastille", rating: 4.7, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80", featured: false },
    
    // Creative
    { id: 16, name: "Rhythm & Canvas", category: "Creative", city: "Berlin, Kreuzberg", rating: 4.9, image: "https://images.unsplash.com/photo-1513364776144-60967d0f8ce0?w=800&q=80", featured: false },
    { id: 17, name: "AfroBeats Studio", category: "Creative", city: "London, Hackney", rating: 4.8, image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80", featured: false },
    { id: 18, name: "Sankofa Gallery", category: "Creative", city: "Paris, Belleville", rating: 4.9, image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80", featured: false },
  ];

  const filteredBusinesses = businesses.filter(b => activeCategory === "All" || b.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32 overflow-hidden relative">
      {/* Animated Liquid Background mapped across screen */}
      <div className="absolute top-0 left-0 w-[150%] h-[800px] bg-gradient-to-br from-[#ff89ab]/10 via-[#00e3fd]/10 to-[#ffb155]/10 blur-[120px] pointer-events-none -z-10 animate-gradient-xy mix-blend-screen -translate-x-1/4" />
      <div className="absolute top-1/2 right-0 w-full h-[600px] bg-gradient-to-tl from-[#00e3fd]/10 via-[#ff89ab]/5 to-transparent blur-[100px] pointer-events-none -z-10 animate-gradient-xy mix-blend-screen" />

      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
          Directory
        </h1>
        <div className="flex items-center gap-4">
          <Link href="/directory/add" className="flex items-center gap-1 bg-[#272528] px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#ff89ab] hover:text-[#0f0e10] transition-colors border border-white/10 group">
             <Plus className="w-3 h-3 group-hover:rotate-90 transition-transform" /> Add
          </Link>
          <div className="flex gap-3 text-white/70">
            <Search className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <SlidersHorizontal className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-16 px-6 max-w-7xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Desktop Header variant */}
        <div className="hidden md:flex justify-between items-center mb-10 pt-8">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] mb-2">
              Global Directory
            </h1>
            <p className="text-[#aeaaad]">Discover the best Afro businesses worldwide.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/directory/add" className="flex items-center gap-2 bg-[#ff89ab] text-[#0f0e10] px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,137,171,0.4)]">
               <Plus className="w-4 h-4" /> List Business
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 md:gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {filters.map((filter) => {
            const isActive = activeCategory === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#00e3fd] text-[#0f0e10] shadow-[0_0_15px_rgba(0,227,253,0.3)] scale-105"
                    : "bg-[#272528]/40 border border-white/5 text-white/70 hover:bg-[#272528] hover:text-white"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Directory Grid with Framer Motion Layout animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-32">
          <AnimatePresence>
            {filteredBusinesses.map((b) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                key={b.id}
                className={`relative overflow-hidden rounded-3xl bg-[#272528]/40 border border-white/10 glass-grain group cursor-pointer animate-float-slow ${
                  b.featured ? "aspect-[4/5] md:col-span-2 lg:col-span-2 conic-border-glow" : "aspect-square"
                }`}
                style={{ animationDelay: `${b.id * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10]/90 via-[#0f0e10]/30 to-transparent z-10" />
                <img 
                  src={b.image} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    b.featured ? "group-hover:scale-105" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                  }`}
                  alt={b.name}
                />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex justify-between items-end">
                  <div>
                    {b.featured && (
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#ff89ab]/30 to-[#e30071]/30 text-[#ff89ab] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 border border-[#ff89ab]/30 backdrop-blur-md">
                        Featured {b.category.slice(0, -1)}
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-black font-['Plus_Jakarta_Sans'] mb-1 text-white group-hover:text-[#00e3fd] transition-colors">{b.name}</h3>
                    <p className="text-white/70 text-sm md:text-base flex items-center gap-1.5 mb-2">
                      <MapPin className="w-4 h-4 text-[#ffb155]" /> {b.city}
                    </p>
                    {!b.featured && (
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-[#ffb155]/20 text-[#ffb155] rounded-md text-xs font-bold backdrop-blur-md border border-[#ffb155]/20">★ {b.rating}</span>
                        <span className="text-[10px] font-bold text-[#00e3fd] uppercase tracking-widest px-2 py-1 bg-[#00e3fd]/10 rounded-md backdrop-blur-md">Open Now</span>
                      </div>
                    )}
                  </div>
                  {b.featured && (
                    <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#00e3fd] to-[#00a1ff] text-[#0f0e10] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,227,253,0.5)]">
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  )}
                </div>
                
                {b.featured && (
                  <button className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-[#141315]/40 backdrop-blur-xl flex items-center justify-center border border-white/20 text-white hover:bg-[#ff89ab] hover:border-[#ff89ab] transition-all group-hover:animate-pulse">
                    <Heart className="w-6 h-6" />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </main>
    </div>
  );
}
