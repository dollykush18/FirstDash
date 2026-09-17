import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Daylight Coffee - minimal, airy, lots of white space. Teal accent. */

const img = demoImages.cafeMinimal;
const TEAL = '#0f766e';

const menu = [
  { n: '01', name: 'Filter', desc: 'Rotating single origin, brewed by the cup', price: '₹170' },
  { n: '02', name: 'Espresso', desc: 'House blend, double shot', price: '₹140' },
  { n: '03', name: 'Flat White', desc: 'Silky microfoam, no sugar needed', price: '₹190' },
  { n: '04', name: 'Iced Latte', desc: 'Cold milk, slow-pulled shot', price: '₹210' },
  { n: '05', name: 'Matcha', desc: 'Ceremonial grade, oat or dairy', price: '₹230' },
  { n: '06', name: 'Toast Plate', desc: 'Sourdough, cultured butter, seasonal jam', price: '₹240' },
];

const hours = [
  ['Monday – Thursday', '7:30 – 18:00'],
  ['Friday', '7:30 – 20:00'],
  ['Saturday', '8:30 – 20:00'],
  ['Sunday', '8:30 – 16:00'],
];

const navItems = ['Menu', 'Space', 'Hours'];

export default function CafeMinimal() {
  return (
    <div className="font-outfit bg-white text-[#141918]">
      {/* ------------------------------ NAV ------------------------------ */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-6 sm:px-8"
          aria-label="Main"
        >
          <span className="text-[0.95rem] font-medium uppercase tracking-[0.22em]">
            Daylight
          </span>
          <ul className="hidden items-center gap-10 text-[0.86rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#141918]/50 transition-colors hover:text-[#141918]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#hours"
            className="text-[0.86rem] font-medium underline decoration-1 underline-offset-4 transition-colors"
            style={{ color: TEAL }}
          >
            Visit
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="mx-auto max-w-[1080px] px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16">
        <p className="text-[0.76rem] uppercase tracking-[0.24em]" style={{ color: TEAL }}>
          Speciality coffee &middot; Since 2021
        </p>

        <h1 className="mt-8 max-w-4xl text-[2.75rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5.25rem]">
          Good coffee,
          <br />
          <span className="font-normal">no ceremony.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-[#141918]/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-sm text-[1.02rem] leading-relaxed text-[#141918]/55">
            A small counter, a big window and a short menu we do properly. Open from half seven,
            every day of the week.
          </p>
          <a
            href="#menu"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-medium"
            style={{ color: TEAL }}
          >
            See the menu
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <img
          src={img.hero}
          alt="A single cup of coffee on a bright table"
          className="mt-12 aspect-[16/8] w-full rounded-lg object-cover lg:mt-16"
        />
      </section>

      {/* ------------------------------ MENU ----------------------------- */}
      <section id="menu" className="border-t border-[#141918]/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-16">
            <h2 className="text-[0.76rem] uppercase tracking-[0.24em] text-[#141918]/40 sm:pt-2">
              Menu
            </h2>

            <div>
              <ul className="divide-y divide-[#141918]/10">
                {menu.map((item) => (
                  <li
                    key={item.n}
                    className="group flex items-baseline gap-5 py-6 transition-colors hover:bg-[#141918]/[0.02] sm:gap-8"
                  >
                    <span className="w-6 shrink-0 text-[0.76rem] tabular-nums text-[#141918]/30">
                      {item.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.15rem] font-medium">{item.name}</h3>
                      <p className="mt-1 text-[0.92rem] text-[#141918]/50">{item.desc}</p>
                    </div>
                    <span className="shrink-0 text-[0.98rem] tabular-nums text-[#141918]/70">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[0.88rem] text-[#141918]/45">
                Oat, almond and soy at no extra charge. Retail bags of this week&rsquo;s filter
                available at the counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ SPACE ---------------------------- */}
      <section id="space" className="border-t border-[#141918]/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-16">
            <h2 className="text-[0.76rem] uppercase tracking-[0.24em] text-[#141918]/40 sm:pt-2">
              Space
            </h2>

            <div>
              <p className="max-w-lg text-[1.35rem] font-light leading-[1.45] tracking-[-0.01em] sm:text-[1.6rem]">
                Twenty seats, one long communal table and enough plug sockets that nobody has to
                fight over them.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <img
                  src={img.interior}
                  alt="Bright minimal cafe interior with large windows"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-lg object-cover"
                />
                <div className="grid gap-4">
                  <img
                    src={img.cup}
                    alt="Coffee cup on a light wooden surface"
                    loading="lazy"
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-center rounded-lg p-6" style={{ backgroundColor: '#f0f7f6' }}>
                    <p className="text-[2rem] font-light leading-none" style={{ color: TEAL }}>
                      20
                    </p>
                    <p className="mt-2 text-[0.9rem] text-[#141918]/55">
                      seats, including a six-person communal table
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {img.grid.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Daylight Coffee detail, photo ${i + 1}`}
                    loading="lazy"
                    className="aspect-square w-full rounded-lg object-cover transition-opacity hover:opacity-85"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ HOURS ---------------------------- */}
      <section id="hours" className="border-t border-[#141918]/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-16">
            <h2 className="text-[0.76rem] uppercase tracking-[0.24em] text-[#141918]/40 sm:pt-2">
              Visit
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-[0.88rem] font-medium">
                  <Clock className="h-4 w-4" style={{ color: TEAL }} aria-hidden="true" />
                  Opening hours
                </h3>
                <dl className="mt-5 space-y-3">
                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-baseline justify-between gap-4 border-b border-[#141918]/8 pb-3 text-[0.95rem]"
                    >
                      <dt className="text-[#141918]/55">{day}</dt>
                      <dd className="tabular-nums">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-[0.88rem] font-medium">
                  <MapPin className="h-4 w-4" style={{ color: TEAL }} aria-hidden="true" />
                  Where to find us
                </h3>
                <p className="mt-5 text-[1.05rem] leading-relaxed">
                  12 Linden Street
                  <br />
                  Panjim, Goa 403001
                </p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-[#141918]/55">
                  Two minutes from the ferry jetty. Street parking on the north side after 10am.
                </p>
                <a
                  href="#hours"
                  className="group mt-7 inline-flex items-center gap-2 text-[0.95rem] font-medium"
                  style={{ color: TEAL }}
                >
                  Open in maps
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ---------------------------- */}
      <footer className="border-t border-[#141918]/10 py-10">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-3 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span className="text-[0.95rem] font-medium uppercase tracking-[0.22em]">Daylight</span>
          <p className="text-[0.86rem] text-[#141918]/45">
            Speciality coffee &middot; Panjim, Goa &middot; @daylightcoffee
          </p>
        </div>
      </footer>
    </div>
  );
}
