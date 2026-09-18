import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  CalendarDays,
  Check,
  ClipboardList,
  Clock,
  FlaskConical,
  HeartPulse,
  MapPin,
  Phone,
  Pill,
  ShieldCheck,
  Star,
  Stethoscope,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* CarePoint Clinic - trusted, information-first. Built for family and
   multi-speciality practices where patients want timings, doctors and
   directions without hunting for them. */

const img = demoImages.clinicTrusted;
const BLUE = '#0284c7';
const DEEP = '#0c4a6e';
const MIST = '#f1f7fb';

const quickFacts = [
  { icon: Clock, label: 'OPD Timings', value: 'Mon – Sat · 9am – 1pm & 5pm – 9pm' },
  { icon: CalendarDays, label: 'Sunday', value: 'Emergency & on-call only' },
  { icon: Ambulance, label: 'Emergency Line', value: 'Answered 24 hours' },
  { icon: ShieldCheck, label: 'Insurance', value: 'Cashless with major TPAs' },
];

const departments = [
  {
    icon: Stethoscope,
    name: 'General Medicine',
    desc: 'Fevers, infections, blood pressure, diabetes and everyday illness.',
  },
  {
    icon: Baby,
    name: 'Paediatrics',
    desc: 'Newborn checks, vaccinations, growth monitoring and child illness.',
  },
  {
    icon: HeartPulse,
    name: 'Cardiology',
    desc: 'ECG, 2D echo, blood pressure review and cardiac risk screening.',
  },
  {
    icon: Bone,
    name: 'Orthopaedics',
    desc: 'Joint pain, sports injuries, fractures, physiotherapy referrals.',
  },
  {
    icon: FlaskConical,
    name: 'Diagnostics Lab',
    desc: 'Blood work, urine and thyroid panels. Most reports the same day.',
  },
  {
    icon: Pill,
    name: 'In-House Pharmacy',
    desc: 'Collect your prescription on the way out. Open until 9pm.',
  },
];

const doctors = [
  {
    name: 'Dr. Arjun Mehta',
    role: 'General Physician',
    creds: 'MBBS, MD (Internal Medicine) · 14 years',
    days: 'Mon – Sat · 9am – 1pm',
    photo: img.doctors[0],
  },
  {
    name: 'Dr. Kavita Rao',
    role: 'Paediatrician',
    creds: 'MBBS, DCH · 11 years',
    days: 'Mon, Wed, Fri · 5pm – 9pm',
    photo: img.doctors[1],
  },
  {
    name: 'Dr. Sameer Khan',
    role: 'Consultant Cardiologist',
    creds: 'MBBS, DM (Cardiology) · 9 years',
    days: 'Tue & Thu · 6pm – 9pm',
    photo: img.doctors[2],
  },
];

const packages = [
  {
    name: 'Basic Health Check',
    price: '₹999',
    note: 'Good yearly baseline',
    includes: [
      'Complete blood count',
      'Blood sugar (fasting)',
      'Blood pressure & BMI',
      'Physician consultation',
    ],
    featured: false,
  },
  {
    name: 'Complete Health Check',
    price: '₹2,499',
    note: 'Our most requested package',
    includes: [
      'Everything in Basic',
      'Lipid & thyroid profile',
      'Liver & kidney function',
      'ECG and chest X-ray',
      'Diet and lifestyle review',
    ],
    featured: true,
  },
  {
    name: 'Senior Care Check',
    price: '₹3,999',
    note: 'For patients above 60',
    includes: [
      'Everything in Complete',
      '2D echo & cardiac review',
      'Vitamin D and B12',
      'Bone density screening',
      'Follow-up consultation free',
    ],
    featured: false,
  },
];

const visitSteps = [
  {
    title: 'Book or walk in',
    desc: 'Appointments get a fixed slot. Walk-ins are seen between booked patients.',
  },
  {
    title: 'Registration',
    desc: 'Give your name at the front desk. First visit takes about two minutes.',
  },
  {
    title: 'See the doctor',
    desc: 'Bring any old reports and the medicines you are currently taking.',
  },
  {
    title: 'Tests & pharmacy',
    desc: 'Lab and pharmacy are on the same floor, so nothing needs a second trip.',
  },
];

