"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Navigation, Compass, Flame, Loader2, Plus, Bookmark } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { createClient } from "@/utils/supabase/client";

interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  city: string;
  image_url: string;
  verified: boolean;
}

export default function Directory() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Spots");
  const [searchQuery, setSearchQuery] = useState("");
  const supabase = createClient();
  const openListModal = useModalStore((state) => state.openListModal);

  useEffect(() => {
    async function fetchBusinesses() {
      setLoading(true);
      
      let query = supabase.from("businesses").select("*");
      
      if (activeFilter !== "All Spots") {
        query = query.eq("category", activeFilter);
      }
      
      if (searchQuery) {
        query = query.ilike("name", `%${searchQuery}%`);
      }
      
      const { data, error } = await query;
      
      if (data) setBusinesses(data);
      if (error) console.error("Error fetching businesses:", error);
      
      setLoading(false);
    }

    fetchBusinesses();
  }, [activeFilter, searchQuery]);

  useEffect(() => {
    if (!loading && businesses.length > 0) {
      gsap.fromTo(
        ".dir-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [loading, businesses]);

  const categories = ["All Spots", "Food & Drink", "Nightlife", "Fashion", "Art", "Barbershops"];

  return (
    <div className="min-h-screen bg-transparent text-white font-['Manrope'] pb-32">
      {/* Background Glow */}
      <div className="fixed top-0 inset-x-0 h-64 bg-gradient-to-b from-[#ff89ab]/10 to-transparent pointer-events-none -z-10"></div>

      <header className="sticky top-0 z-50 bg-transparent/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="flex justify-between items-center mb-4 md:justify-start md:gap-6">
          <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
            Directory
          </h1>
          <Link href="/directory/add" className="w-8 h-8 rounded-full bg-[#00e3fd]/20 text-[#00e3fd] flex items-center justify-center hover:bg-[#00e3fd] hover:text-[#0f0e10] transition-colors border border-[#00e3fd]/50">
            <Plus className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aeaaad] w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search businesses, spots, events..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141315] border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#00e3fd]/50 transition-colors placeholder:text-[#aeaaad]/50"
          />
        </div>
      </header>

      {/* Filter Chips */}
      <div className="overflow-x-auto no-scrollbar px-6 py-4 flex gap-3">
        {categories.map((filter, i) => (
          <button 
            key={i}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold border transition-all ${
              activeFilter === filter 
                ? "bg-[#00e3fd]/10 border-[#00e3fd]/30 text-[#00e3fd]" 
                : "bg-transparent border-white/10 text-[#aeaaad] hover:border-white/30"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <main className="px-6 space-y-6 max-w-5xl mx-auto mt-4">
        
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">Trending Near You</h2>
          <span className="text-[#ffb155] text-xs font-bold flex items-center gap-1 uppercase tracking-widest">
            <MapPin className="w-3 h-3" /> Lagos
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-[#00e3fd] animate-spin" />
          </div>
        ) : businesses.length === 0 ? (
          <div className="text-center py-20 text-[#aeaaad]">
            <p>No spots found matching your criteria.</p>
          </div>
        ) : (
          businesses.map((item, index) => (
            <div key={item.id} className="dir-card opacity-0 glass-panel p-4 flex gap-4 border border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
                <Image width={400} height={400} 
                  src={item.image_url || `https://images.unsplash.com/photo-${1514525253161 + index}?w=400&q=80`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.verified && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-transparent/80 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Flame className="w-3 h-3 text-[#ffb155]" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg leading-tight group-hover:text-[#00e3fd] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      {/* Placeholder rating, can pull from reviews table later */}
                      <span className="text-xs font-bold text-[#aeaaad] bg-white/5 px-2 py-0.5 rounded-md">4.9★</span>
                    </div>
                  </div>
                  <p className="text-[#aeaaad] text-xs mt-1 font-medium">{item.category} • {item.address?.split(',')[0] || item.city}</p>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1 uppercase tracking-wider">
                    <Navigation className="w-3 h-3" /> Directions
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); openListModal(item.id); }} className="w-10 bg-white/5 hover:bg-white/10 text-[#ff89ab] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="w-10 bg-white/5 hover:bg-white/10 text-white rounded-lg flex items-center justify-center transition-colors">
                    <Compass className="w-4 h-4 text-[#00e3fd]" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

      </main>
    </div>
  );
}
