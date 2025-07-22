import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { B as Button, s as supabase, $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { L as Label, I as Input } from '../chunks/label_CSm-QMlh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const GoogleIcon = () => /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 48 48", children: [
  /* @__PURE__ */ jsx("path", { fill: "#FFC107", d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" }),
  /* @__PURE__ */ jsx("path", { fill: "#FF3D00", d: "M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" }),
  /* @__PURE__ */ jsx("path", { fill: "#4CAF50", d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.319-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" }),
  /* @__PURE__ */ jsx("path", { fill: "#1976D2", d: "M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.999 36.657 44 30.833 44 24c0-1.341-.138-2.65-.389-3.917z" })
] });
function AuthForm({ defaultMode = "signUp" }) {
  const [isSignUp, setIsSignUp] = useState(defaultMode === "signUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username
            }
          }
        });
        if (signUpError) throw signUpError;
        setMessage("Check your email for the confirmation link!");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (signInError) throw signInError;
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error: error2 } = await supabase.auth.signInWithOAuth({
      provider: "google"
    });
    if (error2) {
      setError(error2.message);
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: isSignUp ? "Create an Account" : "Sign In" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: isSignUp ? "Join the community to start creating." : "Welcome back!" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      isSignUp && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "Username" }),
        /* @__PURE__ */ jsx(Input, { id: "username", type: "text", value: username, onChange: (e) => setUsername(e.target.value), required: true, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative my-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-gray-700" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsx("span", { className: "bg-gray-900 px-2 text-gray-500", children: "OR" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: handleGoogleSignIn, disabled: loading, className: "w-full", children: [
      /* @__PURE__ */ jsx(GoogleIcon, {}),
      /* @__PURE__ */ jsx("span", { className: "ml-2", children: isSignUp ? "Sign up with Google" : "Sign in with Google" })
    ] }) }),
    message && /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-green-400", children: message }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-red-400", children: error }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsSignUp(!isSignUp), className: "text-sm text-pink-400 hover:underline", children: isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up" }) })
  ] });
}

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Join Meat-Machine", "description": "Create an account to showcase your AI creations, connect with other artists, and build your community." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12 md:py-20"> <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center"> <!-- Left Column: Benefits --> <div class="text-center lg:text-left"> <h1 class="text-4xl lg:text-5xl font-black text-white leading-tight">
Join the Future of <span class="text-gradient-pink">Creativity</span> </h1> <p class="mt-4 text-lg text-gray-300">
Create an account to unlock the full power of the platform.
</p> <ul class="mt-8 space-y-4 text-left inline-block"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <div> <h3 class="font-semibold text-white">Showcase Your Work</h3> <p class="text-gray-400 text-sm">Upload and share your AI-generated art, music, and videos with a growing community.</p> </div> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <div> <h3 class="font-semibold text-white">Connect with Creators</h3> <p class="text-gray-400 text-sm">Follow your favorite artists, join discussions, and collaborate on new ideas.</p> </div> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <div> <h3 class="font-semibold text-white">Save & Collect</h3> <p class="text-gray-400 text-sm">Keep track of inspiring content by saving it to your personal library.</p> </div> </li> </ul> </div> <!-- Right Column: Auth Form --> <div> ${renderComponent($$result2, "AuthForm", AuthForm, { "client:load": true, "defaultMode": "signUp", "client:component-hydration": "load", "client:component-path": "@/components/react/auth/AuthForm", "client:component-export": "default" })} </div> </div> </div> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/register.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
