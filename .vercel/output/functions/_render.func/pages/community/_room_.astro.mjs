import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$room = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$room;
  const room = {
    name: "#prompt-crafting",
    icon: "\u270D\uFE0F",
    description: "Share your best prompts and learn from the masters. For Midjourney, DALL-E, and more.",
    members: 12400,
    online: 812,
    rules: [
      "Be respectful and constructive.",
      "Share the AI tool used in your posts.",
      "No NSFW content.",
      "Keep discussions on-topic."
    ]
  };
  const posts = [
    {
      type: "discussion",
      icon: "\u{1F4AC}",
      title: "Techniques for achieving consistent character design across images?",
      author: "@Pixel_Prophet",
      avatarEmoji: "\u{1F52E}",
      tags: ["#midjourney", "#character-design"],
      replies: 42,
      upvotes: 128,
      time: "3h ago"
    },
    {
      type: "showcase",
      icon: "\u2728",
      title: 'Showcase: My "Cyberpunk Cityscapes" collection',
      author: "@Urban_Utopia",
      avatarEmoji: "\u{1F3D9}\uFE0F",
      tags: ["#showcase", "#cyberpunk"],
      replies: 88,
      upvotes: 450,
      time: "8h ago"
    },
    {
      type: "question",
      icon: "\u2753",
      title: 'What are the best negative prompts to avoid "uncanny valley" faces?',
      author: "@Portrait_Pixel",
      avatarEmoji: "\u{1F9D1}\u200D\u{1F3A8}",
      tags: ["#stable-diffusion", "#portraits"],
      replies: 15,
      upvotes: 95,
      time: "1d ago"
    },
    {
      type: "discussion",
      icon: "\u{1F4AC}",
      title: 'The art of "less is more": minimalist prompting techniques',
      author: "@Abstract_Lens",
      avatarEmoji: "\u{1F300}",
      tags: ["#philosophy", "#minimalism"],
      replies: 25,
      upvotes: 112,
      time: "2d ago"
    }
  ];
  const moderators = [
    { name: "Pixel_Prophet", avatarEmoji: "\u{1F52E}" },
    { name: "Admin", avatarEmoji: "\u{1F6E1}\uFE0F" }
  ];
  const relatedRooms = [
    { name: "#showcase", icon: "\u2728" },
    { name: "#beginners-lounge", icon: "\u{1F44B}" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Community Room: ${room.name}`, "description": room.description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="bg-gray-900/50 border-b border-gray-800 py-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- FIXED: Removed flex-1 from the left container to fix wrapping issue --> <div class="flex flex-col md:flex-row items-start justify-between gap-6"> <div class="flex items-start gap-6"> <div class="w-24 h-24 flex-shrink-0 bg-gray-800 rounded-2xl flex items-center justify-center text-5xl"> ${room.icon} </div> <div class="pt-1"> <h1 class="text-4xl font-black text-white">${room.name}</h1> <p class="text-gray-400 mt-1 max-w-xl">${room.description}</p> <div class="flex items-center gap-4 text-sm text-gray-400 mt-2"> <span>${room.members.toLocaleString()} members</span> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> <span class="flex items-center gap-1.5"> <span class="w-2 h-2 rounded-full bg-green-400"></span> ${room.online} online
</span> </div> </div> </div> <div class="flex-shrink-0 flex items-center gap-3 w-full md:w-auto"> <button class="btn-ghost w-full md:w-auto justify-center">Joined</button> <button class="btn-primary w-full md:w-auto justify-center">New Post</button> </div> </div> </div> </header>  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid lg:grid-cols-4 gap-8 items-start"> <!-- Main Post Feed --> <div class="lg:col-span-3 space-y-4"> ${posts.map((post) => renderTemplate`<a href="#" class="block p-5 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800/50 transition-colors"> <div class="flex gap-4"> <div class="flex flex-col items-center gap-1 text-center flex-shrink-0"> <button class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700 text-gray-400 hover:text-pink-400 transition-colors"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg> </button> <span class="font-bold text-white text-sm">${post.upvotes}</span> </div> <div class="flex-grow"> <div class="flex items-center flex-wrap gap-x-2 text-sm text-gray-400 mb-2"> <span class="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center text-sm">${post.icon}</span> <span>Posted by <span class="font-medium text-pink-400">${post.author}</span></span> <span class="hidden sm:inline">·</span> <span>${post.time}</span> </div> <h2 class="text-xl font-bold text-white mb-2">${post.title}</h2> <div class="flex items-center gap-4"> <div class="flex items-center gap-2 text-sm text-gray-400"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2c-4.418 0-8 3.134-8 7 0 2.033.944 3.863 2.451 5.118l-1.422 2.843a.5.5 0 00.651.651l2.843-1.422A7.961 7.961 0 0010 17c4.418 0 8-3.134 8-7s-3.582-7-8-7zm0 12c-3.866 0-7-2.686-7-6s3.134-6 7-6 7 2.686 7 6-3.134 6-7 6z" clip-rule="evenodd"></path></svg> <span>${post.replies} Comments</span> </div> <div class="flex items-center gap-2"> ${post.tags.map((tag) => renderTemplate`<span class="text-xs font-medium py-1 px-2.5 bg-blue-500/10 text-blue-300 rounded-full">${tag}</span>`)} </div> </div> </div> </div> </a>`)} </div> <!-- Sidebar --> <aside class="lg:col-span-1"> <div class="lg:sticky top-24 space-y-6"> <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6"> <h3 class="font-bold text-white text-lg mb-2">About ${room.name}</h3> <p class="text-sm text-gray-400 mb-4">${room.description}</p> <ul class="space-y-2 text-sm text-gray-400"> ${room.rules.map((rule) => renderTemplate`<li class="flex items-start gap-2"> <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>${rule}</span> </li>`)} </ul> </div> <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6"> <h3 class="font-bold text-white text-lg mb-4">Moderators</h3> <ul class="space-y-3"> ${moderators.map((mod) => renderTemplate`<li class="flex items-center gap-3"> <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-xl">${mod.avatarEmoji}</div> <span class="text-sm font-medium text-white">${mod.name}</span> </li>`)} </ul> </div> <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6"> <h3 class="font-bold text-white text-lg mb-4">Related Rooms</h3> <ul class="space-y-3"> ${relatedRooms.map((r) => renderTemplate`<li> <a href="#" class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800/50 transition-colors"> <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xl">${r.icon}</div> <span class="text-sm font-medium text-white">${r.name}</span> </a> </li>`)} </ul> </div> </div> </aside> </div> </div> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/community/[room].astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/community/[room].astro";
const $$url = "/community/[room]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$room,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
