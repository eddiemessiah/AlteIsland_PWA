"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();
  const navItems = [
    { name: "Shop", path: "/" },
    { name: "Directory", path: "/directory" },
    { name: "Hot", path: "/hot" },
    { name: "List", path: "/list" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="hidden md:flex fixed top-5 right-8 z-[60] bg-[#272528]/60 backdrop-blur-2xl rounded-full px-2 py-2 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.name}
            href={item.path}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              isActive 
                ? "bg-[#00e3fd] text-[#0f0e10] shadow-[0_0_20px_rgba(0,227,253,0.4)] scale-105" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
