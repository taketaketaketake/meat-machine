import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function NotFoundHero() {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-8xl md:text-9xl font-black text-white leading-none", children: [
      /* @__PURE__ */ jsx("span", { className: "text-pink-500", children: "4" }),
      /* @__PURE__ */ jsx("span", { className: "text-purple-500 mx-[-0.1em]", children: "0" }),
      /* @__PURE__ */ jsx("span", { className: "text-pink-500", children: "4" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold text-white", children: "Lost in the Echoes" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-400", children: "It seems the page you're looking for has been lost in the digital void." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "btn-primary", children: "Return Home" }),
      /* @__PURE__ */ jsx("a", { href: "/explore", className: "btn-ghost", children: "Explore Content" })
    ] })
  ] });
}

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404: Not Found", "description": "The page you were looking for could not be found." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-20 md:py-32"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "NotFoundHero", NotFoundHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/ui/NotFoundHero", "client:component-export": "default" })} </div> </div> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/404.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
