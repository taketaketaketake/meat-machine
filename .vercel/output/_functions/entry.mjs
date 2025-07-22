import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DtgmGqYi.mjs';
import { manifest } from './manifest_Dv21969l.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/audio/playlist.astro.mjs');
const _page3 = () => import('./pages/audio/_id_.astro.mjs');
const _page4 = () => import('./pages/audio.astro.mjs');
const _page5 = () => import('./pages/community/_room_.astro.mjs');
const _page6 = () => import('./pages/community.astro.mjs');
const _page7 = () => import('./pages/creator/dashboard.astro.mjs');
const _page8 = () => import('./pages/creator/settings.astro.mjs');
const _page9 = () => import('./pages/creator/_username_.astro.mjs');
const _page10 = () => import('./pages/creators.astro.mjs');
const _page11 = () => import('./pages/discussions/_channel_.astro.mjs');
const _page12 = () => import('./pages/discussions.astro.mjs');
const _page13 = () => import('./pages/photos/_slug_.astro.mjs');
const _page14 = () => import('./pages/photos.astro.mjs');
const _page15 = () => import('./pages/register.astro.mjs');
const _page16 = () => import('./pages/search.astro.mjs');
const _page17 = () => import('./pages/upload.astro.mjs');
const _page18 = () => import('./pages/video-layouts.astro.mjs');
const _page19 = () => import('./pages/videos/category/_category_.astro.mjs');
const _page20 = () => import('./pages/videos/_slug_.astro.mjs');
const _page21 = () => import('./pages/videos.astro.mjs');
const _page22 = () => import('./pages/words.astro.mjs');
const _page23 = () => import('./pages/words/_---slug_.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/audio/playlist.astro", _page2],
    ["src/pages/audio/[id].astro", _page3],
    ["src/pages/audio.astro", _page4],
    ["src/pages/community/[room].astro", _page5],
    ["src/pages/community.astro", _page6],
    ["src/pages/creator/dashboard.astro", _page7],
    ["src/pages/creator/settings.astro", _page8],
    ["src/pages/creator/[username].astro", _page9],
    ["src/pages/creators.astro", _page10],
    ["src/pages/discussions/[channel].astro", _page11],
    ["src/pages/discussions/index.astro", _page12],
    ["src/pages/photos/[slug].astro", _page13],
    ["src/pages/photos.astro", _page14],
    ["src/pages/register.astro", _page15],
    ["src/pages/search.astro", _page16],
    ["src/pages/upload.astro", _page17],
    ["src/pages/video-layouts.astro", _page18],
    ["src/pages/videos/category/[category].astro", _page19],
    ["src/pages/videos/[slug].astro", _page20],
    ["src/pages/videos.astro", _page21],
    ["src/pages/words.astro", _page22],
    ["src/pages/words/[...slug].astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ef9f799e-8e8f-4c2b-a59d-1dd5c5a435b3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
