"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Phone, Menu, X, Music, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Channel", href: "#channel" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/40 p-[2px] transition-transform group-hover:scale-105">
            <img
              src={PORTFOLIO_DATA.profile.profileImage}
              alt="Mani Sandhu"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="font-serif text-lg tracking-wide text-white font-bold group-hover:text-[#d4af37] transition-colors">
              MANI SANDHU
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-gray-400 font-medium">
              Media House • Ludhiana
            </span>
          </div>
        </a>

        {/* Clean Center Links (Hostinger Style) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-gray-300 hover:text-[#d4af37] transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="text-gray-400 hover:text-red-500 transition-colors p-1.5"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-gray-400 hover:text-pink-400 transition-colors p-1.5"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.socials.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#d4af37] hover:text-black text-xs font-semibold tracking-wider transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Open Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-6 rounded-2xl bg-[#111319] border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wide text-gray-200 hover:text-[#d4af37] py-1 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:9872999854"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-gray-200 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call: 98729 99854</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-bold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Mani Sandhu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
