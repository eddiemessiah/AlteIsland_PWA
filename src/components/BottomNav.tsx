"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Map, Flame, LibraryBig, Fingerprint } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Shop", icon: Sparkles, path: "/" },
    { name: "Map", icon: Map, path: "/directory" },
    { name: "Hot", icon: Flame, path: "/hot" },
    { name: "Lists", icon: LibraryBig, path: "/list" },
    { name: "ID", icon: Fingerprint, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#141315]/80 backdrop-blur-3xl border-t border-white/5 pb-safe md:hidden">
      <div className="flex justify-around items-center px-6 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className="flex flex-col items-center gap-1 group relative"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#00e3fd] text-[#0f0e10] shadow-[0_0_20px_rgba(0,227,253,0.3)] scale-110"
                    : "text-[#aeaaad] group-hover:text-white group-hover:bg-white/5"
                }`}
              >
                <item.icon strokeWidth={isActive ? 2.5 : 1.5} className="w-5 h-5" />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
