import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import AuthProvider from "@/components/AuthProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AlteIsland | Afro Club World",
  description: "The Digital Universe of Afro Excellence starting in Germany.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0f0e10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} ${manrope.variable} antialiased bg-[#0f0e10] text-white min-h-screen overflow-x-hidden selection:bg-[#ff89ab]/30`}>
        {/* Persistent Grain Overlay */}
        <div className="fixed inset-0 glass-grain z-[60] pointer-events-none mix-blend-overlay"></div>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
