"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Lock, Flame, List as ListIcon, Star, Target, Crown } from "lucide-react";

export default function Profile() {
  useEffect(() => {
    gsap.fromTo(
      ".profile-stagger",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32 overflow-hidden">
      {/* Background Liquid Art */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff89ab]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-liquid-blob"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#00e3fd]/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-liquid-blob"></div>

      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
          Profile
        </h1>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-12 md:space-y-16">
        
        {/* Welcome Block */}
        <section className="profile-stagger text-center md:text-left">
          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl md:text-6xl tracking-tighter mb-4 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent">Afro Club</span>
          </h1>
          <p className="text-[#aeaaad] text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 mx-auto md:mx-0">
            Sign in to unlock all features: save businesses to lists, track your votes, and join the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-[#ff89ab] to-[#e30071] text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,137,171,0.3)]">
              Create Account
            </button>
            <button className="glass-panel border border-white/10 px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-colors text-[#aeaaad] hover:text-white">
              Sign In
            </button>
          </div>
        </section>

        {/* Bento Grid: What You Can Do */}
        <section className="profile-stagger">
          <div className="mb-6">
            <span className="text-[#00e3fd] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Features</span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold mt-2">What you can do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Vote Hot or Not */}
            <div className="md:col-span-8 glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between group overflow-hidden border border-white/5 relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e10]/80 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" 
                alt="Concert crowd" 
              />
              <div className="relative z-20">
                <div className="w-12 h-12 rounded-xl bg-[#ffb155]/20 flex items-center justify-center mb-4 backdrop-blur-md">
                  <Flame className="text-[#ffb155] w-6 h-6" />
                </div>
              </div>
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl md:text-3xl font-['Plus_Jakarta_Sans'] font-bold mb-2">Vote Hot or Not</h3>
                <p className="text-[#aeaaad] text-sm md:text-base max-w-sm">Influence the global rankings. Set the trends for the community in real-time.</p>
              </div>
            </div>

            {/* Create Lists */}
            <div className="md:col-span-4 glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center text-center justify-center border border-white/5 bg-[#00e3fd]/5 h-[300px] md:h-[400px]">
              <div className="w-16 h-16 rounded-full bg-[#00e3fd]/20 flex items-center justify-center mb-6">
                <ListIcon className="text-[#00e3fd] w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-3">Create Lists</h3>
              <p className="text-[#aeaaad] text-sm md:text-base">Curate your favorite spots, tracks, and moments into shared collections.</p>
            </div>

            {/* Write Reviews */}
            <div className="md:col-span-5 glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col justify-between h-[300px] md:h-auto">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ff89ab]/20 flex items-center justify-center mb-4">
                  <Star className="text-[#ff89ab] w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-3">Write Reviews</h3>
                <p className="text-[#aeaaad] text-sm md:text-base">Share your experiences and help others find the hidden gems of the world.</p>
              </div>
              <div className="flex -space-x-3 mt-6">
                <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0f0e10] object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80" alt="user" />
                <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0f0e10] object-cover" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=200&q=80" alt="user" />
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0f0e10] bg-[#272528] flex items-center justify-center text-[8px] md:text-[10px] font-bold">
                  +12k
                </div>
              </div>
            </div>

            {/* Your Impact Stats */}
            <div className="md:col-span-7 glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 md:top-0 md:right-0 p-8 opacity-10">
                <Target className="w-32 h-32 md:w-48 md:h-48" />
              </div>
              <h3 className="text-xl md:text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-6 md:mb-8 relative z-10">Your Impact</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                <div>
                  <div className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#00e3fd]">0</div>
                  <div className="text-[10px] md:text-xs text-[#aeaaad] uppercase tracking-widest mt-1">Votes Cast</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#ff89ab]">0</div>
                  <div className="text-[10px] md:text-xs text-[#aeaaad] uppercase tracking-widest mt-1">Lists Made</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#ffb155]">0</div>
                  <div className="text-[10px] md:text-xs text-[#aeaaad] uppercase tracking-widest mt-1">Reviews</div>
                </div>
              </div>
              
              <div className="mt-8 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-3 relative z-10">
                <Lock className="text-[#ff89ab] w-4 h-4 shrink-0" />
                <p className="text-xs md:text-sm text-[#aeaaad]">Sign in to sync your activity across devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade / Exclusive Section */}
        <section className="profile-stagger mb-12">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[300px] md:min-h-[400px] flex items-center justify-center text-center p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1000&q=80" 
                className="w-full h-full object-cover" 
                alt="Colorful abstract" 
              />
              <div className="absolute inset-0 bg-[#0f0e10]/80 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <Crown className="w-10 h-10 text-[#ffb155] mb-4" />
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-4xl font-bold mb-4">Unlock the Full Experience</h2>
              <p className="text-[#aeaaad] text-sm md:text-lg mb-6 leading-relaxed">
                Become a member of the elite Afro Club community. Get priority access to events, exclusive drops, and verified status.
              </p>
              <button className="bg-[#00e3fd] text-[#0f0e10] px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-lg hover:scale-105 shadow-[0_0_30px_rgba(0,227,253,0.4)] transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
