import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({
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
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-gradient-to-b from-[#F2863E] via-[#FFC7D5] to-[#BCB0FF] text-white min-h-screen overflow-x-hidden selection:bg-[#ff89ab]/30`}>
        {/* Persistent Grain Overlay */}
        <div className="fixed inset-0 glass-grain z-[60] pointer-events-none mix-blend-overlay"></div>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
