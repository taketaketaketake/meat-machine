// src/data/constants.ts
// Shared data constants used across multiple pages

// ============================================
// GRADIENTS
// ============================================

export const CARD_GRADIENTS = [
  'from-pink-500/20 to-purple-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-sky-500/20 to-indigo-500/20',
] as const

export const REEL_GRADIENTS = [
  'from-purple-600/30 to-pink-600/30',
  'from-emerald-600/30 to-blue-600/30',
  'from-red-600/30 to-orange-600/30',
  'from-yellow-600/30 to-orange-600/30',
  'from-indigo-600/30 to-purple-600/30',
  'from-teal-600/30 to-cyan-600/30',
] as const

// ============================================
// AI TOOLS
// ============================================

export interface Tool {
  name: string
  icon: string
  description: string
  tags: string[]
  gradient: string
}

export const AI_TOOLS: Tool[] = [
  {
    name: 'Midjourney',
    icon: '⛵️',
    description: 'The industry-leading platform for crafting breathtaking, high-resolution images from simple text prompts.',
    tags: ['Image', 'Art'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    name: 'OpenAI Sora',
    icon: '🎬',
    description: 'A revolutionary text-to-video model that generates cinematic, high-fidelity video clips from your imagination.',
    tags: ['Video', 'Cinematic'],
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    name: 'Suno',
    icon: '🎵',
    description: 'Create radio-quality music in any genre, complete with custom lyrics and vocals, in just a matter of seconds.',
    tags: ['Music', 'Audio'],
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    name: 'ElevenLabs',
    icon: '🎤',
    description: 'The premier toolkit for generating ultra-realistic text-to-speech and cloning voices for any project.',
    tags: ['Voice', 'Audio'],
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
]

export const AI_TOOLS_SIMPLE = [
  { name: 'Midjourney', icon: '🎨', gradient: 'from-indigo-500/30 to-purple-500/30' },
  { name: 'DALL-E 3', icon: '✨', gradient: 'from-sky-500/30 to-blue-500/30' },
  { name: 'Stable Diffusion', icon: '🌀', gradient: 'from-rose-500/30 to-red-500/30' },
  { name: 'Firefly', icon: '🔥', gradient: 'from-amber-500/30 to-orange-500/30' },
]

// ============================================
// CREATORS
// ============================================

export interface Creator {
  id: number
  name: string
  handle: string
  avatarEmoji: string
  bannerGradient: string
  specialty: string
  specialtyColor: string
  bio: string
  subscriberCount: number
  videoCount: number
}

export const CREATORS: Creator[] = [
  {
    id: 1,
    name: 'Motor City Muncher',
    handle: '@mcmuncher',
    avatarEmoji: '🍕',
    bannerGradient: 'from-orange-500/20 to-red-500/20',
    specialty: 'Food Reviews',
    specialtyColor: 'bg-red-500/20 text-red-300',
    bio: "Your go-to guide for Detroit's food scene. From greasy spoons to gourmet dining, I'm eating my way through the city one bite at a time.",
    subscriberCount: 18400,
    videoCount: 112,
  },
  {
    id: 2,
    name: 'Detroit Dabs',
    handle: '@detroitdabs',
    avatarEmoji: '🌿',
    bannerGradient: 'from-emerald-500/20 to-green-500/20',
    specialty: 'Cannabis Education',
    specialtyColor: 'bg-green-500/20 text-green-300',
    bio: 'Exploring the world of cannabis with a focus on education, strain reviews, and responsible consumption. Learn and vibe with me.',
    subscriberCount: 26200,
    videoCount: 238,
  },
  {
    id: 3,
    name: 'Explore Detroit',
    handle: '@exploredetroit',
    avatarEmoji: '🏙️',
    bannerGradient: 'from-sky-500/20 to-indigo-500/20',
    specialty: 'City Vlogging',
    specialtyColor: 'bg-sky-500/20 text-sky-300',
    bio: 'Showcasing the art, culture, and hidden gems of Detroit. Follow along for event coverage and local business spotlights.',
    subscriberCount: 9800,
    videoCount: 76,
  },
  {
    id: 4,
    name: 'The Canna-seur',
    handle: '@thecannaseur',
    avatarEmoji: '🧑‍🍳',
    bannerGradient: 'from-amber-500/20 to-yellow-500/20',
    specialty: 'Cannabis Cooking',
    specialtyColor: 'bg-amber-500/20 text-amber-300',
    bio: "From gourmet meals to simple tinctures, I'm exploring the art and science of cannabis-infused cuisine.",
    subscriberCount: 15100,
    videoCount: 88,
  },
  {
    id: 5,
    name: 'Detroit Auto Scene',
    handle: '@detroitautoscene',
    avatarEmoji: '🚗',
    bannerGradient: 'from-gray-500/20 to-slate-500/20',
    specialty: 'Auto Vlogging',
    specialtyColor: 'bg-gray-500/20 text-gray-300',
    bio: 'Car reviews, custom builds, and coverage of every auto event that makes the Motor City roar. Vroom vroom.',
    subscriberCount: 31500,
    videoCount: 152,
  },
]

// ============================================
// TRENDING & COMMUNITY
// ============================================

export const TRENDING_TAGS = [
  '#cyberpunk',
  '#solarpunk',
  'cinematic lighting',
  '80s anime style',
  'photorealistic',
  '#creepy',
  'lofi beats',
  '#fantasyart',
]

export const TOP_VOTED = [
  { id: 1, title: 'Mind-Bending AI Video', creator: '@VideoMage_99', votes: 12500, emoji: '🎬' },
  { id: 2, title: 'AI Rock Revolution', creator: '@RockBot_AI', votes: 11800, emoji: '🎸' },
  { id: 3, title: 'The Last Algorithm', creator: '@StoryWeaver_AI', votes: 9600, emoji: '📖' },
  { id: 4, title: 'Forest Rain Meditation', creator: '@NatureSounds_AI', votes: 8200, emoji: '🌿' },
]

export const NEWEST_MEMBERS = [
  { handle: '@pixel_dreamer', avatarEmoji: '🧑‍🚀' },
  { handle: '@synthwave_sound', avatarEmoji: '🎧' },
  { handle: '@glitch_in_art', avatarEmoji: '👾' },
  { handle: '@code_poet', avatarEmoji: '✍️' },
]

// ============================================
// COMMUNITY ROOMS
// ============================================

export interface Room {
  name: string
  description: string
  icon: string
  members: number
  online?: number
  gradient?: string
}

export const FEATURED_ROOMS: Room[] = [
  {
    name: '#prompt-crafting',
    description: 'Share your best prompts and learn from the masters. For Midjourney, DALL-E, and more.',
    icon: '✍️',
    members: 12400,
    online: 812,
    gradient: 'from-blue-500/20 to-sky-500/20',
  },
  {
    name: '#ai-filmmaking',
    description: 'The place for everything text-to-video. Discuss Sora, Runway, and Pika.',
    icon: '🎬',
    members: 8900,
    online: 450,
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    name: '#showcase',
    description: 'Share your finished creations here! Get feedback and inspire others.',
    icon: '✨',
    members: 21500,
    online: 1500,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
]

export const ALL_ROOMS: Room[] = [
  { name: '#beginners-lounge', description: 'New to AI? Ask your questions here!', members: 5600, icon: '👋' },
  { name: '#ai-music-production', description: 'For Suno and Udio creators.', members: 6200, icon: '🎵' },
  { name: '#3d-modeling', description: 'Discussing generative 3D models and techniques.', members: 3100, icon: '🧊' },
  { name: '#tech-talk', description: 'Deeper conversations about the models and hardware.', members: 4800, icon: '⚙️' },
  { name: '#ethics-and-society', description: 'Discussing the impact of AI on our world.', members: 2900, icon: '⚖️' },
  { name: '#generative-fiction', description: 'For writers using AI as a creative partner.', members: 3500, icon: '📚' },
]

// ============================================
// CATEGORIES
// ============================================

export const HOME_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'photos', label: 'Photos' },
  { id: 'videos', label: 'Videos' },
  { id: 'music', label: 'Audio' },
  { id: '3d-models', label: '3D Models' },
  { id: 'words', label: 'Words' },
]

export const VIDEO_CATEGORIES = [
  { id: 'all', label: 'All Videos' },
  { id: 'cannabis', label: 'Cannabis' },
  { id: 'food', label: 'Food & Drink' },
  { id: 'local', label: 'Local Businesses' },
  { id: 'events', label: 'Events' },
]

export const PHOTO_CATEGORIES = [
  { title: 'Landscapes', gradient: 'from-blue-600/30 to-teal-600/30', icon: '🏞️' },
  { title: 'Portraits', gradient: 'from-purple-600/30 to-pink-600/30', icon: '👤' },
  { title: 'Cityscapes', gradient: 'from-orange-600/30 to-red-600/30', icon: '🌇' },
  { title: 'Abstract', gradient: 'from-yellow-600/30 to-lime-600/30', icon: '🎨' },
  { title: 'Wildlife', gradient: 'from-green-600/30 to-emerald-600/30', icon: '🐅' },
  { title: 'Street', gradient: 'from-slate-600/30 to-gray-600/30', icon: '🚶' },
]

// ============================================
// FEATURED SLIDES (Homepage Hero)
// ============================================

export const FEATURED_SLIDES = [
  {
    label: 'FEATURED',
    title: 'Mind-Bending AI Video',
    emoji: '🎬',
    gradient: 'from-blue-600/40 to-indigo-600/40',
  },
  {
    label: 'COMMUNITY PICK',
    title: 'AI Rock Revolution',
    emoji: '🎸',
    gradient: 'from-purple-600/40 to-pink-600/40',
  },
  {
    label: 'STAFF PICK',
    title: 'The Last Algorithm',
    emoji: '📖',
    gradient: 'from-emerald-600/40 to-teal-600/40',
  },
]

// ============================================
// VIDEO SHORTS
// ============================================

export const VIDEO_SHORTS = [
  { id: 'short-1', title: 'Perfect Pizza Slice', creator: '@mcmuncher', icon: '🍕', gradient: 'from-orange-500 to-red-500', videoUrl: '/videos/sample-1.mp4' },
  { id: 'short-2', title: 'Rolling Technique', creator: '@detroitdabs', icon: '🌿', gradient: 'from-emerald-500 to-green-500', videoUrl: '/videos/sample-2.mp4' },
  { id: 'short-3', title: 'Coffee Art', creator: '@mcmuncher', icon: '☕', gradient: 'from-amber-500 to-yellow-500', videoUrl: '/videos/sample-3.mp4' },
  { id: 'short-4', title: 'Street Art Tour', creator: '@exploredetroit', icon: '🎨', gradient: 'from-sky-500 to-indigo-500', videoUrl: '/videos/sample-4.mp4' },
  { id: 'short-5', title: 'Best Edibles?', creator: '@detroitdabs', icon: '🍬', gradient: 'from-lime-500 to-emerald-500', videoUrl: '/videos/sample-5.mp4' },
  { id: 'short-6', title: 'Concert Clip', creator: '@exploredetroit', icon: '🎤', gradient: 'from-purple-500 to-pink-500', videoUrl: '/videos/sample-6.mp4' },
]

// ============================================
// REELS DATA
// ============================================

export const REELS_DATA = [
  { id: 'reel-1', emoji: '🎨', title: 'Quick Art', user: '@QuickArtist', views: '2.1K', duration: '0:30', gradient: 'from-purple-600/30 to-pink-600/30' },
  { id: 'reel-2', emoji: '🎵', title: 'Beat Drop', user: '@BeatMaker', views: '1.8K', duration: '0:15', gradient: 'from-emerald-600/30 to-blue-600/30' },
  { id: 'reel-3', emoji: '🤖', title: 'Code Magic', user: '@CodeWizard', views: '950', duration: '0:45', gradient: 'from-red-600/30 to-orange-600/30' },
  { id: 'reel-4', emoji: '✨', title: 'Transform', user: '@StyleTransfer', views: '3.4K', duration: '0:20', gradient: 'from-yellow-600/30 to-orange-600/30' },
  { id: 'reel-5', emoji: '🎬', title: 'Quick Edit', user: '@EditBot', views: '1.2K', duration: '0:25', gradient: 'from-indigo-600/30 to-purple-600/30' },
  { id: 'reel-6', emoji: '🧠', title: 'Mind Meld', user: '@MindReader', views: '4.2K', duration: '0:35', gradient: 'from-teal-600/30 to-cyan-600/30' },
]
