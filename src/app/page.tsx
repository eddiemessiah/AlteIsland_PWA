"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, MapPin, Sparkles, Navigation, Globe, Map } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic stagger animation for cards
    gsap.fromTo(
      ".home-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const listImages = [
    ["1514525253161-7a46d19cd819", "1555396273-367ea4eb4db5"],
    ["1566737236500-c8ac43014a67", "1441986300917-64674bd600d8"],
    ["1552566626-52f8b828add9", "1520006403909-838d6b92c22e"]
  ];

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32" ref={scrollRef}>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff89ab]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-liquid-blob"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-[#00e3fd]/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-liquid-blob" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-5xl mx-auto flex justify-between items-end mb-8">
          <div>
            <span className="text-[#ffb155] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs flex items-center gap-2 mb-3">
              <Sparkles className="w-3 h-3" /> Diaspora Connected
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-2">
              The Vibe <br />
              <span className="bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-clip-text text-transparent">
                Curated
              </span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#aeaaad] font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            9,402 Active Members
          </div>
        </div>
      </section>

      <main className="px-6 space-y-12 max-w-5xl mx-auto">
        
        {/* Hot Right Now Section */}
        <section className="home-card">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold">Hot Right Now</h2>
            <Link href="/hot" className="text-[#00e3fd] text-xs font-bold flex items-center gap-1 uppercase tracking-widest hover:text-white transition-colors">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden group cursor-pointer border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" 
                alt="Concert" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10] via-[#0f0e10]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-[#ffb155] text-[#0f0e10] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block">Event</span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white mb-1 group-hover:text-[#ff89ab] transition-colors">Afro Nation Preview</h3>
                    <p className="text-[#aeaaad] text-xs flex items-center gap-1 font-medium"><MapPin className="w-3 h-3" /> Eko Atlantic City</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#ff89ab] transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden group cursor-pointer border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
                alt="Food" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10] via-[#0f0e10]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-[#00e3fd] text-[#0f0e10] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block">New Spot</span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white mb-1 group-hover:text-[#00e3fd] transition-colors">RSVP Lagos</h3>
                    <p className="text-[#aeaaad] text-xs flex items-center gap-1 font-medium"><MapPin className="w-3 h-3" /> Victoria Island</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#00e3fd] transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Lists */}
        <section className="home-card">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold">Curated Lists</h2>
            <Link href="/list" className="text-[#ff89ab] text-xs font-bold flex items-center gap-1 uppercase tracking-widest hover:text-white transition-colors">
              Explore <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="w-64 shrink-0 rounded-2xl p-5 bg-[#141315] border border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <div className="flex -space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#272528] border-2 border-[#141315] flex items-center justify-center overflow-hidden">
                    <Image src={`https://images.unsplash.com/photo-${listImages[idx][0]}?w=100&q=80`} width={40} height={40} alt="Spot" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#272528] border-2 border-[#141315] flex items-center justify-center overflow-hidden">
                    <Image src={`https://images.unsplash.com/photo-${listImages[idx][1]}?w=100&q=80`} width={40} height={40} alt="Spot" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ffb155] border-2 border-[#141315] flex items-center justify-center text-[#0f0e10] text-[10px] font-bold">
                    +12
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg mb-1 group-hover:text-[#ffb155] transition-colors">
                  {idx === 0 ? 'Best Amala Joints' : idx === 1 ? 'Hidden Rooftops' : 'Late Night Bites'}
                </h3>
                <p className="text-[#aeaaad] text-xs">Curated by <span className="text-white">@alteking</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Flowing Beyond Borders Section */}
        <section className="home-card relative overflow-hidden rounded-[3rem] p-1 md:p-1.5 animate-border-glow shadow-2xl mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff89ab] via-[#ffb155] to-[#00e3fd] bg-flowing-gradient opacity-80" />
          <div className="relative z-10 bg-[#0f0e10]/80 backdrop-blur-3xl rounded-[2.8rem] p-8 md:p-16 text-center space-y-8 flex flex-col items-center">
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00e3fd] to-[#ffb155] p-1 mx-auto mb-4 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-full h-full rounded-full bg-[#141315] flex items-center justify-center">
                <Globe className="w-10 h-10 text-[#00e3fd] animate-pulse" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-['Plus_Jakarta_Sans'] tracking-tight max-w-3xl leading-tight">
              Flowing <br /> <span className="bg-gradient-to-r from-[#00e3fd] to-[#ffb155] bg-clip-text text-transparent">Beyond Borders</span>
            </h2>
            
            <p className="text-[#aeaaad] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              From Berlin to London, Paris, and the entire African Diaspora. We are uniting creators, businesses, and communities into one seamless digital experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <span className="px-6 py-3 rounded-full bg-[#272528]/80 border border-[#00e3fd]/30 text-white font-bold text-sm flex items-center gap-2 backdrop-blur-xl">
                <Map className="w-4 h-4 text-[#00e3fd]" /> Berlin
              </span>
              <span className="px-6 py-3 rounded-full bg-[#272528]/80 border border-[#ffb155]/30 text-white font-bold text-sm flex items-center gap-2 backdrop-blur-xl">
                <Map className="w-4 h-4 text-[#ffb155]" /> London
              </span>
              <span className="px-6 py-3 rounded-full bg-[#272528]/80 border border-[#ff89ab]/30 text-white font-bold text-sm flex items-center gap-2 backdrop-blur-xl">
                <Map className="w-4 h-4 text-[#ff89ab]" /> Paris
              </span>
            </div>
          </div>
        </section>

        {/* Explore Button CTA */}
        <section className="home-card pt-8 pb-12">
          <Link href="/directory">
            <div className="w-full glass-panel rounded-3xl p-8 border border-[#00e3fd]/30 flex flex-col items-center justify-center group hover:bg-[#00e3fd]/5 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e3fd]/0 via-[#00e3fd]/10 to-[#00e3fd]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="w-16 h-16 rounded-full bg-[#00e3fd]/20 text-[#00e3fd] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Navigation className="w-8 h-8" />
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold mb-2 text-center text-white">Explore the Full Directory</h2>
              <p className="text-[#aeaaad] text-sm text-center max-w-sm">Find verified businesses, read community reviews, and discover the heartbeat of the city.</p>
            </div>
          </Link>
        </section>

      </main>
    </div>
  );
}
