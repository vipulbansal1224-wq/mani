export interface VideoItem {
  id: string;
  title: string;
  category: "tv-bts" | "podcast" | "comedy" | "vlog";
  categoryLabel: string;
  youtubeUrl: string;
  youtubeId?: string;
  thumbnail: string;
  duration: string;
  views: string;
  description: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  network: string;
  role: string;
  type: string;
  year: string;
  description: string;
  coStars?: string[];
  bannerUrl: string;
  highlights: string[];
  youtubeLink?: string;
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
  category: "on-set" | "studio" | "travel" | "events";
  imageUrl: string;
  caption: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  association: string;
  avatar: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mani Sandhu",
    punjabiName: "ਮਨੀ ਸੰਧੂ",
    tagline: "Actor • Television Artist • Anchor & Host • Media Producer",
    bioShort:
      "A versatile actor and media personality based in Ludhiana, Punjab. Known for Star Plus 'Sayonee', Colors TV 'Tu Juliet Jatt Di', viral skits, and in-depth celebrity podcasts at Mani Sandhu Media House.",
    bioLong: [
      "Mani Sandhu is a multifaceted talent in the Indian television and Punjabi media landscape. With a passionate artistic drive rooted in Ludhiana, Punjab, Mani has carved a distinct niche spanning mainstream national television serials, engaging celebrity & spiritual talk shows, viral digital sketches, and end-to-end media production.",
      "His acting portfolio features roles in renowned television projects including Star Plus's 'Sayonee' (alongside stars like Rashami Desai and Jahnvi Soni) and Colors TV's 'Tu Juliet Jatt Di'. On camera, he brings effortless charm, expressive screen presence, and natural dialogue delivery.",
      "Beyond acting, Mani is the visionary founder of 'Mani Sandhu Media House' in Ludhiana—a creative hub producing high-impact video podcasts, spiritual conversations, musical promotions, and entertainment series that resonate with audiences worldwide on YouTube (@ManiSandhuOfficial786) and social platforms."
    ],
    location: "Ludhiana, Punjab, India",
    operationalHubs: ["Ludhiana (Punjab)", "Mumbai (Film City)", "London (International Shoots)"],
    officialEmail: "manisandhumediahouse@gmail.com",
    phones: ["+91 98729 99854", "+91 94788 39486"],
    whatsapp: "+919872999854",
    socials: {
      youtube: "https://www.youtube.com/@ManiSandhuOfficial786",
      instagram: "https://www.instagram.com/manisandhu_official",
      facebook: "https://www.facebook.com/ManiSandhuOfficial",
      whatsappUrl: "https://wa.me/919872999854?text=Hello%20Mani%20Sandhu,%20I%20would%20like%20to%20discuss%20a%20collaboration%20/%20booking."
    },
    stats: [
      { label: "YouTube Channel", value: "@ManiSandhuOfficial786" },
      { label: "Total Views", value: "500K+" },
      { label: "Episodes & Videos", value: "120+" },
      { label: "National TV Shows", value: "Star Plus & Colors" },
      { label: "Media Studio", value: "Ludhiana, PB" }
    ]
  },

  projects: [
    {
      id: "sayonee-starplus",
      title: "Sayonee",
      network: "Star Plus",
      role: "Cast Member & On-Set BTS Feature",
      type: "Television Serial",
      year: "Television Project",
      description:
        "High-voltage romantic drama broadcast on national television (Star Plus). Mani Sandhu was actively involved on-set alongside prominent industry stars including Bigg Boss fame Rashami Desai, Jahnvi Soni, and a distinguished production crew.",
      coStars: ["Rashami Desai", "Jahnvi Soni", "Ensemble Cast"],
      bannerUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "National television telecast on Star Plus",
        "Behind-the-scenes viral updates and fan engagements",
        "High-drama performance segments and ensemble interactions"
      ],
      youtubeLink: "https://www.youtube.com/@ManiSandhuOfficial786"
    },
    {
      id: "tu-juliet-jatt-di",
      title: "Tu Juliet Jatt Di",
      network: "Colors TV",
      role: "Key Role & BTS Creator",
      type: "Television Serial",
      year: "Television Project",
      description:
        "A vibrant Punjabi romantic-comedy television serial on Colors TV capturing the lively heart and culture of Punjab. Mani Sandhu brought energetic screen presence and documented exclusive on-set moments with lead stars Nawab and Heer.",
      coStars: ["Nawab", "Heer", "Colors TV Cast"],
      bannerUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Colors TV regional broadcast and digital streaming",
        "Exclusive on-set shoots in Punjab locations",
        "Energetic character dynamics and comedic timing"
      ],
      youtubeLink: "https://www.youtube.com/@ManiSandhuOfficial786"
    },
    {
      id: "ms-media-house-studio",
      title: "Mani Sandhu Media House Spotlight",
      network: "YouTube Original & Production",
      role: "Executive Producer & Host",
      type: "Talk Show / Podcast Series",
      year: "Ongoing",
      description:
        "Flagship interview series produced at Mani Sandhu Media House Studio in Ludhiana. Features in-depth dialogues with spiritual leaders, Punjabi folk singers, emerging talents, and social visionaries.",
      coStars: ["Bhai Varinder Singh Nirman", "Regional Music Artists"],
      bannerUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Over 50+ in-studio guest interviews filmed in 4K",
        "Spiritual and thought-provoking philosophical sessions",
        "Platform for emerging Punjabi artists and musicians"
      ],
      youtubeLink: "https://www.youtube.com/@ManiSandhuOfficial786"
    },
    {
      id: "punjabi-comedy-skits",
      title: "Viral Comedy & Lifestyle Vignettes",
      network: "YouTube & Socials",
      role: "Lead Actor, Writer & Director",
      type: "Digital Short Series",
      year: "Continuous",
      description:
        "Relatable, humorous, and heartfelt Punjabi skits highlighting marriage bureaus, family encounters, youth struggles, and everyday humor that clock massive engagement across social feeds.",
      coStars: ["Local Punjabi Comedy Troupe"],
      bannerUrl: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Skits like 'Vichole Ne Khaade Chhitar' & 'Mujhe Pata Mai Haar Gya Hu'",
        "High organic social sharing and audience resonance",
        "Blends genuine Punjabi humor with real social observations"
      ],
      youtubeLink: "https://www.youtube.com/@ManiSandhuOfficial786"
    }
  ] as ProjectItem[],

  videos: [
    {
      id: "vid-1",
      title: "Sayonee StarPlus Tv serial | Rashmi Desai Big Boss Fame | Jahnvi | Mani Sandhu #bts",
      category: "tv-bts",
      categoryLabel: "TV Serial BTS",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "sayonee-bts",
      thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
      duration: "04:35",
      views: "150K+",
      description:
        "Exclusive behind-the-scenes shoot of Star Plus serial 'Sayonee' featuring Rashami Desai and Jahnvi Soni with actor Mani Sandhu on location.",
      featured: true
    },
    {
      id: "vid-2",
      title: "Tu Juliet Jatt Di New Tv Serial BTS with Nawab & Heer on Set Location | Colors Tv",
      category: "tv-bts",
      categoryLabel: "Colors TV BTS",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "juliet-bts",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      duration: "06:12",
      views: "120K+",
      description:
        "Fun-filled, energetic on-set shoot of Colors TV Punjabi show 'Tu Juliet Jatt Di' featuring Nawab, Heer and Mani Sandhu.",
      featured: true
    },
    {
      id: "vid-3",
      title: "Bhai Varinder Singh Nirman | Exclusive Spiritual Talk Part-1 | Mani Sandhu #PodcastInterview",
      category: "podcast",
      categoryLabel: "Spiritual Talk",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "nirman-podcast-1",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
      duration: "24:18",
      views: "85K+",
      description:
        "Inspiring and meditative spiritual dialogue hosted by Mani Sandhu at his Ludhiana Studio with revered Bhai Varinder Singh Nirman.",
      featured: true
    },
    {
      id: "vid-4",
      title: "Bhai Varinder Singh Nirman | Life Lessons & Spiritual Wisdom Part-2 | Mani Sandhu",
      category: "podcast",
      categoryLabel: "Spiritual Talk",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "nirman-podcast-2",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      duration: "19:45",
      views: "64K+",
      description:
        "The continuation of the soulful podcast interview exploring Sikh philosophy, mindfulness, and youth guidance.",
      featured: false
    },
    {
      id: "vid-5",
      title: "Vichole Ne Khaade Chhitar | Superhit Comedy Punjabi Skit | Mani Sandhu Media House",
      category: "comedy",
      categoryLabel: "Punjabi Comedy",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "vichole-skit",
      thumbnail: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      duration: "08:14",
      views: "210K+",
      description:
        "Hilarious comedy sketch about a traditional Punjabi marriage matchmaker (Vichola) caught in crazy family drama.",
      featured: true
    },
    {
      id: "vid-6",
      title: "Mujhe Pata Mai Haar Gya Hu | Emotional Heart-Touching Drama Short",
      category: "comedy",
      categoryLabel: "Emotional Drama",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "haar-gya-short",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      duration: "03:52",
      views: "95K+",
      description:
        "A compelling monologue performance exploring heartbreak, determination, and resilience.",
      featured: false
    },
    {
      id: "vid-7",
      title: "London Diaries VLOG: UK Travel, West End & British Punjabi Culture",
      category: "vlog",
      categoryLabel: "Travel Vlog",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "london-vlog",
      thumbnail: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      duration: "14:20",
      views: "72K+",
      description:
        "Mani Sandhu takes fans along through London, exploring iconic sights, Punjabi diaspora, and overseas shoots.",
      featured: false
    },
    {
      id: "vid-8",
      title: "Inside Mani Sandhu Media House Studio: Ludhiana Production Setup Tour",
      category: "vlog",
      categoryLabel: "Studio Tour",
      youtubeUrl: "https://www.youtube.com/@ManiSandhuOfficial786",
      youtubeId: "studio-tour",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      duration: "11:05",
      views: "58K+",
      description:
        "A full walkthrough of the soundstage, multi-camera lighting, and podcast equipment at the Ludhiana headquarters.",
      featured: false
    }
  ] as VideoItem[],

  services: [
    {
      icon: "Film",
      title: "Television & Film Acting",
      description:
        "Professional on-camera performance for TV serials, web series, feature films, and commercial campaigns with natural dialogue delivery in Punjabi and Hindi.",
      deliverables: ["Main/Supporting Cast Roles", "Character Auditions", "Emotional & Comedic Range", "On-Set Punctuality"]
    },
    {
      icon: "Mic",
      title: "Show Host & Celebrity Podcasting",
      description:
        "Engaging, charismatic anchoring for video podcasts, spiritual talk shows, red carpet awards, and high-profile stage events.",
      deliverables: ["Spiritual & Cultural Dialogues", "Artist Promotional Interviews", "Live Stage Emcee", "Script Drafting"]
    },
    {
      icon: "Video",
      title: "Mani Sandhu Media House Productions",
      description:
        "Full-fledged production services based in Ludhiana, Punjab. Equipped with 4K recording, lighting, audio mastering, and creative direction.",
      deliverables: ["4K Multi-Camera Studio", "Podcast Production", "Music Video Direction", "Commercial Video Editing"]
    },
    {
      icon: "Sparkles",
      title: "Artist PR & Brand Endorsements",
      description:
        "Strategic digital exposure across YouTube (@ManiSandhuOfficial786) and Instagram for singers, businesses, and fashion labels.",
      deliverables: ["YouTube Integration", "Instagram Reels Collabs", "Press & Media Coverage", "Ludhiana Regional Outreach"]
    }
  ] as ServiceItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Star Plus 'Sayonee' Shooting Stills",
      category: "on-set",
      imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=900&q=80",
      caption: "On set with Rashami Desai & Jahnvi Soni during the shoot of Sayonee on Star Plus."
    },
    {
      id: "gal-2",
      title: "Colors TV 'Tu Juliet Jatt Di' Sets",
      category: "on-set",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
      caption: "Behind the camera moments with Nawab & Heer on location in Punjab."
    },
    {
      id: "gal-3",
      title: "Mani Sandhu Media House Podcast Studio",
      category: "studio",
      imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
      caption: "The flagship recording room in Ludhiana designed for 4K video podcasts and artist chats."
    },
    {
      id: "gal-4",
      title: "London Exploration & UK Tour",
      category: "travel",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
      caption: "Filming travel chronicles and international vlogs across iconic London landmarks."
    },
    {
      id: "gal-5",
      title: "Spiritual Talk with Bhai Varinder Singh Nirman",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
      caption: "Recording soulful reflections and philosophical answers at the Media House studio."
    },
    {
      id: "gal-6",
      title: "Red Carpet & Regional Media Awards",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
      caption: "Hosting and representing Punjabi talent on distinguished cultural stages."
    }
  ] as GalleryItem[],

  testimonials: [
    {
      quote:
        "Mani brings an effortless vitality and professionalism to every set. His dedication during the Sayonee shoot was inspiring, always ready with a smile and sharp focus.",
      name: "Star Plus Production Associate",
      role: "Creative Director",
      association: "Television Network Colleague",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote:
        "Mani Sandhu Media House studio in Ludhiana is top class. Mani's interview style is deeply respectful, thoughtful, and makes the guest feel instantly comfortable.",
      name: "Bhai Varinder Singh Nirman",
      role: "Spiritual Orator & Scholar",
      association: "Featured Podcast Guest",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote:
        "Working on 'Tu Juliet Jatt Di' BTS with Mani was an absolute riot! His energy on camera and ability to capture the best spontaneous moments is unmatched.",
      name: "Cast & Crew Team",
      role: "Lead Artists & Crew",
      association: "Colors TV Project",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ] as TestimonialItem[]
};
