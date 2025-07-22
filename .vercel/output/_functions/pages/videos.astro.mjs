import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { F as FilteredContent } from '../chunks/FilteredContent_Dhi5pRd_.mjs';
import { S as SectionTitle } from '../chunks/SectionTitle_BfEC8Rjl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function VideoCard({ video, onCardClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: onCardClick,
      className: "group flex-none w-48 sm:w-64 bg-gray-800 rounded-xl overflow-hidden cursor-pointer snap-start relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105 text-left",
      children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16]", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute inset-0 bg-gradient-to-br ${video.gradient}`
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col justify-between p-4 text-white", children: [
          /* @__PURE__ */ jsx("div", { className: "text-right text-3xl opacity-50", children: video.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold", children: video.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: video.creator })
          ] })
        ] })
      ] })
    }
  );
}

function VideoShortsCarousel({ title, data: videos, onCardClick }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(SectionTitle, { title }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide", children: videos.map((video) => /* @__PURE__ */ jsx(
      VideoCard,
      {
        video,
        onCardClick: () => onCardClick(video)
      },
      video.id
    )) })
  ] });
}

function VideoPlayerModal({ video, onClose }) {
  if (!video) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute top-4 right-4 text-white text-4xl z-50",
            onClick: onClose,
            children: "×"
          }
        ),
        /* @__PURE__ */ jsx(
          "video",
          {
            className: "max-h-full max-w-full",
            src: video.videoUrl,
            autoPlay: true,
            controls: true,
            loop: true,
            onClick: (e) => e.stopPropagation()
          }
        )
      ]
    }
  );
}

