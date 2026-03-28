"use client";

import { useEffect } from "react";
import gsap from "gsap";
import BottomNav from "@/components/BottomNav";
import { MapPin, ArrowRight } from "lucide-react";

export default function ShopExperience() {
  useEffect(() => {
    // Elegant Entrance Animation using GSAP
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" }
    );
    gsap.fromTo(
      ".glass-panel",
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: "back.out(1.2)" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white liquid-bg font-['Manrope'] pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/60 backdrop-blur-3xl border-b border-white/5">
        <div className="flex justify-between items-center w-full px-8 py-5 max-w-[1440px] mx-auto">
          <span className="text-2xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
            Afro Club World
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8 hero-text">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffb155]/10 border border-[#ffb155]/20 text-[#ffb155] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,177,85,0.1)]">
              <MapPin className="w-4 h-4 mr-2" />
              Berlin • Fulfillment Space
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter">
              The <span className="text-[#ff89ab] italic">Digital Universe</span> of Afro Excellence.
            </h1>

            <p className="text-[#aeaaad] text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
              We're building a marketplace for Afro businesses to deliver exclusive bundles and products. Join the waitlist to be notified when we launch in your area.
            </p>
          </div>

          {/* Waitlist Glass Form */}
          <div className="lg:col-span-5 relative hero-text">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ff89ab]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#00e3fd]/10 rounded-full blur-[80px]" />
            
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative z-10 space-y-8">
              <div>
                <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold mb-2">Secure Your Spot</h2>
                <p className="text-[#aeaaad] text-sm font-medium">Be the first to access the curated collection.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@universe.com"
                    className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#00e3fd] focus:ring-1 focus:ring-[#00e3fd] rounded-xl p-4 text-white placeholder-white/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Your City</label>
                  <select className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#00e3fd] focus:ring-1 focus:ring-[#00e3fd] rounded-xl p-4 text-white appearance-none outline-none">
                    <option>Berlin, Germany</option>
                    <option>Paris, France</option>
                    <option>London, UK</option>
                  </select>
                </div>
                
                <button type="button" className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#ff89ab] to-[#e30071] text-white font-['Plus_Jakarta_Sans'] font-extrabold text-lg shadow-[0_0_40px_rgba(255,137,171,0.3)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
