import {
  CalendarDays,
  Check,
  Clock,
  Droplets,
  MapPin,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* Aria Dental & Skin - calm, premium, unhurried. Built for specialist clinics
   where the decision is emotional as much as medical, so the page leads with
   reassurance and transparent pricing rather than a wall of departments. */

const img = demoImages.clinicModern;
const SAGE = '#2f6b5e';
const INK = '#1b2b27';
const SAND = '#f6f2ec';

const promises = [
  'Painless anaesthesia',
  'Digital scans, no putty',
  'Evening appointments',
  'Fixed quotes before we start',
];

const dental = [
  ['Consultation & digital scan', 'Free'],
  ['Scaling & polishing', '₹1,500'],
  ['Tooth-coloured filling', '₹2,000'],
  ['Root canal (single sitting)', '₹6,500'],
  ['Zirconia crown', '₹9,000'],
  ['Clear aligners (full course)', 'from ₹85,000'],
];

const skin = [
  ['Skin consultation & analysis', 'Free'],
  ['Medical facial', '₹3,000'],
  ['Chemical peel', '₹3,500'],
  ['Acne treatment plan (monthly)', '₹4,500'],
  ['Laser hair reduction (per session)', 'from ₹2,500'],
  ['Pigmentation laser', 'from ₹5,000'],
];

const signatures = [
  {
    icon: Smile,
    name: 'Clear Aligners',
    time: '6 – 14 months',
    desc: 'Straighten your teeth without anyone noticing. We scan, simulate the result, and you approve the plan before a single tray is made.',
    photo: img.aligner,
  },
  {
    icon: ScanLine,
    name: 'Single-Visit Crowns',
    time: 'One appointment',
    desc: 'Scanned, milled and fitted the same day. No temporary crown, no second trip across town, no two weeks of chewing on one side.',
    photo: img.scan,
  },
  {
    icon: Droplets,
    name: 'Medical Facials',
    time: '45 – 60 minutes',
    desc: 'Dermatologist-designed, not a spa menu. We treat the cause of the breakout or pigmentation and tell you honestly how long it will take.',
    photo: img.facial,
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: 'You get the quote first',
    desc: 'Written treatment plan with costs before anything begins. Nothing gets added halfway through.',
  },
  {
    icon: Zap,
    title: 'Fewer, longer appointments',
    desc: 'We would rather keep you for ninety minutes once than call you back four times.',
  },
  {
    icon: Sparkles,
    title: 'No upselling, ever',
    desc: 'If a tooth can be watched instead of filled, we will say so. That is why most of our patients arrive as referrals.',
  },
];

const team = [
  {
    name: 'Dr. Ananya Iyer',
    role: 'Dental Surgeon & Implantologist',
    creds: 'BDS, MDS · 12 years',
    photo: img.team[0],
  },
  {
    name: 'Dr. Rohan Desai',
    role: 'Consultant Dermatologist',
    creds: 'MBBS, MD (Dermatology) · 10 years',
    photo: img.team[1],
  },
];

const steps = [
  ['Talk first', 'A proper conversation about what is bothering you, before any instrument comes out.'],
  ['Scan & assess', 'Digital scans and photos so you can see exactly what we are looking at.'],
  ['Plan & quote', 'Options, timelines and costs in writing. Take it home and think about it.'],
  ['Treat at your pace', 'Book when you are ready. Nothing is urgent unless we tell you it is.'],
];

const reviews = [
  {
    text: 'I had put off a root canal for two years out of fear. They talked me through every step and I genuinely felt nothing. Wish I had come earlier.',
    name: 'Meera K.',
  },
  {
    text: 'Got a written quote for aligners and that was the final number — no surprise charges at any point over eleven months.',
    name: 'Aditya R.',
  },
  {
    text: 'My pigmentation had been treated at three places before. This was the first time somebody explained why it kept coming back.',
    name: 'Fatima N.',
  },
];

const navItems = ['Treatments', 'Pricing', 'Team', 'Visit'];

export default function ClinicModern() {
  return (
    <div className="font-outfit" style={{ backgroundColor: SAND, color: INK }}>
      {/* ------------------------------ NAV ------------------------------- */}
      <header
        className="sticky top-0 z-30 border-b border-[#1b2b27]/8 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(246,242,236,0.9)' }}
      >
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: SAGE }}
            >
              <Sparkles className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            </span>
            <span className="text-[1.25rem] font-light tracking-[0.12em]">ARIA</span>
          </span>

          <ul className="hidden items-center gap-9 text-[0.92rem] font-light md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#1b2b27]/60 transition-colors hover:text-[#2f6b5e]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="rounded-full px-5 py-2.5 text-[0.86rem] font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: SAGE }}
          >
            Book a Consultation
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.78rem] font-medium tracking-wide"
            style={{ color: SAGE }}
          >
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            4.9 · 600+ reviews · Mostly referrals
          </span>

          <h1 className="mt-7 text-[2.5rem] font-light leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem] lg:text-[3.9rem]">
            Dentistry and skin care,
            <br />
            <span style={{ color: SAGE }}>without the dread.</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] font-light leading-relaxed text-[#1b2b27]/65">
            A small specialist clinic where consultations are free, quotes are written down before
            we begin, and nobody is ever hurried into treatment they do not need.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-full px-7 py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: SAGE }}
            >
              Book a Free Consultation
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-[#1b2b27]/15 bg-white px-7 py-3.5 font-medium transition-colors hover:border-[#2f6b5e]"
            >
              See Pricing
            </a>
          </div>

          <ul className="mt-10 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {promises.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 text-[0.88rem] font-light text-[#1b2b27]/60"
              >
                <Check className="h-4 w-4 shrink-0" style={{ color: SAGE }} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={img.hero}
            alt="The bright, calm treatment room at Aria Dental and Skin"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
          />
          <img
            src={img.consult}
            alt="A dentist reviewing a digital scan with a patient"
            loading="lazy"
            className="absolute -bottom-8 -left-4 hidden h-40 w-40 rounded-full border-[6px] object-cover sm:block lg:-left-10 lg:h-48 lg:w-48"
            style={{ borderColor: SAND }}
          />
        </div>
      </section>

      {/* ---------------------------- SIGNATURES -------------------------- */}
      <section id="treatments" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: SAGE }}
            >
              Signature Treatments
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              The three things people travel across the city for
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {signatures.map(({ icon: Icon, name, time, desc, photo }) => (
              <article key={name}>
                <img
                  src={photo}
                  alt={name}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
                />
                <span
                  className="mt-6 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: SAND, color: SAGE }}
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[1.3rem] font-normal">{name}</h3>
                <p
                  className="mt-1.5 text-[0.82rem] font-medium uppercase tracking-[0.12em]"
                  style={{ color: SAGE }}
                >
                  {time}
                </p>
                <p className="mt-3.5 font-light leading-relaxed text-[#1b2b27]/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- PRICING ---------------------------- */}
      <section id="pricing" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-xl">
          <p
            className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
            style={{ color: SAGE }}
          >
            Pricing
          </p>
          <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
            Published, so you can plan
          </h2>
          <p className="mt-5 font-light leading-relaxed text-[#1b2b27]/60">
            Starting prices for the treatments we are asked about most. Complex cases are quoted in
            writing after your free consultation &mdash; and that quote is the final number.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            { title: 'Dental', icon: Smile, rows: dental },
            { title: 'Skin', icon: Droplets, rows: skin },
          ].map(({ title, icon: Icon, rows }) => (
            <div key={title} className="rounded-[1.75rem] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: SAND, color: SAGE }}
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </span>
                <h3 className="text-[1.35rem] font-normal">{title}</h3>
              </div>

              <ul className="mt-7 divide-y divide-[#1b2b27]/8">
                {rows.map(([name, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-light text-[#1b2b27]/80">{name}</span>
                    <span className="shrink-0 font-medium" style={{ color: SAGE }}>
                      {price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------- REASONS ---------------------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1140px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <img
            src={img.consult}
            alt="A dentist explaining a scan to a patient"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover"
          />

          <div>
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: SAGE }}
            >
              Why People Stay
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              Care that does not feel like a sales pitch
            </h2>

            <ul className="mt-10 space-y-8">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: SAND, color: SAGE }}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[1.1rem] font-normal">{title}</h3>
                    <p className="mt-2 font-light leading-relaxed text-[#1b2b27]/65">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------ TEAM ------------------------------ */}
      <section id="team" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: SAGE }}
            >
              The Team
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
              Two specialists, one clinic
            </h2>
            <p className="mt-5 font-light leading-relaxed text-[#1b2b27]/60">
              You will see the same person from your first consultation to your last review. No
              rotating panel of visiting doctors.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-[1.75rem] bg-white">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-[1.15rem] font-normal">{member.name}</h3>
                  <p className="mt-1 text-[0.9rem] font-medium" style={{ color: SAGE }}>
                    {member.role}
                  </p>
                  <p className="mt-3 text-[0.86rem] font-light text-[#1b2b27]/55">{member.creds}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- FIRST VISIT ------------------------- */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: INK }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: '#8fc4b6' }}
            >
              Your First Visit
            </p>
            <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] text-[#f4f1ea] sm:text-[2.7rem]">
              Four steps, no pressure at any of them
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, desc], i) => (
              <li key={title}>
                <span className="text-[0.8rem] font-medium tracking-[0.2em] text-[#8fc4b6]">
                  0{i + 1}
                </span>
                <h3 className="mt-4 border-t border-white/15 pt-5 text-[1.15rem] font-normal text-[#f4f1ea]">
                  {title}
                </h3>
                <p className="mt-3 font-light leading-relaxed text-[#f4f1ea]/60">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------- REVIEWS ---------------------------- */}
      <section className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-xl">
          <p
            className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
            style={{ color: SAGE }}
          >
            Reviews
          </p>
          <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
            In their words
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex h-full flex-col rounded-[1.75rem] bg-white p-7">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    style={{ color: SAGE }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-light leading-relaxed text-[#1b2b27]/75">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 text-[0.88rem] font-medium">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ------------------------------ BOOK ------------------------------ */}
      <section id="visit" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8" id="book">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p
                className="text-[0.75rem] font-medium uppercase tracking-[0.2em]"
                style={{ color: SAGE }}
              >
                Visit
              </p>
              <h2 className="mt-4 text-[2.1rem] font-light leading-tight tracking-[-0.02em] sm:text-[2.7rem]">
                Come in for a look first
              </h2>
              <p className="mt-5 max-w-md font-light leading-relaxed text-[#1b2b27]/60">
                Consultations are free and take about twenty minutes. You will leave with an
                assessment and a written plan, whether or not you book treatment with us.
              </p>

              <dl className="mt-10 space-y-6">
                {[
                  [MapPin, 'Clinic', '4 Lotus Lane, off 12th Main\nIndiranagar, Bengaluru 560038'],
                  [Clock, 'Open', 'Tue – Sun · 10am – 8pm\nClosed Mondays'],
                  [CalendarDays, 'Late slots', 'Last appointment 7:30pm, Thu & Fri'],
                  [MessageCircle, 'WhatsApp', '+91 00000 00000'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: SAND, color: SAGE }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[0.82rem] font-medium">{label}</dt>
                      <dd className="mt-1 whitespace-pre-line text-[0.92rem] font-light leading-relaxed text-[#1b2b27]/60">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Consultation form - demo only */}
            <form
              className="rounded-[1.75rem] p-7 sm:p-9"
              style={{ backgroundColor: SAND }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-[1.35rem] font-normal">Request a free consultation</h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'cm-name', label: 'Your name', type: 'text', ph: 'Full name' },
                  { id: 'cm-phone', label: 'WhatsApp number', type: 'tel', ph: '+91 00000 00000' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.82rem] font-medium">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-[#1b2b27]/15 bg-white px-4 py-3 text-[0.95rem] font-light outline-none transition-colors placeholder:text-[#1b2b27]/30 focus:border-[#2f6b5e]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="cm-interest" className="block text-[0.82rem] font-medium">
                    What are you considering?
                  </label>
                  <select
                    id="cm-interest"
                    className="mt-2 w-full rounded-xl border border-[#1b2b27]/15 bg-white px-4 py-3 text-[0.95rem] font-light outline-none focus:border-[#2f6b5e]"
                  >
                    {[
                      'Clear aligners',
                      'Root canal or crown',
                      'Cleaning & check-up',
                      'Acne or pigmentation',
                      'Laser hair reduction',
                      'Not sure yet',
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cm-date" className="block text-[0.82rem] font-medium">
                    Preferred date
                  </label>
                  <input
                    id="cm-date"
                    type="date"
                    className="mt-2 w-full rounded-xl border border-[#1b2b27]/15 bg-white px-4 py-3 text-[0.95rem] font-light outline-none focus:border-[#2f6b5e]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cm-notes" className="block text-[0.82rem] font-medium">
                    Anything we should know?{' '}
                    <span className="font-light text-[#1b2b27]/40">(optional)</span>
                  </label>
                  <textarea
                    id="cm-notes"
                    rows={3}
                    placeholder="Past treatment, sensitivity, medication, or a photo you can bring..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#1b2b27]/15 bg-white px-4 py-3 text-[0.95rem] font-light outline-none transition-colors placeholder:text-[#1b2b27]/30 focus:border-[#2f6b5e]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: SAGE }}
              >
                Request Consultation
              </button>
              <p className="mt-3.5 text-center text-[0.78rem] font-light text-[#1b2b27]/40">
                Sample form &mdash; this demo does not send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="py-10" style={{ backgroundColor: SAND }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[1.1rem] font-light tracking-[0.12em]">ARIA</p>
          <p className="text-[0.88rem] font-light text-[#1b2b27]/45">
            Dental &amp; skin clinic &middot; Indiranagar, Bengaluru
          </p>
        </div>
      </footer>
    </div>
  );
}
