import { Clock, Instagram, MapPin, Phone, Star } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Saffron House - dark, serif, fine dining. Gold on near-black. */

const img = demoImages.restaurantElegant;
const GOLD = '#c08a3e';

const signatures = [
  { name: 'Pan-Seared Sea Bass', note: 'saffron cream, charred fennel', price: '₹890', img: img.dishes[0] },
  { name: 'Slow-Braised Lamb', note: 'rosemary jus, truffle mash', price: '₹1,150', img: img.dishes[1] },
  { name: 'Wild Mushroom Risotto', note: 'aged parmesan, white truffle oil', price: '₹720', img: img.dishes[2] },
  { name: 'Heirloom Beet Salad', note: 'whipped feta, candied walnut', price: '₹480', img: img.dishes[3] },
];

const menu = [
  {
    course: 'To Begin',
    items: [
      ['Burrata & Heritage Tomato', '₹520'],
      ['Saffron Seafood Bisque', '₹460'],
      ['Char-Grilled Artichoke', '₹430'],
    ],
  },
  {
    course: 'Main Course',
    items: [
      ['Duck Breast à l’Orange', '₹1,240'],
      ['Butter-Poached Lobster', '₹1,680'],
      ['Aubergine Parmigiana', '₹680'],
    ],
  },
  {
    course: 'To Finish',
    items: [
      ['Dark Chocolate Fondant', '₹390'],
      ['Saffron Crème Brûlée', '₹360'],
      ['Seasonal Sorbet Trio', '₹320'],
    ],
  },
];

const navItems = ['Story', 'Menu', 'Gallery', 'Visit'];

const visitRows = [
  [MapPin, 'Address', '24 Heritage Lane, Old Quarter\nBengaluru 560001'],
  [Clock, 'Opening Hours', 'Tue – Sun · 6:30pm – 11:30pm\nClosed Mondays'],
  [Phone, 'Reservations', '+91 00000 00000'],
];

