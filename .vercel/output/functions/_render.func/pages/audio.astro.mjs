import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Play, Search, Heart, Download, ListVideo, Wifi } from 'lucide-react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function AudioHero({ track }) {
  if (!track) return null;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative rounded-xl overflow-hidden p-8 flex items-end min-h-[400px] bg-cover bg-center",
      style: { backgroundImage: `url(${track.imageUrl})` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-white", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-widest text-pink-400", children: "Featured Track" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black my-2", children: track.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-300", children: [
            "by ",
            track.creator,
            " using ",
            track.tool
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "mt-6 flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-colors", children: [
            /* @__PURE__ */ jsx(Play, {}),
            "Play Now"
          ] })
        ] })
      ]
    }
  );
}

function AudioFilters({ onFilterChange }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex-grow", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search for tracks, artists, moods...",
          className: "w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs("select", { className: "bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none", children: [
        /* @__PURE__ */ jsx("option", { children: "Type: All" }),
        /* @__PURE__ */ jsx("option", { children: "Music" }),
        /* @__PURE__ */ jsx("option", { children: "SFX" }),
        /* @__PURE__ */ jsx("option", { children: "Voice" })
      ] }),
      /* @__PURE__ */ jsxs("select", { className: "bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none", children: [
        /* @__PURE__ */ jsx("option", { children: "Genre: All" }),
        /* @__PURE__ */ jsx("option", { children: "Electronic" }),
        /* @__PURE__ */ jsx("option", { children: "Lofi" }),
        /* @__PURE__ */ jsx("option", { children: "Cinematic" })
      ] })
    ] })
  ] });
}

const Waveform = ({ data }) => /* @__PURE__ */ jsx("div", { className: "w-full h-12 flex items-end gap-px", children: data.map((val, i) => /* @__PURE__ */ jsx(
  "div",
  {
    className: "bg-gray-500 w-full",
    style: { height: `${val * 100}%` }
  },
  i
)) });
function TrackItem({ track }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-pink-500/50 transition-colors", children: [
    /* @__PURE__ */ jsx("button", { className: "w-12 h-12 flex-shrink-0 bg-pink-600 rounded-md flex items-center justify-center hover:bg-pink-500", children: /* @__PURE__ */ jsx(Play, { className: "text-white" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: track.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: track.creator })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex items-center gap-2 text-sm text-gray-400", children: track.moods.map((mood) => /* @__PURE__ */ jsx("span", { className: "bg-gray-700/50 px-2 py-1 rounded text-xs", children: mood }, mood)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Waveform, { data: track.waveform }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-gray-400", children: [
      /* @__PURE__ */ jsx("span", { className: "hidden md:inline-block text-sm", children: track.duration }),
      /* @__PURE__ */ jsx("button", { className: "hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Heart, { size: 18 }) }),
      /* @__PURE__ */ jsx("button", { className: "hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Download, { size: 18 }) })
    ] })
  ] });
}

function TrackList({ tracks = [] }) {
  return /* @__PURE__ */ jsx("div", { className: "space-y-3", children: tracks.map((track) => /* @__PURE__ */ jsx(TrackItem, { track }, track.id)) });
}

function ThemedCollection({ data }) {
  return /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-emerald-900/30 to-gray-900/30 rounded-2xl p-8 md:p-12 border border-emerald-500/20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ListVideo, { size: 16 }),
        "Themed Collection"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-white mb-4", children: data.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: data.description }),
      /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-colors", children: [
        /* @__PURE__ */ jsx(Play, {}),
        "Play Collection"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-950/30 p-6 rounded-lg", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-bold mb-4", children: "What's Inside:" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: data.videos.map((video) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center text-sm border-b border-gray-800 pb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: video.title }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: video.duration })
      ] }, video.id)) })
    ] })
  ] }) });
}

function FeaturedPlaylists({ data }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: "Curated Playlists" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: data.map((playlist) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#",
        className: `flex items-center gap-4 p-4 rounded-xl ${playlist.color} hover:scale-105 transition-transform duration-300`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl", children: playlist.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: playlist.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-white/70", children: [
              playlist.trackCount,
              " tracks"
            ] })
          ] })
        ]
      },
      playlist.name
    )) })
  ] });
}

const ChatMessage = ({ msg }) => /* @__PURE__ */ jsxs("div", { className: "text-sm mb-2", children: [
  /* @__PURE__ */ jsxs("span", { className: "font-bold opacity-70 mr-2", children: [
    msg.user,
    ":"
  ] }),
  /* @__PURE__ */ jsx("span", { children: msg.message })
] });
function LivePremiere({ data }) {
  if (!data) return null;
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-2xl aspect-video p-4 flex items-center justify-center relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: data.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-400 mb-6", children: [
          "by ",
          data.creator
        ] }),
        /* @__PURE__ */ jsx("button", { className: "w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform", children: /* @__PURE__ */ jsx(Play, { size: 40, className: "ml-2" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-md flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Wifi, { size: 14 }),
        "LIVE"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 text-white text-sm font-medium", children: [
        data.liveViewers.toLocaleString(),
        " viewers"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 border border-gray-800 rounded-2xl flex flex-col h-[400px] lg:h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 border-b border-gray-700", children: /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-center", children: "Live Chat" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-grow p-4 space-y-3 overflow-y-auto", children: data.chatMessages.map((msg, i) => /* @__PURE__ */ jsx(ChatMessage, { msg }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "p-2 border-t border-gray-700", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Say something...",
          className: "w-full bg-gray-800 text-sm border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        }
      ) })
    ] })
  ] }) });
}

