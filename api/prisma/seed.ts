import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ==========================================================================
  // AI TOOLS
  // ==========================================================================
  console.log("  → Seeding AI tools...");

  const aiTools = [
    {
      id: "midjourney",
      name: "Midjourney",
      icon: "🎨",
      category: "image",
      description: "AI image generation via Discord",
      websiteUrl: "https://midjourney.com",
    },
    {
      id: "dalle3",
      name: "DALL-E 3",
      icon: "🖼️",
      category: "image",
      description: "OpenAI's latest image generation model",
      websiteUrl: "https://openai.com/dall-e-3",
    },
    {
      id: "stable-diffusion",
      name: "Stable Diffusion",
      icon: "🌀",
      category: "image",
      description: "Open-source image generation",
      websiteUrl: "https://stability.ai",
    },
    {
      id: "firefly",
      name: "Adobe Firefly",
      icon: "🔥",
      category: "image",
      description: "Adobe's generative AI",
      websiteUrl: "https://firefly.adobe.com",
    },
    {
      id: "sora",
      name: "OpenAI Sora",
      icon: "🎬",
      category: "video",
      description: "Text-to-video generation",
      websiteUrl: "https://openai.com/sora",
    },
    {
      id: "runway",
      name: "Runway",
      icon: "✂️",
      category: "video",
      description: "AI video editing and generation",
      websiteUrl: "https://runwayml.com",
    },
    {
      id: "pika",
      name: "Pika",
      icon: "🎥",
      category: "video",
      description: "AI video generation platform",
      websiteUrl: "https://pika.art",
    },
    {
      id: "topaz-video",
      name: "Topaz Video AI",
      icon: "💎",
      category: "video",
      description: "AI video upscaling and enhancement",
      websiteUrl: "https://topazlabs.com",
    },
    {
      id: "suno",
      name: "Suno",
      icon: "🎵",
      category: "audio",
      description: "AI music generation",
      websiteUrl: "https://suno.ai",
    },
    {
      id: "udio",
      name: "Udio",
      icon: "🎶",
      category: "audio",
      description: "AI music creation platform",
      websiteUrl: "https://udio.com",
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      icon: "🗣️",
      category: "audio",
      description: "AI voice synthesis and cloning",
      websiteUrl: "https://elevenlabs.io",
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      icon: "💬",
      category: "text",
      description: "OpenAI's conversational AI",
      websiteUrl: "https://chat.openai.com",
    },
    {
      id: "claude",
      name: "Claude",
      icon: "🤖",
      category: "text",
      description: "Anthropic's AI assistant",
      websiteUrl: "https://claude.ai",
    },
  ];

  for (const tool of aiTools) {
    await prisma.aiTool.upsert({
      where: { id: tool.id },
      update: tool,
      create: tool,
    });
  }

  // ==========================================================================
  // DISCUSSION CHANNELS
  // ==========================================================================
  console.log("  → Seeding discussion channels...");

  const channels = [
    {
      id: "announcements",
      name: "Announcements",
      description: "Platform news and updates from the Meat-Machine team",
      icon: "📢",
      sortOrder: 0,
    },
    {
      id: "tool-talk",
      name: "Tool Talk",
      description:
        "Discuss AI models and tools like Midjourney, Suno, DALL-E, and more",
      icon: "🛠️",
      sortOrder: 1,
    },
    {
      id: "prompt-craft",
      name: "Prompt Craft",
      description: "Share prompting techniques, tips, and best practices",
      icon: "✨",
      sortOrder: 2,
    },
    {
      id: "critique-corner",
      name: "Critique Corner",
      description: "Get constructive feedback on your AI creations",
      icon: "🎯",
      sortOrder: 3,
    },
    {
      id: "ai-news",
      name: "AI News",
      description: "Latest updates and breakthroughs from the AI world",
      icon: "📰",
      sortOrder: 4,
    },
    {
      id: "showcase",
      name: "Showcase",
      description: "Show off your best work and get inspired by others",
      icon: "🏆",
      sortOrder: 5,
    },
    {
      id: "help-support",
      name: "Help & Support",
      description: "Get help with the platform or AI tools",
      icon: "❓",
      sortOrder: 6,
    },
  ];

  for (const channel of channels) {
    await prisma.channel.upsert({
      where: { id: channel.id },
      update: channel,
      create: channel,
    });
  }

  // ==========================================================================
  // COMMUNITY ROOMS
  // ==========================================================================
  console.log("  → Seeding community rooms...");

  const rooms = [
    {
      id: "prompt-crafting",
      name: "#prompt-crafting",
      description:
        "Master the art of prompting. Share techniques for Midjourney, DALL-E, and more.",
      icon: "✨",
      gradient: "from-purple-500/20 to-pink-500/20",
      rules: [
        "Share your prompts with context",
        "Give credit when using others' techniques",
        "Be constructive in feedback",
      ],
    },
    {
      id: "ai-filmmaking",
      name: "#ai-filmmaking",
      description:
        "Create stunning videos with AI. Discuss Sora, Runway, Pika, and video workflows.",
      icon: "🎬",
      gradient: "from-blue-500/20 to-cyan-500/20",
      rules: [
        "Share your process, not just results",
        "Respect copyright and licensing",
        "Help newcomers learn",
      ],
    },
    {
      id: "showcase",
      name: "#showcase",
      description:
        "Share your best AI-generated creations and get inspired by the community.",
      icon: "🏆",
      gradient: "from-yellow-500/20 to-orange-500/20",
      rules: [
        "Only share your own work",
        "Include the tools/prompts used",
        "Be supportive of all skill levels",
      ],
    },
    {
      id: "beginners-lounge",
      name: "#beginners-lounge",
      description:
        "New to AI art? Start here! A welcoming space for questions and learning.",
      icon: "🌱",
      gradient: "from-green-500/20 to-emerald-500/20",
      rules: [
        "No question is too basic",
        "Be patient and helpful",
        "Share beginner-friendly resources",
      ],
    },
    {
      id: "ai-music-production",
      name: "#ai-music-production",
      description:
        "Create music with Suno, Udio, and other AI tools. Share tracks and techniques.",
      icon: "🎵",
      gradient: "from-pink-500/20 to-rose-500/20",
      rules: [
        "Share your prompts and settings",
        "Discuss mixing and post-processing",
        "Respect music licensing",
      ],
    },
    {
      id: "3d-modeling",
      name: "#3d-modeling",
      description:
        "AI-assisted 3D creation. Discuss tools, workflows, and share your models.",
      icon: "🎲",
      gradient: "from-indigo-500/20 to-violet-500/20",
      rules: [
        "Share file formats and compatibility",
        "Discuss rendering techniques",
        "Help with troubleshooting",
      ],
    },
    {
      id: "tech-talk",
      name: "#tech-talk",
      description:
        "Deep dive into AI technology. Discuss models, training, and technical topics.",
      icon: "⚙️",
      gradient: "from-slate-500/20 to-gray-500/20",
      rules: [
        "Keep discussions technical",
        "Cite sources when possible",
        "Explain jargon for newcomers",
      ],
    },
    {
      id: "ethics-and-society",
      name: "#ethics-and-society",
      description:
        "Thoughtful discussions about AI ethics, copyright, and societal impact.",
      icon: "⚖️",
      gradient: "from-amber-500/20 to-yellow-500/20",
      rules: [
        "Respect diverse viewpoints",
        "Keep discussions civil",
        "Focus on constructive dialogue",
      ],
    },
    {
      id: "generative-fiction",
      name: "#generative-fiction",
      description:
        "AI-assisted storytelling. Share your narratives, scripts, and creative writing.",
      icon: "📖",
      gradient: "from-teal-500/20 to-cyan-500/20",
      rules: [
        "Mark mature content appropriately",
        "Give context for your pieces",
        "Provide constructive feedback",
      ],
    },
  ];

  for (const room of rooms) {
    await prisma.communityRoom.upsert({
      where: { id: room.id },
      update: room,
      create: room,
    });
  }

  // ==========================================================================
  // TAGS
  // ==========================================================================
  console.log("  → Seeding popular tags...");

  const tags = [
    // Style tags
    { id: "cyberpunk", name: "#cyberpunk" },
    { id: "solarpunk", name: "#solarpunk" },
    { id: "fantasy", name: "#fantasy" },
    { id: "scifi", name: "#sci-fi" },
    { id: "abstract", name: "#abstract" },
    { id: "minimalist", name: "#minimalist" },
    { id: "surreal", name: "#surreal" },
    { id: "retro", name: "#retro" },
    { id: "futuristic", name: "#futuristic" },
    { id: "vintage", name: "#vintage" },

    // Quality tags
    { id: "photorealistic", name: "photorealistic" },
    { id: "8k", name: "8K" },
    { id: "4k", name: "4K" },
    { id: "cinematic", name: "cinematic" },
    { id: "hdr", name: "HDR" },

    // Medium tags
    { id: "watercolor", name: "watercolor" },
    { id: "oil-painting", name: "oil painting" },
    { id: "3d-render", name: "3D render" },
    { id: "digital-art", name: "digital art" },
    { id: "pixel-art", name: "pixel art" },
    { id: "anime", name: "anime" },
    { id: "80s-anime", name: "80s anime style" },

    // Subject tags
    { id: "landscape", name: "#landscape" },
    { id: "portrait", name: "#portrait" },
    { id: "architecture", name: "#architecture" },
    { id: "nature", name: "#nature" },
    { id: "space", name: "#space" },
    { id: "underwater", name: "#underwater" },

    // Audio/music tags
    { id: "lofi", name: "lofi beats" },
    { id: "electronic", name: "electronic" },
    { id: "ambient", name: "ambient" },
    { id: "cinematic-music", name: "cinematic music" },
    { id: "epic", name: "epic" },

    // Mood tags
    { id: "creepy", name: "#creepy" },
    { id: "peaceful", name: "#peaceful" },
    { id: "energetic", name: "#energetic" },
    { id: "melancholic", name: "#melancholic" },
  ];

  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { id: tag.id },
      update: tag,
      create: tag,
    });
  }

  // ==========================================================================
  // FEATURED PLAYLISTS (System playlists)
  // ==========================================================================
  console.log("  → Seeding featured playlists...");

  const playlists = [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      name: "Focus & Study",
      description: "Ambient AI-generated tracks perfect for concentration",
      icon: "🎧",
      color: "bg-blue-600",
      isFeatured: true,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      name: "Workout Fuel",
      description: "High-energy AI beats to power your workout",
      icon: "💪",
      color: "bg-red-600",
      isFeatured: true,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      name: "Late Night Chill",
      description: "Relaxing AI soundscapes for winding down",
      icon: "🌙",
      color: "bg-purple-600",
      isFeatured: true,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440004",
      name: "Epic Adventures",
      description: "Cinematic AI scores for your imagination",
      icon: "⚔️",
      color: "bg-amber-600",
      isFeatured: true,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440005",
      name: "Synthwave Dreams",
      description: "Retro-futuristic AI-generated synthwave",
      icon: "🌆",
      color: "bg-pink-600",
      isFeatured: true,
    },
  ];

  for (const playlist of playlists) {
    await prisma.playlist.upsert({
      where: { id: playlist.id },
      update: playlist,
      create: {
        ...playlist,
        userId: null, // System playlist
      },
    });
  }

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
