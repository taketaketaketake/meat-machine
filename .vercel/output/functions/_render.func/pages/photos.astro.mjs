import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { S as SectionTitle } from '../chunks/SectionTitle_BfEC8Rjl.mjs';
import { C as CategoryGrid } from '../chunks/CategoryGrid_9jxwS1ke.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function HeroSection({ data }) {
  const { title, description, emoji, photo } = data;
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] min-h-[400px] flex items-end p-8 md:p-12 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-800 z-0 flex items-center justify-center",
        style: photo ? { backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundPosition: "center" } : {},
        children: emoji && !photo && /* @__PURE__ */ jsx("div", { className: "text-8xl opacity-30", children: emoji })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-20", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-300 max-w-2xl", children: description })
    ] })
  ] });
}

function PhotoGrid({ title, data: photos }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: photos.map((photo) => /* @__PURE__ */ jsxs("a", { href: "#", className: "photo-card group", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-video rounded-lg overflow-hidden border border-gray-800", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-900 flex items-center justify-center text-5xl", children: photo.emoji }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "View Photo" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white truncate", children: photo.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-pink-400", children: photo.user })
      ] })
    ] }, photo.id)) })
  ] });
}

function TrendingTags({ title, data: tags }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: tags.map((tag) => /* @__PURE__ */ jsx("a", { href: "#", className: "tag-chip", children: tag }, tag)) })
  ] });
}

function ToolGrid({ title, data: tools }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: tools.map((tool) => /* @__PURE__ */ jsxs("a", { href: "#", className: "tool-card group relative rounded-lg p-6 flex flex-col items-center justify-center text-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-80 group-hover:opacity-100 transition-opacity` }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl mb-3", children: tool.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: tool.name })
      ] })
    ] }, tool.name)) })
  ] });
}

function CommunitySpotlight({ data }) {
  const { name, avatarEmoji, joinDate, bio, images } = data;
  return /* @__PURE__ */ jsx("section", { className: "spotlight-section bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-6xl mx-auto md:mx-0 mb-4 shadow-lg", children: avatarEmoji }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: name }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: joinDate }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: bio }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg transition-colors", children: "View Profile" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: images.map((img) => /* @__PURE__ */ jsx("div", { className: "aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-5xl hover:opacity-80 transition-opacity cursor-pointer border border-gray-700", children: img.emoji }, img.id)) }) })
  ] }) });
}

function CreatorList({ title, data: creators }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: creators.map((creator) => /* @__PURE__ */ jsxs("div", { className: "creator-card bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-4xl mx-auto mb-4", children: creator.avatarEmoji }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: creator.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-4", children: creator.specialty }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium text-pink-400", children: [
        creator.photos,
        " Photos"
      ] })
    ] }, creator.name)) })
  ] });
}

function TopVotedMasonry({ title, data: photos }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-6 overflow-x-auto pb-4 scrollbar-hide", children: photos.map((photo) => (
      // - Replaced 'masonry-item' with 'flex-none' to prevent shrinking.
      // - Added a fixed width 'w-80' to each card. The height is handled by the aspect ratio.
      /* @__PURE__ */ jsxs("div", { className: `flex-none w-80 group relative rounded-lg overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-colors ${photo.aspect}`, children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gray-900 flex items-center justify-center text-6xl", children: photo.emoji }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0", children: photo.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 translate-y-4 group-hover:translate-y-0", children: photo.user }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-pink-400", children: "▲" }),
            /* @__PURE__ */ jsx("span", { children: photo.votes })
          ] })
        ] })
      ] }, photo.id)
    )) })
  ] });
}

