"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import { GalleryItem } from "@/data/gallery-data";
import {
  Lock,
  Unlock,
  Shield,
  Upload,
  Image as ImageIcon,
  Music,
  Trash2,
  Edit3,
  Plus,
  RefreshCw,
  Check,
  X,
  Search,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Save,
  Phone,
  FileText,
  Sliders,
  Layers,
  LogOut,
} from "lucide-react";

export default function AdminPage() {
  const {
    galleryItems,
    categoryCounts,
    addImage,
    updateImage,
    deleteImage,
    bulkAddImages,
    resetImagesToDefault,
    profile,
    updateProfile,
    resetProfileToDefault,
    musicTracks,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
  } = usePortfolio();

  // Auth local state
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"gallery" | "text" | "bulk" | "music-jump">("gallery");

  // Gallery filters & search
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Single Upload State
  const [showSingleUpload, setShowSingleUpload] = useState(false);
  const [newImageCategory, setNewImageCategory] = useState<GalleryItem["category"]>("portfolio");
  const [newImageSubCategory, setNewImageSubCategory] = useState("studio-fashion");
  const [newImageTitle, setNewImageTitle] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");
  const [newImageTags, setNewImageTags] = useState("");
  const [newImageSrc, setNewImageSrc] = useState("");
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Bulk Upload State
  const [bulkFiles, setBulkFiles] = useState<File[]>([]);
  const [bulkCategory, setBulkCategory] = useState<GalleryItem["category"]>("portfolio");
  const [bulkSubCategory, setBulkSubCategory] = useState("studio-fashion");
  const [bulkProgress, setBulkProgress] = useState<number | null>(null);
  const [bulkSuccessMsg, setBulkSuccessMsg] = useState("");

  // Edit Image Modal
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [editingFilePreview, setEditingFilePreview] = useState<string | null>(null);
  const [editingFileDataUrl, setEditingFileDataUrl] = useState<string | null>(null);

  // Profile Form State
  const [profileForm, setProfileForm] = useState(profile);
  const [profileSaved, setProfileSaved] = useState(false);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (!success) {
      setAuthError(true);
    } else {
      setAuthError(false);
      setPasscode("");
    }
  };

  // Handle Single Image File Selection
  const handleSingleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setNewImagePreview(result);
        setNewImageSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit Single Image Upload
  const handleSingleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImagePreview && !newImageSrc) {
      alert("Please choose an image file or enter an image URL");
      return;
    }

    setIsUploading(true);
    try {
      const tagsArray = newImageTags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      await addImage(
        {
          src: newImageSrc || newImagePreview || "",
          category: newImageCategory,
          subCategory: newImageSubCategory,
          title: newImageTitle || "Mani Sandhu Gallery Shoot",
          description: newImageCaption || "Official photograph from Mani Sandhu Media House.",
          tags: tagsArray.length > 0 ? tagsArray : ["Mani Sandhu", newImageCategory],
          originalFolder: "admin-upload",
          originalIndex: galleryItems.length,
        },
        newImagePreview || undefined
      );

      // Reset form
      setNewImageTitle("");
      setNewImageCaption("");
      setNewImageTags("");
      setNewImageSrc("");
      setNewImagePreview(null);
      setShowSingleUpload(false);
      alert("Image uploaded successfully to the live gallery!");
    } catch (err) {
      console.error(err);
      alert("Failed to save image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Bulk Files Selection
  const handleBulkFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setBulkFiles(filesArray);
      setBulkSuccessMsg("");
    }
  };

  // Process Bulk Upload
  const handleBulkUploadSubmit = async () => {
    if (bulkFiles.length === 0) {
      alert("Please select one or more image files");
      return;
    }

    setBulkProgress(0);
    const preparedItems: Array<{ item: Omit<GalleryItem, "id">; fileDataUrl?: string }> = [];

    for (let i = 0; i < bulkFiles.length; i++) {
      const file = bulkFiles[i];
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });

      preparedItems.push({
        item: {
          src: dataUrl,
          category: bulkCategory,
          subCategory: bulkSubCategory,
          title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          description: `Official image uploaded to ${bulkCategory} collection.`,
          tags: ["Mani Sandhu", bulkCategory, "New Upload"],
          originalFolder: "bulk-upload",
          originalIndex: galleryItems.length + i,
        },
        fileDataUrl: dataUrl,
      });

      setBulkProgress(Math.round(((i + 1) / bulkFiles.length) * 80));
    }

    await bulkAddImages(preparedItems);
    setBulkProgress(100);
    setBulkSuccessMsg(`Successfully uploaded ${preparedItems.length} images to ${bulkCategory}!`);
    setBulkFiles([]);
    setTimeout(() => setBulkProgress(null), 3000);
  };

  // Handle Edit Image File Selection
  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setEditingFilePreview(result);
        setEditingFileDataUrl(result);
        if (editingItem) {
          setEditingItem({ ...editingItem, src: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Edited Image
  const handleEditSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    await updateImage(editingItem.id, editingItem, editingFileDataUrl || undefined);
    setEditingItem(null);
    setEditingFilePreview(null);
    setEditingFileDataUrl(null);
  };

  // Save Profile Form
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  // Filtered gallery list
  const filteredGallery = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // LOCK SCREEN IF NOT LOGGED IN
  if (!isAdminLoggedIn) {
    return (
      <main className="min-h-screen bg-[#07080c] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md bg-[#0f1118]/90 border border-[#d4af37]/40 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#d4af37] to-[#f59e0b] p-0.5 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#d4af37]/30">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <Lock className="w-7 h-7 text-[#d4af37]" />
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              Mani Sandhu Official
            </span>
            <h1 className="font-serif text-2xl font-black text-white mt-1">
              Admin Control Panel
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Website di poori images &amp; text upgrade karan layi password enter karo.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                Enter Security Code
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setAuthError(false);
                  }}
                  placeholder="Enter security passcode"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#d4af37] rounded-xl text-white font-mono tracking-widest text-center text-lg placeholder:text-gray-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>
              {authError && (
                <p className="text-xs text-rose-400 mt-2 text-center font-mono">
                  Incorrect passcode! Kripya sahi password enter karo.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              &larr; Back to Live Site
            </Link>
            <Link href="/music-panel" className="text-[#d4af37] hover:underline flex items-center gap-1">
              Music Panel &rarr;
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // LOGGED IN DASHBOARD
  return (
    <main className="min-h-screen bg-[#07080c] text-[#e5e7eb] pb-24">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0c12]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/50 bg-black">
              <img
                src="/images/portfolio/m2_064_portfolio_studio-fashion.jpeg"
                alt="Mani Sandhu"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-white text-base">
                  MANI SANDHU
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold">
                  ADMIN ACTIVE
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                Media House Control Center
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/music-panel"
              className="px-3.5 py-1.5 rounded-xl bg-[#d4af37]/15 hover:bg-[#d4af37]/25 border border-[#d4af37]/40 text-[#fef3c7] font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Music className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Go to</span> Music Panel
            </Link>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline">View Site</span>
            </Link>

            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-1.5 transition-colors"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Lock Panel</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Statistics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
              Total Images
            </span>
            <span className="text-2xl font-black text-white mt-1 block">
              {categoryCounts.total}
            </span>
          </div>
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block">
              Legends &amp; Stars
            </span>
            <span className="text-2xl font-black text-[#d4af37] mt-1 block">
              {categoryCounts.legends}
            </span>
          </div>
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
              Shoots &amp; Models
            </span>
            <span className="text-2xl font-black text-white mt-1 block">
              {categoryCounts.shoots}
            </span>
          </div>
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">
              Solo Fashion
            </span>
            <span className="text-2xl font-black text-white mt-1 block">
              {categoryCounts.portfolio}
            </span>
          </div>
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-pink-400 uppercase tracking-wider block">
              Music &amp; Posters
            </span>
            <span className="text-2xl font-black text-white mt-1 block">
              {categoryCounts.music}
            </span>
          </div>
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
              MP3 Tracks
            </span>
            <span className="text-2xl font-black text-white mt-1 block">
              {musicTracks.length}
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "gallery"
                ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Image Manager ({galleryItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("bulk")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "bulk"
                ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Bulk Upload (Multiple Pics)</span>
          </button>

          <button
            onClick={() => setActiveTab("text")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "text"
                ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Website Text &amp; Bio</span>
          </button>

          <Link
            href="/music-panel"
            className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 bg-gradient-to-r from-amber-600/30 to-amber-500/20 border border-[#d4af37]/40 text-[#fef3c7] hover:bg-[#d4af37]/30 ml-auto"
          >
            <Music className="w-4 h-4 text-[#d4af37]" />
            <span>Music Panel (MP3 Songs) &rarr;</span>
          </Link>
        </div>

        {/* TAB 1: GALLERY MANAGER */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Gallery Control Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[#0f1118] border border-white/10 rounded-2xl p-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {[
                  { id: "all", label: "All Pics", count: categoryCounts.total },
                  { id: "legends", label: "Legends", count: categoryCounts.legends },
                  { id: "shoots", label: "Shoots", count: categoryCounts.shoots },
                  { id: "portfolio", label: "Solo", count: categoryCounts.portfolio },
                  { id: "music", label: "Music", count: categoryCounts.music },
                  { id: "bts", label: "BTS", count: categoryCounts.bts },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                      selectedCategory === c.id
                        ? "bg-[#d4af37]/20 text-[#fef3c7] border border-[#d4af37]/50 font-bold"
                        : "bg-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    {c.label} ({c.count})
                  </button>
                ))}
              </div>

              {/* Actions & Search */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by title, tag..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowSingleUpload(!showSingleUpload)}
                  className="px-4 py-2 rounded-xl bg-[#d4af37] hover:bg-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow-md shadow-[#d4af37]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showSingleUpload ? "Close Form" : "Add Image"}</span>
                </button>
              </div>
            </div>

            {/* Single Image Upload Drawer */}
            {showSingleUpload && (
              <form
                onSubmit={handleSingleUploadSubmit}
                className="bg-[#121520] border-2 border-[#d4af37]/50 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#d4af37]" />
                    <h3 className="font-serif font-black text-lg text-white">
                      Upload New Image to Website
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSingleUpload(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* File Pick / Preview */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                      Choose Photo (From your Mobile or Computer)
                    </label>
                    <div className="border-2 border-dashed border-white/20 hover:border-[#d4af37] rounded-xl p-4 text-center cursor-pointer transition-colors bg-black/40 relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSingleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      {newImagePreview ? (
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                          <img
                            src={newImagePreview}
                            alt="Upload preview"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="py-8 space-y-2">
                          <Upload className="w-8 h-8 text-[#d4af37] mx-auto" />
                          <p className="text-xs font-bold text-white">Click or drag image here</p>
                          <p className="text-[11px] text-gray-400">PNG, JPG, JPEG, WEBP</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Or enter external Image URL
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com/photo.jpg"
                        value={newImageSrc}
                        onChange={(e) => {
                          setNewImageSrc(e.target.value);
                          setNewImagePreview(e.target.value);
                        }}
                        className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Metadata Fields */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                          Category / Page
                        </label>
                        <select
                          value={newImageCategory}
                          onChange={(e) =>
                            setNewImageCategory(e.target.value as GalleryItem["category"])
                          }
                          className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                        >
                          <option value="legends">Legends (Surinder Shinda &amp; Kaur Billo)</option>
                          <option value="shoots">Shoots &amp; Models</option>
                          <option value="portfolio">Solo Portfolio (Fashion/London)</option>
                          <option value="music">Music &amp; Posters</option>
                          <option value="bts">Behind The Scenes (BTS)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                          Sub-Tag / Section
                        </label>
                        <input
                          type="text"
                          value={newImageSubCategory}
                          onChange={(e) => setNewImageSubCategory(e.target.value)}
                          placeholder="e.g. surinder-shinda, models, fashion"
                          className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                        Title / Name
                      </label>
                      <input
                        type="text"
                        value={newImageTitle}
                        onChange={(e) => setNewImageTitle(e.target.value)}
                        placeholder="e.g. Ustad Surinder Shinda Ji with Mani Sandhu"
                        className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                        Caption / Description
                      </label>
                      <textarea
                        rows={2}
                        value={newImageCaption}
                        onChange={(e) => setNewImageCaption(e.target.value)}
                        placeholder="Optional details or context..."
                        className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-1">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        value={newImageTags}
                        onChange={(e) => setNewImageTags(e.target.value)}
                        placeholder="Mani Sandhu, Kaur Billo, Shoot"
                        className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isUploading}
                      className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                    >
                      {isUploading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Uploading &amp; Saving...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Save &amp; Publish To Website</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Gallery Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#0f1118] border border-white/10 hover:border-[#d4af37]/50 rounded-2xl overflow-hidden transition-all flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-4/5 w-full bg-black overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono text-[#d4af37] uppercase font-bold border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    {/* Quick action overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setEditingFilePreview(null);
                          setEditingFileDataUrl(null);
                          setEditingItem(item);
                        }}
                        className="p-2.5 rounded-full bg-white text-black hover:bg-[#d4af37] transition-colors"
                        title="Edit Info & Change Image"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
                            deleteImage(item.id);
                          }
                        }}
                        className="p-2.5 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors"
                        title="Delete Image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white truncate" title={item.title}>
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 truncate mt-0.5" title={item.description}>
                        {item.description || item.subCategory}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                      <span>#{item.id.slice(-6)}</span>
                      <button
                        onClick={() => {
                          setEditingFilePreview(null);
                          setEditingFileDataUrl(null);
                          setEditingItem(item);
                        }}
                        className="text-[#d4af37] hover:underline"
                      >
                        Edit / Change
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-16 bg-[#0f1118] border border-white/10 rounded-2xl">
                <ImageIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-white">No images match your filter</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Try changing category or search terms, or click &quot;Add Image&quot; above.
                </p>
              </div>
            )}

            {/* Reset All to Defaults Option */}
            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-300 block">
                  Original Default Photos
                </span>
                <span className="text-[11px] text-gray-500">
                  Reset gallery back to the original 200+ mani1 &amp; mani2 photos if needed.
                </span>
              </div>
              <button
                onClick={() => {
                  if (confirm("Reset all images to the original website default? Any custom uploaded images will be removed.")) {
                    resetImagesToDefault();
                    alert("Gallery reset to original defaults!");
                  }
                }}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-gray-400 hover:text-rose-300 text-xs transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: BULK MULTI-IMAGE UPLOAD */}
        {activeTab === "bulk" && (
          <div className="bg-[#0f1118] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                Mass Image Upload
              </span>
              <h2 className="font-serif font-black text-2xl text-white mt-1">
                Bulk Upload Multiple Photos
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                You can select 10, 20, 50 or more photos at once from your phone or computer. All photos will automatically appear on the chosen website page!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category for Batch */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Select Target Website Page / Category
                </label>
                <select
                  value={bulkCategory}
                  onChange={(e) =>
                    setBulkCategory(e.target.value as GalleryItem["category"])
                  }
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="legends">Legends &amp; Mentorship (/legends - Surinder Shinda &amp; Kaur Billo)</option>
                  <option value="shoots">Music Video Shoots &amp; Models (/shoots)</option>
                  <option value="portfolio">Solo Fashion &amp; London Tour (/portfolio)</option>
                  <option value="music">Music &amp; Official Posters (/music)</option>
                  <option value="bts">Behind The Scenes (/bts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Sub-Category Tag (Optional)
                </label>
                <input
                  type="text"
                  value={bulkSubCategory}
                  onChange={(e) => setBulkSubCategory(e.target.value)}
                  placeholder="e.g. models, fashion, punjabi-shoot"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-[#d4af37]/40 hover:border-[#d4af37] rounded-2xl p-8 text-center bg-black/40 relative cursor-pointer transition-all">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleBulkFilesChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <Layers className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
              <h3 className="font-serif font-black text-lg text-white">
                Choose Multiple Images (Click or Drag Files)
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Select as many photos as you want at the same time
              </p>
              {bulkFiles.length > 0 && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#fef3c7] text-xs font-mono font-bold">
                  <span>{bulkFiles.length} files selected ready to upload</span>
                </div>
              )}
            </div>

            {/* Upload Progress Bar */}
            {bulkProgress !== null && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                  <span>Uploading files...</span>
                  <span>{bulkProgress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#f59e0b] transition-all duration-200"
                    style={{ width: `${bulkProgress}%` }}
                  />
                </div>
              </div>
            )}

            {bulkSuccessMsg && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>{bulkSuccessMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleBulkUploadSubmit}
              disabled={bulkFiles.length === 0 || bulkProgress !== null}
              className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg ${
                bulkFiles.length > 0 && bulkProgress === null
                  ? "bg-gradient-to-r from-[#d4af37] to-[#f59e0b] text-black shadow-[#d4af37]/20 hover:scale-[1.01]"
                  : "bg-white/10 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>
                Upload All {bulkFiles.length > 0 ? `${bulkFiles.length} Selected Images` : ""} To {bulkCategory.toUpperCase()}
              </span>
            </button>
          </div>
        )}

        {/* TAB 3: TEXT & BIO EDITOR */}
        {activeTab === "text" && (
          <form
            onSubmit={handleProfileSave}
            className="bg-[#0f1118] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  Live Website Content
                </span>
                <h2 className="font-serif font-black text-2xl text-white mt-1">
                  Edit Website Text, Bio &amp; Phone Numbers
                </h2>
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#b38f2a] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#d4af37]/20"
              >
                <Save className="w-4 h-4" />
                <span>Save Text Changes</span>
              </button>
            </div>

            {profileSaved && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Website bio, contact numbers &amp; text updated successfully!</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name & Punjabi Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Artist Full Name (English)
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Artist Name (Punjabi Script)
                </label>
                <input
                  type="text"
                  value={profileForm.punjabiName}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, punjabiName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Tagline & Subtagline */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Main Tagline / Title
                </label>
                <input
                  type="text"
                  value={profileForm.tagline}
                  onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Location / Studio
                </label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Primary Contact Number
                </label>
                <input
                  type="text"
                  value={profileForm.phones?.[0] || ""}
                  onChange={(e) => {
                    const updatedPhones = [...(profileForm.phones || [])];
                    updatedPhones[0] = e.target.value;
                    setProfileForm({ ...profileForm, phones: updatedPhones });
                  }}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  Secondary Contact Number
                </label>
                <input
                  type="text"
                  value={profileForm.phones?.[1] || ""}
                  onChange={(e) => {
                    const updatedPhones = [...(profileForm.phones || [])];
                    updatedPhones[1] = e.target.value;
                    setProfileForm({ ...profileForm, phones: updatedPhones });
                  }}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  YouTube Channel URL
                </label>
                <input
                  type="text"
                  value={profileForm.socials?.youtube || ""}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      socials: { ...profileForm.socials, youtube: e.target.value },
                    })
                  }
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                  WhatsApp Contact Link
                </label>
                <input
                  type="text"
                  value={profileForm.whatsapp || ""}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, whatsapp: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div>
              <label className="block text-xs font-mono uppercase text-gray-300 tracking-wider mb-2">
                Main Biography Paragraph (About Section)
              </label>
              <textarea
                rows={3}
                value={profileForm.bioShort || ""}
                onChange={(e) => setProfileForm({ ...profileForm, bioShort: e.target.value })}
                className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  if (confirm("Reset text back to original default?")) {
                    resetProfileToDefault();
                    setProfileForm(profile);
                  }
                }}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Text to Defaults</span>
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#b38f2a] hover:to-[#d97706] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Save All Text Changes</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Edit Image Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <form
            onSubmit={handleEditSave}
            className="w-full max-w-lg bg-[#0f1118] border border-[#d4af37]/40 rounded-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-serif font-black text-base text-white">Edit Image Details</h3>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Current Image & Change Image Option */}
            <div className="space-y-2.5">
              <label className="block text-[11px] font-mono text-gray-300 uppercase">
                Current Photo (Click photo or button to change)
              </label>
              <div className="w-full h-44 rounded-xl overflow-hidden bg-black border border-white/10 relative group">
                <img
                  src={editingFilePreview || editingItem.src}
                  alt={editingItem.title}
                  className="w-full h-full object-contain"
                />
                <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-bold gap-1">
                  <Upload className="w-6 h-6 text-[#d4af37]" />
                  <span>Click to Change / Replace Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Direct File Picker Button */}
              <div className="flex flex-wrap items-center gap-2">
                <label className="cursor-pointer px-3.5 py-1.5 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/50 text-[#fef3c7] text-xs font-bold flex items-center gap-2 transition-all">
                  <Upload className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{editingFilePreview ? "Photo Changed! Click to re-pick" : "Change / Replace Image"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditFileChange}
                    className="hidden"
                  />
                </label>
                {editingFilePreview && (
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> New image ready to save!
                  </span>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-mono text-gray-400 mb-1">
                  Or enter new image URL to replace
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/new-photo.jpg"
                  value={editingItem.src}
                  onChange={(e) => {
                    setEditingFilePreview(e.target.value);
                    setEditingItem({ ...editingItem, src: e.target.value });
                  }}
                  className="w-full px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                Title
              </label>
              <input
                type="text"
                value={editingItem.title}
                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                Category
              </label>
              <select
                value={editingItem.category}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    category: e.target.value as GalleryItem["category"],
                  })
                }
                className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="legends">Legends</option>
                <option value="shoots">Shoots</option>
                <option value="portfolio">Portfolio</option>
                <option value="music">Music</option>
                <option value="bts">BTS</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                Description / Details
              </label>
              <textarea
                rows={2}
                value={editingItem.description || ""}
                onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#b38f2a] text-black font-bold text-xs uppercase"
              >
                Save Updates
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
