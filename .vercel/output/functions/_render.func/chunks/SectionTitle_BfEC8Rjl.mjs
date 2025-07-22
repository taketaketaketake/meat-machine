import { jsx } from 'react/jsx-runtime';
import 'react';

function SectionTitle({ title }) {
  return /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 border-l-4 border-pink-500 pl-4", children: title });
}

export { SectionTitle as S };
