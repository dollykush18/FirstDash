import {
  Check,
  Clock,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  Ruler,
  Star,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* Kora Studio - everyday ethnic and fusion wear. Quiet, editorial and
   fabric-led: the buyer here cares what the cloth is and who made it, so
   those details sit in the open rather than behind a product page. */

const img = demoImages.boutiqueModern;
const CLAY = '#b45309';
const INK = '#26211c';
const SAND = '#f7f3ed';

const pieces = [
  {
    name: 'Chanderi Kurta Sets',
    price: '₹3,200',
    fabric: 'Handloom chanderi silk-cotton',
    note: 'Light enough for a full working day in summer. Gets softer with every wash.',
  },
  {
    name: 'Mul Cotton Everyday',
    price: '₹1,800',
    fabric: 'Double-gauze mul cotton',
    note: 'Our most repeated order. Plain dyes, deep pockets, no lining to trap heat.',
  },
  {
    name: 'Linen Co-ords',
    price: '₹4,500',
    fabric: 'Pure European linen',
    note: 'Fusion cuts that read equally well at the office and at a weekend lunch.',
  },
  {
    name: 'Ajrakh Dupattas',
    price: '₹2,400',
    fabric: 'Block-printed cotton',
    note: 'Hand block-printed in Kutch. Slight irregularity in the print is the point.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Natural fabric only',
    desc: 'Cotton, linen, silk and blends of those. Nothing synthetic, because it does not breathe in this climate.',
  },
  {
    icon: Ruler,
    title: 'Made to your size',
    desc: 'Sizes XS to 5XL as standard, and made-to-measure at no extra charge on most styles.',
  },
  {
    icon: Package,
    title: 'Small batches',
    desc: 'Twenty to thirty pieces per design. When a colour sells out we often do not repeat it.',
  },
];

const questions = [
  ['Do you ship across India?', 'Yes, free above ₹2,500. Delivery is three to six days depending on the city.'],
  ['Can I return something?', 'Within seven days if unworn, or exchange for another size at any time.'],
  ['Do you do custom sizing?', 'Send measurements on WhatsApp and we stitch to them. Adds about a week.'],
  ['Are the prints hand-done?', 'The ajrakh and bagru ranges are hand block-printed. The rest are screen-printed in-house.'],
];

const navItems = ['Shop', 'Fabric', 'Studio', 'Visit'];

export default function BoutiqueModern() {
  const piecePhotos = [img.hero, img.saree, img.rack, img.neutrals];

  return (
    <div className="font-outfit" style={{ backgroundColor: SAND, color: INK }}>
      {/* ------------------------------ NAV ------------------------------- */}
      <header
        className="sticky top-0 z-30 border-b border-[#26211c]/8 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(247,243,237,0.9)' }}
      >
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="text-[1.3rem] font-light tracking-[0.3em]">KORA</span>

          <ul className="hidden items-center gap-9 text-[0.92rem] font-light md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#26211c]/55 transition-colors hover:text-[#b45309]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#visit"
            className="rounded-full px-5 py-2.5 text-[0.86rem] font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: CLAY }}
          >
            Visit the Studio
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.78rem] font-medium tracking-wide"
            style={{ color: CLAY }}
          >
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            Made in Jaipur &middot; Shipped across India
          </span>

          <h1 className="mt-7 text-[2.5rem] font-light leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem] lg:text-[3.8rem]">
            Clothes you reach for
            <br />
            <span style={{ color: CLAY }}>on an ordinary day.</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] font-light leading-relaxed text-[#26211c]/60">
            Handloom cotton, chanderi and linen, cut into everyday kurtas and co-ords that
            survive Indian summers and repeated washing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="rounded-full px-7 py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: CLAY }}
            >
              See the Collection
            </a>
            <a
              href="#fabric"
              className="rounded-full border border-[#26211c]/15 bg-white px-7 py-3.5 font-medium transition-colors hover:border-[#b45309]"
            >
              About the Fabric
            </a>
          </div>

          <ul className="mt-10 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {['XS to 5XL as standard', 'Free custom sizing', 'Free shipping above ₹2,500', '7-day returns'].map(
              (p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-[0.88rem] font-light text-[#26211c]/60"
                >
                  <Check className="h-4 w-4 shrink-0" style={{ color: CLAY }} aria-hidden="true" />
                  {p}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative">
          <img
            src={img.hero}
            alt="A Kora Studio outfit photographed outdoors"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
          />
          <img
            src={img.hoops}
            alt="Gold hoops styled with the collection"
            loading="lazy"
            className="absolute -bottom-8 -left-4 hidden h-36 w-36 rounded-full border-[6px] object-cover sm:block lg:-left-10 lg:h-44 lg:w-44"
            style={{ borderColor: SAND }}
          />
        </div>
      </section>

      {/* ------------------------------ SHOP ------------------------------ */}
      <section id="shop" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: CLAY }}
            >
              The Collection
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              Four things we make well
            </h2>
            <p className="mt-5 font-light leading-relaxed text-[#26211c]/60">
              We would rather do a few styles properly than carry a hundred. Every piece lists
              what it is made of, because that is what decides how it wears.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pieces.map((p, i) => (
              <article key={p.name}>
                <img
                  src={piecePhotos[i]}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
                />
                <h3 className="mt-5 text-[1.15rem] font-normal">{p.name}</h3>
                <p className="mt-1 text-[1rem] font-medium" style={{ color: CLAY }}>
                  {p.price}
                </p>
                <p className="mt-3 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[#26211c]/40">
                  {p.fabric}
                </p>
                <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-[#26211c]/60">
                  {p.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- FABRIC ----------------------------- */}
      <section id="fabric" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: CLAY }}
            >
              How We Work
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              Fabric first, everything else after
            </h2>

            <ul className="mt-10 space-y-8">
              {values.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
                    style={{ color: CLAY }}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[1.1rem] font-normal">{title}</h3>
                    <p className="mt-2 font-light leading-relaxed text-[#26211c]/60">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={img.store}
            alt="Inside the Kora Studio shop"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
          />
        </div>
      </section>

      {/* ------------------------------ FAQ ------------------------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: CLAY }}
            >
              Before You Ask
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              The usual questions
            </h2>
          </div>

          <dl className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {questions.map(([q, a]) => (
              <div key={q}>
                <dt className="text-[1.05rem] font-normal">{q}</dt>
                <dd className="mt-2 font-light leading-relaxed text-[#26211c]/60">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------ VISIT ----------------------------- */}
      <section id="studio" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16" id="visit">
          <div>
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: CLAY }}
            >
              Visit
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              Come see the cloth in person
            </h2>
            <p className="mt-5 max-w-md font-light leading-relaxed text-[#26211c]/60">
              Photographs never get fabric right. The studio holds every current style in every
              size, and there is no pressure to buy anything on the day.
            </p>

            <dl className="mt-10 space-y-6">
              {[
                [MapPin, 'Studio', 'C-28 Jacob Road, Civil Lines\nJaipur 302006'],
                [Clock, 'Open', 'Tue – Sun · 11am – 7pm\nClosed Mondays'],
                [MessageCircle, 'WhatsApp', '+91 00000 00000'],
                [Instagram, 'Instagram', '@korastudio'],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
                    style={{ color: CLAY }}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-[0.82rem] font-medium">{label}</dt>
                    <dd className="mt-1 whitespace-pre-line text-[0.92rem] font-light leading-relaxed text-[#26211c]/60">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Enquiry form - demo only */}
          <form
            className="rounded-[1.75rem] bg-white p-7 sm:p-9"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-[1.35rem] font-normal">Ask us anything</h3>
            <p className="mt-2 text-[0.9rem] font-light text-[#26211c]/55">
              Sizing, custom orders, fabric questions or wholesale.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { id: 'bm-name', label: 'Your name', type: 'text', ph: 'Full name' },
                { id: 'bm-phone', label: 'WhatsApp number', type: 'tel', ph: '+91 00000 00000' },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[0.82rem] font-medium">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2 w-full rounded-xl border border-[#26211c]/15 px-4 py-3 text-[0.95rem] font-light outline-none transition-colors placeholder:text-[#26211c]/30 focus:border-[#b45309]"
                    style={{ backgroundColor: SAND }}
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="bm-topic" className="block text-[0.82rem] font-medium">
                  What is this about?
                </label>
                <select
                  id="bm-topic"
                  className="mt-2 w-full rounded-xl border border-[#26211c]/15 px-4 py-3 text-[0.95rem] font-light outline-none focus:border-[#b45309]"
                  style={{ backgroundColor: SAND }}
                >
                  {[
                    'Sizing help',
                    'Custom / made-to-measure order',
                    'An existing order',
                    'Wholesale or stockist enquiry',
                    'Something else',
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="bm-notes" className="block text-[0.82rem] font-medium">
                  Your message
                </label>
                <textarea
                  id="bm-notes"
                  rows={3}
                  placeholder="Measurements, the style you are looking at, or a photo you can send on WhatsApp..."
                  className="mt-2 w-full resize-none rounded-xl border border-[#26211c]/15 px-4 py-3 text-[0.95rem] font-light outline-none transition-colors placeholder:text-[#26211c]/30 focus:border-[#b45309]"
                  style={{ backgroundColor: SAND }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: CLAY }}
            >
              Send Message
            </button>
            <p className="mt-3.5 text-center text-[0.78rem] font-light text-[#26211c]/40">
              Sample form &mdash; this demo does not send enquiries.
            </p>
          </form>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="border-t border-[#26211c]/8 py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[1.1rem] font-light tracking-[0.3em]">KORA</p>
          <p className="text-[0.88rem] font-light text-[#26211c]/45">
            Handloom everyday wear &middot; Civil Lines, Jaipur
          </p>
        </div>
      </footer>
    </div>
  );
}