function TopCreators({ data }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: "Top Audio Creators" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: data.map((creator) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "text-center bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 mx-auto rounded-full bg-gray-800 flex items-center justify-center text-4xl mb-4", children: creator.avatar }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: creator.name }),
          /* @__PURE__ */ jsx("p", { className: "text-pink-400 text-sm", children: creator.specialty }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "btn-ghost mt-6", children: "View Profile" })
        ]
      },
      creator.name
    )) })
  ] });
}

const TrackCard = ({ track }) => /* @__PURE__ */ jsxs("div", { className: "flex-none w-48 group", children: [
  /* @__PURE__ */ jsxs("div", { className: "aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-5xl mb-3 relative", children: [
    track.coverEmoji,
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsx("button", { className: "w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Play, { className: "ml-1" }) }) })
  ] }),
  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white truncate", children: track.title }),
  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: track.artist })
] });
function GenreCarousel({ title, tracks = [] }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-6 overflow-x-auto pb-4 scrollbar-hide", children: tracks.map((track) => /* @__PURE__ */ jsx(TrackCard, { track }, track.id)) })
  ] });
}

function SoundEffectsBank({ data }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: "Sound Effects Library" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: data.map((sfx) => /* @__PURE__ */ jsxs(
      "button",
      {
        className: "bg-gray-800 text-gray-300 hover:bg-pink-600 hover:text-white transition-colors px-4 py-2 rounded-full flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsx("span", { children: sfx.icon }),
          /* @__PURE__ */ jsx("span", { children: sfx.name })
        ]
      },
      sfx.name
    )) })
  ] });
}

function AudioPageLayout({ data }) {
  const {
    tracks,
    featuredTrack,
    themedCollection,
    playlists,
    livePremiereData,
    topCreators,
    electronicTracks,
    lofiTracks,
    soundEffects
  } = data;
  const [filteredTracks, setFilteredTracks] = useState(tracks);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-12", children: [
    /* @__PURE__ */ jsx(AudioHero, { track: featuredTrack }),
    /* @__PURE__ */ jsx(AudioFilters, { onFilterChange: (filters) => console.log(filters) }),
    /* @__PURE__ */ jsx(TrackList, { tracks: filteredTracks }),
    /* @__PURE__ */ jsx(LivePremiere, { data: livePremiereData }),
    /* @__PURE__ */ jsx(FeaturedPlaylists, { data: playlists }),
    /* @__PURE__ */ jsx(ThemedCollection, { data: themedCollection }),
    /* @__PURE__ */ jsx(GenreCarousel, { title: "Trending in Electronic", tracks: electronicTracks }),
    /* @__PURE__ */ jsx(TopCreators, { data: topCreators }),
    /* @__PURE__ */ jsx(GenreCarousel, { title: "New in Lo-Fi", tracks: lofiTracks }),
    /* @__PURE__ */ jsx(SoundEffectsBank, { data: soundEffects })
  ] });
}

const $$Audio = createComponent(($$result, $$props, $$slots) => {
  const featuredTrack = {
    /* ... a single track object ... */
  };
  const audioTracks = [
    /* ... array of all tracks for the main list ... */
  ];
  const themedCollection = {
    title: "The Canna-seur's Guide to Edibles",
    description: "A curated collection of videos covering everything from cooking basics to advanced infusion techniques.",
    videos: [
      { id: "th-1", title: "Cooking with Cannabis: The Basics", duration: "8:20" },
      { id: "th-2", title: "DIY Tinctures & Oils", duration: "7:15" },
      { id: "th-3", title: "Gourmet Gummy Recipe", duration: "12:45" }
    ]
  };
  const playlists = [
    { name: "Focus & Study", icon: "\u{1F4DA}", color: "bg-blue-600", trackCount: 42 },
    { name: "Workout Fuel", icon: "\u{1F4AA}", color: "bg-red-600", trackCount: 35 },
    { name: "Late Night Chill", icon: "\u{1F319}", color: "bg-indigo-600", trackCount: 50 },
    { name: "Epic Adventures", icon: "\u{1F5FA}\uFE0F", color: "bg-amber-600", trackCount: 28 }
  ];
  const topCreators = [
    { name: "SynthWaveSurfer", avatar: "\u{1F916}", specialty: "Retrowave" },
    { name: "AmbientDreamer", avatar: "\u{1F9E0}", specialty: "Soundscapes" }
    // ... more creators
  ];
  const electronicTracks = [
    { id: 1, title: "Quantum Echoes", artist: "Void Traveler", coverEmoji: "\u{1F4A0}" },
    { id: 2, title: "Neon Interlude", artist: "SynthWaveSurfer", coverEmoji: "\u{1F47E}" }
    // ... more electronic tracks
  ];
  const lofiTracks = [
    { id: 5, title: "Rainy Day Cafe", artist: "ChillBot", coverEmoji: "\u2615" }
    // ... more lofi tracks
  ];
  const soundEffects = [
    { name: "Laser Blast", icon: "\u{1F4A5}" },
    { name: "Computer Glitch", icon: "\u{1F916}" }
    // ... more sound effects
  ];
  const allPageData = {
    tracks: audioTracks,
    featuredTrack,
    playlists,
    topCreators,
    electronicTracks,
    lofiTracks,
    soundEffects,
    themedCollection
    // <-- Make sure this line is here
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AI Audio Hub", "class": "bg-gray-950 text-white" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AudioPageLayout", AudioPageLayout, { "client:load": true, "data": allPageData, "client:component-hydration": "load", "client:component-path": "@/components/react/content/AudioPageLayout.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/audio.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/audio.astro";
const $$url = "/audio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Audio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
