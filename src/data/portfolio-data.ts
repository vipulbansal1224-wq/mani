export interface VideoItem {
  id: string;
  title: string;
  category: "music" | "interview" | "comedy" | "vlog";
  categoryLabel: string;
  youtubeUrl: string;
  youtubeId?: string;
  thumbnail: string;
  duration: string;
  views: string;
  description: string;
  featured?: boolean;
}

export interface WorkCategoryItem {
  id: string;
  title: string;
  role: string;
  type: string;
  description: string;
  bannerUrl: string;
  highlights: string[];
  link?: string;
  linkText?: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "youtube-cover" | "profile" | "shoots" | "vlogs";
  imageUrl: string;
  caption: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mani Sandhu",
    punjabiName: "ਮਨੀ ਸੰਧੂ",
    tagline: "Singer • Producer • Model • Director • Founder of Mani Sandhu Media House",
    bioShort:
      "Punjabi singer, producer, model, and director based in Ludhiana and UK. Singer of 'Mirza' (Ustad Surinder Shinda Ji Tribute), 'Shiv Shiv Shambhu', 'Nakhrey Da Mull', and 'Payi Chall Dhakk'. Producer at Mani Sandhu Records with Singer Kaur Billo ('Ki Dam Da Bharosa Yaar', 'Guddiyan Patole').",
    bioLong: [
      "Mani Sandhu is a multifaceted Punjabi singer, producer, model, and the creative force behind Mani Sandhu Media House and Mani Sandhu Records, operating between Ludhiana, Punjab and the United Kingdom.",
      "Blessed with direct mentorship and creative brotherhood with Punjabi folk giants, he recorded in studio sessions and produced masterworks alongside the late legendary Ustad Surinder Shinda Ji ('Guddi Ishqe Di', 'Mirza' tribute) and revered vocalist Singer Kaur Billo ('Ki Dam Da Bharosa Yaar', 'Guddiyan Patole', 'Rusiya Kyu Ponahariyah').",
      "As a singer and producer, his catalogue features hit releases including 'Mirza' (Tribute to Ustad Surinder Shinda Ji on Spotify & YouTube), 'Shiv Shiv Shambhu', 'Guddiyan Patole', 'Ki Dam Da Bharosa Yaar', 'Payi Chall Dhakk', 'Nakhrey Da Mull', and 'Sanam Bewafa'.",
      "Through Mani Sandhu Media House and his YouTube channels (@ManiSandhuOfficial786 & @manisandhurecords), he produces high-concept music videos, comedy skits, and conducts premier media promotions for top industry artists."
    ],
    location: "Ludhiana, Punjab, India • UK",
    profileImage: "/images/portfolio/m2_064_portfolio_studio-fashion.jpeg",
    bannerImage: "/mani-sandhu-banner.jpg",
    officialEmail: "manisandhumediahouse@gmail.com",
    phones: ["9872999854", "9478839486"],
    whatsapp: "919872999854",
    socials: {
      youtube: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeRecords: "https://www.youtube.com/@manisandhurecords",
      instagram: "https://www.instagram.com/manisandhu_official?igsh=MW9oM3Foem02OTFhbQ==",
      twitter: "https://twitter.com/Manisandhu_",
      spotify: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
      jiosaavn: "https://www.youtube.com/@manisandhurecords",
      wynk: "https://open.wynk.in/HAr66OrnELb",
      whatsappUrl: "https://wa.me/919872999854?text=Hello%20Mani%20Sandhu,%20I%20want%20to%20connect%20for%20promotion%20/%20interview."
    },
    stats: [
      { label: "Record Label", value: "Mani Sandhu Records" },
      { label: "Featured Song", value: "Mirza (Tribute)" },
      { label: "YouTube Channel", value: "@manisandhurecords" },
      { label: "Roles", value: "Singer & Producer" },
      { label: "Location", value: "Ludhiana, PB" }
    ]
  },

  musicRelease: {
    title: "Mirza",
    subtitle: "Dedicated To Ustad Surinder Shinda Ji",
    artist: "Mani Sandhu",
    youtubeUrl: "https://youtu.be/yccf8_b0K_c",
    youtubeId: "yccf8_b0K_c",
    spotifyUrl: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
    wynkUrl: "https://open.wynk.in/HAr66OrnELb",
    description:
      "Official Punjabi release 'Mirza' by Mani Sandhu under Mani Sandhu Records — dedicated to the late legendary Shromani Gayak Ustad Surinder Shinda Ji. Music by Davinder Kainth, Producer Kaur Billo, Project by Honey Hardeep.",
    platforms: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
        icon: "Music"
      },
      {
        name: "YouTube Video",
        url: "https://youtu.be/yccf8_b0K_c",
        icon: "Video"
      },
      {
        name: "Wynk Music",
        url: "https://open.wynk.in/HAr66OrnELb",
        icon: "Headphones"
      }
    ]
  },

  workCategories: [
    {
      id: "music-singing",
      title: "Music & Original Songs",
      role: "Singer & Producer",
      type: "Mani Sandhu Records",
      description:
        "Releasing soulful Punjabi folk, devotional, and festive tracks under Mani Sandhu Records including 'Mirza' (Ustad Surinder Shinda Ji Tribute), 'Shiv Shiv Shambhu', 'Ki Dam Da Bharosa Yaar', and 'Guddiyan Patole'.",
      bannerUrl: "https://i.ytimg.com/vi/yccf8_b0K_c/maxresdefault.jpg",
      highlights: [
        "Featured Track: 'Mirza' streaming on Spotify & YouTube",
        "Hit Releases: 'Guddiyan Patole', 'Ki Dam Da Bharosa Yaar', 'Shiv Shiv Shambhu'",
        "Collaborating with Singer Kaur Billo & Music Director Davinder Kainth"
      ],
      link: "https://open.spotify.com/track/191LuVev3fckmIVgAOr77l?si=VTh_fLOPSDe7EragP3Mbbg&utm_source=copy-link",
      linkText: "Listen on Spotify"
    },
    {
      id: "media-promotions",
      title: "Media Promotion & Interviews",
      role: "Host & Media Promoter",
      type: "Media House Series",
      description:
        "Providing dedicated promotional coverage, artist spotlight sessions, and talk interviews for budding singers, actors, and local Punjabi brands across the channel and social platforms.",
      bannerUrl: "/mani-sandhu-profile.jpg",
      highlights: [
        "In-depth promotional interviews for emerging artists",
        "Social media campaign coverage on Instagram & YouTube",
        "Direct booking for promotions: 9872999854 / 9478839486"
      ],
      link: "https://www.youtube.com/@ManiSandhuOfficial786",
      linkText: "Watch Interviews"
    },
    {
      id: "comedy-skits",
      title: "Punjabi Comedy Skits & Acting",
      role: "Actor & Content Creator",
      type: "Digital Comedy Shorts",
      description:
        "Creating fun, situational Punjabi comedy sketches portraying relatable family interactions, wedding matchmakers, youth friendships, and everyday humor.",
      bannerUrl: "/mani-sandhu-banner.jpg",
      highlights: [
        "Popular reels & skits including 'Calm Down With Punjabi People'",
        "Relatable Punjabi village & town humor",
        "Shorts and Reels on Instagram (@manisandhu_official)"
      ],
      link: "https://youtu.be/byEnQhiQWlI",
      linkText: "Watch Comedy Reels"
    },
    {
      id: "vlogs-lifestyle",
      title: "Vlogs & Behind the Camera",
      role: "Vlogger & RJ/Host",
      type: "Creator Vlogs",
      description:
        "Sharing real-life moments, travel adventures, on-location video shoot diaries, and behind-the-scenes insights from Ludhiana, London, and creative sets.",
      bannerUrl: "/mani-sandhu-profile.jpg",
      highlights: [
        "Lifestyle vlogs, Punjabi Wedding Vlogs & travel journals",
        "On-location shoot updates and creator collaborations",
        "Direct audience interaction and shoutouts"
      ],
      link: "https://youtu.be/DPDs7Rso8_o",
      linkText: "Watch Vlogs"
    }
  ] as WorkCategoryItem[],

  videos: [
    {
      id: "vid-1",
      title: "Mirza | Dedicated To Ustad Surinder Shinda Ji | Mani Sandhu | 2024",
      category: "music",
      categoryLabel: "Featured Song • Mirza",
      youtubeUrl: "https://youtu.be/yccf8_b0K_c",
      youtubeId: "yccf8_b0K_c",
      thumbnail: "https://i.ytimg.com/vi/yccf8_b0K_c/maxresdefault.jpg",
      duration: "02:45",
      views: "102K+",
      description:
        "Mani Sandhu Records presents 'Mirza' — heartfelt tribute by Mani Sandhu to the late legendary Ustad Surinder Shinda Ji. Producer Kaur Billo, Music Davinder Kainth. Streaming on Spotify & YouTube.",
      featured: true
    },
    {
      id: "vid-2",
      title: "Guddiyan Patole | Kaur Billo | New Year 2025 Song | Mani Sandhu Records",
      category: "music",
      categoryLabel: "New Year 2025 Song",
      youtubeUrl: "https://youtu.be/vJXjt5Hynbg",
      youtubeId: "vJXjt5Hynbg",
      thumbnail: "https://i.ytimg.com/vi/vJXjt5Hynbg/maxresdefault.jpg",
      duration: "03:45",
      views: "103K+",
      description:
        "Mani Sandhu Records presents the upbeat New Year celebration single 'Guddiyan Patole' in the soulful voice of Kaur Billo. Music by Davinder Kainth, Directed by Honey Hardeep.",
      featured: true
    },
    {
      id: "vid-3",
      title: "Ki Dam Da Bharosa Yaar | Kaur Billo | Latest Punjabi Song 2024",
      category: "music",
      categoryLabel: "Punjabi Folk Song",
      youtubeUrl: "https://youtu.be/jffklZKGg_U",
      youtubeId: "jffklZKGg_U",
      thumbnail: "https://i.ytimg.com/vi/jffklZKGg_U/maxresdefault.jpg",
      duration: "03:44",
      views: "118K+",
      description:
        "Soulful Punjabi folk track 'Ki Dam Da Bharosa Yaar' by Kaur Billo under Mani Sandhu Records, starring Mani Sandhu, Simran Pathan & ensemble cast.",
      featured: true
    },
    {
      id: "vid-4",
      title: "Shiv Shiv Shambhu | Mani Sandhu | New Shiv Bhajan 2024",
      category: "music",
      categoryLabel: "Devotional Bhajan",
      youtubeUrl: "https://youtu.be/jrEQzNay_Ns",
      youtubeId: "jrEQzNay_Ns",
      thumbnail: "https://i.ytimg.com/vi/jrEQzNay_Ns/maxresdefault.jpg",
      duration: "02:56",
      views: "126K+",
      description:
        "Energetic devotional Shiva anthem 'Shiv Shiv Shambhu' sung by Mani Sandhu, produced by Kaur Billo under Mani Sandhu Records.",
      featured: true
    },
    {
      id: "vid-5",
      title: "Calm Down With Punjabi People | Mani Sandhu Comedy Reel",
      category: "comedy",
      categoryLabel: "Comedy & Reel",
      youtubeUrl: "https://youtu.be/byEnQhiQWlI",
      youtubeId: "byEnQhiQWlI",
      thumbnail: "https://i.ytimg.com/vi/byEnQhiQWlI/maxresdefault.jpg",
      duration: "Reel",
      views: "Trending",
      description:
        "Fun Punjabi cultural reel & situational comedy performance by Mani Sandhu Media House.",
      featured: false
    },
    {
      id: "vid-6",
      title: "Punjabi Family Wedding Vlog | Exploring Celebrations with Mani Sandhu",
      category: "vlog",
      categoryLabel: "Family & Travel Vlog",
      youtubeUrl: "https://youtu.be/DPDs7Rso8_o",
      youtubeId: "DPDs7Rso8_o",
      thumbnail: "https://i.ytimg.com/vi/DPDs7Rso8_o/maxresdefault.jpg",
      duration: "Vlog",
      views: "Featured",
      description:
        "Mani Sandhu shares lively Punjabi wedding festivities, behind-the-camera family moments, and audience connect.",
      featured: false
    }
  ] as VideoItem[],

  services: [
    {
      icon: "Music",
      title: "Singing & Music Projects",
      description:
        "Available as a singer, actor, and collaborator for independent Punjabi songs, music videos, and creative vocal tracks.",
      deliverables: ["Original Punjabi Singles", "Music Video Appearances", "Melodic & Emotional Tracks", "Song Releases"]
    },
    {
      icon: "Mic",
      title: "Media Promotions & Interviews",
      description:
        "Offering dedicated promotional interviews and social features for new songs, artists, models, and businesses across Punjab.",
      deliverables: ["YouTube Video Feature", "Instagram Collaboration", "Call for Interviews (9872999854)", "Quick Turnaround"]
    },
    {
      icon: "Video",
      title: "Acting & Comedy Skits",
      description:
        "Performing in comedic scripts, lifestyle short sketches, and dramatic digital video shorts.",
      deliverables: ["Character Acting", "Punjabi Dialogue Delivery", "Brand Video Integrations", "Shorts & Reels"]
    },
    {
      icon: "Sparkles",
      title: "RJ / Event Hosting & Vlogging",
      description:
        "Energetic hosting for stage events, artist meetups, live promotional sessions, and location vlogs.",
      deliverables: ["Event Emcee & Anchoring", "Live Interactions", "Behind-the-Scenes Coverage", "Ludhiana & Regional Reach"]
    }
  ] as ServiceItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Official YouTube Channel Cover Banner",
      category: "youtube-cover",
      imageUrl: "/mani-sandhu-banner.jpg",
      caption: "The official banner photo from Mani Sandhu Media House YouTube channel."
    },
    {
      id: "gal-2",
      title: "Mani Sandhu — Official Profile Photo",
      category: "profile",
      imageUrl: "/mani-sandhu-profile.jpg",
      caption: "The original profile avatar photo of Mani Sandhu from his official YouTube handle."
    },
    {
      id: "gal-3",
      title: "Mani Sandhu Media House Production",
      category: "shoots",
      imageUrl: "/mani-sandhu-banner.jpg",
      caption: "Mani Sandhu Media House visual presentation in Ludhiana, Punjab."
    },
    {
      id: "gal-4",
      title: "Mani Sandhu — Creator & Host",
      category: "vlogs",
      imageUrl: "/mani-sandhu-profile.jpg",
      caption: "Mani Sandhu hosting and creating digital content for his audience."
    }
  ] as GalleryItem[]
};
