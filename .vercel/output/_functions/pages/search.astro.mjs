import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const searchQuery = Astro2.url.searchParams.get("q");
  if (!searchQuery) {
    return Astro2.redirect("/");
  }
  async function getSearchResults(query) {
    console.log(`Simulating search for: ${query}`);
    return {
      creators: [
        { id: 2, handle: "@detroitdabs", name: "Detroit Dabs", avatarEmoji: "\u{1F33F}", bio: "Exploring the world of cannabis with a focus on education, strain reviews, and responsible consumption." },
        { id: 3, handle: "@exploredetroit", name: "Explore Detroit", avatarEmoji: "\u{1F3D9}\uFE0F", bio: "Showcasing the art, culture, and hidden gems of Detroit." }
      ],
      content: [
        { id: 1, title: "Downtown Detroit Dispensary Tour", description: "A guided tour of the top-rated cannabis dispensaries in the heart of the city.", creator: "Detroit Dabs", type: "video", tags: ["cannabis", "tour", "detroit"] },
        { id: 2, title: "Top 5 Detroit Coffee Shops", description: "From cozy corners to bustling cafes, here are the must-visit coffee spots in Detroit.", creator: "Motor City Muncher", type: "video", tags: ["food", "coffee", "detroit"] },
        { id: 3, title: "Detroit Riverfront Photowalk", description: "A collection of stunning, high-resolution photographs taken along the iconic Detroit riverfront at sunset.", creator: "Explore Detroit", type: "image", tags: ["photography", "cityscape", "detroit"] }
      ]
    };
  }
  const results = await getSearchResults(searchQuery);
  const hasCreators = results.creators.length > 0;
  const hasContent = results.content.length > 0;
  const noResultsFound = !hasCreators && !hasContent;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search Results for "${searchQuery}"`, "description": `Find content and creators related to ${searchQuery} on Meat.`, "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto px-4 py-8 md:py-16" data-astro-cid-ipsxrsrh> <header class="mb-12" data-astro-cid-ipsxrsrh> <p class="text-sm font-semibold text-pink-500" data-astro-cid-ipsxrsrh>Search Results</p> <h1 class="font-display text-4xl md:text-5xl font-bold text-white truncate"${addAttribute(searchQuery, "title")} data-astro-cid-ipsxrsrh>"${searchQuery}"</h1> </header> <!-- FIX: A dedicated state for when no results are found at all. --> ${noResultsFound && renderTemplate`<div class="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-xl" data-astro-cid-ipsxrsrh> <p class="text-2xl text-gray-400 mb-2" data-astro-cid-ipsxrsrh>No results found.</p> <p class="text-gray-500" data-astro-cid-ipsxrsrh>Try searching for something else or check your spelling.</p> </div>`} <div class="space-y-12" data-astro-cid-ipsxrsrh> <!-- FIX: Creators section only renders if there are creator results. --> ${hasCreators && renderTemplate`<section data-astro-cid-ipsxrsrh> <h2 class="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4" data-astro-cid-ipsxrsrh>Creators</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-ipsxrsrh> <!-- Creator Card HTML is now inlined inside the loop --> ${results.creators.map((creator) => renderTemplate`<a${addAttribute(`/creator/${creator.handle.substring(1)}`, "href")} class="group bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300" data-astro-cid-ipsxrsrh> <div class="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-3xl shadow-lg flex-shrink-0" data-astro-cid-ipsxrsrh> ${creator.avatarEmoji} </div> <div class="flex-grow overflow-hidden" data-astro-cid-ipsxrsrh> <h3 class="font-bold text-white group-hover:text-purple-400 transition-colors" data-astro-cid-ipsxrsrh>${creator.name}</h3> <p class="text-sm text-gray-400" data-astro-cid-ipsxrsrh>${creator.handle}</p> <p class="text-xs text-gray-500 mt-1 truncate" data-astro-cid-ipsxrsrh>${creator.bio}</p> </div> </a>`)} </div> </section>`} <!-- FIX: Content section only renders if there are content results. --> ${hasContent && renderTemplate`<section data-astro-cid-ipsxrsrh> <h2 class="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4" data-astro-cid-ipsxrsrh>Creations</h2> <div class="space-y-6" data-astro-cid-ipsxrsrh> <!-- Content Card HTML is now inlined inside the loop --> ${results.content.map((item) => renderTemplate`<a${addAttribute(`/content/${item.id}`, "href")} class="group bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-start gap-6 hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300" data-astro-cid-ipsxrsrh> <div class="w-32 h-20 md:w-40 md:h-24 rounded-lg bg-gray-800 flex items-center justify-center text-2xl text-gray-500 flex-shrink-0" data-astro-cid-ipsxrsrh> ${item.type === "video" ? "\u{1F3AC}" : "\u{1F5BC}\uFE0F"} </div> <div class="flex-grow pt-1 overflow-hidden" data-astro-cid-ipsxrsrh> <h3 class="font-bold text-white truncate group-hover:text-cyan-400 transition-colors" data-astro-cid-ipsxrsrh>${item.title}</h3> <p class="text-sm text-gray-500 mb-2" data-astro-cid-ipsxrsrh>by ${item.creator}</p> <p class="text-sm text-gray-400 leading-relaxed line-clamp-2" data-astro-cid-ipsxrsrh>${item.description}</p> <div class="flex flex-wrap gap-2 mt-3" data-astro-cid-ipsxrsrh> ${item.tags.map((tag) => renderTemplate`<span class="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full whitespace-nowrap" data-astro-cid-ipsxrsrh>#${tag}</span>`)} </div> </div> </a>`)} </div> </section>`} </div> </div> ` })} `;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/search.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
