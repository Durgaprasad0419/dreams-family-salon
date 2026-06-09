import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import hairImg from "@/assets/services-hair.jpg";
import tattooImg from "@/assets/services-tattoo.jpg";
import spaImg from "@/assets/services-spa.jpg";
import { Gallery } from "@/components/Gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreams Family Salon & Tattoo Studio | Dr. A. S. Rao Nagar, Hyderabad" },
      {
        name: "description",
        content:
          "Premium hair styling, beauty, and tattoo artistry at Dreams Family Salon & Tattoo Studio in Anupuram Colony, Hyderabad. Open daily 8 AM – 10 PM.",
      },
      { property: "og:title", content: "Dreams Family Salon & Tattoo Studio" },
      {
        property: "og:description",
        content: "Hair, beauty & ink — crafted with care in Dr. A. S. Rao Nagar, Hyderabad.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const PHONE = "+91 98490 07058";
const TEL = "tel:+919849007058";
const MAPS_URL = "https://maps.app.goo.gl/h8tHh8D7D9S7VkrK7";
const ADDRESS =
  "Radhika Asian Multiplex, Sriram Nagar, Plot No. 11P, Anupuram Colony, Dr. A. S. Rao Nagar, Secunderabad, Telangana 500062";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <About />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-gradient-gold">Dreams</span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Salon · Tattoo
          </span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-primary">Services</a>
          <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#visit" className="transition-colors hover:text-primary">Visit</a>
        </nav>
        <a
          href={TEL}
          className="rounded-full border border-gold bg-primary/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-gold"
        >
          Book
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Interior of Dreams Family Salon"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1600}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-primary">
          ★ 5.0 · Hyderabad
        </p>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-[8rem]">
          Cut. Colour.<br />
          <span className="text-gradient-gold italic">Ink.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A modern family salon and tattoo studio where craft meets care.
          From sharp fades to fine-line ink — every chair tells a story.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={TEL}
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
          >
            Book an Appointment
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-primary"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Haircuts", "Hair Colour", "Beard Styling", "Bridal", "Facials", "Tattoo Design", "Piercing", "Kids Cuts"];
  return (
    <div className="border-y border-border/40 bg-card/40 py-6 overflow-hidden">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-2xl font-display italic text-muted-foreground">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Services() {
  const services = [
    {
      img: hairImg,
      title: "Hair & Grooming",
      list: ["Signature haircuts", "Hair colour & highlights", "Beard sculpting", "Smoothening & keratin"],
    },
    {
      img: tattooImg,
      title: "Tattoo Studio",
      list: ["Custom design", "Fine-line & script", "Cover-ups", "Piercing"],
    },
    {
      img: spaImg,
      title: "Beauty & Care",
      list: ["Facials & cleanups", "Bridal packages", "Waxing & threading", "D-tan therapy"],
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-primary">What we do</p>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            A studio for the<br /><span className="italic text-gradient-gold">whole family.</span>
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Three crafts under one roof. Walk in for a trim, leave with a fresh look — or your first tattoo.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-gold hover:shadow-gold"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.list.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-primary" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border/40 bg-card/30 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-primary">Our story</p>
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Where every chair<br /><span className="italic text-gradient-gold">feels like home.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Tucked inside Radhika Asian Multiplex, Dreams has grown from a neighbourhood
            salon into one of Dr. A. S. Rao Nagar's most loved studios — a place where
            kids get their first haircut and adults get their first tattoo.
          </p>
          <p>
            Our artists blend classic technique with modern style. No appointment too small,
            no design too ambitious. Just honest craft, every single visit.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <Stat n="5.0" label="Google rating" />
            <Stat n="14h" label="Open daily" />
            <Stat n="∞" label="Designs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gradient-gold">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-primary">Visit us</p>
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Drop by.<br /><span className="italic text-gradient-gold">We'll take care of the rest.</span>
          </h2>
          <dl className="mt-12 space-y-8">
            <Row label="Address" value={ADDRESS} />
            <Row label="Hours" value="Every day · 8:00 AM – 10:00 PM" />
            <Row
              label="Phone"
              value={
                <a href={TEL} className="text-primary hover:underline">{PHONE}</a>
              }
            />
            <Row label="Located in" value="Radhika Asian Multiplex" />
          </dl>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-deep">
          <iframe
            title="Dreams Family Salon & Tattoo Studio location"
            src="https://www.google.com/maps?q=Dreams+Family+Salon+Tattoo+Studio+Anupuram+Colony+Dr+AS+Rao+Nagar+Hyderabad&output=embed"
            className="h-full min-h-[500px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-lg text-foreground">{value}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-display text-xl text-gradient-gold">Dreams Family Salon & Tattoo Studio</p>
        <p>© {new Date().getFullYear()} · Hyderabad, India</p>
      </div>
    </footer>
  );
}
