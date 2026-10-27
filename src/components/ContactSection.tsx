"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, YoutubeIcon, InstagramIcon } from "@/components/Icons";

export default function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Media Promotion & Interview",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 bg-[#07080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] uppercase tracking-[0.25em] font-bold text-red-400 mb-3">
            <span>06 / Connect &amp; Official Bookings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Get In Touch with <span className="text-punjabi-fire">Mani Sandhu</span>
          </h2>
        </div>

        {/* Hostinger Asymmetric Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Phone Lines & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Have a song or project to promote?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
                Connect directly with Mani Sandhu for artist interviews, music releases, and media promotions across Punjab.
              </p>

              {/* Phone cards */}
              <div className="space-y-3 mb-8">
                {profile.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#0f121d] border border-white/10 hover:border-[#ff2a5f]/50 transition-all group stage-card"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff2a5f]/20 to-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#ff2a5f]" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                          Direct Line {idx + 1}
                        </div>
                        <div className="text-sm font-mono font-bold text-white group-hover:text-[#ff2a5f] transition-colors">
                          +91 {phone}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#ff2a5f] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              {/* WhatsApp Callout */}
              <a
                href={profile.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20 mb-8 hover:scale-102"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Chat on WhatsApp: 9872999854</span>
              </a>
            </div>

            {/* Location & Email Info */}
            <div className="p-5 rounded-2xl bg-[#0f121d] border border-white/10 space-y-2 text-xs text-gray-300 stage-card">
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin className="w-4 h-4 text-[#ff2a5f]" />
                <span className="font-medium">Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f59e0b]" />
                <span className="font-mono">{profile.officialEmail}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stage-Themed Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0f121d] border border-white/10 stage-card shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">Send a Message</h4>
              <p className="text-xs text-gray-300 mb-8">
                Leave your number and details. Mani Sandhu will respond promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-gradient-to-tr from-[#ff2a5f]/10 to-[#f59e0b]/10 border border-[#ff2a5f]/30 text-center animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                  <h5 className="text-xl font-serif font-bold text-white mb-1">Message Received!</h5>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto mb-4">
                    Thank you. Mani Sandhu will get in touch with you directly for promotions &amp; shows.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#ff2a5f] font-bold underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-bold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jaspreet / Artist"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-bold mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-bold mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#141620] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff2a5f] transition-colors"
                    >
                      <option value="Media Promotion & Interview">Media Promotion &amp; Interview</option>
                      <option value="Song Collaboration">Song Collaboration / Singing</option>
                      <option value="Comedy Skits & Acting">Comedy Skits &amp; Acting</option>
                      <option value="RJ / Event Hosting">RJ / Event Hosting</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-bold mb-2">
                      Message / Song Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your song name, promotional details, or collaboration idea..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f]/40 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-fire w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Mani Sandhu</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
