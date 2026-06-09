import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const heroImg = "/assets/hero-Bu-_3_c-.jpg";
const hairImg = "/assets/services-hair-C98_vXXy.jpg";
const tattooImg = "/assets/services-tattoo-_Tgs200W.jpg";
const spaImg = "/assets/services-spa-CMelWOlC.jpg";
const g1 = "/assets/g-studio-1-CQFtFl6M.jpg";
const g2 = "/assets/g-studio-2-DN5-fV7C.jpg";
const t1 = "/assets/g-tattoo-1-XdTW2ixJ.jpg";
const t2 = "/assets/g-tattoo-2-DW7KsTN4.jpg";
const t3 = "/assets/g-tattoo-3-BW_NYQqd.jpg";
const b1 = "/assets/g-ba-1-DW4_S_wY.jpg";
const b2 = "/assets/g-ba-2-CwYfKc6N.jpg";
const b3 = "/assets/g-ba-3-OPbz3DfT.jpg";
const ITEMS = [
  { src: g1, alt: "Salon styling chairs", category: "Studio", span: "md:col-span-2 md:row-span-2" },
  { src: t1, alt: "Fine line floral tattoo", category: "Tattoo" },
  { src: b1, alt: "Haircut before and after", category: "Before / After" },
  { src: t2, alt: "Mandala shoulder tattoo", category: "Tattoo" },
  { src: g2, alt: "Tattoo studio workstation", category: "Studio" },
  { src: b2, alt: "Hair colour transformation", category: "Before / After", span: "md:col-span-2" },
  { src: t3, alt: "Script wrist tattoo", category: "Tattoo" },
  { src: b3, alt: "Bridal updo styling", category: "Before / After" }
];
const FILTERS = ["All", "Studio", "Tattoo", "Before / After"];
function Gallery() {
  const [filter, setFilter] = reactExports.useState("All");
  const [active, setActive] = reactExports.useState(null);
  const visible = filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter);
  reactExports.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => a === null ? a : (a + 1) % visible.length);
      if (e.key === "ArrowLeft") setActive((a) => a === null ? a : (a - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, visible.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "border-t border-border/40 bg-card/20 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.5em] text-primary", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl leading-tight sm:text-6xl", children: [
            "Our work,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "on the wall." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setFilter(f),
            className: `rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all ${filter === f ? "border-gold bg-primary text-primary-foreground shadow-gold" : "border-border text-muted-foreground hover:border-gold hover:text-primary"}`,
            children: f
          },
          f
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4", children: visible.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActive(i),
          className: `group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-gold hover:shadow-gold ${item.span ?? ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.src,
                alt: item.alt,
                loading: "lazy",
                width: 1024,
                height: 1024,
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: item.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground", children: item.alt })
            ] })
          ]
        },
        item.src
      )) })
    ] }),
    active !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm",
        onClick: () => setActive(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setActive((a) => a === null ? a : (a - 1 + visible.length) % visible.length);
              },
              className: "absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground transition-colors hover:border-gold hover:text-primary md:left-8",
              "aria-label": "Previous",
              children: "‹"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setActive((a) => a === null ? a : (a + 1) % visible.length);
              },
              className: "absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground transition-colors hover:border-gold hover:text-primary md:right-8",
              "aria-label": "Next",
              children: "›"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActive(null),
              className: "absolute right-4 top-4 rounded-full border border-border bg-card/80 px-4 py-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-primary",
              "aria-label": "Close",
              children: "Close ✕"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-h-[85vh] max-w-5xl", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: visible[active].src,
                alt: visible[active].alt,
                className: "max-h-[80vh] w-auto rounded-lg shadow-deep"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: visible[active].category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: visible[active].alt })
            ] })
          ] })
        ]
      }
    )
  ] });
}
const PHONE = "+91 98490 07058";
const TEL = "tel:+919849007058";
const MAPS_URL = "https://maps.app.goo.gl/h8tHh8D7D9S7VkrK7";
const ADDRESS = "Radhika Asian Multiplex, Sriram Nagar, Plot No. 11P, Anupuram Colony, Dr. A. S. Rao Nagar, Secunderabad, Telangana 500062";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Visit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-semibold text-gradient-gold", children: "Dreams" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:inline", children: "Salon · Tattoo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "transition-colors hover:text-primary", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#gallery", className: "transition-colors hover:text-primary", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "transition-colors hover:text-primary", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "transition-colors hover:text-primary", children: "Visit" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TEL, className: "rounded-full border border-gold bg-primary/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-gold", children: "Book" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Interior of Dreams Family Salon", className: "absolute inset-0 h-full w-full object-cover opacity-40", width: 1600, height: 1024 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-[0.5em] text-primary", children: "★ 5.0 · Hyderabad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-[8rem]", children: [
        "Cut. Colour.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold italic", children: "Ink." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "A modern family salon and tattoo studio where craft meets care. From sharp fades to fine-line ink — every chair tells a story." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TEL, className: "rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]", children: "Book an Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: MAPS_URL, target: "_blank", rel: "noreferrer", className: "rounded-full border border-border px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-primary", children: "Get Directions →" })
      ] })
    ] })
  ] });
}
function Marquee() {
  const items = ["Haircuts", "Hair Colour", "Beard Styling", "Bridal", "Facials", "Tattoo Design", "Piercing", "Kids Cuts"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-y border-border/40 bg-card/40 py-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-2xl font-display italic text-muted-foreground", children: [...items, ...items, ...items].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
      t,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes scroll { to { transform: translateX(-33.333%); } }` })
  ] });
}
function Services() {
  const services = [{
    img: hairImg,
    title: "Hair & Grooming",
    list: ["Signature haircuts", "Hair colour & highlights", "Beard sculpting", "Smoothening & keratin"]
  }, {
    img: tattooImg,
    title: "Tattoo Studio",
    list: ["Custom design", "Fine-line & script", "Cover-ups", "Piercing"]
  }, {
    img: spaImg,
    title: "Beauty & Care",
    list: ["Facials & cleanups", "Bridal packages", "Waxing & threading", "D-tan therapy"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "mx-auto max-w-7xl px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 flex flex-col items-end justify-between gap-8 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.5em] text-primary", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl tracking-tight sm:text-6xl", children: [
          "A studio for the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "whole family." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-muted-foreground", children: "Three crafts under one roof. Walk in for a trim, leave with a fresh look — or your first tattoo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-gold hover:shadow-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", width: 1024, height: 1024, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: s.list.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-primary" }),
          item
        ] }, item)) })
      ] })
    ] }, s.title)) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "border-y border-border/40 bg-card/30 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.5em] text-primary", children: "Our story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl leading-tight sm:text-6xl", children: [
        "Where every chair",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "feels like home." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-lg leading-relaxed text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tucked inside Radhika Asian Multiplex, Dreams has grown from a neighbourhood salon into one of Dr. A. S. Rao Nagar's most loved studios — a place where kids get their first haircut and adults get their first tattoo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our artists blend classic technique with modern style. No appointment too small, no design too ambitious. Just honest craft, every single visit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-6 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "5.0", label: "Google rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "14h", label: "Open daily" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "∞", label: "Designs" })
      ] })
    ] })
  ] }) });
}
function Stat({
  n,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-gradient-gold", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: label })
  ] });
}
function Visit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", className: "mx-auto max-w-7xl px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.5em] text-primary", children: "Visit us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl leading-tight sm:text-6xl", children: [
        "Drop by.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "We'll take care of the rest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-12 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Address", value: ADDRESS }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Hours", value: "Every day · 8:00 AM – 10:00 PM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Phone", value: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TEL, className: "text-primary hover:underline", children: PHONE }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Located in", value: "Radhika Asian Multiplex" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: MAPS_URL, target: "_blank", rel: "noreferrer", className: "mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]", children: "Open in Google Maps →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Dreams Family Salon & Tattoo Studio location", src: "https://www.google.com/maps?q=Dreams+Family+Salon+Tattoo+Studio+Anupuram+Colony+Dr+AS+Rao+Nagar+Hyderabad&output=embed", className: "h-full min-h-[500px] w-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
  ] }) });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-2 text-lg text-foreground", children: value })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-card/30 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-gradient-gold", children: "Dreams Family Salon & Tattoo Studio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " · Hyderabad, India"
    ] })
  ] }) });
}
export {
  Index as component
};