const reviews = [
  {
    text: 'My father was seen within ten minutes of arriving and the doctor explained his reports in plain language instead of rushing us out.',
    name: 'Rakesh V.',
    meta: 'Patient since 2019',
  },
  {
    text: 'Took my daughter in for her vaccinations. The paediatrician was patient with her and the reminders for the next dose actually arrive.',
    name: 'Shalini D.',
    meta: 'Paediatrics',
  },
  {
    text: 'Blood tests in the morning, reports on WhatsApp by evening, and the physician called to talk me through them. Very organised.',
    name: 'Imran S.',
    meta: 'Health check package',
  },
];

const navItems = ['Departments', 'Doctors', 'Packages', 'Visit'];

export default function ClinicTrusted() {
  return (
    <div className="font-dm bg-white text-[#12303f]">
      {/* --------------------------- UTILITY BAR -------------------------- */}
      <div className="text-white" style={{ backgroundColor: DEEP }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-1 px-5 py-2 text-[0.8rem] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Open today · 9am – 1pm &amp; 5pm – 9pm
          </p>
          <p className="flex items-center gap-2">
            <Ambulance className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            24hr emergency line: <span className="font-semibold">+91 00000 00000</span>
          </p>
        </div>
      </div>

      {/* ------------------------------ NAV ------------------------------- */}
      <header className="sticky top-0 z-30 border-b border-[#12303f]/8 bg-white/95 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: BLUE }}
            >
              <HeartPulse className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[1.05rem] font-bold tracking-tight">CarePoint</span>
              <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-[#12303f]/45">
                Clinic
              </span>
            </span>
          </span>

          <ul className="hidden items-center gap-8 text-[0.92rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#12303f]/60 transition-colors hover:text-[#0284c7]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="rounded-lg px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: BLUE }}
          >
            Book Appointment
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section style={{ backgroundColor: MIST }}>
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-medium"
              style={{ color: BLUE }}
            >
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Trusted by 12,000+ families in the neighbourhood
            </span>

            <h1 className="mt-6 text-[2.4rem] font-bold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[3.4rem]">
              A family clinic that
              <br />
              <span style={{ color: BLUE }}>runs on time.</span>
            </h1>

            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[#12303f]/65">
              General medicine, paediatrics, cardiology and orthopaedics under one roof &mdash;
              with a lab and pharmacy on the same floor, so one visit is usually enough.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-lg px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BLUE }}
              >
                Book an Appointment
              </a>
              <a
                href="#departments"
                className="rounded-lg border-2 border-[#12303f]/12 bg-white px-7 py-3.5 font-semibold transition-colors hover:border-[#0284c7]"
              >
                See Departments
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {['No appointment needed for OPD', 'Same-day lab reports', 'Cashless insurance'].map(
                (perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-[0.88rem] text-[#12303f]/60"
                  >
                    <Check className="h-4 w-4 shrink-0" style={{ color: BLUE }} aria-hidden="true" />
                    {perk}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative">
            <img
              src={img.hero}
              alt="A CarePoint doctor talking with a patient during a consultation"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src={img.checkup}
                alt="A nurse checking a patient's blood pressure"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <img
                src={img.pharmacy}
                alt="The in-house pharmacy counter"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- QUICK FACTS -------------------------- */}
      <section className="border-b border-[#12303f]/8">
        <div className="mx-auto grid max-w-[1140px] gap-px bg-[#12303f]/8 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3.5 bg-white px-1 py-7 lg:px-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: MIST, color: BLUE }}
              >
                <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#12303f]/45">
                  {label}
                </p>
                <p className="mt-1 text-[0.92rem] font-medium leading-snug">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- DEPARTMENTS -------------------------- */}
      <section id="departments" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: BLUE }}
          >
            Departments
          </p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
            What we treat
          </h2>
          <p className="mt-4 leading-relaxed text-[#12303f]/60">
            If we cannot treat something here, we will tell you straight away and refer you to a
            hospital we trust rather than keep you coming back.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ icon: Icon, name, desc }) => (
            <article
              key={name}
              className="rounded-2xl border border-[#12303f]/10 p-6 transition-colors hover:border-[#0284c7]/50"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: MIST, color: BLUE }}
              >
                <Icon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[1.08rem] font-bold">{name}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[#12303f]/60">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- DOCTORS ---------------------------- */}
      <section id="doctors" className="py-20 lg:py-24" style={{ backgroundColor: MIST }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: BLUE }}
            >
              Our Doctors
            </p>
            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Who you will see
            </h2>
            <p className="mt-4 leading-relaxed text-[#12303f]/60">
              The same consultants every visit, so you are not repeating your history to somebody
              new each time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc) => (
              <article key={doc.name} className="overflow-hidden rounded-2xl bg-white">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-[1.08rem] font-bold">{doc.name}</h3>
                  <p className="mt-1 text-[0.9rem] font-semibold" style={{ color: BLUE }}>
                    {doc.role}
                  </p>
                  <p className="mt-3 text-[0.86rem] text-[#12303f]/55">{doc.creds}</p>
                  <p className="mt-4 flex items-center gap-2 border-t border-[#12303f]/8 pt-4 text-[0.86rem] text-[#12303f]/70">
                    <CalendarDays
                      className="h-4 w-4 shrink-0"
                      style={{ color: BLUE }}
                      aria-hidden="true"
                    />
                    {doc.days}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- PACKAGES ---------------------------- */}
      <section id="packages" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: BLUE }}
          >
            Health Checks
          </p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
            Annual health packages
          </h2>
          <p className="mt-4 leading-relaxed text-[#12303f]/60">
            Fixed prices, no add-ons at the counter. Fasting samples are collected between 7am and
            9am, and reports are explained by a physician &mdash; not just handed over.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl p-7 sm:p-8 ${
                pkg.featured
                  ? 'text-white shadow-[0_24px_60px_-28px_rgba(2,132,199,0.75)]'
                  : 'border border-[#12303f]/12 bg-white'
              }`}
              style={pkg.featured ? { backgroundColor: DEEP } : undefined}
            >
              {pkg.featured && (
                <span
                  className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider"
                  style={{ color: DEEP }}
                >
                  Most requested
                </span>
              )}

              <h3 className="text-[1.15rem] font-bold">{pkg.name}</h3>
              <p
                className={`mt-1.5 text-[0.88rem] ${
                  pkg.featured ? 'text-white/70' : 'text-[#12303f]/55'
                }`}
              >
                {pkg.note}
              </p>

              <p className="mt-6 text-[2.2rem] font-bold leading-none">{pkg.price}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {pkg.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[0.92rem]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? 'text-sky-300' : ''}`}
                      style={pkg.featured ? undefined : { color: BLUE }}
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`mt-8 rounded-lg py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 ${
                  pkg.featured ? 'bg-white' : 'text-white'
                }`}
                style={pkg.featured ? { color: DEEP } : { backgroundColor: BLUE }}
              >
                Book this check
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------- HOW A VISIT WORKS ---------------------- */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: MIST }}>
        <div className="mx-auto grid max-w-[1140px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: BLUE }}
            >
              Your Visit
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.5rem]">
              What to expect
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-[#12303f]/60">
              Most people are in and out inside forty minutes, including tests. Here is how a
              normal visit runs.
            </p>

            <ol className="mt-10 space-y-6">
              {visitSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.9rem] font-bold text-white"
                    style={{ backgroundColor: BLUE }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1rem] font-bold">{step.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-[#12303f]/60">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="self-start">
            <img
              src={img.reception}
              alt="The CarePoint Clinic reception area"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-[#12303f]/10 sm:grid-cols-3">
              {[
                [ClipboardList, 'Digital records', 'Your history stays on file'],
                [Activity, 'Lab on site', 'Reports the same day'],
                [ShieldCheck, 'Cashless', 'Major insurers accepted'],
              ].map(([Icon, title, sub]) => (
                <div key={title} className="bg-white px-5 py-6">
                  <Icon className="h-5 w-5" style={{ color: BLUE }} aria-hidden="true" />
                  <p className="mt-3 text-[0.92rem] font-bold">{title}</p>
                  <p className="mt-1 text-[0.82rem] leading-snug text-[#12303f]/55">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- REVIEWS ---------------------------- */}
      <section className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: BLUE }}
          >
            Patient Feedback
          </p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
            What patients tell us
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-[#12303f]/10 p-6"
            >
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    style={{ color: BLUE }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#12303f]/70">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-[#12303f]/8 pt-4">
                <span className="block text-[0.9rem] font-bold">{r.name}</span>
                <span className="mt-0.5 block text-[0.8rem] text-[#12303f]/50">{r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ------------------------------ BOOK ------------------------------ */}
      <section id="visit" className="py-20 lg:py-24" style={{ backgroundColor: MIST }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8" id="book">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p
                className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
                style={{ color: BLUE }}
              >
                Visit Us
              </p>
              <h2 className="mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.5rem]">
                Book an appointment
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#12303f]/60">
                Send a request and the front desk will confirm your slot by phone or WhatsApp.
                For anything urgent, please call the emergency line instead.
              </p>

              <dl className="mt-10 space-y-5">
                {[
                  [MapPin, 'Address', '2nd Floor, Shanti Plaza, MG Road\nIndiranagar, Bengaluru 560038'],
                  [Clock, 'OPD Hours', 'Mon – Sat · 9am – 1pm & 5pm – 9pm\nSunday · emergency only'],
                  [Phone, 'Reception', '+91 00000 00000'],
                  [Ambulance, 'Emergency (24hr)', '+91 00000 00000'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white"
                      style={{ color: BLUE }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[0.82rem] font-bold">{label}</dt>
                      <dd className="mt-0.5 whitespace-pre-line text-[0.9rem] leading-relaxed text-[#12303f]/60">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Appointment form - demo only */}
            <form
              className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_-32px_rgba(18,48,63,0.5)] sm:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-bold">Request an appointment</h3>
              <p className="mt-2 text-[0.88rem] text-[#12303f]/55">
                We confirm every request the same day.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'ct-name', label: 'Patient name', type: 'text', ph: 'Full name' },
                  { id: 'ct-phone', label: 'Phone / WhatsApp', type: 'tel', ph: '+91 00000 00000' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.82rem] font-semibold">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-lg border border-[#12303f]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#12303f]/30 focus:border-[#0284c7]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="ct-dept" className="block text-[0.82rem] font-semibold">
                    Department
                  </label>
                  <select
                    id="ct-dept"
                    className="mt-2 w-full rounded-lg border border-[#12303f]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#0284c7]"
                  >
                    {[
                      'General Medicine',
                      'Paediatrics',
                      'Cardiology',
                      'Orthopaedics',
                      'Health check package',
                      'Not sure — please advise',
                    ].map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ct-date" className="block text-[0.82rem] font-semibold">
                    Preferred date
                  </label>
                  <input
                    id="ct-date"
                    type="date"
                    className="mt-2 w-full rounded-lg border border-[#12303f]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#0284c7]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="ct-notes" className="block text-[0.82rem] font-semibold">
                    Reason for visit{' '}
                    <span className="font-normal text-[#12303f]/40">(optional)</span>
                  </label>
                  <textarea
                    id="ct-notes"
                    rows={3}
                    placeholder="Symptoms, how long you have had them, existing conditions..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#12303f]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#12303f]/30 focus:border-[#0284c7]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-lg py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BLUE }}
              >
                Request Appointment
              </button>
              <p className="mt-3.5 text-center text-[0.78rem] text-[#12303f]/40">
                Sample form &mdash; this demo does not send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="border-t border-[#12303f]/8 py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-bold">CarePoint Clinic</p>
          <p className="text-[0.88rem] text-[#12303f]/45">
            Family &amp; multi-speciality care &middot; Indiranagar, Bengaluru
          </p>
        </div>
      </footer>
    </div>
  );
}
