import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { c as cn, B as Button, s as supabase, $ as $$Layout } from '../../chunks/layout_0jEJ4wg3.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { L as Label, I as Input } from '../../chunks/label_CSm-QMlh.mjs';
import { T as Textarea } from '../../chunks/textarea_CMBKWg9Z.mjs';
import * as SwitchPrimitives from '@radix-ui/react-switch';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const tabs = [
  { id: "profile", name: "Profile" },
  { id: "account", name: "Account" },
  { id: "notifications", name: "Notifications" },
  { id: "billing", name: "Billing" }
];
function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return /* @__PURE__ */ jsx(ProfileSettings, {});
      case "account":
        return /* @__PURE__ */ jsx(AccountSettings, {});
      case "notifications":
        return /* @__PURE__ */ jsx(NotificationSettings, {});
      case "billing":
        return /* @__PURE__ */ jsx(BillingSettings, {});
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: "Settings" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mt-1", children: "Manage your account and site preferences." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsx("nav", { className: "sticky top-24 space-y-1", children: tabs.map((tab) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50 hover:text-white"}`,
          children: tab.name
        },
        tab.id
      )) }) }),
      /* @__PURE__ */ jsx("main", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8", children: renderContent() }) })
    ] })
  ] });
}
const ProfileSettings = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    username: "",
    bio: "",
    donation_url: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error: error2 } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        if (error2) {
          setError("Could not fetch your profile.");
        } else if (data) {
          setProfile({
            username: data.username || "",
            bio: data.bio || "",
            donation_url: data.donation_url || ""
          });
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };
  const handleSave = async () => {
    setLoading(true);
    setMessage("");
    setError("");
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error: updateError } = await supabase.from("profiles").update({
        username: profile.username,
        bio: profile.bio,
        donation_url: profile.donation_url
      }).eq("id", user.id);
      if (updateError) {
        setError(updateError.message);
      } else {
        setMessage("Profile saved successfully!");
      }
    }
    setLoading(false);
  };
  if (loading && !profile.username) {
    return /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Loading profile..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Public Profile" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "This information will be displayed publicly on your profile page." }),
    /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-800 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "Username" }),
        /* @__PURE__ */ jsx(Input, { id: "username", value: profile.username, onChange: handleChange, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "bio", children: "Bio" }),
        /* @__PURE__ */ jsx(Textarea, { id: "bio", value: profile.bio, onChange: handleChange, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "donation_url", children: "Donation Link (e.g., Buy Me a Coffee)" }),
        /* @__PURE__ */ jsx(Input, { id: "donation_url", type: "url", value: profile.donation_url, onChange: handleChange, placeholder: "https://...", className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Avatar" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-3xl", children: "🔮" }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Upload New" })
        ] })
      ] })
    ] }),
    message && /* @__PURE__ */ jsx("p", { className: "text-sm text-green-400", children: message }),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400", children: error }),
    /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-800 flex justify-end", children: /* @__PURE__ */ jsx(Button, { onClick: handleSave, disabled: loading, children: loading ? "Saving..." : "Save Profile" }) })
  ] });
};
const AccountSettings = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Account Settings" }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Manage your login credentials and account security." }),
  /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-800 space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address" }),
      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", defaultValue: "pixel.prophet@example.com", className: "mt-1", readOnly: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "new-password", children: "New Password" }),
      /* @__PURE__ */ jsx(Input, { id: "new-password", type: "password", placeholder: "••••••••", className: "mt-1" })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-800 flex justify-end", children: /* @__PURE__ */ jsx(Button, { children: "Update Account" }) }),
  /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-red-500/30", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-red-400", children: "Danger Zone" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mt-1", children: "Deleting your account is permanent and cannot be undone." }),
    /* @__PURE__ */ jsx(Button, { variant: "destructive", className: "mt-4", children: "Delete Account" })
  ] })
] });
const NotificationSettings = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Notifications" }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Choose how you want to be notified." }),
  /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-800 space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "comments-notification", children: "Comments" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "When someone comments on your creations." })
      ] }),
      /* @__PURE__ */ jsx(Switch, { id: "comments-notification", defaultChecked: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "follows-notification", children: "New Followers" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "When a new user follows you." })
      ] }),
      /* @__PURE__ */ jsx(Switch, { id: "follows-notification", defaultChecked: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "newsletter-notification", children: "Weekly Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Our roundup of the best new content." })
      ] }),
      /* @__PURE__ */ jsx(Switch, { id: "newsletter-notification" })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-800 flex justify-end", children: /* @__PURE__ */ jsx(Button, { children: "Save Preferences" }) })
] });
const BillingSettings = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Billing" }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Manage your subscriptions and payment methods." }),
  /* @__PURE__ */ jsx("div", { className: "pt-6 border-t border-gray-800 text-center text-gray-500", children: /* @__PURE__ */ jsx("p", { children: "(Billing and subscription management features are coming soon!)" }) })
] });

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsPage", SettingsPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/settings/SettingsPage", "client:component-export": "default" })} ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/settings.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/creator/settings.astro";
const $$url = "/creator/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
