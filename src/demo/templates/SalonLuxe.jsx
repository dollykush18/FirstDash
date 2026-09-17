import { Clock, Instagram, MapPin, Phone, Sparkles } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Maison Lux - dark, premium salon. Champagne gold on charcoal. */

const img = demoImages.salonLuxe;
const GOLD = '#b99155';

const services = [
  {
    group: 'Hair',
    items: [
      ['Precision Cut & Finish', '₹1,800', '60 min'],
      ['Balayage & Gloss', '₹6,500', '180 min'],
      ['Keratin Smoothing', '₹8,900', '150 min'],
      ['Bridal Styling', 'On request', '120 min'],
    ],
  },
  {
    group: 'Skin & Nails',
    items: [
      ['Signature Facial', '₹3,200', '75 min'],
      ['Hydra Glow Treatment', '₹4,500', '90 min'],
      ['Gel Manicure', '₹1,400', '45 min'],
      ['Luxury Pedicure', '₹1,900', '60 min'],
    ],
  },
];

const stylists = [
  { name: 'Aanya R.', role: 'Creative Director', spec: 'Colour & balayage' },
  { name: 'Devika S.', role: 'Senior Stylist', spec: 'Precision cutting' },
  { name: 'Meher K.', role: 'Skin Therapist', spec: 'Advanced facials' },
];

const navItems = ['Services', 'Team', 'Gallery', 'Book'];

