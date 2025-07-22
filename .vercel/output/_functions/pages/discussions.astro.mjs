import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const channels = [
    { id: "tool-talk", name: "Tool-Talk", description: "Discuss specific AI models like Midjourney, Suno, etc.", icon: "\u{1F6E0}\uFE0F" },
    { id: "prompt-craft", name: "Prompt-Craft", description: "Share and refine prompting techniques.", icon: "\u270D\uFE0F" },
    { id: "critique-corner", name: "Critique-Corner", description: "Ask for and receive constructive feedback.", icon: "\u{1F5BC}\uFE0F" },
    { id: "ai-news", name: "AI-News", description: "Hot links and updates from the world of AI.", icon: "\u{1F4F0}" },
    { id: "announcements", name: "Announcements", description: "Platform news and updates from the Meat team.", icon: "\u{1F4E2}" }
  ];
  const threads = [
    {
      id: 6,
      title: "Anthropic releases Claude 3.5 Sonnet, claims it outperforms GPT-4o",
      author: { name: "TechObserver", avatarEmoji: "\u{1F4E1}" },
      channelId: "ai-news",
      replies: 76,
      likes: 412,
      timestamp: "Just now"
    },
    { id: 1, title: 'Has anyone mastered the "--style raw" parameter in Midjourney v6?', author: { name: "AURA", avatarEmoji: "\u2728" }, channelId: "tool-talk", replies: 18, likes: 122, timestamp: "3 hours ago" },
    { id: 2, title: "Requesting Feedback: Is this synthwave piece too busy?", author: { name: "Synthwave_Sound", avatarEmoji: "\u{1F3A7}" }, channelId: "critique-corner", replies: 5, likes: 45, timestamp: "8 hours ago" },
    { id: 3, title: "My go-to prompt structure for creating consistent characters", author: { name: "Code_Poet", avatarEmoji: "\u270D\uFE0F" }, channelId: "prompt-craft", replies: 42, likes: 256, timestamp: "1 day ago" },
    { id: 4, title: "New Feature Announcement: Collections are now live!", author: { name: "Meat Team", avatarEmoji: "\u{1F969}" }, channelId: "announcements", replies: 112, likes: 840, timestamp: "2 days ago" },
    { id: 5, title: "How to get more cinematic lighting from Sora?", author: { name: "VideoMage_99", avatarEmoji: "\u{1F9D9}" }, channelId: "tool-talk", replies: 25, likes: 180, timestamp: "3 days ago" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Discussions - Meat", "description": "Join the conversation with other AI creators.", "data-astro-cid-rpbxq4ss": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-8 md:py-16" data-astro-cid-rpbxq4ss> <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12" data-astro-cid-rpbxq4ss> <div data-astro-cid-rpbxq4ss> <h1 class="font-display text-4xl md:text-5xl font-bold text-white" data-astro-cid-rpbxq4ss>The Lounge</h1> <p class="text-lg text-gray-400 mt-2" data-astro-cid-rpbxq4ss>Discuss the craft of AI content creation.</p> </div> <a href="/discussions/new" class="inline-flex items-center justify-center h-11 px-6 font-semibold rounded-lg bg-pink-600 text-white hover:bg-pink-500 transition-colors shrink-0" data-astro-cid-rpbxq4ss>
Start a Discussion
</a> </header> <div class="grid grid-cols-1 lg:grid-cols-4 gap-12" data-astro-cid-rpbxq4ss> <aside class="lg:col-span-1" data-astro-cid-rpbxq4ss> <nav class="sticky top-24" data-astro-cid-rpbxq4ss> <h2 class="px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2" data-astro-cid-rpbxq4ss>Channels</h2> <ul class="space-y-1" data-astro-cid-rpbxq4ss> <li data-astro-cid-rpbxq4ss> <a href="/discussions" class="channel-link is-active" data-astro-cid-rpbxq4ss> <span class="text-xl" data-astro-cid-rpbxq4ss>🌐</span> <span class="font-semibold" data-astro-cid-rpbxq4ss>All Threads</span> </a> </li> ${channels.map((channel) => renderTemplate`<li data-astro-cid-rpbxq4ss> <a${addAttribute(`/discussions/${channel.id}`, "href")} class="channel-link" data-astro-cid-rpbxq4ss> <span class="text-xl" data-astro-cid-rpbxq4ss>${channel.icon}</span> <span class="font-semibold" data-astro-cid-rpbxq4ss>${channel.name}</span> </a> </li>`)} </ul> </nav> </aside> <div class="lg:col-span-3" data-astro-cid-rpbxq4ss> <ul class="space-y-4" data-astro-cid-rpbxq4ss>  ${threads.map((thread) => renderTemplate`<li data-astro-cid-rpbxq4ss> <a${addAttribute(`/discussions/thread/${thread.id}`, "href")} class="thread-card" data-astro-cid-rpbxq4ss> <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between" data-astro-cid-rpbxq4ss> <h3 class="font-bold text-lg text-white line-clamp-2 pr-4" data-astro-cid-rpbxq4ss>${thread.title}</h3> <p class="text-xs text-gray-500 mt-1 sm:mt-0 shrink-0 sm:ml-6" data-astro-cid-rpbxq4ss>${thread.timestamp}</p> </div> <div class="flex items-center gap-4 mt-3 text-sm" data-astro-cid-rpbxq4ss> <div class="flex items-center gap-2" data-astro-cid-rpbxq4ss> <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-sm flex-shrink-0" data-astro-cid-rpbxq4ss>${thread.author.avatarEmoji}</div> <span class="font-medium text-gray-300 truncate" data-astro-cid-rpbxq4ss>${thread.author.name}</span> </div> <div class="flex items-center gap-4 text-gray-400" data-astro-cid-rpbxq4ss> <div class="flex items-center gap-1.5" data-astro-cid-rpbxq4ss> <svg class="size-4" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-astro-cid-rpbxq4ss> <title>Replies</title> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-rpbxq4ss></path> </svg> <span data-astro-cid-rpbxq4ss>${thread.replies}</span> </div> <div class="flex items-center gap-1.5" data-astro-cid-rpbxq4ss> <svg class="size-4" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-astro-cid-rpbxq4ss> <title>Likes</title> <path d="M12 20.999l-8.24-7.545A5.5 5.5 0 0 1 7.76 2.455a5.5 5.5 0 0 1 8.48 0A5.5 5.5 0 0 1 20.24 13.455L12 20.999z" data-astro-cid-rpbxq4ss></path> </svg> <span data-astro-cid-rpbxq4ss>${thread.likes}</span> </div> </div> </div> </a> </li>`)} </ul> </div> </div> </div> ` })} `;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/discussions/index.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/discussions/index.astro";
const $$url = "/discussions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
