import { Check, Clock, Heart, MapPin, MessageCircle, Star } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Bloom Beauty Bar - soft, friendly, pastel. Approachable and easy to book. */

const img = demoImages.salonFresh;
const PINK = '#db2777';
const BLUSH = '#fdf2f6';

const packages = [
  {
    name: 'The Quick Refresh',
    price: '₹1,499',
    duration: '45 minutes',
    desc: 'A tidy-up when you are short on time.',
    includes: ['Wash & blow-dry', 'Express manicure', 'Brow shaping'],
    popular: false,
  },
  {
    name: 'The Full Bloom',
    price: '₹3,999',
    duration: '2 hours',
    desc: 'Our most-booked package, and for good reason.',
    includes: ['Cut & style', 'Signature facial', 'Gel manicure', 'Brow & lash tint'],
    popular: true,
  },
  {
    name: 'The Big Day',
    price: '₹7,499',
    duration: '3.5 hours',
    desc: 'For weddings, shoots and birthdays that matter.',
    includes: ['Bridal hair styling', 'Full makeup', 'Manicure & pedicure', 'Trial session included'],
    popular: false,
  },
];

const singles = [
  ['Haircut & Style', '₹899'],
  ['Root Touch-Up', '₹1,600'],
  ['Classic Facial', '₹1,800'],
  ['Gel Manicure', '₹1,200'],
  ['Pedicure', '₹1,100'],
  ['Threading', '₹250'],
];

const reviews = [
  { text: 'Walked in nervous about a big colour change and walked out delighted. They talked me through every step.', name: 'Priya M.' },
  { text: 'Best facial I have had in years, and the studio is so calm. Already booked my next one.', name: 'Neha T.' },
  { text: 'They did my bridal hair and stayed late to make sure it was perfect. Genuinely lovely people.', name: 'Ritika S.' },
];

const navItems = ['Packages', 'Services', 'Reviews', 'Book'];

