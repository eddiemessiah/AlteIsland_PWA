"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Lock, Flame, List as ListIcon, Star, Target, Crown, LogOut } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { createClient } from "@/utils/supabase/client";

export default function Profile() {
  const { profile, isLoading, setProfile } = useUserStore();
  const supabase = createClient();

  useEffect(() => {
    gsap.fromTo(
      ".profile-stagger",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setProfile(null)
  }

  return (
    <div className="min-h-screen bg-transparent text-white font-['Manrope'] pb-32 overflow-hidden">
      {/* Background Liquid Art */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff89ab]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-liquid-blob"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#00e3fd]/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-liquid-blob"></div>

      <header className="fixed top-0 w-full z-50 bg-transparent/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-black bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent font-['Inter']">
          Profile
        </h1>
        {profile && (
          <button onClick={handleSignOut} className="text-[#aeaaad] hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        )}
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-12 md:space-y-16">
        
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="w-8 h-8 rounded-full border-2 border-[#ff89ab] border-t-transparent animate-spin"></div>
          </div>
        ) : profile ? (
          /* Logged In State */
          <section className="profile-stagger flex flex-col items-center md:flex-row md:items-start gap-8">
            <div className="relative">
              <img 
                src={profile.avatar_url || "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80"} 
                alt="Avatar" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-2 border-[#ff89ab]/30 shadow-[0_0_40px_rgba(255,137,171,0.2)]"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#141315] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <Crown className="w-4 h-4 text-[#ffb155]" />
                <span className="font-bold text-sm text-[#ffb155] font-['Inter']">{profile.afro_points} PTS</span>
              </div>
            </div>
            
            <div className="text-center md:text-left mt-4 md:mt-0 flex-1">
              <h1 className="font-['Inter'] font-extrabold text-4xl md:text-5xl tracking-tighter mb-2">
                {profile.full_name || profile.username || 'Afro Explorer'}
              </h1>
              <p className="text-[#00e3fd] font-bold tracking-[0.2em] uppercase text-xs mb-6">Verified Member</p>
              
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-black text-white">0</div>
                  <div className="text-[10px] text-[#aeaaad] uppercase tracking-widest mt-1">Votes</div>
                </div>
                <div className="text-center md:text-left border-x border-white/5">
                  <div className="text-2xl font-black text-white">0</div>
                  <div className="text-[10px] text-[#aeaaad] uppercase tracking-widest mt-1">Lists</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-black text-[#ffb155]">{profile.afro_points}</div>
                  <div className="text-[10px] text-[#aeaaad] uppercase tracking-widest mt-1">Points</div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Logged Out State */
          <section className="profile-stagger text-center md:text-left">
            <h1 className="font-['Inter'] font-extrabold text-4xl md:text-6xl tracking-tighter mb-4 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-[#ff89ab] to-[#ffb155] bg-clip-text text-transparent">Afro Club</span>
            </h1>
            <p className="text-[#aeaaad] text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 mx-auto md:mx-0">
              Sign in to unlock all features: save businesses to lists, earn Afro Points by voting, and join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={handleSignIn} className="bg-gradient-to-r from-[#ff89ab] to-[#e30071] text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,137,171,0.3)]">
                Sign In with Google
              </button>
            </div>
          </section>
        )}

        {/* Bento Grid: What You Can Do */}
        <section className="profile-stagger">
          <div className="mb-6">
            <span className="text-[#00e3fd] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Features</span>
            <h2 className="font-['Inter'] text-2xl md:text-3xl font-bold mt-2">Earn Afro Points</h2>
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
                <h3 className="text-2xl md:text-3xl font-['Inter'] font-bold mb-2">Vote Hot or Not <span className="text-[#ffb155]">+5 PTS</span></h3>
                <p className="text-[#aeaaad] text-sm md:text-base max-w-sm">Influence the global rankings. Set the trends for the community in real-time and earn points for every vote.</p>
              </div>
            </div>

            {/* Create Lists */}
            <div className="md:col-span-4 glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center text-center justify-center border border-white/5 bg-[#00e3fd]/5 h-[300px] md:h-[400px]">
              <div className="w-16 h-16 rounded-full bg-[#00e3fd]/20 flex items-center justify-center mb-6">
                <ListIcon className="text-[#00e3fd] w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-['Inter'] font-bold mb-3">Create Lists</h3>
              <p className="text-[#aeaaad] text-sm md:text-base">Curate your favorite spots, tracks, and moments into shared collections.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
