import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Community = createComponent(($$result, $$props, $$slots) => {
  const featuredRooms = [
    {
      name: "#prompt-crafting",
      description: "Share your best prompts and learn from the masters. For Midjourney, DALL-E, and more.",
      icon: "\u270D\uFE0F",
      members: 12400,
      online: 812,
      gradient: "from-blue-500/20 to-sky-500/20"
    },
    {
      name: "#ai-filmmaking",
      description: "The place for everything text-to-video. Discuss Sora, Runway, and Pika.",
      icon: "\u{1F3AC}",
      members: 8900,
      online: 450,
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      name: "#showcase",
      description: "Share your finished creations here! Get feedback and inspire others.",
      icon: "\u2728",
      members: 21500,
      online: 1500,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];
  const allRooms = [
    { name: "#beginners-lounge", description: "New to AI? Ask your questions here!", members: 5600, icon: "\u{1F44B}" },
    { name: "#ai-music-production", description: "For Suno and Udio creators.", members: 6200, icon: "\u{1F3B5}" },
    { name: "#3d-modeling", description: "Discussing generative 3D models and techniques.", members: 3100, icon: "\u{1F9CA}" },
    { name: "#tech-talk", description: "Deeper conversations about the models and hardware.", members: 4800, icon: "\u2699\uFE0F" },
    { name: "#ethics-and-society", description: "Discussing the impact of AI on our world.", members: 2900, icon: "\u2696\uFE0F" },
    { name: "#generative-fiction", description: "For writers using AI as a creative partner.", members: 3500, icon: "\u{1F4DA}" }
  ];
  const latestActivity = [
    { room: "#prompt-crafting", author: "@Pixel_Prophet", action: "posted a new tip", time: "2m ago" },
    { room: "#showcase", author: "@Synthwave_Sound", action: "shared a new track", time: "5m ago" },
    { room: "#ai-filmmaking", author: "@VideoMage_99", action: "asked a question", time: "12m ago" },
    { room: "#beginners-lounge", author: "@Newbie_AI", action: "replied to a thread", time: "18m ago" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Community Hub", "description": "Join the discussion, share your work, and connect with other AI creators." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <!-- Page Header --> <header class="text-center mb-16"> <h1 class="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">Community Hub</h1> <p class="text-xl text-gray-400 max-w-3xl mx-auto">
A collective space to share ideas, get feedback, and connect with fellow creators on the cutting edge of AI.
</p> <div class="mt-8"> <a href="#" class="btn-primary text-lg">Create a New Room</a> </div> </header> <!-- Featured Rooms --> <section class="mb-20"> <h2 class="text-3xl font-bold text-white mb-8 border-l-4 border-pink-500 pl-4">Featured Rooms</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> ${featuredRooms.map((room) => renderTemplate`<a href="#"${addAttribute(`group relative block p-8 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1`, "class")}> <div${addAttribute(`absolute inset-0 ${room.gradient} opacity-80 group-hover:opacity-100 transition-opacity`, "class")}></div> <div class="relative z-10"> <div class="text-5xl mb-4">${room.icon}</div> <h3 class="text-2xl font-bold text-white mb-2">${room.name}</h3> <p class="text-gray-300 text-sm mb-6 h-12">${room.description}</p> <div class="flex items-center gap-4 text-sm"> <div class="flex items-center gap-2 text-white"> <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> <span>${room.online} Online</span> </div> <div class="text-gray-400">${room.members.toLocaleString()} Members</div> </div> </div> </a>`)} </div> </section> <!-- Main Directory --> <div class="grid lg:grid-cols-4 gap-8"> <!-- Room List --> <div class="lg:col-span-3"> <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"> <h2 class="text-3xl font-bold text-white">All Rooms</h2> <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"> <!-- Filter Buttons --> <div class="flex items-center gap-2 p-1 bg-gray-900/50 border border-gray-800 rounded-lg"> <button class="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-md">Popular</button> <button class="px-3 py-1 text-sm font-medium text-gray-400 hover:text-white transition-colors">Newest</button> <button class="px-3 py-1 text-sm font-medium text-gray-400 hover:text-white transition-colors">Trending</button> </div> <!-- Search Bar --> <div class="relative w-full md:w-56"> <input type="search" placeholder="Search rooms..." class="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> </div> </div> </div> </div> <div class="space-y-4"> ${allRooms.map((room) => renderTemplate`<a href="#" class="flex items-center gap-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-gray-800/50 hover:border-gray-700 transition-colors"> <div class="w-16 h-16 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center text-3xl">${room.icon}</div> <div class="flex-grow"> <h3 class="font-bold text-white text-lg">${room.name}</h3> <p class="text-sm text-gray-400 line-clamp-1">${room.description}</p> </div> <div class="text-right flex-shrink-0"> <p class="font-medium text-white">${room.members.toLocaleString()}</p> <p class="text-xs text-gray-500">Members</p> </div> </a>`)} </div> </div> <!-- Sidebar --> <aside class="lg:col-span-1"> <div class="lg:sticky top-24 space-y-8"> <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6"> <h3 class="font-bold text-white text-lg mb-4">Latest Activity</h3> <ul class="space-y-4"> ${latestActivity.map((activity) => renderTemplate`<li class="text-sm"> <a href="#" class="font-medium text-pink-400 hover:underline">${activity.author}</a> <span class="text-gray-400"> ${activity.action} in </span> <a href="#" class="font-medium text-white hover:underline">${activity.room}</a> <p class="text-xs text-gray-500">${activity.time}</p> </li>`)} </ul> </div> </div> </aside> </div> </main> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/community.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/community.astro";
const $$url = "/community";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
