import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                    */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$slug = createComponent(($$result, $$props, $$slots) => {
  const content = {
    title: "Cybernetic Serenity",
    description: "A visual exploration of a tranquil world where nature and advanced technology coexist in harmony. Generated using a custom-trained diffusion model, this piece aims to evoke a sense of calm futurism.",
    creator: {
      name: "AURA"},
    stats: {
      likes: 22700},
    details: {
      published: "June 18, 2025",
      resolution: "4K UHD (3840x2160)",
      license: "Creative Commons BY-NC"
    },
    tags: ["#solarpunk", "#scifi", "generative art", "#tranquil", "Midjourney"],
    toolsUsed: [
      { name: "Midjourney", icon: "\u26F5\uFE0F", description: "Primary image sequence generation." },
      { name: "Suno", icon: "\u{1F3B5}", description: "Ambient soundtrack composition." },
      { name: "Topaz Video AI", icon: "\u{1F48E}", description: "Upscaling and frame interpolation." }
    ]
  };
  const relatedContent = Array(4).fill(null).map((_, i) => ({
    id: i,
    title: `Ethereal Structure ${i + 1}`,
    creator: "AURA"
  }));
  const gradients = [
    "from-pink-500/10 to-purple-500/10",
    "from-emerald-500/10 to-teal-500/10",
    "from-sky-500/10 to-indigo-500/10",
    "from-orange-500/10 to-yellow-500/10"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": content.title, "description": content.description, "data-astro-cid-okv3udaf": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-16" data-astro-cid-okv3udaf> <div class="grid grid-cols-1 lg:grid-cols-10 gap-12" data-astro-cid-okv3udaf> <div class="lg:col-span-7" data-astro-cid-okv3udaf> <div class="space-y-6" data-astro-cid-okv3udaf> <div class="aspect-video w-full rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center relative shadow-2xl shadow-black/30" data-astro-cid-okv3udaf> <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10" data-astro-cid-okv3udaf></div> <div class="text-center" data-astro-cid-okv3udaf> <span class="text-6xl" data-astro-cid-okv3udaf>🎬</span> <p class="text-lg font-medium text-gray-600 mt-2" data-astro-cid-okv3udaf>Video Player</p> </div> </div> <div data-astro-cid-okv3udaf> <h1 class="font-display text-4xl md:text-5xl font-bold text-white" data-astro-cid-okv3udaf>${content.title}</h1> <p class="text-lg text-gray-400 mt-2" data-astro-cid-okv3udaf>A generative artwork by <a href="#" class="text-cyan-400 hover:underline" data-astro-cid-okv3udaf>${content.creator.name}</a></p> </div> </div> </div> <div class="lg:col-span-3" data-astro-cid-okv3udaf> <div class="sticky top-24 space-y-6" data-astro-cid-okv3udaf> <div class="grid grid-cols-3 gap-2" data-astro-cid-okv3udaf> <button class="col-span-3 text-white bg-pink-600 hover:bg-pink-500 transition-colors h-11 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold" data-astro-cid-okv3udaf> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="size-5" data-astro-cid-okv3udaf><path d="M12.784 2.323a1.5 1.5 0 0 0-1.568 0l-8.92 5.043a1.5 1.5 0 0 0-.776 1.326v10.092c0 .532.28.1021.776.1326l8.92 5.043a1.5 1.5 0 0 0 1.568 0l8.92-5.043a1.5 1.5 0 0 0 .776-1.326V8.692a1.5 1.5 0 0 0-.776-1.326L12.784 2.323ZM3.75 9.173l8.25 4.66v9.319l-8.25-4.66V9.173Zm16.5 0v9.319l-8.25 4.66v-9.319l8.25-4.66Z" data-astro-cid-okv3udaf></path></svg>
Like (${(content.stats.likes / 1e3).toFixed(1)}k)
</button> </div> <div id="content-tabs" data-astro-cid-okv3udaf> <div class="border-b border-gray-700" data-astro-cid-okv3udaf> <nav class="-mb-px flex gap-6" aria-label="Tabs" data-astro-cid-okv3udaf> <button data-tab="details" class="tab-btn shrink-0 border-b-2 px-1 pb-3 text-sm font-medium border-pink-500 text-pink-500" data-astro-cid-okv3udaf>Details</button> <button data-tab="tools" class="tab-btn shrink-0 border-b-2 px-1 pb-3 text-sm font-medium border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200" data-astro-cid-okv3udaf>Tools</button> <button data-tab="comments" class="tab-btn shrink-0 border-b-2 px-1 pb-3 text-sm font-medium border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200" data-astro-cid-okv3udaf>Comments</button> </nav> </div> <div class="py-4" data-astro-cid-okv3udaf> <div id="details-content" class="tab-content active" data-astro-cid-okv3udaf> <div class="space-y-4 text-sm" data-astro-cid-okv3udaf> <p class="text-gray-300 leading-relaxed" data-astro-cid-okv3udaf>${content.description}</p> <div class="flex flex-wrap gap-2 pt-2" data-astro-cid-okv3udaf> ${content.tags.map((tag) => renderTemplate`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full" data-astro-cid-okv3udaf>${tag}</span>`)} </div> <div class="border-t border-gray-800 pt-4 mt-4 space-y-2" data-astro-cid-okv3udaf> <div class="flex justify-between" data-astro-cid-okv3udaf><span class="text-gray-400" data-astro-cid-okv3udaf>Published</span><span class="text-white font-medium" data-astro-cid-okv3udaf>${content.details.published}</span></div> <div class="flex justify-between" data-astro-cid-okv3udaf><span class="text-gray-400" data-astro-cid-okv3udaf>Resolution</span><span class="text-white font-medium" data-astro-cid-okv3udaf>${content.details.resolution}</span></div> <div class="flex justify-between" data-astro-cid-okv3udaf><span class="text-gray-400" data-astro-cid-okv3udaf>License</span><span class="text-white font-medium" data-astro-cid-okv3udaf>${content.details.license}</span></div> </div> </div> </div> <div id="tools-content" class="tab-content" data-astro-cid-okv3udaf> <div class="space-y-4" data-astro-cid-okv3udaf> ${content.toolsUsed.map((tool) => renderTemplate`<div class="flex items-center gap-4" data-astro-cid-okv3udaf> <div class="w-12 h-12 rounded-lg bg-gray-800 flex-shrink-0 flex items-center justify-center text-2xl" data-astro-cid-okv3udaf>${tool.icon}</div> <div data-astro-cid-okv3udaf> <p class="font-semibold text-white" data-astro-cid-okv3udaf>${tool.name}</p> <p class="text-sm text-gray-400" data-astro-cid-okv3udaf>${tool.description}</p> </div> </div>`)} </div> </div> <div id="comments-content" class="tab-content" data-astro-cid-okv3udaf> <div class="text-center py-8" data-astro-cid-okv3udaf> <p class="text-gray-500 text-sm" data-astro-cid-okv3udaf>Comments are not available for this creation.</p> </div> </div> </div> </div> </div> </div> </div> <section data-astro-cid-okv3udaf> <div class="border-t border-gray-800 pt-12 mt-12" data-astro-cid-okv3udaf> <h2 class="font-display text-3xl font-bold text-white mb-6" data-astro-cid-okv3udaf>More from ${content.creator.name}</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-astro-cid-okv3udaf> ${relatedContent.map((item, i) => renderTemplate`<a href="#" class="group" data-astro-cid-okv3udaf> <div class="aspect-video rounded-lg bg-gray-900 border border-transparent group-hover:border-pink-500/50 transition-colors overflow-hidden" data-astro-cid-okv3udaf> <div${addAttribute(`w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-3xl opacity-80 group-hover:opacity-100 transition-opacity`, "class")} data-astro-cid-okv3udaf>
✨
</div> </div> <div class="pt-3" data-astro-cid-okv3udaf> <p class="font-semibold text-white line-clamp-1" data-astro-cid-okv3udaf>${item.title}</p> <p class="text-sm text-gray-500" data-astro-cid-okv3udaf>${item.creator}</p> </div> </a>`)} </div> </div> </section> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">  ` })}` })} ${renderScript($$result, "/Users/Zach/Github_Projects/meat-machine/src/pages/photos/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/photos/[slug].astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/photos/[slug].astro";
const $$url = "/photos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
