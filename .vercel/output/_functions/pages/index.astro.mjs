import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, e as renderScript } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useState, useCallback, useEffect, useContext } from 'react';
import { F as FilteredContent } from '../chunks/FilteredContent_Dhi5pRd_.mjs';
import { C as CategoryGrid } from '../chunks/CategoryGrid_9jxwS1ke.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$HpHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HpHero;
  const { title, tagline, titleSlot } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-8"> <div class="max-w-7xl mx-auto px-4"> <div class="text-center mb-8"> <h1 class="text-4xl md:text-5xl font-black text-white mb-4"> ${title} ${titleSlot && renderTemplate`<span class="text-gradient-pink">${titleSlot}</span>`} </h1> <p class="text-lg text-gray-300 max-w-2xl mx-auto"> ${tagline} ✨
</p> </div> </div> </section>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/hp-hero.astro", void 0);

const Card = ({ children, className = "" }) => /* @__PURE__ */ jsx("div", { className: `relative w-full h-full rounded-xl overflow-hidden shadow-2xl ${className}`, children });
const CardContent = ({ children, className = "" }) => /* @__PURE__ */ jsx("div", { className: `flex h-full w-full items-center justify-center p-6 ${className}`, children });
const CarouselContext = React__default.createContext(null);
const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};
function FeaturedCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const count = slides ? slides.length : 0;
  const scrollPrev = useCallback(() => {
    setCurrent((prev) => prev === 0 ? count - 1 : prev - 1);
  }, [count]);
  const scrollNext = useCallback(() => {
    setCurrent((prev) => prev === count - 1 ? 0 : prev + 1);
  }, [count]);
  const scrollTo = useCallback((index) => {
    if (index >= 0 && index < count) {
      setCurrent(index);
    }
  }, [count]);
  useEffect(() => {
    const timer = setTimeout(() => scrollNext(), 7e3);
    return () => clearTimeout(timer);
  }, [current, scrollNext]);
  const contextValue = { current, count, scrollPrev, scrollNext, scrollTo };
  if (!slides || slides.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx(CarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx("section", { className: "w-full max-w-4xl mx-auto mb-16", children: /* @__PURE__ */ jsxs("div", { className: "relative group cursor-pointer", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-500 ease-in-out",
        style: { transform: `translateX(-${current * 100}%)` },
        children: slides.map((slide, index) => /* @__PURE__ */ jsx(CarouselItem, { slide }, index))
      }
    ) }),
    /* @__PURE__ */ jsx(ControlsAndIndicators, { slides })
  ] }) }) });
}
const CarouselItem = ({ slide }) => /* @__PURE__ */ jsx("div", { className: "min-w-full shrink-0 grow-0 basis-full", children: /* @__PURE__ */ jsx("div", { className: "aspect-video", children: /* @__PURE__ */ jsx(Card, { className: `bg-gradient-to-br ${slide.gradient}`, children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-200", children: [
  /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: slide.emoji }),
  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: slide.title })
] }) }) }) }) });
const ControlsAndIndicators = ({ slides }) => {
  const { current, count, scrollPrev, scrollNext, scrollTo } = useCarousel();
  const currentSlide = slides[current];
  const hasVideoFlag = currentSlide?.isVideo === true;
  const hasVideoUrl = currentSlide?.url && (currentSlide.url.includes("youtube.com") || currentSlide.url.includes("youtu.be") || currentSlide.url.includes("vimeo.com") || currentSlide.url.includes(".mp4") || currentSlide.url.includes(".webm") || currentSlide.url.includes(".mov") || currentSlide.url.includes(".avi"));
  const isVideoSlide = hasVideoFlag || hasVideoUrl;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isVideoSlide && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-white/90 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-black text-3xl ml-1", children: "▶" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded font-bold z-10", children: slides[current]?.label || "FEATURED" }),
    /* @__PURE__ */ jsx("button", { onClick: scrollPrev, className: "absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-white hover:bg-white/50 disabled:opacity-50 left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m15 18-6-6 6-6" }) }) }),
    /* @__PURE__ */ jsx("button", { onClick: scrollNext, className: "absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-white hover:bg-white/50 disabled:opacity-50 right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m9 18 6-6-6-6" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-2", children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => scrollTo(index),
        className: `h-2 rounded-full transition-all duration-300 ${current === index ? "w-6 bg-pink-500" : "w-2 bg-gray-600 hover:bg-gray-500"}`,
        "aria-label": `Go to slide ${index + 1}`
      },
      index
    )) })
  ] });
};