export default function SalonFresh() {
  return (
    <div className="font-outfit bg-white text-[#2d1f28]">
      {/* ------------------------------ NAV ------------------------------ */}
      <header className="sticky top-0 z-30 border-b border-[#2d1f28]/6 bg-white/92 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: PINK }}
            >
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            Bloom
          </span>

          <ul className="hidden items-center gap-8 text-[0.92rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#2d1f28]/55 transition-colors hover:text-[#db2777]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="rounded-full px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: PINK }}
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section style={{ backgroundColor: BLUSH }}>
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-medium"
              style={{ color: PINK }}
            >
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              4.9 from 480+ happy clients
            </span>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.025em] sm:text-5xl lg:text-[3.75rem]">
              Feel good
              <br />
              <span style={{ color: PINK }}>from the chair up.</span>
            </h1>

            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[#2d1f28]/60">
              Hair, skin and nails in a calm little studio where nobody rushes you and nobody
              makes you feel silly for asking questions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: PINK }}
              >
                Book an Appointment
              </a>
              <a
                href="#packages"
                className="rounded-full border-2 border-[#2d1f28]/12 bg-white px-7 py-3.5 font-semibold transition-colors hover:border-[#db2777]"
              >
                See Packages
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {['Walk-ins welcome', 'Open 7 days', 'WhatsApp booking'].map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-[0.88rem] text-[#2d1f28]/60">
                  <Check className="h-4 w-4" style={{ color: PINK }} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={img.hero}
              alt="A manicure in progress at Bloom Beauty Bar"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
            <img
              src={img.spa}
              alt="Calm treatment room"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------- PACKAGES --------------------------- */}
      <section id="packages" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]" style={{ color: PINK }}>
            Packages
          </p>
          <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            Pick a package, or mix your own
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#2d1f28]/55">
            Bundles are cheaper than booking each treatment separately, and you can always swap
            something out.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-[1.5rem] p-7 sm:p-8 ${
                pkg.popular
                  ? 'text-white shadow-[0_24px_60px_-24px_rgba(219,39,119,0.6)]'
                  : 'border border-[#2d1f28]/10 bg-white'
              }`}
              style={pkg.popular ? { backgroundColor: PINK } : undefined}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider" style={{ color: PINK }}>
                  Most booked
                </span>
              )}

              <h3 className="text-[1.2rem] font-semibold">{pkg.name}</h3>
              <p className={`mt-1.5 text-[0.9rem] ${pkg.popular ? 'text-white/75' : 'text-[#2d1f28]/55'}`}>
                {pkg.desc}
              </p>

              <p className="mt-6 text-[2.25rem] font-semibold leading-none">{pkg.price}</p>
              <p className={`mt-2 text-[0.85rem] ${pkg.popular ? 'text-white/70' : 'text-[#2d1f28]/45'}`}>
                {pkg.duration}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {pkg.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[0.92rem]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.popular ? 'text-white' : ''}`}
                      style={pkg.popular ? undefined : { color: PINK }}
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`mt-8 rounded-full py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 ${
                  pkg.popular ? 'bg-white' : 'text-white'
                }`}
                style={pkg.popular ? { color: PINK } : { backgroundColor: PINK }}
              >
                Book this
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------- SERVICES --------------------------- */}
      <section id="services" className="py-20 lg:py-24" style={{ backgroundColor: BLUSH }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]" style={{ color: PINK }}>
                Individual Services
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                Just need one thing?
              </h2>
              <p className="mt-5 leading-relaxed text-[#2d1f28]/55">
                Book any treatment on its own. Prices below are starting prices &mdash; longer or
                thicker hair may cost a little more, and we will always tell you before we start.
              </p>

              <ul className="mt-9 divide-y divide-[#2d1f28]/10 rounded-[1.25rem] bg-white px-6">
                {singles.map(([name, price]) => (
                  <li key={name} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[0.98rem]">{name}</span>
                    <span className="font-semibold" style={{ color: PINK }}>
                      {price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 self-start">
              <img
                src={img.nails}
                alt="Finished gel manicure"
                loading="lazy"
                className="aspect-square w-full rounded-[1.25rem] object-cover"
              />
              <img
                src={img.facial}
                alt="Facial treatment in progress"
                loading="lazy"
                className="aspect-square w-full rounded-[1.25rem] object-cover"
              />
              {img.gallery.slice(0, 2).map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Work by Bloom Beauty Bar, photo ${i + 1}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- REVIEWS --------------------------- */}
      <section id="reviews" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]" style={{ color: PINK }}>
            Reviews
          </p>
          <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            What our clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-[1.25rem] border border-[#2d1f28]/10 p-6"
            >
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: PINK }} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#2d1f28]/70">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 text-[0.88rem] font-semibold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ------------------------------ BOOK ----------------------------- */}
      <section id="book" className="py-20 lg:py-24" style={{ backgroundColor: BLUSH }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]" style={{ color: PINK }}>
                Book
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                Let&rsquo;s find you a time
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#2d1f28]/55">
                Send us a request and we will confirm on WhatsApp, usually within the hour. Prefer
                to talk it through first? Message us &mdash; we are happy to advise.
              </p>

              <dl className="mt-10 space-y-5">
                {[
                  [MapPin, 'Studio', '31 Jasmine Road, Koramangala\nBengaluru 560034'],
                  [Clock, 'Open', 'Mon – Sun · 9:30am – 8:00pm'],
                  [MessageCircle, 'WhatsApp', '+91 00000 00000'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
                      style={{ color: PINK }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[0.82rem] font-semibold">{label}</dt>
                      <dd className="mt-0.5 whitespace-pre-line text-[0.92rem] leading-relaxed text-[#2d1f28]/55">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Booking form - demo only */}
            <form
              className="rounded-[1.5rem] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(45,31,40,0.4)] sm:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-semibold">Request an appointment</h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'sf-name', label: 'Your name', type: 'text', ph: 'Full name', full: false },
                  { id: 'sf-phone', label: 'WhatsApp number', type: 'tel', ph: '+91 00000 00000', full: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.82rem] font-medium">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-[#2d1f28]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#2d1f28]/30 focus:border-[#db2777]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="sf-service" className="block text-[0.82rem] font-medium">
                    What would you like?
                  </label>
                  <select
                    id="sf-service"
                    className="mt-2 w-full rounded-xl border border-[#2d1f28]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#db2777]"
                  >
                    {['The Full Bloom', 'The Quick Refresh', 'The Big Day', 'Single treatment', 'Not sure yet'].map(
                      (s) => (
                        <option key={s}>{s}</option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="sf-date" className="block text-[0.82rem] font-medium">
                    Preferred date
                  </label>
                  <input
                    id="sf-date"
                    type="date"
                    className="mt-2 w-full rounded-xl border border-[#2d1f28]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#db2777]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="sf-notes" className="block text-[0.82rem] font-medium">
                    Anything we should know? <span className="text-[#2d1f28]/40">(optional)</span>
                  </label>
                  <textarea
                    id="sf-notes"
                    rows={3}
                    placeholder="Allergies, hair history, a photo you love..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#2d1f28]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#2d1f28]/30 focus:border-[#db2777]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: PINK }}
              >
                Send Request
              </button>
              <p className="mt-3.5 text-center text-[0.78rem] text-[#2d1f28]/40">
                Sample form &mdash; this demo does not send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ---------------------------- */}
      <footer className="border-t border-[#2d1f28]/8 py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <p className="font-semibold">Bloom Beauty Bar</p>
          <p className="text-[0.88rem] text-[#2d1f28]/45">
            Hair, skin &amp; nails &middot; Koramangala, Bengaluru
          </p>
        </div>
      </footer>
    </div>
  );
}
