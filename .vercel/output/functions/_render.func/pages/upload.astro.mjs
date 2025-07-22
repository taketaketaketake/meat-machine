import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { c as cn, B as Button, s as supabase, $ as $$Layout } from '../chunks/layout_0jEJ4wg3.mjs';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { L as Label, I as Input } from '../chunks/label_CSm-QMlh.mjs';
import { T as Textarea } from '../chunks/textarea_CMBKWg9Z.mjs';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'lucide-react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
export { renderers } from '../renderers.mjs';

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "video/mp4",
  "audio/mpeg",
  // for .mp3
  "audio/wav"
];
function FileUpload({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const handleFileChange = (file) => {
    setError("");
    if (file) {
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setError("Invalid file type. Please upload an image, video, or audio file.");
        return;
      }
      setSelectedFile(file);
      onFileSelect(file);
    }
  };
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 1) {
      setError("Please upload only one file at a time.");
      return;
    }
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, []);
  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
    setError("");
  };
  if (selectedFile) {
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full rounded-lg border-2 border-gray-700 p-6 text-center bg-gray-900", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "File Selected:" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-pink-400 mt-1 truncate", children: selectedFile.name }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleRemoveFile, className: "mt-4 text-xs font-semibold text-gray-400 hover:text-white", children: "Remove file" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        className: `relative block w-full rounded-lg border-2 border-dashed p-12 text-center transition-colors ${isDragging ? "border-pink-500 bg-pink-500/10" : "border-gray-700 hover:border-gray-500"}`,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              id: "file-input",
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
              onChange: (e) => handleFileChange(e.target.files[0]),
              accept: ACCEPTED_FILE_TYPES.join(",")
            }
          ),
          /* @__PURE__ */ jsx("svg", { className: "mx-auto h-12 w-12 text-gray-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" }) }),
          /* @__PURE__ */ jsx("label", { htmlFor: "file-input", className: "mt-4 block text-sm font-semibold text-white cursor-pointer", children: "Drag & drop your file here" }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 block text-xs text-gray-400", children: "or" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "file-input", className: "mt-2 text-sm font-semibold text-pink-500 hover:text-pink-400 cursor-pointer", children: "browse files" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-gray-500", children: "Supports: JPG, PNG, MP4, MP3, WAV" })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-400 text-center", children: error })
  ] });
}

function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}

function AIGenerator() {
  const handleGenerate = () => {
    alert("AI Generation feature coming soon!");
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "ai-model", children: "Select AI Model" }),
      /* @__PURE__ */ jsxs(Select, { children: [
        /* @__PURE__ */ jsx(SelectTrigger, { id: "ai-model", className: "w-full mt-1", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Choose a model..." }) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "midjourney", children: "Midjourney" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "sora", children: "Sora" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "suno", children: "Suno" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "elevenlabs", children: "ElevenLabs" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "generate-prompt", children: "Prompt" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "generate-prompt",
          rows: 6,
          className: "mt-1",
          placeholder: "A futuristic cityscape at dusk, synthwave style..."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "button", onClick: handleGenerate, className: "w-full", children: "Generate" })
  ] });
}

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

function ContentSource({ onFileSelect }) {
  return /* @__PURE__ */ jsxs(Tabs, { defaultValue: "upload", className: "w-full", children: [
    /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "upload", children: "Upload File" }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "generate", children: "Generate with AI" })
    ] }),
    /* @__PURE__ */ jsx(TabsContent, { value: "upload", className: "pt-6", children: /* @__PURE__ */ jsx(FileUpload, { onFileSelect }) }),
    /* @__PURE__ */ jsx(TabsContent, { value: "generate", className: "pt-6", children: /* @__PURE__ */ jsx(AIGenerator, {}) })
  ] });
}