const ReelCard = ({ reel }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex-none w-48 sm:w-64 bg-gray-900/50 rounded-xl overflow-hidden cursor-pointer snap-start group transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105", children: [
    /* @__PURE__ */ jsxs("div", { className: `aspect-[9/16] bg-gradient-to-br ${reel.gradient} flex items-center justify-center relative`, children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-300", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2 transition-transform duration-300 group-hover:scale-110", children: reel.emoji }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: reel.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white/90 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-black text-xl ml-1", children: "▶" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md", children: reel.duration })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-white font-medium text-sm mb-1 truncate", children: reel.title }),
      /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-xs", children: [
        reel.user,
        " • ",
        reel.views,
        " views"
      ] })
    ] })
  ] });
};
function ReelsCarousel({ title = "AI Reels & Shorts", reels = [] }) {
  if (reels.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("section", { className: "bg-gray-900/20 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide", children: reels.map((reel, i) => /* @__PURE__ */ jsx(ReelCard, { reel }, reel.id || i)) })
  ] });
}

const CreatorCard = ({ creator }) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full", children: [
  /* @__PURE__ */ jsx("div", { className: `h-24 rounded-t-xl bg-gradient-to-br ${creator.bannerGradient}` }),
  /* @__PURE__ */ jsxs("div", { className: "flex-grow p-6 pt-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center -mt-12", children: /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center text-4xl shadow-lg", children: creator.avatarEmoji }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: creator.name }),
      /* @__PURE__ */ jsx("p", { className: "text-pink-400 text-sm", children: creator.handle }),
      /* @__PURE__ */ jsx("span", { className: `mt-3 inline-block text-xs font-medium px-3 py-1 rounded-full ${creator.specialtyColor}`, children: creator.specialty })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm text-center my-4 min-h-[4rem]", children: creator.bio }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-around text-center text-sm border-y border-gray-800 py-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-bold text-white", children: [
          (creator.subscriberCount / 1e3).toFixed(1),
          "K"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Subscribers" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: creator.videoCount }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Videos" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "p-4 mt-auto", children: /* @__PURE__ */ jsx("button", { className: "w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-pink-600 text-white shadow hover:bg-pink-500 transition-colors", children: "View Channel" }) })
] });
function CommunityCarousel({ title = "Featured Communities", description = "Meet the voices and visionaries behind the content.", creators = [] }) {
  if (!creators || creators.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-6 mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide", children: creators.map((creator) => (
      // Each card is now a flex item with a defined width
      /* @__PURE__ */ jsx("div", { className: "flex-none w-80 snap-start", children: /* @__PURE__ */ jsx(CreatorCard, { creator }) }, creator.id)
    )) })
  ] });
}

