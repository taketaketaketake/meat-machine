import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://meat-platform.vercel.app");
const $$CreatorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CreatorCard;
  const { creator } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900/50 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full"> <div${addAttribute(`h-24 rounded-t-xl bg-gradient-to-br ${creator.bannerGradient}`, "class")}></div> <div class="flex-grow p-6 pt-0"> <div class="flex justify-center -mt-12"> <div class="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center text-4xl shadow-lg">${creator.avatarEmoji}</div> </div> <div class="text-center mt-4"> <h3 class="text-xl font-bold text-white">${creator.name}</h3> <p class="text-pink-400 text-sm">@${creator.handle}</p> <span${addAttribute(`mt-3 inline-block text-xs font-medium px-3 py-1 rounded-full ${creator.specialtyColor}`, "class")}>${creator.specialty}</span> </div> <p class="text-gray-400 text-sm text-center my-4 min-h-[4rem]">${creator.bio}</p> <div class="flex justify-around text-center text-sm border-y border-gray-800 py-3"> <div><div class="font-bold text-white">${(creator.subscriberCount / 1e3).toFixed(1)}K</div><div class="text-gray-400 text-xs">Subscribers</div></div> <div><div class="font-bold text-white">${creator.videoCount}</div><div class="text-gray-400 text-xs">Videos</div></div> </div> </div> <div class="p-4 mt-auto"> <a href="#" class="w-full text-center inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-pink-600 text-white shadow hover:bg-pink-500 transition-colors">
View Channel
</a> </div> </div>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/CreatorCard.astro", void 0);

const $$Astro$2 = createAstro("https://meat-platform.vercel.app");
const $$CreatorCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CreatorCarousel;
  const {
    title = "Featured Communities",
    description = "Meet the voices and visionaries behind the content.",
    creators = []
  } = Astro2.props;
  if (!creators || creators.length === 0) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<section> <div class="border-l-4 border-purple-500 pl-6 mb-8"> <h2 class="text-3xl font-bold text-white">${title}</h2> <p class="text-gray-400">${description}</p> </div> <div class="flex gap-8 overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"> ${creators.map((creator) => renderTemplate`<div class="flex-none w-80">  ${renderComponent($$result, "CreatorCard", $$CreatorCard, { "creator": creator })} </div>`)} </div> </section>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/CreatorCarousel.astro", void 0);

