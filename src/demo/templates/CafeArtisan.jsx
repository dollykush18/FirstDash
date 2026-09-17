import { Clock, Coffee, Heart, Instagram, Leaf, MapPin } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Brew & Bloom - cosy artisan cafe. Warm earth tones, story-led, serif accents. */

const img = demoImages.cafeArtisan;
const CLAY = '#a16207';
const CREAM = '#faf6ef';

const menuGroups = [
  {
    title: 'Espresso Bar',
    items: [
      ['Flat White', '₹180'],
      ['Cortado', '₹160'],
      ['Honey Cinnamon Latte', '₹220'],
      ['Cold Brew', '₹200'],
    ],
  },
  {
    title: 'Slow Brew',
    items: [
      ['V60 Pour Over', '₹240'],
      ['Chemex (for two)', '₹380'],
      ['Single Origin Filter', '₹210'],
      ['Nitro on Tap', '₹260'],
    ],
  },
  {
    title: 'From the Kitchen',
    items: [
      ['Butter Croissant', '₹150'],
      ['Banana Walnut Loaf', '₹170'],
      ['Sourdough & Avocado', '₹320'],
      ['Seasonal Tart', '₹190'],
    ],
  },
];

const roasts = [
  { name: 'Morning Bloom', origin: 'Chikmagalur, India', notes: 'Milk chocolate, almond, red apple', roast: 'Medium' },
  { name: 'Deep Ember', origin: 'Sidamo, Ethiopia', notes: 'Blueberry, cocoa, jasmine', roast: 'Light' },
  { name: 'Slow Sunday', origin: 'Huila, Colombia', notes: 'Caramel, orange peel, brown sugar', roast: 'Medium-dark' },
];

const navItems = ['Story', 'Menu', 'Roasts', 'Visit'];

