"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ArrowLeft, Upload, Store, MapPin, Globe, AtSign, Building } from "lucide-react";

export default function AddBusiness() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".form-stagger",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/directory");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f0e10] text-white font-['Manrope'] pb-32">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00e3fd]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0f0e10]/80 backdrop-blur-xl border-b border-white/5 px-4 py-4 flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-[#272528]/50 flex items-center justify-center hover:bg-[#272528] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold font-['Plus_Jakarta_Sans']">Add Business</h1>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        <div className="form-stagger">
          <h2 className="text-2xl font-black font-['Plus_Jakarta_Sans'] mb-2">Grow the Community</h2>
          <p className="text-[#aeaaad] text-sm">Help others discover the best Afro-owned and culturally significant businesses.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Cover Photo Upload */}
          <div className="form-stagger relative aspect-video rounded-3xl border-2 border-dashed border-white/10 bg-[#141315]/50 flex flex-col items-center justify-center cursor-pointer hover:bg-[#272528]/30 transition-colors group overflow-hidden">
            <div className="w-14 h-14 rounded-full bg-[#00e3fd]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6 text-[#00e3fd]" />
            </div>
            <span className="font-bold text-sm">Upload Cover Photo</span>
            <span className="text-[#aeaaad] text-xs mt-1">High quality image of the storefront or products</span>
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <div className="form-stagger space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Business Name *</label>
              <div className="relative">
                <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Lagos Soul Restaurant"
                  className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#ff89ab] focus:ring-1 focus:ring-[#ff89ab] rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="form-stagger space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Category *</label>
              <select required className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#ff89ab] focus:ring-1 focus:ring-[#ff89ab] rounded-xl p-4 text-white appearance-none outline-none">
                <option value="">Select a category</option>
                <option value="shop">Shop</option>
                <option value="restaurant">Restaurant</option>
                <option value="salon">Salon</option>
                <option value="designer">Designer</option>
                <option value="beauty">Beauty & Cosmetics</option>
                <option value="creative">Creative Studio</option>
              </select>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-stagger space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">City *</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="text" 
                    required
                    placeholder="Berlin"
                    className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#ffb155] focus:ring-1 focus:ring-[#ffb155] rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="form-stagger space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Country *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="text" 
                    required
                    placeholder="Germany"
                    className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#ffb155] focus:ring-1 focus:ring-[#ffb155] rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/20 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-stagger space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Description</label>
            <textarea 
              rows={3}
              placeholder="What makes this place special?"
              className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#00e3fd] focus:ring-1 focus:ring-[#00e3fd] rounded-xl p-4 text-white placeholder-white/20 transition-all outline-none resize-none"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="form-stagger space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">AtSign Handle *</label>
              <div className="relative">
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="text" 
                  required
                  placeholder="@businessname"
                  className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#ff89ab] focus:ring-1 focus:ring-[#ff89ab] rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="form-stagger space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#aeaaad] font-bold ml-2">Website (Optional)</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="url" 
                  placeholder="https://..."
                  className="w-full bg-[#141315]/80 border border-white/10 focus:border-[#00e3fd] focus:ring-1 focus:ring-[#00e3fd] rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/20 transition-all outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-stagger pt-6 pb-8">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-2xl bg-[#00e3fd] text-[#0f0e10] font-['Plus_Jakarta_Sans'] font-extrabold text-lg shadow-[0_0_30px_rgba(0,227,253,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Adding Business..." : "Add Business"}
            </button>
            <p className="text-center text-[10px] text-[#aeaaad] mt-4 uppercase tracking-wider">
              By adding a business, you agree to our community guidelines.
            </p>
          </div>

        </form>
      </main>
    </div>
  );
}
