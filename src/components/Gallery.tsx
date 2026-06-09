import { useEffect, useState } from "react";
import g1 from "@/assets/g-studio-1.jpg";
import g2 from "@/assets/g-studio-2.jpg";
import t1 from "@/assets/g-tattoo-1.jpg";
import t2 from "@/assets/g-tattoo-2.jpg";
import t3 from "@/assets/g-tattoo-3.jpg";
import b1 from "@/assets/g-ba-1.jpg";
import b2 from "@/assets/g-ba-2.jpg";
import b3 from "@/assets/g-ba-3.jpg";

type Item = { src: string; alt: string; category: "Studio" | "Tattoo" | "Before / After"; span?: string };

const ITEMS: Item[] = [
  { src: g1, alt: "Salon styling chairs", category: "Studio", span: "md:col-span-2 md:row-span-2" },
  { src: t1, alt: "Fine line floral tattoo", category: "Tattoo" },
  { src: b1, alt: "Haircut before and after", category: "Before / After" },
  { src: t2, alt: "Mandala shoulder tattoo", category: "Tattoo" },
  { src: g2, alt: "Tattoo studio workstation", category: "Studio" },
  { src: b2, alt: "Hair colour transformation", category: "Before / After", span: "md:col-span-2" },
  { src: t3, alt: "Script wrist tattoo", category: "Tattoo" },
  { src: b3, alt: "Bridal updo styling", category: "Before / After" },
];

const FILTERS = ["All", "Studio", "Tattoo", "Before / After"] as const;
type Filter = (typeof FILTERS)[number];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % visible.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, visible.length]);

  return (
    <section id="gallery" className="border-t border-border/40 bg-card/20 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-primary">Gallery</p>
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Our work,<br /><span className="italic text-gradient-gold">on the wall.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                  filter === f
                    ? "border-gold bg-primary text-primary-foreground shadow-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {visible.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-gold hover:shadow-gold ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{item.category}</p>
                <p className="mt-1 text-sm text-foreground">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a - 1 + visible.length) % visible.length)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground transition-colors hover:border-gold hover:text-primary md:left-8"
            aria-label="Previous"
          >‹</button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a + 1) % visible.length)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground transition-colors hover:border-gold hover:text-primary md:right-8"
            aria-label="Next"
          >›</button>
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full border border-border bg-card/80 px-4 py-2 text-xs uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-primary"
            aria-label="Close"
          >Close ✕</button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[active].src}
              alt={visible[active].alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-deep"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{visible[active].category}</p>
              <p className="mt-1 text-sm text-muted-foreground">{visible[active].alt}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
