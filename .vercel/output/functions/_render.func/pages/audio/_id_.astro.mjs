import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const track = {
    title: "Neon Sunset",
    artist: "SynthWaveSurfer",
    coverEmoji: "\u{1F306}",
    duration: "3:45",
    prompt: "An 80s-inspired synthwave track with a driving beat, melancholic melody, and the feeling of driving through a neon-lit city at dusk.",
    tool: "Suno AI",
    tags: ["synthwave", "80s", "retrowave", "driving"],
    releaseDate: "June 28, 2025",
    playCount: "1.2M",
    likeCount: "88k",
    comments: [
      { id: 1, user: "VectorVibe", avatar: "\u{1F916}", text: "Absolute banger! Takes me right back." },
      { id: 2, user: "PixelPilot", avatar: "\u{1F9D1}\u200D\u{1F680}", text: "The production quality is insane for an AI track." }
    ]
  };
  const creator = {
    name: "SynthWaveSurfer",
    avatar: "\u{1F916}",
    followers: "125k",
    url: "/creator/synthwavesurfer"
  };
  const moreByCreator = [
    { id: 5, title: "Chrome Reflections", coverEmoji: "\u{1FA9E}", url: "#" },
    { id: 9, title: "Escape Velocity", coverEmoji: "\u{1F680}", url: "#" },
    { id: 14, title: "System Shock", coverEmoji: "\u26A1", url: "#" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": track.title, "description": `Listen to ${track.title} by ${track.artist}.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Main Player / Hero --> <header class="bg-gray-900 rounded-2xl p-8 md:grid md:grid-cols-3 md:gap-8 md:items-end border border-gray-800"> <div class="md:col-span-1"> <div class="aspect-square bg-gray-800 rounded-xl flex items-center justify-center text-8xl shadow-lg max-w-[256px] mx-auto md:mx-0"> ${track.coverEmoji} </div> </div> <div class="md:col-span-2 flex-grow mt-6 md:mt-0"> <h1 class="text-4xl md:text-5xl font-black text-white">${track.title}</h1> <p class="text-xl text-gray-300 mt-1">by <a${addAttribute(creator.url, "href")} class="text-pink-400 hover:underline">${track.artist}</a></p> <div class="flex items-center gap-4 text-sm text-gray-400 mt-4"> <span>${track.duration}</span> <span>•</span> <span>${track.playCount} plays</span> <span>•</span> <span>${track.likeCount} likes</span> </div> <div class="mt-6 flex items-center gap-4"> <button class="btn-primary flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg> <span>Play</span> </button> <button class="btn-ghost flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> <span>Like</span> </button> <button class="btn-ghost flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg> <span>Share</span> </button> </div> </div> </header> <!-- Main Content Grid --> <div class="grid lg:grid-cols-3 gap-8 mt-12"> <!-- Left Column: Details & Comments --> <div class="lg:col-span-2 space-y-12"> <!-- Prompt & Details Section --> <section> <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-800"> <h2 class="text-lg font-bold text-white mb-2">Prompt & Details</h2> <p class="text-gray-300 mb-4">${track.prompt}</p> <div class="border-t border-gray-800 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm"> <div> <span class="text-gray-500 font-semibold">Tool: </span> <span class="text-gray-300">${track.tool}</span> </div> <div> <span class="text-gray-500 font-semibold">Released: </span> <span class="text-gray-300">${track.releaseDate}</span> </div> </div> <div class="mt-4 flex flex-wrap gap-2"> ${track.tags.map((tag) => renderTemplate`<span class="badge-art text-xs">${tag}</span>`)} </div> </div> </section> <!-- Comments Section --> <section> <h2 class="text-2xl font-bold text-white mb-4">${track.comments.length} Comments</h2> <div class="space-y-6"> <!-- New Comment Form --> <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-pink-500 flex-shrink-0 flex items-center justify-center text-xl">👤</div> <div class="flex-grow"> <textarea class="block w-full bg-gray-800 border-gray-700 rounded-md text-white focus:ring-pink-500 focus:border-pink-500" rows="2" placeholder="Add a comment..."></textarea> <div class="text-right mt-2"> <button class="btn-primary text-sm py-1.5 px-4">Comment</button> </div> </div> </div> <!-- Existing Comments --> ${track.comments.map((comment) => renderTemplate`<div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-xl">${comment.avatar}</div> <div class="flex-grow"> <p class="font-semibold text-white text-sm">${comment.user}</p> <p class="text-gray-300">${comment.text}</p> </div> </div>`)} </div> </section> </div> <!-- Right Column: Creator & More --> <aside class="lg:col-span-1 space-y-8"> <!-- Creator Card --> <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-800"> <div class="flex items-center gap-4"> <div class="w-16 h-16 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-3xl">${creator.avatar}</div> <div> <h3 class="text-lg font-bold text-white">${creator.name}</h3> <p class="text-sm text-gray-400">${creator.followers} followers</p> </div> </div> <a${addAttribute(creator.url, "href")} class="btn-ghost w-full mt-4">View Profile</a> </div> <!-- More by Creator --> <div> <h3 class="text-lg font-bold text-white mb-4">More by ${creator.name}</h3> <div class="space-y-3"> ${moreByCreator.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"> <div class="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center text-2xl flex-shrink-0">${item.coverEmoji}</div> <p class="font-semibold text-white truncate">${item.title}</p> </a>`)} </div> </div> </aside> </div> </div> ` })}
---
// src/pages/audio/[id].astro
import Layout from '@/components/astro/layout.astro';
import '@/styles/global.css';


---`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/audio/[id].astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/audio/[id].astro";
const $$url = "/audio/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