function NewsletterSignUp({
  titleLine1 = "Get the Best of AI,",
  titleLine2 = "Delivered.",
  description = "Join our weekly newsletter for a curated roundup of the most inspiring creations, creator spotlights, and breaking AI tool news."
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");
    console.log("Subscribing with email:", email);
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-900 rounded-2xl border border-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-5xl mb-4", "aria-hidden": "true", children: "💌" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: [
      titleLine1,
      " ",
      /* @__PURE__ */ jsx("span", { style: { backgroundImage: "linear-gradient(to right, #ec4899, #d946ef)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }, children: titleLine2 })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mt-4 mb-8", children: description }),
    status === "success" ? /* @__PURE__ */ jsx("div", { className: "text-center text-lg font-semibold text-green-400 bg-green-500/10 py-4 rounded-lg", children: "Thanks for subscribing! 🎉" }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email-address",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            disabled: status === "loading",
            className: "flex-auto w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 disabled:opacity-50",
            placeholder: "your.email@example.com"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "loading",
            className: "flex-none inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 transition-colors duration-200 disabled:bg-pink-800 disabled:cursor-not-allowed",
            children: status === "loading" ? "Subscribing..." : "Subscribe"
          }
        )
      ] }),
      status === "error" && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 mt-2", children: "Please enter a valid email address." }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-4", children: "No spam, ever. Unsubscribe in a single click." })
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredSlides = [
    {
      label: "FEATURED",
      title: "Mind-Bending AI Video",
      emoji: "\u{1F3AC}",
      gradient: "from-blue-600/40 to-indigo-600/40"
    },
    {
      label: "COMMUNITY PICK",
      title: "AI Rock Revolution",
      emoji: "\u{1F3B8}",
      gradient: "from-purple-600/40 to-pink-600/40"
    },
    {
      label: "STAFF PICK",
      title: "The Last Algorithm",
      emoji: "\u{1F4D6}",
      gradient: "from-emerald-600/40 to-teal-600/40"
    }
  ];
  const shareImage = "/images/social/home-page-share-image.jpg";
  const shareDescription = "A warm, visual community for Machine Creativity and AI-generated content. Discover amazing creations made with your favorite AI tools.";
  const reelsData = [
    { id: "reel-1", emoji: "\u{1F3A8}", title: "Quick Art", user: "@QuickArtist", views: "2.1K", duration: "0:30", gradient: "from-purple-600/30 to-pink-600/30" },
    { id: "reel-2", emoji: "\u{1F3B5}", title: "Beat Drop", user: "@BeatMaker", views: "1.8K", duration: "0:15", gradient: "from-emerald-600/30 to-blue-600/30" },
    { id: "reel-3", emoji: "\u{1F916}", title: "Code Magic", user: "@CodeWizard", views: "950", duration: "0:45", gradient: "from-red-600/30 to-orange-600/30" },
    { id: "reel-4", emoji: "\u2728", title: "Transform", user: "@StyleTransfer", views: "3.4K", duration: "0:20", gradient: "from-yellow-600/30 to-orange-600/30" },
    { id: "reel-5", emoji: "\u{1F3AC}", title: "Quick Edit", user: "@EditBot", views: "1.2K", duration: "0:25", gradient: "from-indigo-600/30 to-purple-600/30" },
    { id: "reel-6", emoji: "\u{1F9E0}", title: "Mind Meld", user: "@MindReader", views: "4.2K", duration: "0:35", gradient: "from-teal-600/30 to-cyan-600/30" }
  ];
  const recentVideos = Array(12).fill(null).map((_, i) => ({
    id: i + 4,
    title: [`Cannabis Strain Review: Blue Dream`, `How to Roll the Perfect Joint`, `Top 5 Detroit Coffee Shops`, `Food Truck Festival Highlights`, `Downtown Detroit Dispensary Tour`, `Cooking with Cannabis: Basics`, `Local Artist Spotlight`, `Morning Routine at Coffee House Detroit`, `Product Unboxing: New Vape Pen`, `Late Night Food Options in Detroit`, `DIY Cannabis Tinctures`, `Weekend Events Roundup`][i],
    business: [`Detroit Dabs`, `Detroit Dabs`, `Motor City Muncher`, `Motor City Muncher`, `Detroit Dabs`, `The Canna-seur`, `Explore Detroit`, `Motor City Muncher`, `The Canna-seur`, `Motor City Muncher`, `The Canna-seur`, `Explore Detroit`][i],
    duration: [`3:45`, `1:20`, `4:10`, `2:35`, `5:15`, `8:20`, `2:45`, `0:58`, `6:32`, `1:45`, `7:15`, `3:20`][i],
    date: new Date(2025, 5, 24 - i * 2).toISOString().split("T")[0],
    category: [`videos`, `videos`, `photos`, `photos`, `videos`, `videos`, `events`, `photos`, `videos`, `photos`, `videos`, `events`][i]
  }));
  const gradients = [
    "from-pink-500/20 to-purple-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-sky-500/20 to-indigo-500/20"
  ];
  const creators = [
    { id: 1, name: "Motor City Muncher", handle: "@mcmuncher", avatarEmoji: "\u{1F355}", bannerGradient: "from-orange-500/20 to-red-500/20", specialty: "Food Reviews", specialtyColor: "bg-red-500/20 text-red-300", bio: "Your go-to guide for Detroit's food scene. From greasy spoons to gourmet dining, I'm eating my way through the city one bite at a time.", subscriberCount: 18400, videoCount: 112, latestVideos: recentVideos.filter((v) => v.business === "Motor City Muncher").slice(0, 2) },
    { id: 2, name: "Detroit Dabs", handle: "@detroitdabs", avatarEmoji: "\u{1F33F}", bannerGradient: "from-emerald-500/20 to-green-500/20", specialty: "Cannabis Education", specialtyColor: "bg-green-500/20 text-green-300", bio: "Exploring the world of cannabis with a focus on education, strain reviews, and responsible consumption. Learn and vibe with me.", subscriberCount: 26200, videoCount: 238, latestVideos: recentVideos.filter((v) => v.business === "Detroit Dabs").slice(0, 2) },
    { id: 3, name: "Explore Detroit", handle: "@exploredetroit", avatarEmoji: "\u{1F3D9}\uFE0F", bannerGradient: "from-sky-500/20 to-indigo-500/20", specialty: "City Vlogging", specialtyColor: "bg-sky-500/20 text-sky-300", bio: "Showcasing the art, culture, and hidden gems of Detroit. Follow along for event coverage and local business spotlights.", subscriberCount: 9800, videoCount: 76, latestVideos: recentVideos.filter((v) => v.business === "Explore Detroit").slice(0, 2) },
    { id: 4, name: "The Canna-seur", handle: "@thecannaseur", avatarEmoji: "\u{1F9D1}\u200D\u{1F373}", bannerGradient: "from-amber-500/20 to-yellow-500/20", specialty: "Cannabis Cooking", specialtyColor: "bg-amber-500/20 text-amber-300", bio: "From gourmet meals to simple tinctures, I'm exploring the art and science of cannabis-infused cuisine.", subscriberCount: 15100, videoCount: 88 },
    { id: 5, name: "Detroit Auto Scene", handle: "@detroitautoscene", avatarEmoji: "\u{1F697}", bannerGradient: "from-gray-500/20 to-slate-500/20", specialty: "Auto Vlogging", specialtyColor: "bg-gray-500/20 text-gray-300", bio: "Car reviews, custom builds, and coverage of every auto event that makes the Motor City roar. Vroom vroom.", subscriberCount: 31500, videoCount: 152 }
  ];
  const categories = [{ id: "all", label: "All" }, { id: "photos", label: "Photos" }, { id: "videos", label: "Videos" }, { id: "music", label: "Audio" }, { id: "3d-models", label: "3D Models" }, { id: "words", label: "Words" }];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Meat - The home for Machine Creativity", "description": shareDescription, "shareImage": shareImage, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HpHero, { "title": "Welcome to ", "titleSlot": "Meat", "tagline": "The cozy corner of the internet for Machine Creativity", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FeaturedCarousel", FeaturedCarousel, { "client:load": true, "slides": featuredSlides, "client:component-hydration": "load", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/content/FeaturedCarousel.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 space-y-16" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FilteredContent", FilteredContent, { "client:load": true, "categories": categories, "videos": recentVideos, "gradients": gradients, "client:component-hydration": "load", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/content/FilteredContent.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ReelsCarousel", ReelsCarousel, { "client:visible": true, "reels": reelsData, "title": "AI Reels & Shorts", "client:component-hydration": "visible", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/content/ReelsCarousel.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CommunityCarousel", CommunityCarousel, { "client:visible": true, "creators": creators, "title": "Featured Communities", "description": "Meet the voices and visionaries behind the content.", "client:component-hydration": "visible", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/content/CommunityCarousel.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoryGrid", CategoryGrid, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/discovery/CategoryGrid.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "NewsletterSignUp", NewsletterSignUp, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/ui/NewsletterSignUp.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })}  </div> ` })}  ${renderScript($$result, "/Users/Zach/Github_Projects/meat-machine/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/index.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
