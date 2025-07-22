import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { B as Button, $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import '../../chunks/label_CSm-QMlh.mjs';
import '../../chunks/textarea_CMBKWg9Z.mjs';
export { renderers } from '../../renderers.mjs';

const tabs = [
  { id: "profile", name: "Profile", icon: "👤" },
  { id: "stats", name: "Stats & Analytics", icon: "📊" },
  { id: "uploads", name: "Your Uploads", icon: "☁️" },
  { id: "saved", name: "Saved", icon: "❤️" },
  { id: "settings", name: "Settings", icon: "⚙️", href: "/creator/settings" }
];
const user = {
  name: "Pixel_Prophet",
  username: "pixel_prophet",
  avatarEmoji: "🔮",
  bio: "Weaving dreams into digital tapestries. Specializing in surreal and fantasy landscapes that tell a story with AI.",
  stats: {
    totalViews: "1.2M",
    followers: "28.4k",
    creations: 128
  },
  creations: [
    { id: 1, title: "Celestial Spire", type: "Image", date: "2025-06-28", views: "15.2k", status: "Published" },
    { id: 2, title: "The Whispering Woods", type: "Video", date: "2025-06-25", views: "88.7k", status: "Published" },
    { id: 3, title: "On the Art of Prompting", type: "Article", date: "2025-06-22", views: "5.1k", status: "Published" },
    { id: 4, title: "City of Glass - Concept", type: "Image", date: "2025-06-20", views: "1.8k", status: "Draft" }
  ],
  savedCreations: [
    { id: 5, title: "Cybernetic Dreams", type: "Image", author: "NeuroMancer", emoji: "🤖" },
    { id: 6, title: "Forest Symphony", type: "Music", author: "AudioAlchemist", emoji: "🎶" },
    { id: 7, title: "A.I. Love Story", type: "Video", author: "KinoGen", emoji: "❤️" }
  ]
};
function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return /* @__PURE__ */ jsx(ProfileOverview, { user });
      case "stats":
        return /* @__PURE__ */ jsx(StatsAndAnalytics, {});
      case "uploads":
        return /* @__PURE__ */ jsx(YourUploads, { creations: user.creations });
      case "saved":
        return /* @__PURE__ */ jsx(SavedContent, { savedCreations: user.savedCreations });
      default:
        return /* @__PURE__ */ jsx(ProfileOverview, { user });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: "Dashboard" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-400 mt-1", children: [
        "Welcome back, ",
        user.name,
        "!"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("nav", { className: "sticky top-24 space-y-1", children: [
        tabs.map((tab) => {
          if (tab.href) {
            return /* @__PURE__ */ jsxs(
              "a",
              {
                href: tab.href,
                className: "flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: tab.icon }),
                  /* @__PURE__ */ jsx("span", { children: tab.name })
                ]
              },
              tab.id
            );
          }
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveTab(tab.id),
              className: `flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", children: tab.icon }),
                /* @__PURE__ */ jsx("span", { children: tab.name })
              ]
            },
            tab.id
          );
        }),
        /* @__PURE__ */ jsx("div", { className: "pt-2 mt-2 border-t border-gray-800", children: /* @__PURE__ */ jsxs("a", { href: `/creator/${user.username}`, className: "flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl", children: "👀" }),
          /* @__PURE__ */ jsx("span", { children: "View Your Profile" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "lg:col-span-3", children: renderContent() })
    ] })
  ] });
}
const ProfileOverview = ({ user: user2 }) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-5xl flex-shrink-0", children: user2.avatarEmoji }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: user2.name }),
      /* @__PURE__ */ jsxs("p", { className: "text-pink-400", children: [
        "@",
        user2.username
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Bio" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400 mt-1", children: user2.bio })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-800 flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/settings/profile", children: "Edit Profile" }) }) })
] });
const StatsAndAnalytics = () => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Stats & Analytics" }),
  /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-500 py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "text-4xl mb-4", children: "📈" }),
    /* @__PURE__ */ jsx("p", { children: "Detailed analytics are coming soon!" })
  ] })
] });
const YourUploads = ({ creations }) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Your Uploads" }),
    /* @__PURE__ */ jsx(Button, { children: "Upload New" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "bg-gray-900 border border-gray-800 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-800", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-gray-800/50", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider", children: "Title" }),
      /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider", children: "Status" }),
      /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider", children: "Views" }),
      /* @__PURE__ */ jsx("th", { scope: "col", className: "relative px-6 py-3", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Actions" }) })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-800", children: creations.map((creation) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-white", children: creation.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
          creation.type,
          " - ",
          creation.date
        ] })
      ] }),
      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${creation.status === "Published" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"}`, children: creation.status }) }),
      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-300", children: creation.views }),
      /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Edit" }),
        /* @__PURE__ */ jsx(Button, { variant: "destructive", size: "sm", children: "Delete" })
      ] })
    ] }, creation.id)) })
  ] }) })
] });
const SavedContent = ({ savedCreations }) => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Saved Creations" }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: savedCreations.map((item) => /* @__PURE__ */ jsxs("a", { href: "#", className: "group bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-pink-500/30 transition-all duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-video bg-gray-800 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-4xl", children: item.emoji }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-white truncate group-hover:text-pink-400", children: item.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400", children: [
        "by ",
        item.author
      ] })
    ] })
  ] }, item.id)) })
] });

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardPage", DashboardPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/profile/Dashboard.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/dashboard.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/dashboard.astro";
const $$url = "/creator/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
