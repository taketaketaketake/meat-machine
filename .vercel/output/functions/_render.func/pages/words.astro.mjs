import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Words = createComponent(($$result, $$props, $$slots) => {
  const featuredArticle = {
    title: "The Unseen Artist: How AI is Redefining Creative Boundaries",
    author: 'Jane "Synth" Doe',
    category: "Deep Dives",
    readTime: "8 min read",
    summary: "From GANs creating photorealistic portraits to language models writing poetry, we explore the profound impact of AI on the art world and question what it truly means to be a creator.",
    emoji: "\u{1F916}"
  };
  const otherFeatured = [
    { id: 1, title: "Prompt Engineering 101: A Beginner's Guide", author: "Alex Chen", category: "Tutorials", emoji: "\u{1F6E0}\uFE0F" },
    { id: 2, title: "The Ethics of AI Voice Cloning: A New Frontier", author: "Dr. Evelyn Reed", category: "Opinion", emoji: "\u{1F3A4}" },
    { id: 3, title: "Spotlight: The Rise of AI-Generated Film Scores", author: "Leo Grant", category: "Case Studies", emoji: "\u{1F3AC}" },
    { id: 4, title: "Neural Networks and Narrative Structure", author: 'Jane "Synth" Doe', category: "Deep Dives", emoji: "\u{1F9E0}" }
  ];
  const latestPosts = [
    { id: 4, title: "Can AI Truly Understand Human Emotion?", author: "Dr. Evelyn Reed", date: "June 28, 2025", category: "Opinion", readTime: "6 min read", emoji: "\u{1F914}" },
    { id: 5, title: "Top 5 AI Image Generators You Should Try in 2025", author: "Alex Chen", date: "June 27, 2025", category: "Reviews", readTime: "10 min read", emoji: "\u{1F3C6}" },
    { id: 6, title: "A Day in the Life of an AI Storyteller", author: "StoryBot 5000", date: "June 26, 2025", category: "Humor", readTime: "4 min read", emoji: "\u{1F602}" },
    { id: 7, title: "The Legal Labyrinth of AI Copyright", author: 'Jane "Synth" Doe', date: "June 25, 2025", category: "Deep Dives", readTime: "12 min read", emoji: "\u2696\uFE0F" },
    { id: 8, title: "Getting Started with Suno for AI Music", author: "Leo Grant", date: "June 24, 2025", category: "Tutorials", readTime: "7 min read", emoji: "\u{1F3B5}" }
  ];
  const blogCategories = ["All", "Deep Dives", "Tutorials", "Reviews", "Opinion", "Case Studies", "Humor"];
  const featuredAuthors = [
    { name: 'Jane "Synth" Doe', avatarEmoji: "\u{1F469}\u200D\u{1F4BB}", specialty: "AI Ethics & Art" },
    { name: "Alex Chen", avatarEmoji: "\u{1F468}\u200D\u{1F3EB}", specialty: "Practical AI Tools" },
    { name: "Dr. Evelyn Reed", avatarEmoji: "\u{1F469}\u200D\u{1F52C}", specialty: "Cognitive Science" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The MEAT Journal - AI Insights & Tutorials", "description": "Insights, tutorials, and deep dives into the world of artificial intelligence and creativity." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Header Section --> <header class="text-center mb-16"> <h1 class="text-5xl md:text-6xl font-black tracking-tighter mb-4">The MEAT Journal</h1> <p class="text-xl text-gray-400 max-w-2xl mx-auto">
Insights, tutorials, and deep dives into the world of artificial intelligence and creativity.
</p> </header> <!-- Featured Articles Section --> <section class="mb-24"> <div class="grid lg:grid-cols-2 gap-8 items-center"> <!-- Main Featured Article --> <a href="#" class="group cursor-pointer"> <div class="relative aspect-video bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-4 border border-gray-800 group-hover:border-pink-500/50 transition-colors"> <div class="text-7xl">${featuredArticle.emoji}</div> </div> <span class="text-sm font-bold text-pink-400">${featuredArticle.category}</span> <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-white my-2 group-hover:text-pink-400 transition-colors">${featuredArticle.title}</h2> <p class="text-gray-400 mb-3">${featuredArticle.summary}</p> <p class="text-sm text-gray-500">${featuredArticle.author} · ${featuredArticle.readTime}</p> </a> <!-- Other Featured Articles --> <div class="space-y-6"> ${otherFeatured.map((article) => renderTemplate`<a href="#"${addAttribute(article.id, "key")} class="group flex gap-4 p-4 rounded-lg hover:bg-gray-900/50 transition-colors cursor-pointer"> <div class="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-3xl border border-gray-700"> ${article.emoji} </div> <div> <span class="text-xs font-bold text-pink-400">${article.category}</span> <h3 class="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">${article.title}</h3> <p class="text-xs text-gray-500">${article.author}</p> </div> </a>`)} </div> </div> </section> <!-- Latest Posts & Sidebar Section --> <div class="grid lg:grid-cols-3 gap-x-12"> <!-- Posts List --> <div class="lg:col-span-2"> <h2 class="text-3xl font-bold mb-8 border-l-4 border-pink-500 pl-4">Latest Posts</h2> <div class="space-y-12"> ${latestPosts.map((post) => renderTemplate`<a href="#"${addAttribute(post.id, "key")} class="grid sm:grid-cols-4 gap-6 group cursor-pointer"> <div class="sm:col-span-1"> <div class="aspect-square bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 group-hover:border-pink-500/50 transition-colors"> <div class="text-5xl">${post.emoji}</div> </div> </div> <div class="sm:col-span-3"> <p class="text-sm text-gray-500 mb-2">${post.date} · ${post.readTime}</p> <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">${post.title}</h3> <p class="text-sm text-pink-400 mb-4">${post.author}</p> <span class="text-xs font-bold py-1 px-3 bg-gray-800 text-gray-300 rounded-full">${post.category}</span> </div> </a>`)} </div> <div class="text-center mt-16"> <button class="btn-ghost">Load More Posts</button> </div> </div> <!-- Sidebar --> <aside class="lg:col-span-1 space-y-12 mt-16 lg:mt-0"> <div class="lg:sticky top-24"> <div> <h3 class="text-xl font-bold mb-4">Categories</h3> <div class="flex flex-wrap gap-2"> ${blogCategories.map((cat) => renderTemplate`<button${addAttribute(cat, "key")} class="text-sm py-1.5 px-4 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-full transition-colors"> ${cat} </button>`)} </div> </div> <div class="mt-12"> <h3 class="text-xl font-bold mb-4">Featured Authors</h3> <div class="space-y-4"> ${featuredAuthors.map((author) => renderTemplate`<a href="#"${addAttribute(author.name, "key")} class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-900/50"> <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl border border-gray-700"> ${author.avatarEmoji} </div> <div> <p class="font-bold text-white">${author.name}</p> <p class="text-xs text-gray-400">${author.specialty}</p> </div> </a>`)} </div> </div> </div> </aside> </div> <!-- Newsletter CTA --> <section class="mt-24 bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-8 md:p-12 rounded-2xl border border-pink-500/20 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
Subscribe to our newsletter for a weekly dose of AI insights, delivered straight to your inbox.
</p> <form class="max-w-md mx-auto flex gap-3"> <input type="email" placeholder="your.email@example.com" class="flex-grow w-full px-5 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"> <button type="submit" class="btn-primary flex-shrink-0">Subscribe</button> </form> </section> </main> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/words.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/words.astro";
const $$url = "/words";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Words,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