export default function RestaurantElegant() {
  return (
    <div className="font-dm bg-[#120e0a] text-[#f5efe6]">
      {/* ------------------------------ NAV ------------------------------ */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav
          className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 sm:px-8"
          aria-label="Main"
        >
          <span className="font-serif-display text-lg font-semibold tracking-[0.18em] sm:text-xl">
            SAFFRON HOUSE
          </span>
          <ul className="hidden items-center gap-9 text-[0.8rem] uppercase tracking-[0.14em] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#f5efe6]/70 transition-colors hover:text-[#c08a3e]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#visit"
            className="rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] transition-colors hover:bg-[#c08a3e] hover:text-[#120e0a] sm:px-5"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            Reserve
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={img.hero}
          alt="Candlelit dining room at Saffron House"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120e0a]/85 via-[#120e0a]/72 to-[#120e0a]" />

        <div className="relative z-10 px-6 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.36em]" style={{ color: GOLD }}>
            Est. 2014 &middot; Contemporary Indian
          </p>
          <h1 className="font-serif-display mt-6 text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-[4.75rem]">
            An Evening
            <br />
            Worth Savouring
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-[0.95rem] leading-relaxed text-[#f5efe6]/70">
            Seasonal plates, a quiet room and a wine list worth lingering over &mdash; in the
            heart of the old quarter.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#visit"
              className="rounded-full px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#120e0a] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD }}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-[#f5efe6]/25 px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#f5efe6]/60"
            >
              View the Menu
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------- STORY ----------------------------- */}
      <section id="story" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={img.chef}
              alt="Head chef plating a dish in the kitchen"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <img
              src={img.wine}
              alt="Wine being poured at the table"
              loading="lazy"
              className="absolute -bottom-8 -right-4 hidden w-40 rounded-sm border-4 border-[#120e0a] object-cover sm:block lg:w-48"
            />
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Our Story
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium leading-tight sm:text-[2.75rem]">
              Cooked slowly.
              <br />
              Served warmly.
            </h2>
            <p className="mt-6 leading-relaxed text-[#f5efe6]/70">
              Every dish begins at the morning market. We build the menu around what is good
              that week, not what is easy &mdash; which is why it changes often, and why
              regulars keep coming back to see what is new.
            </p>
            <p className="mt-4 leading-relaxed text-[#f5efe6]/70">
              The room seats forty. We like it that way: small enough that the kitchen still
              knows your name.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#f5efe6]/10 pt-8">
              {[
                ['Seasonal', 'Menu changes monthly'],
                ['Sourced', 'Local farms & markets'],
                ['Intimate', 'Forty covers only'],
              ].map(([title, sub]) => (
                <div key={title}>
                  <p className="font-serif-display text-lg" style={{ color: GOLD }}>
                    {title}
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-snug text-[#f5efe6]/50">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------- SIGNATURES --------------------------- */}
      <section className="bg-[#1a1410] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Chef&rsquo;s Signatures
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium sm:text-[2.75rem]">
              Plates We Are Known For
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((dish) => (
              <article key={dish.name} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif-display text-[1.05rem]">{dish.name}</h3>
                  <span className="shrink-0 text-sm" style={{ color: GOLD }}>
                    {dish.price}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.82rem] italic text-[#f5efe6]/45">{dish.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- MENU ------------------------------ */}
      <section id="menu" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
            The Menu
          </p>
          <h2 className="font-serif-display mt-5 text-[2rem] font-medium sm:text-[2.75rem]">
            &Agrave; La Carte
          </h2>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {menu.map(({ course, items }) => (
            <div key={course}>
              <h3
                className="border-b pb-3 text-[0.72rem] uppercase tracking-[0.2em]"
                style={{ color: GOLD, borderColor: 'rgba(192,138,62,0.3)' }}
              >
                {course}
              </h3>
              <ul className="mt-6 space-y-5">
                {items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline gap-3">
                    <span className="font-serif-display text-[1rem]">{name}</span>
                    <span
                      className="mx-1 flex-1 border-b border-dotted border-[#f5efe6]/20"
                      aria-hidden="true"
                    />
                    <span className="shrink-0 text-sm text-[#f5efe6]/60">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-[0.82rem] italic text-[#f5efe6]/40">
          A five-course tasting menu is available Thursday to Sunday &middot; &#8377;2,400 per guest
        </p>
      </section>

      {/* ---------------------------- GALLERY ---------------------------- */}
      <section id="gallery" className="bg-[#1a1410] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
                Gallery
              </p>
              <h2 className="font-serif-display mt-5 text-[2rem] font-medium sm:text-[2.75rem]">
                Inside Saffron House
              </h2>
            </div>
            <a
              href="#visit"
              className="text-[0.78rem] uppercase tracking-[0.14em] transition-colors hover:text-[#f5efe6]"
              style={{ color: GOLD }}
            >
              Book your evening &rarr;
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {img.gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Saffron House interior and dishes, photo ${i + 1}`}
                loading="lazy"
                className={`w-full rounded-sm object-cover transition-transform duration-700 hover:scale-[1.03] ${
                  i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- VISIT ----------------------------- */}
      <section id="visit" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Visit Us
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium leading-tight sm:text-[2.75rem]">
              Reserve Your Table
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#f5efe6]/70">
              Tables are held for fifteen minutes. For parties of six or more, please call us
              directly and we will arrange the room.
            </p>

            <dl className="mt-10 space-y-6">
              {visitRows.map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-[#f5efe6]/45">
                      {label}
                    </dt>
                    <dd className="mt-1.5 whitespace-pre-line text-[0.95rem] leading-relaxed">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Reservation form - demo only, does not submit anywhere */}
          <form
            className="rounded-sm border border-[#f5efe6]/10 bg-[#1a1410] p-7 sm:p-9"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif-display text-xl">Request a Reservation</h3>
            <div className="mt-7 space-y-5">
              {[
                { id: 'se-name', label: 'Name', type: 'text', ph: 'Your full name' },
                { id: 'se-phone', label: 'Phone', type: 'tel', ph: '+91 00000 00000' },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#f5efe6]/45"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2 w-full border-b border-[#f5efe6]/20 bg-transparent py-2.5 text-[0.95rem] outline-none transition-colors placeholder:text-[#f5efe6]/25 focus:border-[#c08a3e]"
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="se-date"
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#f5efe6]/45"
                  >
                    Date
                  </label>
                  <input
                    id="se-date"
                    type="date"
                    className="mt-2 w-full border-b border-[#f5efe6]/20 bg-transparent py-2.5 text-[0.95rem] outline-none [color-scheme:dark] focus:border-[#c08a3e]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="se-guests"
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#f5efe6]/45"
                  >
                    Guests
                  </label>
                  <select
                    id="se-guests"
                    className="mt-2 w-full border-b border-[#f5efe6]/20 bg-transparent py-2.5 text-[0.95rem] outline-none focus:border-[#c08a3e]"
                  >
                    {['2 guests', '3 guests', '4 guests', '5 guests', '6+ guests'].map((g) => (
                      <option key={g} className="bg-[#1a1410]">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-9 w-full rounded-full py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#120e0a] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD }}
            >
              Request Table
            </button>
            <p className="mt-4 text-center text-[0.72rem] text-[#f5efe6]/35">
              Sample form &mdash; this demo does not send enquiries.
            </p>
          </form>
        </div>
      </section>

      {/* ---------------------------- FOOTER ----------------------------- */}
      <footer className="border-t border-[#f5efe6]/10 bg-[#0d0a07]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif-display text-lg tracking-[0.18em]">SAFFRON HOUSE</p>
            <p className="mt-2 text-[0.82rem] text-[#f5efe6]/45">
              Contemporary Indian dining &middot; Bengaluru
            </p>
          </div>
          <div className="flex items-center gap-5 text-[0.82rem] text-[#f5efe6]/50">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" style={{ color: GOLD }} aria-hidden="true" />
              4.8 &middot; 320 reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @saffronhouse
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
