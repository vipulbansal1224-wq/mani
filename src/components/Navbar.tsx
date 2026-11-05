"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Phone, Menu, X, Sparkles, ArrowUpRight, Lock, Music } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Legends & Stars", href: "/legends", highlight: "Shinda Ji & Kaur Billo" },
    { label: "Shoots & Models", href: "/shoots" },
    { label: "Solo Portfolio", href: "/portfolio" },
    { label: "Music & Records", href: "/music" },
    { label: "Behind The Scenes", href: "/bts" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080c]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80"
          : "bg-gradient-to-b from-black/80 to-transparent py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#ff2a5f] opacity-75 blur-xs group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black bg-black">
              <img
                src="/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
                alt="Mani Sandhu"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <span className="font-serif text-base lg:text-lg tracking-wider text-white font-extrabold group-hover:text-[#d4af37] transition-colors block">
              MANI SANDHU
            </span>
            <span className="block text-[9px] tracking-widest uppercase text-gray-400 font-medium">
              Media House • Ludhiana &bull; UK
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative group/link text-xs uppercase tracking-wider font-medium py-1 transition-all ${
                  isActive
                    ? "text-[#d4af37] font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="absolute -top-2 -right-3 w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tablet / Secondary nav links */}
        <div className="hidden md:flex xl:hidden items-center gap-3">
          <Link
            href="/legends"
            className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200"
          >
            Legends
          </Link>
          <Link
            href="/shoots"
            className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200"
          >
            Shoots
          </Link>
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200"
          >
            Portfolio
          </Link>
          <Link
            href="/music"
            className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200"
          >
            Music
          </Link>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://youtube.com/@ManiSandhuOfficial786"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-gray-300 hover:text-red-400 flex items-center justify-center transition-all"
            title="YouTube Channel"
          >
            <YoutubeIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://wa.me/919872999854?text=Hi%20Mani%20Sandhu,%20I%20am%20interested%20in%20a%20project%20collaboration"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="w-8 h-8 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center transition-all"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>

          {/* Admin & Music Studio Access */}
          <Link
            href="/admin"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37]/20 border border-white/10 hover:border-[#d4af37]/40 text-gray-400 hover:text-[#d4af37] flex items-center justify-center transition-all"
            title="Admin Portal"
          >
            <Lock className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/music-panel"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37]/20 border border-white/10 hover:border-[#d4af37]/40 text-gray-400 hover:text-[#d4af37] flex items-center justify-center transition-all"
            title="Music Studio Panel"
          >
            <Music className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38f2a] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#090b10]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef3c7] font-bold"
                      : "bg-white/5 hover:bg-white/10 text-gray-200"
                  }`}
                >
                  <span className="text-sm uppercase tracking-wider">{link.label}</span>
                  {link.highlight ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                      {link.highlight}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Admin</span>
              </Link>
              <Link
                href="/music-panel"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Music className="w-3.5 h-3.5 text-amber-400" />
                <span>Music</span>
              </Link>
            </div>
            <a
              href="tel:+919872999854"
              className="text-xs font-mono text-[#d4af37] font-semibold"
            >
              +91 98729 99854
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
