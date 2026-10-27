"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import WorksSection from "@/components/WorksSection";
import ServicesList from "@/components/ServicesList";
import ChannelPanorama from "@/components/ChannelPanorama";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoId: string;
    title: string;
  }>({
    isOpen: false,
    videoId: "",
    title: "",
  });

  const handleOpenVideo = (videoId: string, title: string) => {
    setVideoModal({
      isOpen: true,
      videoId,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] flex flex-col relative selection:bg-[#ff2a5f]/40 selection:text-white overflow-hidden">
      {/* Concert Stage Ambient Lighting Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff2a5f]/10 blur-[140px] animate-stage-glow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#f59e0b]/10 blur-[150px] animate-stage-glow" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#ff6b35]/8 blur-[130px] animate-stage-glow" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Editorial Minimalist Navbar */}
      <Navbar />

      {/* Hostinger Asymmetric Split Hero */}
      <Hero onOpenVideo={handleOpenVideo} />

      {/* About The Artist (01) */}
      <AboutSection />

      {/* Featured Music Release: "Broken Heart" (02) */}
      <MusicSection />

      {/* Selected Works & Video Catalogue (03) */}
      <WorksSection onOpenVideo={handleOpenVideo} />

      {/* Numbered Editorial Services (04) */}
      <ServicesList />

      {/* YouTube Cover Banner Panorama (05) */}
      <ChannelPanorama />

      {/* Contact & Promotion Desk (06) */}
      <ContactSection />

      {/* Editorial Typography Footer */}
      <Footer />

      {/* Reusable Video Preview Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoId={videoModal.videoId}
        title={videoModal.title}
      />
    </main>
  );
}
