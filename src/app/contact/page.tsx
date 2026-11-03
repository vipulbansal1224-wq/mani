"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { YoutubeIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "Music Video Production",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // WhatsApp direct fallback
    const encoded = encodeURIComponent(
      `Hello Mani Sandhu Media House!\n\nName: ${formState.name}\nPhone: ${formState.phone}\nService: ${formState.service}\nDetails: ${formState.message}`
    );
    window.open(`https://wa.me/919872999854?text=${encoded}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#d4af37]/40 selection:text-white">
      <Navbar />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Editorial Header */}
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fef3c7] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>[ 07 • BOOKINGS & INQUIRIES ]</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Let&apos;s Create Something <span className="italic font-normal text-[#d4af37]">Legendary</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Reach out directly to Mani Sandhu Media House for vocal tracks, music video directing, modeling features, live stage performances, and media promotional campaigns.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10 flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+919872999854"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef3c7] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">
                      Primary Phone Line
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      +91 98729 99854
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919478839486"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 text-gray-300 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">
                      Secondary Desk Line
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      +91 94788 39486
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919872999854?text=Hello%20Mani%20Sandhu,%20I%20would%20like%20to%20discuss%20a%20booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-emerald-400 block font-semibold">
                      Instant WhatsApp Desk
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp (24/7)
                    </span>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@ManiSandhuOfficial786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                    <YoutubeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-red-400 block font-semibold">
                      Official YouTube Channel
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      @ManiSandhuOfficial786
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Studio Info Card */}
            <div className="p-6 rounded-2xl bg-[#12141c] border border-white/10 flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold">
                Location &amp; Hub
              </span>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>Mani Sandhu Media House, Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Globe className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>UK Operations: Birmingham &bull; London</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>Working Hours: Mon – Sat, 10:00 AM – 8:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right: Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the details below. Our team responds directly via phone and WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Inquiry Forwarded!</h4>
                    <p className="text-xs mt-1">
                      Opening WhatsApp to send your details directly to Mani Sandhu. Thank you!
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Gurpreet Singh"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c26] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#d4af37] transition-colors"
                    >
                      <option value="Music Video Production">Music Video Direction &amp; Shoot</option>
                      <option value="Vocal Collaboration">Singer / Vocal Collaboration</option>
                      <option value="Model & Acting Feature">Model &amp; Acting Feature</option>
                      <option value="Media Promotions">Mani Sandhu Media House Promotion</option>
                      <option value="Live Stage Show">Live Stage Booking / Event Appearance</option>
                      <option value="Other">Other Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Share your track idea, budget, dates, or location..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38f2a] text-black font-bold text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit &amp; Chat on WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
