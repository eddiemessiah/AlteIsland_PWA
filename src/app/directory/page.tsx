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
  const photos = ["1514525253161-7a46d19cd819", "1555396273-367ea4eb4db5", "1566737236500-c8ac43014a67", "1441986300917-64674bd600d8", "1552566626-52f8b828add9", "1520006403909-838d6b92c22e", "1514525253161-7a46d19cd819", "1555396273-367ea4eb4db5", "1566737236500-c8ac43014a67", "1441986300917-64674bd600d8"];
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
      
      try {
        const { data, error } = await query;
        if (data) setBusinesses(data);
        if (error) console.error("Error fetching businesses:", error);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
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
    <div className="min-h-screen bg-transparent text-black font-['Inter'] pb-32">
      
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-3xl border-b border-black/10 px-6 py-4">
        <div className="flex justify-between items-center mb-4 md:justify-start md:gap-6">
          <h1 className="text-2xl font-black text-white font-['Inter']">
            Directory
          </h1>
          <Link href="/directory/add" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
            <Plus strokeWidth={2.5} className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search businesses, spots, events..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[rgba(0,0,0,0.32)] backdrop-blur-md border border-white/20 rounded-[20px] py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-white text-white placeholder:text-white/50 shadow-lg"
          />
        </div>
      </header>

      {/* Filter Chips */}
      <div className="overflow-x-auto no-scrollbar px-6 py-6 flex gap-3">
        {categories.map((filter, i) => (
          <button 
            key={i}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest border transition-all shadow-lg ${
              activeFilter === filter 
                ? "bg-black text-white border-black" 
                : "bg-white/50 backdrop-blur-md border-transparent text-black/60 hover:bg-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <main className="px-6 space-y-6 max-w-5xl mx-auto mt-2">
        
        <div className="flex justify-between items-end mb-4">
          <h2 className="font-['Inter'] text-3xl font-black text-black">Trending Near You</h2>
          <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 uppercase tracking-[0.2em] shadow-lg">
            <MapPin className="w-3 h-3" /> Lagos
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <Loader2 className="w-10 h-10 text-black animate-spin" />
          </div>
        ) : businesses.length === 0 ? (
          <div className="text-center py-20 text-black/60 font-medium">
            <p>No spots found matching your criteria.</p>
          </div>
        ) : (
          businesses.map((item, index) => (
            <div key={item.id} className="dir-card bg-[rgba(0,0,0,0.32)] backdrop-blur-xl rounded-[25px] p-5 flex gap-5 border border-white/10 hover:bg-black/50 transition-colors cursor-pointer group shadow-2xl">
              <div className="w-28 h-28 rounded-[20px] overflow-hidden shrink-0 relative shadow-xl">
                <Image width={400} height={400} 
                  src={item.image_url || `https://images.unsplash.com/photo-${photos[index % 10]}?w=400&q=80`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                {item.verified && (
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-black/10">
                    <Flame strokeWidth={2.5} className="w-4 h-4 text-black" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-['Inter'] font-black text-xl leading-tight text-white group-hover:text-white/80 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      <span className="text-[10px] font-black text-black bg-white px-2 py-1 rounded-[8px] shadow-lg">4.9★</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs mt-2 font-medium">{item.category} • {item.address?.split(',')[0] || item.city}</p>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-white/10 hover:bg-white text-white hover:text-black text-[10px] font-black py-3 rounded-[15px] transition-colors flex items-center justify-center gap-2 uppercase tracking-widest border border-white/20 shadow-md">
                    <Navigation className="w-3 h-3" /> Directions
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); openListModal(item.id); }} className="w-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-[15px] flex items-center justify-center transition-colors border border-white/20 shadow-md">
                    <Bookmark strokeWidth={2} className="w-4 h-4" />
                  </button>
                  <button className="w-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-[15px] flex items-center justify-center transition-colors border border-white/20 shadow-md">
                    <Compass strokeWidth={2} className="w-4 h-4" />
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