const $$Astro$1 = createAstro("https://meat-platform.vercel.app");
const $$CreatorSpotlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CreatorSpotlight;
  const { creator, title = "Community Spotlight" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="border-l-4 border-purple-500 pl-6 mb-8"> <h2 class="text-3xl font-bold text-white">${title}</h2> <p class="text-gray-400">A closer look at one of our most inspiring creators.</p> </div> <div class="grid lg:grid-cols-5 gap-8 bg-gray-900/50 border border-gray-800 rounded-2xl p-8"> <!-- Creator Info Column --> <div class="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left"> <div class="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center text-6xl border-4 border-gray-700 mb-4"> ${creator.avatarEmoji} </div> <h3 class="text-2xl font-bold text-white">${creator.name}</h3> <p class="text-pink-400 mb-4">@${creator.handle}</p> <p class="text-gray-400 text-sm mb-6">${creator.bio}</p> <a href="#" class="btn-primary mt-auto">View Full Profile</a> </div> <!-- Recent Creations Column --> <div class="lg:col-span-3"> <h4 class="font-bold text-white mb-4">Recent Creations</h4> <div class="grid grid-cols-3 gap-4"> ${creator.recentCreations.map((creation) => renderTemplate`<a href="#" class="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-5xl hover:opacity-80 transition-opacity border border-gray-700 hover:border-pink-500/50"> ${creation.emoji} </a>`)} </div> </div> </div> </section>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/CreatorSpotlight.astro", void 0);

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$CreatorGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreatorGrid;
  const { title = "Creator Directory", creators = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="border-l-4 border-purple-500 pl-6 mb-8"> <h2 class="text-3xl font-bold text-white">${title}</h2> <p class="text-gray-400">Explore our full roster of talented creators.</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${creators.map((creator) => renderTemplate`<a href="#" class="group relative aspect-[4/5] rounded-xl overflow-hidden block">  <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${creator.bannerGradient}`, "class")}></div>  <div class="absolute inset-0 flex flex-col items-center justify-center"> <div class="w-24 h-24 rounded-full bg-gray-900/30 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center text-5xl shadow-lg transition-transform duration-300 group-hover:scale-110"> ${creator.avatarEmoji} </div> <h3 class="font-bold text-xl text-white mt-4">${creator.name}</h3> </div>  <div class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <div class="w-24 h-24 rounded-full bg-gray-900/30 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center text-5xl shadow-lg mb-4"> ${creator.avatarEmoji} </div> <h3 class="font-bold text-xl text-white">${creator.name}</h3> <p class="text-pink-400 mb-4">${creator.specialty}</p> <div class="mt-auto"> <span class="inline-block px-4 py-2 border border-white text-white rounded-full text-sm font-medium">View Profile</span> </div> </div> </a>`)} </div> </section>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/CreatorGrid.astro", void 0);

const $$Creators = createComponent(($$result, $$props, $$slots) => {
  const creatorOfTheWeek = {
    name: "VideoMage_99",
    avatarEmoji: "\u{1F9D9}",
    bio: 'Pushing the boundaries of storytelling with text-to-video models. Creator of the award-winning short film "The Last Byte".',
    bannerGradient: "from-red-600/20 to-orange-600/20",
    stats: { followers: "45.1k"}
  };
  const carouselCreators = [
    { id: 1, name: "Motor City Muncher", handle: "mcmuncher", avatarEmoji: "\u{1F355}", bannerGradient: "from-orange-500/20 to-red-500/20", specialty: "Food Reviews", specialtyColor: "bg-red-500/20 text-red-300", bio: "Your go-to guide for Detroit's food scene. One bite at a time.", subscriberCount: 18400, videoCount: 112 },
    { id: 2, name: "Detroit Dabs", handle: "detroitdabs", avatarEmoji: "\u{1F33F}", bannerGradient: "from-emerald-500/20 to-green-500/20", specialty: "Cannabis Education", specialtyColor: "bg-green-500/20 text-green-300", bio: "Exploring cannabis with a focus on education and responsible use.", subscriberCount: 26200, videoCount: 238 },
    { id: 3, name: "Explore Detroit", handle: "exploredetroit", avatarEmoji: "\u{1F3D9}\uFE0F", bannerGradient: "from-sky-500/20 to-indigo-500/20", specialty: "City Vlogging", specialtyColor: "bg-sky-500/20 text-sky-300", bio: "Showcasing the art, culture, and hidden gems of Detroit.", subscriberCount: 9800, videoCount: 76 },
    { id: 4, name: "The Canna-seur", handle: "thecannaseur", avatarEmoji: "\u{1F9D1}\u200D\u{1F373}", bannerGradient: "from-amber-500/20 to-yellow-500/20", specialty: "Cannabis Cooking", specialtyColor: "bg-amber-500/20 text-amber-300", bio: "Exploring the art and science of cannabis-infused cuisine.", subscriberCount: 15100, videoCount: 88 }
  ];
  const spotlightCreator = {
    name: "Pixel_Prophet",
    handle: "pixel_prophet",
    avatarEmoji: "\u{1F52E}",
    specialty: "Surreal Landscapes",
    bio: "Weaving dreams into digital tapestries that tell a story.",
    recentCreations: [{ emoji: "\u{1F3F0}" }, { emoji: "\u{1F409}" }, { emoji: "\u{1F332}" }]
  };
  const gridCreators = [
    { name: "Synthwave_Sound", avatarEmoji: "\u{1F3A7}", specialty: "AI Music", bannerGradient: "from-teal-500/20 to-cyan-500/20" },
    { name: "Glitch_In_Art", avatarEmoji: "\u{1F47E}", specialty: "Abstract Visuals", bannerGradient: "from-rose-500/20 to-pink-500/20" },
    { name: "Code_Poet", avatarEmoji: "\u270D\uFE0F", specialty: "Generative Fiction", bannerGradient: "from-slate-500/20 to-gray-500/20" },
    { name: "NatureSounds_AI", avatarEmoji: "\u{1F33F}", specialty: "Ambient Audio", bannerGradient: "from-lime-500/20 to-green-500/20" },
    { name: "RockBot_AI", avatarEmoji: "\u{1F3B8}", specialty: "AI Rock Music", bannerGradient: "from-orange-500/20 to-red-500/20" },
    { name: "StoryWeaver_AI", avatarEmoji: "\u{1F4D6}", specialty: "Interactive Stories", bannerGradient: "from-blue-500/20 to-indigo-500/20" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Discover Creators", "description": "Meet the talented creators and artists shaping the future of AI-generated content." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="space-y-24 md:space-y-32 py-16"> <!-- Section 1: Creator of the Week (Hero Style) - Kept as requested --> <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div${addAttribute(`relative rounded-2xl p-8 md:p-12 overflow-hidden border border-pink-500/20 bg-gradient-to-br ${creatorOfTheWeek.bannerGradient}`, "class")}> <div class="grid md:grid-cols-3 gap-8 items-center"> <div class="md:col-span-2"> <p class="font-bold text-pink-400 mb-2">CREATOR OF THE WEEK</p> <h1 class="text-4xl md:text-5xl font-black text-white mb-4">${creatorOfTheWeek.name}</h1> <p class="text-lg text-gray-300 max-w-xl mb-6">${creatorOfTheWeek.bio}</p> <div class="flex items-center gap-6"> <a href="#" class="btn-primary">View Profile</a> <div class="text-white"> <span class="font-bold">${creatorOfTheWeek.stats.followers}</span> <span class="text-gray-400"> Followers</span> </div> </div> </div> <div class="hidden md:flex items-center justify-center"> <div class="w-48 h-48 rounded-full bg-gray-900/50 border-4 border-gray-800 flex items-center justify-center text-8xl shadow-2xl"> ${creatorOfTheWeek.avatarEmoji} </div> </div> </div> </div> </section> <!-- Variation 1: The "Featured Communities" Carousel --> <div class="max-w-7xl mx-auto"> ${renderComponent($$result2, "CreatorCarousel", $$CreatorCarousel, { "creators": carouselCreators })} </div> <!-- Variation 2: The "Community Spotlight" Split Layout --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CreatorSpotlight", $$CreatorSpotlight, { "creator": spotlightCreator })} </div> <!-- Variation 3: The Interactive "Creator Grid" --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CreatorGrid", $$CreatorGrid, { "creators": gridCreators, "title": "More Creators to Explore" })} </div> <!-- Join CTA --> <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center bg-gray-900 py-12 px-6 rounded-2xl border border-gray-800"> <h2 class="text-3xl font-bold text-white">Ready to Share Your Work?</h2> <p class="text-gray-400 mt-2 mb-6 max-w-xl mx-auto">Join a community of innovators and artists. Create your profile, share your creations, and get discovered.</p> <a href="/upload" class="btn-primary">Become a Creator</a> </div> </section> </div> ` })} `;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/creators.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/creators.astro";
const $$url = "/creators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Creators,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