export default function CafeArtisan() {
  return (
    <div className="font-dm text-[#3b2f1e]" style={{ backgroundColor: CREAM }}>
      {/* ------------------------------ NAV ------------------------------ */}
      <header
        className="sticky top-0 z-30 border-b border-[#3b2f1e]/10 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(250,246,239,0.88)' }}
      >
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="font-serif-display text-xl font-semibold tracking-tight">
            Brew &amp; Bloom
          </span>
          <ul className="hidden items-center gap-8 text-[0.9rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#3b2f1e]/60 transition-colors hover:text-[#a16207]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#visit"
            className="rounded-full px-5 py-2.5 text-[0.86rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: CLAY }}
          >
            Find Us
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="mx-auto max-w-[1140px] px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.76rem] font-medium"
              style={{ borderColor: 'rgba(161,98,7,0.3)', color: CLAY }}
            >
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              Roasted in-house since 2016
            </span>

            <h1 className="font-serif-display mt-7 text-[2.6rem] font-medium leading-[1.08] sm:text-5xl lg:text-[3.85rem]">
              A slow cup,
              <br />
              a soft chair,
              <br />
              <span style={{ color: CLAY }}>a good morning.</span>
            </h1>

            <p className="mt-7 max-w-md leading-relaxed text-[#3b2f1e]/65">
              We roast small batches on a Tuesday, bake in the back every morning, and keep the
              music low enough to hear the person across the table.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: CLAY }}
              >
                See the Menu
              </a>
              <a
                href="#story"
                className="rounded-full border border-[#3b2f1e]/20 px-7 py-3.5 font-semibold transition-colors hover:border-[#3b2f1e]/50"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={img.hero}
              alt="Warm cafe interior with people at wooden tables"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <img
              src={img.latte}
              alt="Latte art in a ceramic cup"
              loading="lazy"
              className="absolute -bottom-8 -left-4 hidden w-44 rounded-[1.25rem] border-[6px] object-cover sm:block lg:w-52"
              style={{ borderColor: CREAM }}
            />
          </div>
        </div>
      </section>

      {/* ----------------------------- STORY ----------------------------- */}
      <section id="story" className="border-y border-[#3b2f1e]/10 bg-[#f3ece0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src={img.interior}
              alt="Wooden counter and shelves inside Brew and Bloom"
              loading="lazy"
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em]" style={{ color: CLAY }}>
                Our Story
              </p>
              <h2 className="font-serif-display mt-4 text-[2rem] font-medium leading-tight sm:text-[2.6rem]">
                It started with one bag of green beans.
              </h2>
              <p className="mt-6 leading-relaxed text-[#3b2f1e]/65">
                Two friends, a borrowed roaster and a corner shop that smelled permanently of
                caramel. Eight years later we still roast every bean we pour, and we still know
                most of our regulars by their order.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  [Coffee, 'Roasted weekly, never stale', 'Small batches every Tuesday morning.'],
                  [Heart, 'Baked here, not bought in', 'Croissants, loaves and tarts from our own kitchen.'],
                  [Leaf, 'Beans we can trace', 'Bought direct from four farms we visit each year.'],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: CLAY }} aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-0.5 text-[0.9rem] text-[#3b2f1e]/55">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ MENU ----------------------------- */}
      <section id="menu" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em]" style={{ color: CLAY }}>
            The Menu
          </p>
          <h2 className="font-serif-display mt-4 text-[2rem] font-medium sm:text-[2.6rem]">
            All day, every day
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {menuGroups.map((group) => (
            <div key={group.title} className="rounded-[1.25rem] bg-white p-7 shadow-[0_4px_30px_-16px_rgba(59,47,30,0.3)]">
              <h3 className="font-serif-display text-xl" style={{ color: CLAY }}>
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {group.items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline gap-3 text-[0.95rem]">
                    <span>{name}</span>
                    <span
                      className="flex-1 border-b border-dotted border-[#3b2f1e]/20"
                      aria-hidden="true"
                    />
                    <span className="shrink-0 font-medium text-[#3b2f1e]/70">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pastry photo strip */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {img.menu.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Freshly baked items at Brew and Bloom, photo ${i + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1rem] object-cover"
            />
          ))}
        </div>
      </section>

      {/* ----------------------------- ROASTS ---------------------------- */}
      <section id="roasts" className="bg-[#2e2416] py-20 text-[#faf6ef] lg:py-24">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em]" style={{ color: '#d9a441' }}>
                This Season
              </p>
              <h2 className="font-serif-display mt-4 text-[2rem] font-medium leading-tight sm:text-[2.6rem]">
                Beans on the shelf right now
              </h2>
              <p className="mt-6 leading-relaxed text-[#faf6ef]/60">
                Take a bag home, or let us grind it to suit your brewer. Every bag is roasted
                within the last seven days.
              </p>
              <img
                src={img.beans}
                alt="Roasted coffee beans"
                loading="lazy"
                className="mt-9 aspect-[3/2] w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <div className="space-y-4">
              {roasts.map((roast) => (
                <article
                  key={roast.name}
                  className="rounded-[1.25rem] border border-[#faf6ef]/12 p-6 transition-colors hover:border-[#d9a441]/50"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif-display text-xl">{roast.name}</h3>
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: 'rgba(217,164,65,0.15)', color: '#d9a441' }}
                    >
                      {roast.roast}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.86rem] text-[#faf6ef]/50">{roast.origin}</p>
                  <p className="mt-3 text-[0.95rem] text-[#faf6ef]/75">{roast.notes}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- GALLERY ---------------------------- */}
      <section className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em]" style={{ color: CLAY }}>
            The Room
          </p>
          <h2 className="font-serif-display text-[2rem] font-medium sm:text-[2.6rem]">
            Come sit a while
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {img.gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Inside Brew and Bloom, photo ${i + 1}`}
              loading="lazy"
              className={`w-full rounded-[1rem] object-cover transition-transform duration-500 hover:scale-[1.03] ${
                i % 2 === 1 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ----------------------------- VISIT ----------------------------- */}
      <section id="visit" className="border-t border-[#3b2f1e]/10 bg-[#f3ece0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              [MapPin, 'Where', '7 Lantern Lane, Fort Kochi\nKerala 682001'],
              [Clock, 'When', 'Mon – Fri · 7:30am – 8pm\nSat – Sun · 8am – 10pm'],
              [Instagram, 'Say hello', '@brewandbloom\n+91 00000 00000'],
            ].map(([Icon, label, value]) => (
              <div key={label}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(161,98,7,0.12)', color: CLAY }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif-display mt-5 text-lg">{label}</h3>
                <p className="mt-2 whitespace-pre-line leading-relaxed text-[#3b2f1e]/60">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[1.5rem] bg-white px-8 py-12 text-center shadow-[0_10px_40px_-24px_rgba(59,47,30,0.4)]">
            <h2 className="font-serif-display text-[1.75rem] leading-tight sm:text-[2.25rem]">
              Hosting something small?
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-[#3b2f1e]/60">
              We take private bookings for up to 25 people on Sunday evenings. Coffee, cake and
              the whole room to yourselves.
            </p>
            <a
              href="#visit"
              className="mt-7 inline-flex rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: CLAY }}
            >
              Enquire About Bookings
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ---------------------------- */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <p className="font-serif-display text-lg">Brew &amp; Bloom</p>
          <p className="text-[0.88rem] text-[#3b2f1e]/45">
            Small-batch roastery &amp; kitchen &middot; Fort Kochi
          </p>
        </div>
      </footer>
    </div>
  );
}
