import { d as createAstro, c as createComponent, b as addAttribute, h as renderHead, r as renderComponent, a as renderTemplate, i as renderSlot } from './astro/server_DoWU9KzR.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

const supabaseUrl = "https://iogvkjrokqqklodthxya.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZ3ZranJva3Fxa2xvZHRoeHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjQ3MzYsImV4cCI6MjA2NjkwMDczNn0.dqjm9AaNa5v--z1aRD1tg_I2ylSsVyCqPyrURKueSCU";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "ml-auto h-4 w-4",
          children: /* @__PURE__ */ jsx("path", { d: "m9 18 6-6-6-6" })
        }
      )
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "h-4 w-4",
          children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" })
        }
      ) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "h-2 w-2 fill-current",
          children: /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" })
        }
      ) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const HomeIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: [
  " ",
  /* @__PURE__ */ jsx("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" }),
  " "
] });
const CompassIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: [
  " ",
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2zm0 6h2v2h-2zM7.5 10.5l1.41-1.41L12 12.12l3.09-3.03L16.5 10.5 12 15l-4.5-4.5z" }),
  " "
] });
const HistoryIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: [
  " ",
  /* @__PURE__ */ jsx("path", { d: "M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" }),
  " "
] });
const VideoIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: [
  " ",
  /* @__PURE__ */ jsx("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z" }),
  " "
] });
const SettingsIcon = ({ className = "w-5 h-5" }) => /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
] });
const HamburgerIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }) });
const SearchIcon = ({ className = "w-5 h-5" }) => /* @__PURE__ */ jsxs("svg", { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
  " ",
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }),
  " "
] });
const UserCircleIcon = ({ className = "w-8 h-8" }) => /* @__PURE__ */ jsxs("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: [
  " ",
  /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 13a4 4 0 104 0H8z", clipRule: "evenodd" }),
  " "
] });
const LogoutIcon = ({ className = "w-5 h-5" }) => /* @__PURE__ */ jsxs("svg", { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
  " ",
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }),
  " "
] });
const DashboardIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }) });
const BellIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) });
const PlusIcon = ({ className = "w-5 h-5" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) });
const PhotoIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4h16v12H4zM4 4l8 6 8-6" }) });
const MusicNoteIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 18V5l12-2v13M9 18a3 3 0 100-6 3 3 0 000 6z" }) });
const DocumentTextIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) });
const UsersIcon = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { className, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.28-.38-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.28.38-1.857M12 12a3 3 0 100-6 3 3 0 000 6zM12 12v6m0-6H9m3 0h3" }) });
const platformLinks = [
  { icon: /* @__PURE__ */ jsx(HomeIcon, {}), text: "Home", url: "/" },
  { icon: /* @__PURE__ */ jsx(CompassIcon, {}), text: "Explore", url: "/explore" },
  { icon: /* @__PURE__ */ jsx(PhotoIcon, {}), text: "Photos", url: "/photos" },
  { icon: /* @__PURE__ */ jsx(VideoIcon, {}), text: "Videos", url: "/videos" },
  { icon: /* @__PURE__ */ jsx(MusicNoteIcon, {}), text: "Audio", url: "/audio" },
  { icon: /* @__PURE__ */ jsx(DocumentTextIcon, {}), text: "Words", url: "/words" }
];
const accountLinks = [{ icon: /* @__PURE__ */ jsx(DashboardIcon, {}), text: "Dashboard", url: "creator/dashboard" }, { icon: /* @__PURE__ */ jsx(HistoryIcon, {}), text: "Profile", url: "/creator/[]" }, { icon: /* @__PURE__ */ jsx(VideoIcon, {}), text: "Your Content", url: "/content/my-videos" }];
const communitiesLinks = [];
const NavItem = ({ icon, text, url, isExpanded, pathname }) => {
  const isActive = pathname === url;
  return /* @__PURE__ */ jsxs("a", { href: url, title: isExpanded ? "" : text, className: `flex items-center py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} ${isExpanded ? "px-4" : "justify-center"}`, children: [
    React__default.cloneElement(icon, { className: "w-6 h-6 shrink-0" }),
    /* @__PURE__ */ jsx("span", { className: `overflow-hidden transition-all whitespace-nowrap ${isExpanded ? "w-full ml-4" : "w-0"}`, children: text })
  ] });
};
const CommunitiesPlaceholder = ({ isExpanded }) => {
  if (!isExpanded) {
    return /* @__PURE__ */ jsx(
      NavItem,
      {
        icon: /* @__PURE__ */ jsx(UsersIcon, {}),
        text: "Browse Communities",
        url: "/community",
        isExpanded: false
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 text-center text-sm text-gray-400", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Subscribe to communities to see them here." }),
    /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full bg-gray-800 hover:bg-gray-700 text-white font-medium", children: /* @__PURE__ */ jsx("a", { href: "/community", children: "Browse Communities" }) })
  ] });
};
const SidebarFooter = ({ session, onLogout, isExpanded, onUserMenuToggle }) => /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-gray-700 flex-shrink-0", children: session ? /* @__PURE__ */ jsxs(DropdownMenu, { onOpenChange: onUserMenuToggle, children: [
  /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "w-full justify-start p-2 h-auto text-white hover:bg-gray-700 hover:text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full", children: [
    /* @__PURE__ */ jsx(UserCircleIcon, { className: "h-10 w-10 text-gray-400 flex-shrink-0" }),
    /* @__PURE__ */ jsx("div", { className: `text-left overflow-hidden transition-all ${isExpanded ? "w-full opacity-100" : "w-0 opacity-0"}`, children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none truncate", children: session.user.email }) })
  ] }) }) }),
  /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56 mb-2 bg-gray-800 border-gray-700 text-gray-300", side: "top", align: "start", children: [
    /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: "My Account" }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "bg-gray-700" }),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "/settings", className: "flex items-center cursor-pointer focus:bg-gray-700", children: [
      /* @__PURE__ */ jsx(SettingsIcon, { className: "mr-2 h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Settings" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "bg-gray-700" }),
    /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: onLogout, className: "text-red-400 cursor-pointer focus:bg-gray-700 focus:text-red-300", children: [
      /* @__PURE__ */ jsx(LogoutIcon, { className: "mr-2 h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Log out" })
    ] })
  ] })
] }) : /* @__PURE__ */ jsxs("div", { className: `flex items-center transition-all ${isExpanded ? "gap-2 flex-row" : "gap-4 flex-col"}`, children: [
  /* @__PURE__ */ jsx("a", { href: "/register", className: `w-full text-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full hover:bg-gray-800 transition`, children: isExpanded ? "Log In" : "In" }),
  /* @__PURE__ */ jsx("a", { href: "/register", className: `w-full text-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition`, children: isExpanded ? "Sign Up" : "Up" })
] }) });
const Header = () => /* @__PURE__ */ jsxs("header", { className: "h-16 bg-gray-950 text-white flex items-center z-10 border-b border-gray-700 flex-shrink-0 px-4 sm:px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(HamburgerIcon, {}) }) }) }),
    /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "Go to Homepage", className: "items-center gap-3 hidden lg:flex", children: /* @__PURE__ */ jsx("img", { src: "/meat_logo.png", alt: "Machine Creativity Logo", className: "h-8 w-auto flex-shrink-0" }) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-lg relative", children: [
    /* @__PURE__ */ jsx("input", { type: "search", placeholder: "Search...", className: "w-full bg-gray-800 border border-gray-700 text-white rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 transition" }),
    /* @__PURE__ */ jsx("button", { className: "absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-400 hover:text-white", children: /* @__PURE__ */ jsx(SearchIcon, {}) })
  ] }) }),
  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
    /* @__PURE__ */ jsxs(Button, { className: "bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full text-sm px-4 py-2 flex items-center", children: [
      /* @__PURE__ */ jsx(PlusIcon, { className: "mr-1.5 h-5 w-5" }),
      /* @__PURE__ */ jsx("span", { children: "Create" })
    ] }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full", children: /* @__PURE__ */ jsx(BellIcon, { className: "h-6 w-6" }) })
  ] }) })
] });
const SidebarContent = ({ isExpanded, pathname }) => /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsx("h3", { className: `px-4 mt-2 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? "opacity-100" : "opacity-0 h-0 p-0"}`, children: "Platform" }),
    platformLinks.map((link) => /* @__PURE__ */ jsx(NavItem, { ...link, isExpanded, pathname }, link.text))
  ] }),
  /* @__PURE__ */ jsx("div", { className: "border-t border-gray-700 my-4" }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsx("h3", { className: `px-4 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? "opacity-100" : "opacity-0 h-0 p-0"}`, children: "Account" }),
    accountLinks.map((link) => /* @__PURE__ */ jsx(NavItem, { ...link, isExpanded, pathname }, link.text))
  ] }),
  /* @__PURE__ */ jsx("div", { className: "border-t border-gray-700 my-4" }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsx("h3", { className: `px-4 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? "opacity-100" : "opacity-0 h-0 p-0"}`, children: "Communities" }),
    communitiesLinks.length > 0 ? communitiesLinks.map((link) => /* @__PURE__ */ jsx(NavItem, { ...link, isExpanded, pathname }, link.text)) : /* @__PURE__ */ jsx(CommunitiesPlaceholder, { isExpanded })
  ] })
] });
const DesktopSidebar = ({ isExpanded, onMouseEnter, onMouseLeave, pathname, session, onLogout, onUserMenuToggle }) => /* @__PURE__ */ jsxs(
  "aside",
  {
    onMouseEnter,
    onMouseLeave,
    className: `bg-gray-900 text-white h-full flex flex-col border-r border-gray-700 transition-all duration-300 ease-in-out hidden lg:flex ${isExpanded ? "w-64" : "w-24"}`,
    children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto pt-4", children: /* @__PURE__ */ jsx(SidebarContent, { isExpanded, pathname }) }),
      /* @__PURE__ */ jsx(
        SidebarFooter,
        {
          session,
          onLogout,
          isExpanded,
          onUserMenuToggle
        }
      )
    ]
  }
);
function AppLayout({ children, pathname }) {
  const [session, setSession] = useState(null);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const [isMenuLockedOpen, setIsMenuLockedOpen] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: session2 } }) => setSession(session2));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session2) => setSession(session2));
    return () => subscription.unsubscribe();
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };
  const handleMouseEnter = () => setIsHoverExpanded(true);
  const handleMouseLeave = () => setIsHoverExpanded(false);
  const isSidebarExpanded = isHoverExpanded || isMenuLockedOpen;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col h-screen bg-gray-950 text-white overflow-hidden", children: /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        DesktopSidebar,
        {
          isExpanded: isSidebarExpanded,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          pathname,
          session,
          onLogout: handleLogout,
          onUserMenuToggle: setIsMenuLockedOpen
        }
      ),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8", children })
    ] }),
    /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "bg-gray-900 text-white p-0 w-64 border-r-gray-800 flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "h-16 flex items-center p-4 border-b border-gray-700 flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "Go to Homepage", className: "flex items-center gap-3 w-full", children: /* @__PURE__ */ jsx("img", { src: "/meat_logo.png", alt: "Machine Creativity Logo", className: "h-8 w-auto flex-shrink-0" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsx(SidebarContent, { isExpanded: true, pathname }) }),
      /* @__PURE__ */ jsx(
        SidebarFooter,
        {
          session,
          onLogout: handleLogout,
          isExpanded: true,
          onUserMenuToggle: () => {
          }
        }
      )
    ] })
  ] }) });
}

const $$Astro = createAstro("https://meat-platform.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Your default site description goes here.",
    // Fallback description
    shareImage = "/images/social/default-share-image.jpg"
    // Fallback image
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const absoluteShareImageUrl = new URL(shareImage, Astro2.url.origin).href;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title} | Meat-Machine</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(`${title} | Meat-Machine`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(absoluteShareImageUrl, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(`${title} | Meat-Machine`, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(absoluteShareImageUrl, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "AppLayout", AppLayout, { "client:load": true, "pathname": pathname, "client:component-hydration": "load", "client:component-path": "/Users/Zach/Github_Projects/meat-machine/src/components/react/ui/AppLayout.jsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/Zach/Github_Projects/meat-machine/src/components/astro/layout.astro", void 0);

export { $$Layout as $, Button as B, cn as c, supabase as s };
