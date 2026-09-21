import {
  Award,
  BookOpen,
  CalendarDays,
  Check,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* Pathshala Classes - results-led coaching for JEE, NEET and boards. Indian
   parents compare on selections, faculty and fees, so those come first and
   the page stays dense rather than airy. */

const img = demoImages.coachingResults;
const NAVY = '#1e40af';
const DEEP = '#172554';
const MIST = '#eff4ff';
const GOLD = '#b45309';

const stats = [
  { value: '312', label: 'Selections in 2025' },
  { value: '24', label: 'Students per batch' },
  { value: '18', label: 'Years of teaching' },
  { value: '96%', label: 'Board average' },
];

const courses = [
  {
    icon: Target,
    name: 'JEE Main + Advanced',
    span: '2-year · Class 11 & 12',
    desc: 'Full syllabus with weekly tests, previous-year paper drills and separate Advanced problem sessions.',
    points: ['6 days a week', 'Weekly mock tests', 'Doubt hours daily'],
    fee: '₹68,000 / year',
  },
  {
    icon: BookOpen,
    name: 'NEET (Medical)',
    span: '2-year · Class 11 & 12',
    desc: 'Biology-heavy schedule with NCERT line-by-line revision and full-length NEET pattern tests.',
    points: ['NCERT mastery drills', 'Monthly full tests', 'Biology lab sessions'],
    fee: '₹64,000 / year',
  },
  {
    icon: GraduationCap,
    name: 'Foundation',
    span: '1-year · Class 9 & 10',
    desc: 'Builds the base for competitive exams while keeping school marks strong. Olympiad prep included.',
    points: ['School + competitive', 'Olympiad training', 'Parent review calls'],
    fee: '₹32,000 / year',
  },
  {
    icon: Award,
    name: 'Board Crash Course',
    span: '4 months · Class 12',
    desc: 'Intensive revision before boards with chapter tests, answer-writing practice and paper analysis.',
    points: ['Answer writing', 'Chapter-wise tests', 'Sunday doubt camps'],
    fee: '₹18,000 total',
  },
];

const toppers = [
  { name: 'Ananya Sharma', result: 'AIR 842', exam: 'JEE Advanced 2025' },
  { name: 'Rohit Verma', result: '681 / 720', exam: 'NEET 2025' },
  { name: 'Ishita Gupta', result: '98.2%ile', exam: 'JEE Main 2025' },
  { name: 'Kartik Nair', result: '97.4%', exam: 'CBSE Class 12' },
];

const faculty = [
  {
    name: 'R. K. Mishra',
    subject: 'Physics',
    creds: 'M.Tech, IIT Kanpur · 16 years',
  },
  {
    name: 'Dr. Sunita Rao',
    subject: 'Chemistry',
    creds: 'Ph.D Organic Chemistry · 13 years',
  },
  {
    name: 'Amit Deshmukh',
    subject: 'Mathematics',
    creds: 'M.Sc Mathematics · 11 years',
  },
  {
    name: 'Dr. Farah Khan',
    subject: 'Biology',
    creds: 'MBBS · 9 years teaching NEET',
  },
];

const whyUs = [
  ['Batches capped at 24', 'Every student gets asked a question in every class. No 200-seat halls.'],
  ['Test every Sunday', 'Ranked and discussed the same week, so mistakes do not repeat for a month.'],
  ['Parents get a report', 'A monthly call with attendance, test scores and where your child is slipping.'],
  ['Doubt counter till 8pm', 'Walk in after class, no appointment, no extra fee.'],
];

const navItems = ['Courses', 'Results', 'Faculty', 'Fees'];

export default function CoachingResults() {
  return (
    <div className="font-dm bg-white text-[#111827]">
      {/* --------------------------- UTILITY BAR -------------------------- */}
      <div className="text-white" style={{ backgroundColor: DEEP }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-1 px-5 py-2 text-[0.8rem] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            New batches start 15 April &middot; Admissions open
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Counselling: <span className="font-semibold">+91 00000 00000</span>
          </p>
        </div>
      </div>

      {/* ------------------------------ NAV ------------------------------- */}
      <header className="sticky top-0 z-30 border-b border-[#111827]/8 bg-white/95 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[1.05rem] font-bold tracking-tight">Pathshala</span>
              <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-[#111827]/45">
                Classes
              </span>
            </span>
          </span>

          <ul className="hidden items-center gap-8 text-[0.92rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#111827]/60 transition-colors hover:text-[#1e40af]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#demo"
            className="rounded-lg px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: NAVY }}
          >
            Book Free Demo
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section style={{ backgroundColor: MIST }}>
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-semibold"
              style={{ color: GOLD }}
            >
              <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
              312 selections in 2025
            </span>

            <h1 className="mt-6 text-[2.4rem] font-bold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[3.3rem]">
              Small batches.
              <br />
              <span style={{ color: NAVY }}>Serious results.</span>
            </h1>

            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[#111827]/65">
              JEE, NEET and board coaching in batches of 24, taught by faculty who have been
              with us for years &mdash; not a new face every term.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="rounded-lg px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: NAVY }}
              >
                Book a Free Demo Class
              </a>
              <a
                href="#fees"
                className="rounded-lg border-2 border-[#111827]/12 bg-white px-7 py-3.5 font-semibold transition-colors hover:border-[#1e40af]"
              >
                See Fee Structure
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {['Free demo class', 'Instalment option', 'Scholarship test'].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-[0.88rem] text-[#111827]/60"
                >
                  <Check className="h-4 w-4 shrink-0" style={{ color: NAVY }} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={img.hero}
              alt="Students in a Pathshala Classes session"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src={img.classroom}
                alt="A teacher taking a class"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <img
                src={img.maths}
                alt="Worked problems on a test paper"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ STATS ----------------------------- */}
      <section className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-[1140px] gap-px px-5 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-1 py-8 text-center md:px-4">
              <p className="text-[2.1rem] font-bold leading-none">{s.value}</p>
              <p className="mt-2 text-[0.82rem] text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------- COURSES ---------------------------- */}
      <section id="courses" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: NAVY }}
          >
            Courses
          </p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
            Batches we run
          </h2>
          <p className="mt-4 leading-relaxed text-[#111827]/60">
            Every batch is capped so the teacher knows each student by name. Fees below are
            complete &mdash; study material and test series are included, not extra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {courses.map(({ icon: Icon, name, span, desc, points, fee }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl border border-[#111827]/10 p-6 transition-colors hover:border-[#1e40af]/50 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: MIST, color: NAVY }}
                >
                  <Icon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[0.72rem] font-bold"
                  style={{ backgroundColor: MIST, color: NAVY }}
                >
                  {span}
                </span>
              </div>

              <h3 className="mt-5 text-[1.15rem] font-bold">{name}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[#111827]/60">{desc}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.9rem]">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: NAVY }}
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-[#111827]/8 pt-4 text-[1.1rem] font-bold">
                {fee}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- RESULTS ---------------------------- */}
      <section id="results" className="py-20 lg:py-24" style={{ backgroundColor: MIST }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <p
                className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
                style={{ color: NAVY }}
              >
                Results
              </p>
              <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
                Our 2025 toppers
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[#111827]/60">
                We publish every selection, not just the best one. The full list is on the
                noticeboard at the centre &mdash; come and check it yourself.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {toppers.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-white p-5">
                    <p className="text-[1.35rem] font-bold" style={{ color: NAVY }}>
                      {t.result}
                    </p>
                    <p className="mt-2 text-[0.95rem] font-semibold">{t.name}</p>
                    <p className="mt-0.5 text-[0.82rem] text-[#111827]/50">{t.exam}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-start">
              <img
                src={img.toppers}
                alt="A Pathshala student celebrating results"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- FACULTY ---------------------------- */}
      <section id="faculty" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: NAVY }}
          >
            Faculty
          </p>
          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
            Who actually teaches
          </h2>
          <p className="mt-4 leading-relaxed text-[#111827]/60">
            The same four teachers take every batch. No guest faculty, no substitutes halfway
            through the syllabus.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <article key={f.name} className="rounded-2xl border border-[#111827]/10 p-6">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-[1.05rem] font-bold text-white"
                style={{ backgroundColor: NAVY }}
                aria-hidden="true"
              >
                {f.name.charAt(0)}
              </span>
              <h3 className="mt-5 text-[1.05rem] font-bold">{f.name}</h3>
              <p className="mt-1 text-[0.9rem] font-semibold" style={{ color: NAVY }}>
                {f.subject}
              </p>
              <p className="mt-3 text-[0.84rem] leading-relaxed text-[#111827]/55">{f.creds}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <img
            src={img.lecture}
            alt="A lecture in progress"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <img
            src={img.doubts}
            alt="Students working through doubts together"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* ------------------------------ FEES ------------------------------ */}
      <section id="fees" className="py-20 lg:py-24" style={{ backgroundColor: MIST }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="max-w-xl">
            <p
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: NAVY }}
            >
              Fees
            </p>
            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              What it costs, in full
            </h2>
            <p className="mt-4 leading-relaxed text-[#111827]/60">
              No admission fee, no material charges added later. Fees can be paid in three
              instalments, and our scholarship test can reduce them by up to 40%.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#111827]/10">
                  <th className="px-5 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#111827]/50 sm:px-7">
                    Course
                  </th>
                  <th className="hidden px-5 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#111827]/50 sm:table-cell sm:px-7">
                    Duration
                  </th>
                  <th className="px-5 py-4 text-right text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#111827]/50 sm:px-7">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.name} className="border-b border-[#111827]/8 last:border-0">
                    <td className="px-5 py-4 text-[0.95rem] font-semibold sm:px-7">{c.name}</td>
                    <td className="hidden px-5 py-4 text-[0.9rem] text-[#111827]/55 sm:table-cell sm:px-7">
                      {c.span}
                    </td>
                    <td
                      className="px-5 py-4 text-right text-[0.95rem] font-bold sm:px-7"
                      style={{ color: NAVY }}
                    >
                      {c.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyUs.map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white"
                  style={{ color: NAVY }}
                >
                  <Users className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[0.98rem] font-bold">{title}</h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-[#111827]/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ DEMO ------------------------------ */}
      <section id="demo" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: NAVY }}
            >
              Free Demo
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.5rem]">
              Sit in on a class first
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-[#111827]/60">
              Come for one full class with the batch your child would join. No fee, no
              commitment, and you are welcome to sit at the back and watch.
            </p>

            <dl className="mt-10 space-y-5">
              {[
                [MapPin, 'Centre', '2nd Floor, Gopal Complex, Civil Lines\nKanpur 208001'],
                [Clock, 'Class timings', 'Mon – Sat · 6am – 8am & 4pm – 8pm'],
                [CalendarDays, 'Next batch', 'Starts 15 April · 6 seats left'],
                [Phone, 'Counselling', '+91 00000 00000'],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: MIST, color: NAVY }}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-[0.82rem] font-bold">{label}</dt>
                    <dd className="mt-0.5 whitespace-pre-line text-[0.9rem] leading-relaxed text-[#111827]/60">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Demo booking form - demo only */}
          <form
            className="rounded-2xl border border-[#111827]/10 p-7 sm:p-9"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold">Book a free demo class</h3>
            <p className="mt-2 text-[0.88rem] text-[#111827]/55">
              We call back the same day to fix a time.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                { id: 'cr-student', label: "Student's name", type: 'text', ph: 'Full name' },
                { id: 'cr-phone', label: 'Parent mobile', type: 'tel', ph: '+91 00000 00000' },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[0.82rem] font-semibold">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2 w-full rounded-lg border border-[#111827]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#111827]/30 focus:border-[#1e40af]"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="cr-class" className="block text-[0.82rem] font-semibold">
                  Current class
                </label>
                <select
                  id="cr-class"
                  className="mt-2 w-full rounded-lg border border-[#111827]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#1e40af]"
                >
                  {['Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper / repeat year'].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="cr-course" className="block text-[0.82rem] font-semibold">
                  Interested in
                </label>
                <select
                  id="cr-course"
                  className="mt-2 w-full rounded-lg border border-[#111827]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#1e40af]"
                >
                  {['JEE Main + Advanced', 'NEET', 'Foundation', 'Board Crash Course'].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cr-notes" className="block text-[0.82rem] font-semibold">
                  Anything we should know?{' '}
                  <span className="font-normal text-[#111827]/40">(optional)</span>
                </label>
                <textarea
                  id="cr-notes"
                  rows={3}
                  placeholder="Which subjects are weak, previous coaching, school timings..."
                  className="mt-2 w-full resize-none rounded-lg border border-[#111827]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#111827]/30 focus:border-[#1e40af]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-lg py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: NAVY }}
            >
              Book Free Demo Class
            </button>
            <p className="mt-3.5 text-center text-[0.78rem] text-[#111827]/40">
              Sample form &mdash; this demo does not send enquiries.
            </p>
          </form>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="text-white" style={{ backgroundColor: DEEP }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 py-10 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-bold">Pathshala Classes</p>
          <p className="flex items-center justify-center gap-2 text-[0.88rem] text-white/60 md:justify-start">
            <Star className="h-3.5 w-3.5 fill-current" style={{ color: GOLD }} aria-hidden="true" />
            JEE &middot; NEET &middot; Foundation &middot; Civil Lines, Kanpur
          </p>
        </div>
      </footer>
    </div>
  );
}