function ContentDetailsForm({ data, onDataChange }) {
  const handleChange = (e) => {
    onDataChange({ ...data, [e.target.name]: e.target.value });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "title", className: "text-sm font-bold text-gray-300 mb-2 block", children: "Title" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            name: "title",
            id: "title",
            value: data.title || "",
            onChange: handleChange,
            placeholder: "e.g., Cybernetic Serenity",
            required: true,
            className: "h-11 px-4 bg-gray-900 border-gray-700 rounded-lg"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "description", className: "text-sm font-bold text-gray-300 mb-2 block", children: "Description" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            name: "description",
            id: "description",
            rows: 4,
            value: data.description || "",
            onChange: handleChange,
            className: "px-4 py-3 bg-gray-900 border-gray-700 rounded-lg"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 border border-gray-800 rounded-xl p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Behind the Curtain" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-6", children: "Help the community learn by sharing your process." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "toolsUsed", className: "text-xs font-medium text-gray-400 mb-1 block", children: "Model / Tool Used" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "toolsUsed",
              id: "toolsUsed",
              value: data.toolsUsed || "",
              onChange: handleChange,
              placeholder: "e.g., Midjourney v6.0",
              className: "h-10 px-3 bg-gray-800 border-gray-700 rounded-lg text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "promptDetails", className: "text-xs font-medium text-gray-400 mb-1 block", children: "Primary Prompt" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              name: "promptDetails",
              id: "prompt-details",
              rows: 3,
              value: data.promptDetails || "",
              onChange: handleChange,
              placeholder: "The core prompt you used to generate the content.",
              className: "px-3 py-2 bg-gray-800 border-gray-700 rounded-lg text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "parameters", className: "text-xs font-medium text-gray-400 mb-1 block", children: "Parameters & Settings" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "parameters",
              id: "parameters",
              value: data.parameters || "",
              onChange: handleChange,
              placeholder: "e.g., --ar 16:9 --style raw",
              className: "h-10 px-3 bg-gray-800 border-gray-700 rounded-lg text-sm"
            }
          )
        ] })
      ] })
    ] })
  ] });
}

function FormActions({ mode, isLoading }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-4", children: [
    /* @__PURE__ */ jsx(Button, { type: "submit", name: "action", value: "publish", disabled: isLoading, className: "w-full h-12", children: isLoading ? "Processing..." : mode === "create" ? "Publish Creation" : "Save Changes" }),
    /* @__PURE__ */ jsx(Button, { type: "submit", name: "action", value: "draft", variant: "outline", disabled: isLoading, className: "h-12 px-6", children: "Save Draft" })
  ] });
}

function CreationPage({ mode = "create", creationId = null }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(mode === "edit");
  const [error, setError] = useState("");
  useEffect(() => {
    if (mode === "edit" && creationId) {
      const fetchCreation = async () => {
        const { data, error: error2 } = await supabase.from("creations").select("*").eq("id", creationId).single();
        if (error2) {
          setError("Could not fetch creation data.");
        } else if (data) {
          setFormData({
            title: data.title,
            description: data.prompt,
            // Assuming 'prompt' column is used for description
            toolsUsed: data.tool
            // Add other fields as needed
          });
        }
        setIsLoading(false);
      };
      fetchCreation();
    }
  }, [mode, creationId]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const action = e.nativeEvent.submitter.value;
    console.log(`Submitting for action: ${action}`);
    console.log("Form Data:", formData);
    console.log("File:", file);
    setTimeout(() => {
      alert(`Form submitted for action: "${action}"! Check the console for data.`);
      setIsLoading(false);
    }, 1500);
  };
  if (isLoading && mode === "edit") {
    return /* @__PURE__ */ jsx("p", { className: "text-center text-gray-400", children: "Loading editor..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8 md:py-16", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: mode === "create" ? "Share Your Creation" : "Edit Your Creation" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mt-2", children: mode === "create" ? "Bring your AI-generated art to the community." : "Make changes and re-publish your work." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "grid grid-cols-1 lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx(ContentSource, { onFileSelect: setFile }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(ContentDetailsForm, { data: formData, onDataChange: setFormData }),
        /* @__PURE__ */ jsx(FormActions, { mode, isLoading }),
        error && /* @__PURE__ */ jsx("p", { className: "mt-4 text-red-400", children: error })
      ] })
    ] })
  ] });
}

const $$Upload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create - Meat", "description": "Create and share your next AI-generated masterpiece." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12"> ${renderComponent($$result2, "CreationPage", CreationPage, { "client:load": true, "mode": "create", "client:component-hydration": "load", "client:component-path": "@/components/react/content/CreationPage", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/Zach/Github_Projects/meat-machine/src/pages/upload.astro", void 0);

const $$file = "/Users/Zach/Github_Projects/meat-machine/src/pages/upload.astro";
const $$url = "/upload";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Upload,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