function ToolSpotlight({ data: tools }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-cyan-500 pl-6 mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Spotlight on the Tools" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Discover the magic behind the masterpieces." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: tools.map((tool) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-4xl mb-4`, children: tool.icon }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: tool.name }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-2", children: tool.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-full", children: tag }, tag)) }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mt-4 text-sm flex-grow", children: tool.description }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "inline-block mt-6 text-sm font-semibold text-cyan-400 hover:text-cyan-300", children: "View Creations →" })
    ] }, tool.name)) })
  ] });
}

function CallToAction() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Have Content to Share?" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg text-gray-400", children: "Join our community of creators and share your own videos with the world." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx("a", { href: "#", className: "btn-primary", children: "Upload Your Video" }) })
  ] }) });
}

function VideoPageLayout({ data }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const handleOpenVideo = (video) => setActiveVideo(video);
  const handleCloseVideo = () => setActiveVideo(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      FilteredContent,
      {
        categories: data.categories,
        videos: data.recentVideos,
        gradients: data.gradients
      }
    ),
    /* @__PURE__ */ jsx("main", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16", children: [
      /* @__PURE__ */ jsx(
        VideoShortsCarousel,
        {
          title: "Shorts & Reels",
          data: data.videoShorts,
          onCardClick: handleOpenVideo
        }
      ),
      /* @__PURE__ */ jsx(ToolSpotlight, { data: data.tools }),
      /* @__PURE__ */ jsx(CallToAction, {})
    ] }) }),
    /* @__PURE__ */ jsx(VideoPlayerModal, { video: activeVideo, onClose: handleCloseVideo })
  ] });
}

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  const creators = [
    { id: 1, name: "Motor City Muncher", handle: "@mcmuncher", avatarEmoji: "\u{1F355}", bannerGradient: "from-orange-500/20 to-red-500/20", specialty: "Food Reviews", specialtyColor: "bg-red-500/20 text-red-300", bio: "Your go-to guide for Detroit's food scene. From greasy spoons to gourmet dining, I'm eating my way through the city one bite at a time.", subscriberCount: 18400, videoCount: 112 },
    { id: 2, name: "Detroit Dabs", handle: "@detroitdabs", avatarEmoji: "\u{1F33F}", bannerGradient: "from-emerald-500/20 to-green-500/20", specialty: "Cannabis Education", specialtyColor: "bg-green-500/20 text-green-300", bio: "Exploring the world of cannabis with a focus on education, strain reviews, and responsible consumption. Learn and vibe with me.", subscriberCount: 26200, videoCount: 238 },
    { id: 3, name: "Explore Detroit", handle: "@exploredetroit", avatarEmoji: "\u{1F3D9}\uFE0F", bannerGradient: "from-sky-500/20 to-indigo-500/20", specialty: "City Vlogging", specialtyColor: "bg-sky-500/20 text-sky-300", bio: "Showcasing the art, culture, and hidden gems of Detroit. Follow along for event coverage and local business spotlights.", subscriberCount: 9800, videoCount: 76 }
  ];
  const recentVideos = Array(12).fill(null).map((_, i) => ({
    id: i + 4,
    title: [`Cannabis Strain Review: Blue Dream`, `How to Roll the Perfect Joint`, `Top 5 Detroit Coffee Shops`, `Food Truck Festival Highlights`, `Downtown Detroit Dispensary Tour`, `Cooking with Cannabis: Basics`, `Local Artist Spotlight`, `Morning Routine at Coffee House Detroit`, `Product Unboxing: New Vape Pen`, `Late Night Food Options in Detroit`, `DIY Cannabis Tinctures`, `Weekend Events Roundup`][i],
    business: [`Detroit Dabs`, `Detroit Dabs`, `Motor City Muncher`, `Motor City Muncher`, `Detroit Dabs`, `The Canna-seur`, `Explore Detroit`, `Motor City Muncher`, `The Canna-seur`, `Motor City Muncher`, `The Canna-seur`, `Explore Detroit`][i],
    duration: [`3:45`, `1:20`, `4:10`, `2:35`, `5:15`, `8:20`, `2:45`, `0:58`, `6:32`, `1:45`, `7:15`, `3:20`][i],
    date: new Date(2025, 5, 24 - i * 2).toISOString().split("T")[0],
    category: [`cannabis`, `cannabis`, `food`, `food`, `cannabis`, `cannabis`, `local`, `food`, `cannabis`, `food`, `cannabis`, `events`][i]
  }));
  creators.forEach((creator) => {
    creator.latestVideos = recentVideos.filter((v) => v.business === creator.name).slice(0, 2);
  });
  const categories = [{ id: "all", label: "All Videos" }, { id: "cannabis", label: "Cannabis" }, { id: "food", label: "Food & Drink" }, { id: "local", label: "Local Businesses" }, { id: "events", label: "Events" }];
  const videoShorts = [
    { id: "short-1", title: "Perfect Pizza Slice", creator: "@mcmuncher", icon: "\u{1F355}", gradient: "from-orange-500 to-red-500", videoUrl: "/videos/sample-1.mp4" },
    { id: "short-2", title: "Rolling Technique", creator: "@detroitdabs", icon: "\u{1F33F}", gradient: "from-emerald-500 to-green-500", videoUrl: "/videos/sample-2.mp4" },
    { id: "short-3", title: "Coffee Art", creator: "@mcmuncher", icon: "\u2615", gradient: "from-amber-500 to-yellow-500", videoUrl: "/videos/sample-3.mp4" },
    { id: "short-4", title: "Street Art Tour", creator: "@exploredetroit", icon: "\u{1F3A8}", gradient: "from-sky-500 to-indigo-500", videoUrl: "/videos/sample-4.mp4" },
    { id: "short-5", title: "Best Edibles?", creator: "@detroitdabs", icon: "\u{1F36C}", gradient: "from-lime-500 to-emerald-500", videoUrl: "/videos/sample-5.mp4" },
    { id: "short-6", title: "Concert Clip", creator: "@exploredetroit", icon: "\u{1F3A4}", gradient: "from-purple-500 to-pink-500", videoUrl: "/videos/sample-6.mp4" }
  ];
  const gradients = ["from-pink-500/20 to-purple-500/20", "from-emerald-500/20 to-teal-500/20", "from-sky-500/20 to-indigo-500/20"];
  const tools = [
    {
      name: "Midjourney",
      icon: "\u26F5\uFE0F",
      description: "The industry-leading platform for crafting breathtaking, high-resolution images from simple text prompts.",
      tags: ["Image", "Art"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      name: "OpenAI Sora",
      icon: "\u{1F3AC}",
      description: "A revolutionary text-to-video model that generates cinematic, high-fidelity video clips from your imagination.",
      tags: ["Video", "Cinematic"],
      gradient: "from-teal-500/20 to-cyan-500/20"
    },
    {
      name: "Suno",
      icon: "\u{1F3B5}",
      description: "Create radio-quality music in any genre, complete with custom lyrics and vocals, in just a matter of seconds.",
      tags: ["Music", "Audio"],
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      name: "ElevenLabs",
      icon: "\u{1F3A4}",
      description: "The premier toolkit for generating ultra-realistic text-to-speech and cloning voices for any project.",
      tags: ["Voice", "Audio"],
      gradient: "from-rose-500/20 to-pink-500/20"
    }
  ];
  const allPageData = {
    categories,
    recentVideos,
    videoShorts,
    gradients,
    tools
    // <-- Make sure this is included
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Videos | Creative Showcase", "class": "bg-gray-950" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VideoPageLayout", VideoPageLayout, { "client:load": true, "data": allPageData, "client:component-hydration": "load", "client:component-path": "@/components/react/content/VideoPageLayout.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/videos.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
