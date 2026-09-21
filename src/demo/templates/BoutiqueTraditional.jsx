import {
  CalendarDays,
  Check,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Ruler,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* Zari Boutique - bridal and festive wear. Deep jewel tones and a serif
   display face, because the decision here is emotional and the pieces are
   expensive. Measurement appointments matter more than a cart. */

const img = demoImages.boutiqueTraditional;
const MAROON = '#9d174d';
const INK = '#2a0f1b';
const CREAM = '#fdf6f0';
const GOLD = '#b8860b';

const collections = [
  {
    name: 'Bridal Lehengas',
    price: 'From ₹45,000',
    desc: 'Hand-embroidered zardozi and gota patti work, made to your measurements over 8 to 10 weeks.',
    photo: null,
  },
  {
    name: 'Banarasi & Silk Sarees',
    price: 'From ₹8,500',
    desc: 'Sourced directly from weavers in Varanasi and Kanchipuram. Every piece comes with its weave detail.',
    photo: null,
  },
  {
    name: 'Festive & Party Wear',
    price: 'From ₹6,000',
    desc: 'Anarkalis, shararas and indo-western gowns for sangeet, receptions and family functions.',
    photo: null,
  },
];

const services = [
  {
    icon: Ruler,
    title: 'Made to Measure',
    desc: 'Three fittings included with every stitched outfit, so the final piece sits exactly right.',
  },
  {
    icon: Scissors,
    title: 'Custom Design',
    desc: 'Bring a photo or an old saree. We sketch, you approve the design and fabric before work begins.',
  },
  {
    icon: Sparkles,
    title: 'Bridal Trousseau',
    desc: 'A full set planned together — mehendi, haldi, wedding and reception, colour-matched across events.',
  },
  {
    icon: CalendarDays,
    title: 'Alterations',
    desc: 'Free for six months on anything stitched here. Others welcome at a small charge.',
  },
];

const timeline = [
  ['Visit & consult', 'We talk through the function, your budget and what you feel good wearing.'],
  ['Fabric & design', 'Choose from the studio or we source it. Design is sketched and priced before we cut.'],
  ['Three fittings', 'Rough fit, detail fit and final fit. Nothing is delivered without you trying it on.'],
  ['Delivery', 'Packed and handed over a week before your date, never the night before.'],
];

const reviews = [
  {
    text: 'I gave them my mother’s old Banarasi and asked for a lehenga. What came back made three generations cry at the sangeet.',
    name: 'Divya Agarwal',
    meta: 'Bridal, 2025',
  },
  {
    text: 'They talked me out of a more expensive fabric because it would not drape well on me. That honesty is why I keep going back.',
    name: 'Nandini Rao',
    meta: 'Festive wear',
  },
];

const navItems = ['Collections', 'Services', 'Studio', 'Visit'];

export default function BoutiqueTraditional() {
  const collectionPhotos = [img.hero, img.sharara, img.gown];

  return (
    <div className="font-dm" style={{ backgroundColor: CREAM, color: INK }}>
      {/* ------------------------------ NAV ------------------------------- */}
      <header
        className="sticky top-0 z-30 border-b border-[#2a0f1b]/10 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(253,246,240,0.92)' }}
      >
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="font-serif-display text-xl font-semibold tracking-[0.14em] sm:text-2xl">
            ZARI
          </span>

          <ul className="hidden items-center gap-8 text-[0.9rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#2a0f1b]/60 transition-colors hover:text-[#9d174d]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#visit"
            className="rounded-full px-5 py-2.5 text-[0.86rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: MAROON }}
          >
            Book Appointment
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="text-white" style={{ backgroundColor: INK }}>
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.78rem]"
              style={{ borderColor: 'rgba(184,134,11,0.45)', color: '#e9c46a' }}
            >
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Dressing brides in Lucknow since 1998
            </span>

            <h1 className="font-serif-display mt-7 text-[2.6rem] font-medium leading-[1.06] sm:text-5xl lg:text-[3.8rem]">
              For the days you
              <br />
              <span style={{ color: '#e9c46a' }}>will never forget.</span>
            </h1>

            <p className="mt-7 max-w-md leading-relaxed text-white/65">
              Bridal lehengas, handloom sarees and festive wear &mdash; cut and stitched to
              your measurements in our own workshop, never ordered in from a catalogue.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#visit"
                className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: MAROON }}
              >
                Book a Measurement Visit
              </a>
              <a
                href="#collections"
                className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition-colors hover:bg-white/10"
              >
                View Collections
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2">
              {['In-house karigars', '3 fittings included', 'Free alterations'].map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-[0.86rem] text-white/55">
                  <Check className="h-4 w-4 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={img.hero}
              alt="A silk saree from the Zari Boutique collection"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
            <img
              src={img.jewellery}
              alt="Gold and pearl jewellery styled with the collection"
              loading="lazy"
              className="absolute -bottom-6 -left-4 hidden h-32 w-32 rounded-2xl border-4 object-cover sm:block lg:-left-8 lg:h-40 lg:w-40"
              style={{ borderColor: INK }}
            />
          </div>
        </div>
      </section>

      {/* --------------------------- COLLECTIONS -------------------------- */}
      <section id="collections" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p
            className="text-[0.76rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: MAROON }}
          >
            Collections
          </p>
          <h2 className="font-serif-display mt-3 text-[2.1rem] font-medium tracking-[-0.01em] sm:text-[2.7rem]">
            What we make
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#2a0f1b]/55">
            Prices below are starting prices for stitched pieces. Heavier embroidery and
            imported fabric cost more, and we quote in writing before any work begins.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {collections.map((c, i) => (
            <article key={c.name}>
              <img
                src={collectionPhotos[i]}
                alt={c.name}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-[1.25rem] object-cover"
              />
              <h3 className="font-serif-display mt-5 text-[1.4rem] font-medium">{c.name}</h3>
              <p className="mt-1.5 text-[0.88rem] font-bold" style={{ color: MAROON }}>
                {c.price}
              </p>
              <p className="mt-3 text-[0.94rem] leading-relaxed text-[#2a0f1b]/60">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- SERVICES --------------------------- */}
      <section id="services" className="py-20 lg:py-24" style={{ backgroundColor: '#f7e9e0' }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p
                className="text-[0.76rem] font-bold uppercase tracking-[0.2em]"
                style={{ color: MAROON }}
              >
                Services
              </p>
              <h2 className="font-serif-display mt-3 text-[2.1rem] font-medium leading-tight sm:text-[2.7rem]">
                Everything stitched here
              </h2>
              <p className="mt-5 leading-relaxed text-[#2a0f1b]/60">
                Our karigars work upstairs, not in another city. That is why a change you ask
                for on Tuesday is done by Thursday.
              </p>

              <img
                src={img.store}
                alt="Inside the Zari Boutique studio"
                loading="lazy"
                className="mt-9 aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="rounded-[1.25rem] bg-white p-6">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: CREAM, color: MAROON }}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[1.08rem] font-bold">{title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-[#2a0f1b]/60">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ STUDIO ---------------------------- */}
      <section id="studio" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p
            className="text-[0.76rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: MAROON }}
          >
            How It Works
          </p>
          <h2 className="font-serif-display mt-3 text-[2.1rem] font-medium sm:text-[2.7rem]">
            From first visit to final fitting
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map(([title, desc], i) => (
            <li key={title}>
              <span
                className="font-serif-display text-[2rem] font-medium"
                style={{ color: GOLD }}
              >
                0{i + 1}
              </span>
              <h3 className="mt-3 border-t border-[#2a0f1b]/12 pt-4 text-[1.08rem] font-bold">
                {title}
              </h3>
              <p className="mt-2 text-[0.93rem] leading-relaxed text-[#2a0f1b]/60">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-[1.25rem] border border-[#2a0f1b]/12 p-7"
            >
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#2a0f1b]/75">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-[#2a0f1b]/10 pt-4">
                <span className="block text-[0.9rem] font-bold">{r.name}</span>
                <span className="mt-0.5 block text-[0.8rem] text-[#2a0f1b]/45">{r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ------------------------------ VISIT ----------------------------- */}
      <section id="visit" className="py-20 text-white lg:py-24" style={{ backgroundColor: INK }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p
                className="text-[0.76rem] font-bold uppercase tracking-[0.2em]"
                style={{ color: '#e9c46a' }}
              >
                Visit
              </p>
              <h2 className="font-serif-display mt-3 text-[2.1rem] font-medium leading-tight sm:text-[2.7rem]">
                Come in for a measurement
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/60">
                Bridal appointments take about ninety minutes and are best booked four to five
                months before the wedding. Bring anyone whose opinion matters to you.
              </p>

              <dl className="mt-10 space-y-5">
                {[
                  [MapPin, 'Studio', '14 Hazratganj Market, Ground Floor\nLucknow 226001'],
                  [Clock, 'Open', 'Mon – Sat · 11am – 8pm\nSunday by appointment'],
                  [MessageCircle, 'WhatsApp', '+91 00000 00000'],
                  [Instagram, 'Instagram', '@zariboutique'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: 'rgba(255,255,255,0.18)', color: '#e9c46a' }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[0.82rem] font-bold">{label}</dt>
                      <dd className="mt-0.5 whitespace-pre-line text-[0.92rem] leading-relaxed text-white/60">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Appointment form - demo only */}
            <form
              className="rounded-[1.5rem] p-7 sm:p-9"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif-display text-2xl font-medium">Book an appointment</h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'bt-name', label: 'Your name', type: 'text', ph: 'Full name' },
                  { id: 'bt-phone', label: 'WhatsApp number', type: 'tel', ph: '+91 00000 00000' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.82rem] font-medium">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-[0.95rem] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#e9c46a]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="bt-occasion" className="block text-[0.82rem] font-medium">
                    Occasion
                  </label>
                  <select
                    id="bt-occasion"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-[0.95rem] text-white outline-none focus:border-[#e9c46a]"
                  >
                    {[
                      'Wedding (bride)',
                      'Wedding (family)',
                      'Sangeet / Mehendi',
                      'Reception',
                      'Festive wear',
                      'Just browsing',
                    ].map((o) => (
                      <option key={o} className="text-[#2a0f1b]">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="bt-date" className="block text-[0.82rem] font-medium">
                    Function date
                  </label>
                  <input
                    id="bt-date"
                    type="date"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-[0.95rem] text-white outline-none focus:border-[#e9c46a]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="bt-notes" className="block text-[0.82rem] font-medium">
                    What do you have in mind?{' '}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <textarea
                    id="bt-notes"
                    rows={3}
                    placeholder="Colours you like, a reference photo, budget range, an old saree to rework..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-[0.95rem] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#e9c46a]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: MAROON }}
              >
                Request Appointment
              </button>
              <p className="mt-3.5 text-center text-[0.78rem] text-white/40">
                Sample form &mdash; this demo does not send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="py-10" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-serif-display text-lg font-semibold tracking-[0.14em]">ZARI</p>
          <p className="text-[0.88rem] text-[#2a0f1b]/50">
            Bridal &amp; festive wear &middot; Hazratganj, Lucknow
          </p>
        </div>
      </footer>
    </div>
  );
}