export default function SalonLuxe() {
  return (
    <div className="font-dm bg-[#131313] text-[#efe9e1]">
      {/* ------------------------------ NAV ------------------------------ */}
      <header className="sticky top-0 z-30 border-b border-[#efe9e1]/8 bg-[#131313]/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 sm:px-8"
          aria-label="Main"
        >
          <span className="font-serif-display text-lg tracking-[0.2em] sm:text-xl">
            MAISON LUX
          </span>
          <ul className="hidden items-center gap-9 text-[0.78rem] uppercase tracking-[0.14em] lg:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#efe9e1]/60 transition-colors hover:text-[#b99155]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="rounded-none border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.16em] transition-colors hover:bg-[#b99155] hover:text-[#131313]"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.32em]" style={{ color: GOLD }}>
              Hair &middot; Skin &middot; Nails
            </p>
            <h1 className="font-serif-display mt-7 text-[2.6rem] font-medium leading-[1.06] sm:text-5xl lg:text-[4.25rem]">
              Beautifully
              <br />
              looked after.
            </h1>
            <p className="mt-7 max-w-md leading-relaxed text-[#efe9e1]/60">
              An unhurried studio in the city centre, where every appointment starts with a
              consultation and ends with you looking in the mirror twice.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#book"
                className="px-8 py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#131313] transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: GOLD }}
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="border border-[#efe9e1]/25 px-8 py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#efe9e1]/60"
              >
                Price List
              </a>
            </div>

            <div className="mt-12 flex gap-10 border-t border-[#efe9e1]/10 pt-8">
              {[
                ['12 yrs', 'In the city'],
                ['6', 'Senior stylists'],
                ['4.9', 'Google rating'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-serif-display text-2xl" style={{ color: GOLD }}>
                    {v}
                  </p>
                  <p className="mt-1 text-[0.76rem] uppercase tracking-[0.1em] text-[#efe9e1]/40">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={img.hero}
              alt="Stylist working with a client at Maison Lux"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              className="absolute -bottom-px -left-px hidden px-6 py-5 sm:block"
              style={{ backgroundColor: GOLD }}
            >
              <p className="font-serif-display text-lg text-[#131313]">Open till 9pm</p>
              <p className="mt-0.5 text-[0.74rem] uppercase tracking-[0.12em] text-[#131313]/70">
                Seven days a week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- SERVICES --------------------------- */}
      <section id="services" className="border-t border-[#efe9e1]/8 bg-[#1a1a1a] py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Price List
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium sm:text-[2.75rem]">
              Our Services
            </h2>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            {services.map((section) => (
              <div key={section.group}>
                <h3
                  className="border-b pb-4 text-[0.72rem] uppercase tracking-[0.2em]"
                  style={{ color: GOLD, borderColor: 'rgba(185,145,85,0.3)' }}
                >
                  {section.group}
                </h3>
                <ul className="mt-2">
                  {section.items.map(([name, price, time]) => (
                    <li
                      key={name}
                      className="flex items-baseline gap-4 border-b border-[#efe9e1]/8 py-5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-serif-display text-[1.05rem]">{name}</p>
                        <p className="mt-1 text-[0.78rem] uppercase tracking-[0.1em] text-[#efe9e1]/35">
                          {time}
                        </p>
                      </div>
                      <span className="shrink-0 text-[0.95rem]" style={{ color: GOLD }}>
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-[0.84rem] italic text-[#efe9e1]/40">
            A complimentary consultation is included with every colour service.
          </p>
        </div>
      </section>

      {/* ------------------------------ TEAM ----------------------------- */}
      <section id="team" className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              The Team
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium leading-tight sm:text-[2.75rem]">
              People who actually listen
            </h2>
            <p className="mt-6 leading-relaxed text-[#efe9e1]/60">
              Everyone on the floor has at least six years behind the chair, and each of us keeps
              training every year. Tell us what you want &mdash; and just as usefully, what you
              have hated before.
            </p>

            <ul className="mt-10 divide-y divide-[#efe9e1]/8">
              {stylists.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="font-serif-display text-[1.05rem]">{s.name}</p>
                    <p className="mt-0.5 text-[0.82rem] text-[#efe9e1]/45">{s.role}</p>
                  </div>
                  <span className="shrink-0 text-right text-[0.82rem]" style={{ color: GOLD }}>
                    {s.spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={img.styling}
              alt="Stylist finishing a blow-dry"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <img
              src={img.portrait}
              alt="Client after a colour appointment"
              loading="lazy"
              className="mt-10 aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------- GALLERY ---------------------------- */}
      <section id="gallery" className="bg-[#1a1a1a] py-20 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
                Recent Work
              </p>
              <h2 className="font-serif-display mt-5 text-[2rem] font-medium sm:text-[2.75rem]">
                From the Chair
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[0.82rem] text-[#efe9e1]/50">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @maisonlux
            </span>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {img.gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Hair and beauty work by Maison Lux, photo ${i + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ BOOK ----------------------------- */}
      <section id="book" className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: GOLD }}>
              Appointments
            </p>
            <h2 className="font-serif-display mt-5 text-[2rem] font-medium leading-tight sm:text-[2.75rem]">
              Book Your Visit
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#efe9e1]/60">
              Request a time and we will confirm by WhatsApp within the hour. Colour appointments
              need a patch test 48 hours in advance.
            </p>

            <img
              src={img.interior}
              alt="The styling floor at Maison Lux"
              loading="lazy"
              className="mt-10 aspect-[3/2] w-full object-cover"
            />

            <dl className="mt-10 space-y-5">
              {[
                [MapPin, '9 Rosewood Avenue, Bandra West\nMumbai 400050'],
                [Clock, 'Mon – Sun · 10:00am – 9:00pm'],
                [Phone, '+91 00000 00000'],
              ].map(([Icon, value]) => (
                <div key={value} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
                  <dd className="whitespace-pre-line text-[0.95rem] leading-relaxed text-[#efe9e1]/75">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Booking form - demo only */}
          <form
            className="border border-[#efe9e1]/10 bg-[#1a1a1a] p-7 sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif-display flex items-center gap-2 text-xl">
              <Sparkles className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
              Request an Appointment
            </h3>

            <div className="mt-8 space-y-6">
              {[
                { id: 'sl-name', label: 'Full name', type: 'text', ph: 'Your name' },
                { id: 'sl-phone', label: 'WhatsApp number', type: 'tel', ph: '+91 00000 00000' },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#efe9e1]/40"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2.5 w-full border-b border-[#efe9e1]/20 bg-transparent py-2.5 text-[0.95rem] outline-none transition-colors placeholder:text-[#efe9e1]/25 focus:border-[#b99155]"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="sl-service"
                  className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#efe9e1]/40"
                >
                  Service
                </label>
                <select
                  id="sl-service"
                  className="mt-2.5 w-full border-b border-[#efe9e1]/20 bg-transparent py-2.5 text-[0.95rem] outline-none focus:border-[#b99155]"
                >
                  {['Cut & finish', 'Colour / balayage', 'Keratin smoothing', 'Facial', 'Nails', 'Not sure yet'].map(
                    (s) => (
                      <option key={s} className="bg-[#1a1a1a]">
                        {s}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label
                  htmlFor="sl-date"
                  className="block text-[0.68rem] uppercase tracking-[0.16em] text-[#efe9e1]/40"
                >
                  Preferred date
                </label>
                <input
                  id="sl-date"
                  type="date"
                  className="mt-2.5 w-full border-b border-[#efe9e1]/20 bg-transparent py-2.5 text-[0.95rem] outline-none [color-scheme:dark] focus:border-[#b99155]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 w-full py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#131313] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD }}
            >
              Request Appointment
            </button>
            <p className="mt-4 text-center text-[0.72rem] text-[#efe9e1]/30">
              Sample form &mdash; this demo does not send enquiries.
            </p>
          </form>
        </div>
      </section>

      {/* ----------------------------- FOOTER ---------------------------- */}
      <footer className="border-t border-[#efe9e1]/8 bg-[#0e0e0e]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif-display text-lg tracking-[0.2em]">MAISON LUX</p>
          <p className="text-[0.84rem] text-[#efe9e1]/40">
            Hair, skin &amp; nails &middot; Bandra West, Mumbai
          </p>
        </div>
      </footer>
    </div>
  );
}
