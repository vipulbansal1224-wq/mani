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
    tagline: "Singer • Actor • Model • Vlogger • Media Promoter • RJ / Host",
    bioShort:
      "Independent Punjabi singer, actor, vlogger, and media promoter based in Ludhiana. Creator at Mani Sandhu Media House (@ManiSandhuOfficial786) and singer of 'Broken Heart'.",
    bioLong: [
      "Mani Sandhu is an independent Punjabi content creator, singer, actor, model, vlogger, and RJ/Host based out of Ludhiana, Punjab.",
      "As a musical artist, he released his Punjabi track 'Broken Heart' across major global streaming platforms including Spotify, JioSaavn, and Wynk Music.",
      "Through his YouTube platform 'Mani Sandhu Media House' (@ManiSandhuOfficial786), he produces Punjabi comedy skits, entertainment vlogs, and conducts media promotion interviews for artists, singers, and local talents across Punjab.",
      "Known for his energetic and friendly personality, Mani is actively available for music promotions, media interviews, brand collaborations, and acting appearances."
    ],
    location: "Ludhiana, Punjab, India",
    profileImage: "/mani-sandhu-profile.jpg",
    bannerImage: "/mani-sandhu-banner.jpg",
    officialEmail: "manisandhumediahouse@gmail.com",
    phones: ["9872999854", "9478839486"],
    whatsapp: "919872999854",
    socials: {
      youtube: "https://www.youtube.com/@ManiSandhuOfficial786",
      instagram: "https://www.instagram.com/manisandhu_official?igsh=MW9oM3Foem02OTFhbQ==",
      twitter: "https://twitter.com/Manisandhu_",
      spotify: "https://open.spotify.com/track/1YQCvArUgAu3rtTwkiyOtA?si=SwSD-UM4QYG9Hh0JYoUtpg",
      jiosaavn: "https://www.saavn.com/s/song/punjabi/broken-heart/broken-heart/HDcuWQZpYwA",
      wynk: "https://open.wynk.in/tQH04WxG7zb",
      whatsappUrl: "https://wa.me/919872999854?text=Hello%20Mani%20Sandhu,%20I%20want%20to%20connect%20for%20promotion%20/%20interview."
    },
    stats: [
      { label: "YouTube Channel", value: "@ManiSandhuOfficial786" },
      { label: "Channel Focus", value: "Media House" },
      { label: "Official Song", value: "Broken Heart" },
      { label: "Roles", value: "Singer & Creator" },
      { label: "Location", value: "Ludhiana, PB" }
    ]
  },

  musicRelease: {
    title: "Broken Heart",
    artist: "Mani Sandhu",
    description: "Official Punjabi single by Mani Sandhu, expressing deep emotional heartfelt melodies.",
    platforms: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/1YQCvArUgAu3rtTwkiyOtA?si=SwSD-UM4QYG9Hh0JYoUtpg",
        icon: "Music"
      },
      {
        name: "JioSaavn",
        url: "https://www.saavn.com/s/song/punjabi/broken-heart/broken-heart/HDcuWQZpYwA",
        icon: "Radio"
      },
      {
        name: "Wynk Music",
        url: "https://open.wynk.in/tQH04WxG7zb",
        icon: "Headphones"
      }
    ]
  },

  workCategories: [
    {
      id: "music-singing",
      title: "Music & Original Songs",
      role: "Singer & Lyricist",
      type: "Music Release",
      description:
        "Passionate about Punjabi music, Mani Sandhu released the single 'Broken Heart' which is available on Spotify, JioSaavn, and Wynk Music, with more independent releases in the pipeline.",
      bannerUrl: "/mani-sandhu-banner.jpg",
      highlights: [
        "Track: 'Broken Heart' streaming on Spotify & JioSaavn",
        "Deep romantic and emotional lyrical expressions",
        "Collaborating with Punjabi music composers and sound producers"
      ],
      link: "https://open.spotify.com/track/1YQCvArUgAu3rtTwkiyOtA",
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
        "Popular skits including 'Vichole Ne Khaade Chhitar'",
        "Relatable Punjabi village & town humor",
        "Shorts and Reels on Instagram (@manisandhu_official)"
      ],
      link: "https://www.youtube.com/@ManiSandhuOfficial786",
      linkText: "Watch Comedy Skits"
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
        "Lifestyle vlogs and travel journals",
        "On-location shoot updates and creator collaborations",
        "Direct audience interaction and shoutouts"
      ],
      link: "https://www.youtube.com/@ManiSandhuOfficial786",
      linkText: "Watch Vlogs"
    }
  ] as WorkCategoryItem[],

  videos: [
    {
      id: "vid-1",
      title: "Broken Heart - Official Punjabi Song by Mani Sandhu",
      category: "music",
      categoryLabel: "Official Song",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "broken-heart",
      thumbnail: "/mani-sandhu-banner.jpg",
      duration: "03:40",
      views: "Streaming",
      description:
        "Official emotional Punjabi single 'Broken Heart' by singer Mani Sandhu. Available on Spotify, JioSaavn & Wynk Music.",
      featured: true
    },
    {
      id: "vid-2",
      title: "Bhai Varinder Singh Nirman | Exclusive Talk & Interview Part-1 | Mani Sandhu",
      category: "interview",
      categoryLabel: "Artist Interview",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "nirman-talk",
      thumbnail: "/mani-sandhu-profile.jpg",
      duration: "24:18",
      views: "Popular",
      description:
        "Thoughtful and respectful discussion hosted by Mani Sandhu at his Ludhiana setup with Bhai Varinder Singh Nirman.",
      featured: true
    },
    {
      id: "vid-3",
      title: "Vichole Ne Khaade Chhitar | Superhit Comedy Punjabi Skit | Mani Sandhu Media House",
      category: "comedy",
      categoryLabel: "Punjabi Comedy",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "vichole-skit",
      thumbnail: "/mani-sandhu-banner.jpg",
      duration: "08:14",
      views: "Trending",
      description:
        "Hilarious situational comedy sketch about a traditional Punjabi marriage matchmaker caught in unexpected family chaos.",
      featured: true
    },
    {
      id: "vid-4",
      title: "Mujhe Pata Mai Haar Gya Hu | Heart Touching Drama Short | Mani Sandhu",
      category: "comedy",
      categoryLabel: "Acting Short",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "haar-gya",
      thumbnail: "/mani-sandhu-profile.jpg",
      duration: "03:52",
      views: "Viral",
      description:
        "An emotional short acting performance expressing life's hurdles, resilience, and personal determination.",
      featured: false
    },
    {
      id: "vid-5",
      title: "London Travel & Lifestyle VLOG | Exploring UK with Mani Sandhu",
      category: "vlog",
      categoryLabel: "Travel Vlog",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "london-vlog",
      thumbnail: "/mani-sandhu-banner.jpg",
      duration: "14:20",
      views: "Vlog",
      description:
        "Mani Sandhu shares personal travel vlogs exploring iconic spots in London and connecting with viewers abroad.",
      featured: false
    },
    {
      id: "vid-6",
      title: "Media Promotions & Artist Spotlights at Mani Sandhu Media House Ludhiana",
      category: "interview",
      categoryLabel: "Media Promotion",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "promotion-spotlight",
      thumbnail: "/mani-sandhu-profile.jpg",
      duration: "12:30",
      views: "Spotlight",
      description:
        "Behind the scenes and promotional interviews supporting upcoming Punjabi singers and content creators.",
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
