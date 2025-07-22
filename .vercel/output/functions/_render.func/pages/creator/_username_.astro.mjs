import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$username = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const user = {
    name: "Pixel_Prophet",
    username: "pixel_prophet",
    avatarEmoji: "\u{1F52E}",
    bio: "Weaving dreams into digital tapestries. Specializing in surreal and fantasy landscapes that tell a story with AI.",
    // ADDED: A donation link for this user.
    donation_url: "https://www.buymeacoffee.com/pixelprophet",
    stats: {
      creations: 128,
      collections: 12,
      followers: "28.4k",
      following: 150
    },
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    },
    creations: [
      { type: "photo", title: "Celestial Spire", emoji: "\u{1F3F0}" },
      { type: "photo", title: "Dragon's Roost", emoji: "\u{1F409}" },
      { type: "video", title: "The Whispering Woods", emoji: "\u{1F332}", duration: "02:15" },
      { type: "photo", title: "Forgotten Gateway", emoji: "\u26E9\uFE0F" },
      { type: "photo", title: "City of Glass", emoji: "\u{1F3D9}\uFE0F" },
      { type: "article", title: "On the Art of Prompting", emoji: "\u270D\uFE0F" },
      { type: "video", title: "Making of a Metropolis", emoji: " timelapse \u23F1\uFE0F", duration: "05:30" },
      { type: "photo", title: "Oceanic Leviathan", emoji: "\u{1F40B}" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${user.name}'s Profile`, "description": `Explore the AI creations of ${user.name} (${user.username}).` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="profile-header"> <!-- Banner --> <div class="h-48 md:h-64 bg-gradient-to-br from-purple-800 to-indigo-800"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="md:flex md:items-end md:gap-6 -mt-16 md:-mt-24"> <!-- Avatar --> <div class="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center text-7xl shadow-lg mx-auto md:mx-0"> ${user.avatarEmoji} </div> <!-- User Info & Actions --> <div class="mt-4 md:mt-0 flex-grow text-center md:text-left"> <h1 class="text-3xl md:text-4xl font-black text-white">${user.name}</h1> <p class="text-lg text-pink-400">@${user.username}</p> </div> <div class="mt-6 flex justify-center md:justify-end gap-3 flex-shrink-0"> <!-- ADDED: Conditionally render the Tip button --> ${renderTemplate`<a${addAttribute(user.donation_url, "href")} target="_blank" rel="noopener noreferrer" class="btn-ghost flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> <span>Tip</span> </a>`} <button class="btn-ghost">Message</button> <button class="btn-primary">Follow</button> </div> </div> <!-- Stats Bar --> <div class="flex justify-center md:justify-start gap-6 md:gap-8 mt-6 border-t border-gray-800 pt-6"> <div class="text-center"> <div class="font-bold text-xl text-white">${user.stats.creations}</div> <div class="text-sm text-gray-400">Creations</div> </div> <div class="text-center"> <div class="font-bold text-xl text-white">${user.stats.followers}</div> <div class="text-sm text-gray-400">Followers</div> </div> <div class="text-center"> <div class="font-bold text-xl text-white">${user.stats.following}</div> <div class="text-sm text-gray-400">Following</div> </div> <div class="text-center"> <div class="font-bold text-xl text-white">${user.stats.collections}</div> <div class="text-sm text-gray-400">Collections</div> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid lg:grid-cols-4 gap-8"> <!-- Left Sidebar (About & Links) --> <aside class="lg:col-span-1"> <div class="lg:sticky top-24 space-y-6"> <div> <h2 class="text-lg font-bold text-white mb-2">About ${user.name}</h2> <p class="text-gray-400 text-sm leading-relaxed">${user.bio}</p> </div> <div> <h3 class="text-lg font-bold text-white mb-2">Links</h3> <div class="space-y-2 text-sm"> <a${addAttribute(user.socialLinks.twitter, "href")} class="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> <span>Twitter</span> </a> <a${addAttribute(user.socialLinks.instagram, "href")} class="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg> <span>Instagram</span> </a> <a${addAttribute(user.socialLinks.website, "href")} class="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-5.25V6z" clip-rule="evenodd"></path></svg> <span>Website</span> </a> </div> </div> </div> </aside> <!-- Main Content (Tabs & Grid) --> <div class="lg:col-span-3"> <!-- Tabs --> <div class="border-b border-gray-800 mb-8"> <nav class="-mb-px flex gap-6" aria-label="Tabs"> <a href="#" class="shrink-0 border-b-2 border-pink-500 px-1 py-4 text-sm font-medium text-pink-500">
Creations
</a> <a href="#" class="shrink-0 border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-white">
Collections
</a> <a href="#" class="shrink-0 border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-white">
Favorites
</a> </nav> </div> <!-- Creations Grid --> <div class="grid grid-cols-2 sm:grid-cols-3 gap-6"> ${user.creations.map((item) => renderTemplate`<a href="#" class="group"> <div class="aspect-square bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800/50 group-hover:border-pink-500/30 transition-all duration-300 relative"> <div class="text-5xl">${item.emoji}</div> ${item.type === "video" && renderTemplate`<div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">${item.duration}</div>`} ${item.type === "article" && renderTemplate`<div class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">Article</div>`} </div> <p class="text-sm font-semibold text-white mt-2 truncate group-hover:text-pink-400 transition-colors">${item.title}</p> </a>`)} </div> </div> </div> </main> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/[username].astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/[username].astro";
const $$url = "/creator/[username]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$username,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
