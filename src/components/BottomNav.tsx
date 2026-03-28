"use client";

import { ShoppingBag, Compass, Flame, List, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Shop", icon: ShoppingBag, path: "/" },
    { name: "Directory", icon: Compass, path: "/directory" },
    { name: "Hot", icon: Flame, path: "/hot" },
    { name: "List", icon: List, path: "/list" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full flex justify-around items-center z-50 pb-8 pointer-events-none md:hidden">
      <div className="bg-[#272528]/60 backdrop-blur-2xl fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full px-6 py-4 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-between items-center pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-90 ${
                isActive ? "text-[#00e3fd]" : "text-white/50 hover:text-white"
              }`}
            >
              <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-[#00e3fd] rounded-full shadow-[0_0_10px_#00e3fd]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
