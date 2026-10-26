"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import YouTubeSection from "@/components/YouTubeSection";
import MediaHouseSection from "@/components/MediaHouseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
    <main className="min-h-screen bg-[#07080c] text-gray-100 flex flex-col relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenVideo={handleOpenVideo} />

      {/* About Section */}
      <AboutSection />

      {/* Television Serials & Screen Work */}
      <ProjectsSection onOpenVideo={handleOpenVideo} />

      {/* YouTube Highlights (@ManiSandhuOfficial786) */}
      <YouTubeSection onOpenVideo={handleOpenVideo} />

      {/* Mani Sandhu Media House (Ludhiana Studio) */}
      <MediaHouseSection />

      {/* Production Stills & Moments Gallery */}
      <GallerySection />

      {/* Endorsements & Collaborations */}
      <TestimonialsSection />

      {/* Interactive Booking & Contact Form */}
      <ContactSection />

      {/* Footer */}
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