const $$Photos = createComponent(($$result, $$props, $$slots) => {
  const shareDescription = "Explore a gallery of stunning, mind-bending images created with the latest in AI technology on the Meat platform.";
  const shareImage = "/images/social/photos-page.jpg";
  const heroData = {
    title: "AI Photo Gallery",
    description: "Discover breathtaking images crafted by artificial intelligence. A new frontier in visual art.",
    emoji: "\u{1F5BC}\uFE0F"
  };
  const creators = [
    { name: "Aperture_Ace", avatarEmoji: "\u{1F4F8}", photos: 214, specialty: "Landscapes" },
    { name: "Portrait_Pixel", avatarEmoji: "\u{1F9D1}\u200D\u{1F3A8}", photos: 182, specialty: "Portraits" },
    { name: "Urban_Utopia", avatarEmoji: "\u{1F3D9}\uFE0F", photos: 305, specialty: "Cityscapes" },
    { name: "Abstract_Lens", avatarEmoji: "\u{1F300}", photos: 98, specialty: "Abstract" }
  ];
  const categories = [
    { title: "Landscapes", gradient: "from-blue-600/30 to-teal-600/30", icon: "\u{1F3DE}\uFE0F" },
    { title: "Portraits", gradient: "from-purple-600/30 to-pink-600/30", icon: "\u{1F464}" },
    { title: "Cityscapes", gradient: "from-orange-600/30 to-red-600/30", icon: "\u{1F307}" },
    { title: "Abstract", gradient: "from-yellow-600/30 to-lime-600/30", icon: "\u{1F3A8}" },
    { title: "Wildlife", gradient: "from-green-600/30 to-emerald-600/30", icon: "\u{1F405}" },
    { title: "Street", gradient: "from-slate-600/30 to-gray-600/30", icon: "\u{1F6B6}" }
  ];
  const latestPhotos = [
    { id: 1, title: "Neon Nights in Neo-Tokyo", user: "@Urban_Utopia", emoji: "\u{1F303}" },
    { id: 2, title: "Serenity Peak", user: "@Aperture_Ace", emoji: "\u{1F3D4}\uFE0F" },
    { id: 3, title: "The Gaze", user: "@Portrait_Pixel", emoji: "\u{1F441}\uFE0F" },
    { id: 4, title: "Chromatic Chaos", user: "@Abstract_Lens", emoji: "\u{1F4A5}" },
    { id: 5, title: "Golden Hour Savannah", user: "@WildLens", emoji: "\u{1F993}" },
    { id: 6, title: "Rainy Day Reflections", user: "@Street_Snapper", emoji: "\u{1F4A7}" }
  ];
  const topVotedPhotos = [
    { id: 7, title: "Galactic Gateway", user: "@Aperture_Ace", votes: "12.1k", aspect: "aspect-[3/4]", emoji: "\u{1F30C}" },
    { id: 8, title: "Concrete Jungle", user: "@Urban_Utopia", votes: "11.8k", aspect: "aspect-[16/9]", emoji: "\u{1F309}" },
    { id: 9, title: "Whispers of the Past", user: "@Portrait_Pixel", votes: "9.5k", aspect: "aspect-square", emoji: "\u{1F4DC}" },
    { id: 10, title: "Molten Flow", user: "@Abstract_Lens", votes: "8.2k", aspect: "aspect-[16/9]", emoji: "\u{1F30B}" },
    { id: 11, title: "King of the Arctic", user: "@WildLens", votes: "7.9k", aspect: "aspect-[3/4]", emoji: "\u{1F43B}\u200D\u2744\uFE0F" },
    { id: 12, title: "Market Hustle", user: "@Street_Snapper", votes: "6.4k", aspect: "aspect-square", emoji: "\u{1F34E}" }
  ];
  const trendingTags = [
    "#futuristic",
    "#fantasy",
    "8K",
    "photorealistic",
    "cinematic",
    "#cyberpunk",
    "#solarpunk",
    "watercolor",
    "3D render",
    "#abstract",
    "minimalist"
  ];
  const aiTools = [
    { name: "Midjourney", icon: "\u{1F3A8}", gradient: "from-indigo-500/30 to-purple-500/30" },
    { name: "DALL-E 3", icon: "\u2728", gradient: "from-sky-500/30 to-blue-500/30" },
    { name: "Stable Diffusion", icon: "\u{1F300}", gradient: "from-rose-500/30 to-red-500/30" },
    { name: "Firefly", icon: "\u{1F525}", gradient: "from-amber-500/30 to-orange-500/30" }
  ];
  const communitySpotlight = {
    name: "Pixel_Prophet",
    avatarEmoji: "\u{1F52E}",
    bio: "Weaving dreams into digital tapestries. Specializing in surreal and fantasy landscapes that tell a story.",
    joinDate: "Joined March 2025",
    images: [
      { id: 13, emoji: "\u{1F3F0}" },
      { id: 14, emoji: "\u{1F409}" },
      { id: 15, emoji: "\u{1F332}" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AI Photo Gallery", "description": shareDescription, "shareImage": shareImage, "class": "bg-gray-950", "data-astro-cid-vgmx3pcl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "data": heroData, "client:component-hydration": "load", "client:component-path": "@/components/react/content/HeroSection", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16" data-astro-cid-vgmx3pcl> ${renderComponent($$result2, "PhotoGrid", PhotoGrid, { "client:visible": true, "title": "Latest Shots", "data": latestPhotos, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/PhotoGrid", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "TrendingTags", TrendingTags, { "client:visible": true, "title": "Trending Tags", "data": trendingTags, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/TrendingTags", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "CategoryGrid", CategoryGrid, { "client:visible": true, "title": "Browse by Category", "data": categories, "client:component-hydration": "visible", "client:component-path": "@/components/react/discovery/CategoryGrid", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "ToolGrid", ToolGrid, { "client:visible": true, "title": "Explore by AI Tool", "data": aiTools, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/ToolGrid", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "CommunitySpotlight", CommunitySpotlight, { "client:visible": true, "data": communitySpotlight, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/CommunitySpotlight", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "CreatorList", CreatorList, { "client:visible": true, "title": "More Featured Creators", "data": creators, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/CreatorList", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} ${renderComponent($$result2, "TopVotedMasonry", TopVotedMasonry, { "client:visible": true, "title": "Top Voted This Week", "data": topVotedPhotos, "client:component-hydration": "visible", "client:component-path": "@/components/react/content/TopVotedMasonry", "client:component-export": "default", "data-astro-cid-vgmx3pcl": true })} </div> ` })} `;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/photos.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/photos.astro";
const $$url = "/photos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
