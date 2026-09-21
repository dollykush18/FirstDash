import {
  Calculator,
  Check,
  Clock,
  Heart,
  Laptop,
  MapPin,
  MessageCircle,
  Mic,
  Phone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { demoImages } from '../demoImages';

/* NextStep Academy - neighbourhood tuition centre. The person deciding is a
   parent, not a student, so the page leads with reassurance, small batches
   and plain fees rather than rank tables. */

const img = demoImages.coachingFriendly;
const GREEN = '#047857';
const DARK = '#053b2c';
const LEAF = '#ecfdf5';

const subjects = [
  {
    icon: Calculator,
    name: 'School Tuition',
    classes: 'Class 6 to 12',
    desc: 'Maths, Science, English and Social Science, matched to your school board and its exam pattern.',
    fee: '₹1,800 / month',
  },
  {
    icon: Mic,
    name: 'Spoken English',
    classes: 'All ages',
    desc: 'Daily speaking practice in small groups. For students, job seekers and parents alike.',
    fee: '₹1,200 / month',
  },
  {
    icon: Laptop,
    name: 'Computer Basics',
    classes: 'Class 8 upwards',
    desc: 'Typing, MS Office, internet safety and a basic coding introduction on our own machines.',
    fee: '₹1,500 / month',
  },
  {
    icon: Sparkles,
    name: 'Competitive Foundation',
    classes: 'Class 9 & 10',
    desc: 'A gentle start to Olympiad, NTSE and scholarship exams without dropping school marks.',
    fee: '₹2,400 / month',
  },
];

const promises = [
  {
    icon: Users,
    title: 'Never more than 15 in a batch',
    desc: 'Small enough that a quiet child cannot hide at the back for a whole term.',
  },
  {
    icon: MessageCircle,
    title: 'We message you every week',
    desc: 'A short WhatsApp note on attendance, homework and how the week actually went.',
  },
  {
    icon: Heart,
    title: 'No shouting, ever',
    desc: 'Children who are scared of a subject do not learn it. We fix the fear first.',
  },
];

const routine = [
  ['Before class', 'Homework from last session is checked, so nobody falls quietly behind.'],
  ['During class', 'One concept, worked examples, then practice while the teacher walks around.'],
  ['After class', 'Doubt time for anyone who wants it. Most days a few students stay back.'],
  ['Every Saturday', 'A short revision test, corrected together so mistakes make sense.'],
];

const parents = [
  {
    text: 'My daughter went from failing maths to 78 marks in one year. What changed is that she stopped being scared of asking questions.',
    name: 'Sunita Joshi',
    meta: 'Parent, Class 10',
  },
  {
    text: 'The weekly WhatsApp update is the best part. I always know what was taught and what is pending, without having to ask.',
    name: 'Ramesh Iyer',
    meta: 'Parent, Class 8',
  },
  {
    text: 'I joined spoken English at 34 to handle office calls better. Nobody made me feel odd for being the oldest in the batch.',
    name: 'Prakash Yadav',
    meta: 'Spoken English',
  },
];

const navItems = ['Classes', 'Approach', 'Parents', 'Visit'];

export default function CoachingFriendly() {
  return (
    <div className="font-outfit bg-white text-[#14231d]">
      {/* ------------------------------ NAV ------------------------------- */}
      <header className="sticky top-0 z-30 border-b border-[#14231d]/8 bg-white/92 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-2xl text-white"
              style={{ backgroundColor: GREEN }}
            >
              <Sparkles className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            </span>
            NextStep
          </span>

          <ul className="hidden items-center gap-8 text-[0.92rem] md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#14231d]/55 transition-colors hover:text-[#047857]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#visit"
            className="rounded-full px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: GREEN }}
          >
            Book a Visit
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ------------------------------ */}
      <section style={{ backgroundColor: LEAF }}>
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] font-medium"
              style={{ color: GREEN }}
            >
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Teaching this neighbourhood since 2009
            </span>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.025em] sm:text-5xl lg:text-[3.6rem]">
              A tuition class
              <br />
              <span style={{ color: GREEN }}>that feels safe.</span>
            </h1>

            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[#14231d]/60">
              Batches of fifteen, teachers who know every child&rsquo;s name, and a weekly
              message to you about how your child is really doing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visit"
                className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: GREEN }}
              >
                Book a Free Trial Class
              </a>
              <a
                href="#classes"
                className="rounded-full border-2 border-[#14231d]/12 bg-white px-7 py-3.5 font-semibold transition-colors hover:border-[#047857]"
              >
                See Classes &amp; Fees
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {['Max 15 per batch', 'Weekly parent update', 'First class free'].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-[0.88rem] text-[#14231d]/60"
                >
                  <Check className="h-4 w-4 shrink-0" style={{ color: GREEN }} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={img.hero}
              alt="A NextStep Academy class in progress"
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
            <img
              src={img.juniors}
              alt="Younger students working at their desks"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------- CLASSES ---------------------------- */}
      <section id="classes" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p
            className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: GREEN }}
          >
            Classes
          </p>
          <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            What we teach, and what it costs
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#14231d]/55">
            Monthly fees, paid monthly. No admission charge, no annual deposit, and you can
            stop any month without losing money.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {subjects.map(({ icon: Icon, name, classes, desc, fee }) => (
            <article
              key={name}
              className="flex flex-col rounded-[1.5rem] border border-[#14231d]/10 p-6 transition-colors hover:border-[#047857]/50 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: LEAF, color: GREEN }}
                >
                  <Icon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
                  style={{ backgroundColor: LEAF, color: GREEN }}
                >
                  {classes}
                </span>
              </div>

              <h3 className="mt-5 text-[1.2rem] font-semibold">{name}</h3>
              <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-[#14231d]/55">
                {desc}
              </p>

              <p className="mt-6 border-t border-[#14231d]/8 pt-4 text-[1.15rem] font-semibold">
                {fee}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------- APPROACH ---------------------------- */}
      <section id="approach" className="py-20 lg:py-24" style={{ backgroundColor: LEAF }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
                style={{ color: GREEN }}
              >
                Our Approach
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                Three things we promise
              </h2>

              <ul className="mt-10 space-y-8">
                {promises.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white"
                      style={{ color: GREEN }}
                    >
                      <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[1.08rem] font-semibold">{title}</h3>
                      <p className="mt-1.5 leading-relaxed text-[#14231d]/55">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="self-start">
              <img
                src={img.room}
                alt="A NextStep Academy classroom"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />

              <ol className="mt-6 space-y-4">
                {routine.map(([title, desc], i) => (
                  <li key={title} className="flex gap-4 rounded-[1.25rem] bg-white p-5">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-semibold text-white"
                      style={{ backgroundColor: GREEN }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[0.98rem] font-semibold">{title}</h3>
                      <p className="mt-1 text-[0.89rem] leading-relaxed text-[#14231d]/55">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- PARENTS ---------------------------- */}
      <section id="parents" className="mx-auto max-w-[1140px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p
            className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: GREEN }}
          >
            Parents
          </p>
          <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            What families tell us
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {parents.map((p) => (
            <figure
              key={p.name}
              className="flex h-full flex-col rounded-[1.25rem] border border-[#14231d]/10 p-6"
            >
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    style={{ color: GREEN }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#14231d]/70">
                {p.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-[#14231d]/8 pt-4">
                <span className="block text-[0.9rem] font-semibold">{p.name}</span>
                <span className="mt-0.5 block text-[0.8rem] text-[#14231d]/45">{p.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <img
            src={img.group}
            alt="Students working together"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
          />
          <img
            src={img.online}
            alt="A student in an online session"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
          />
          <img
            src={img.books}
            alt="Books and study material"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
          />
        </div>
      </section>

      {/* ------------------------------ VISIT ----------------------------- */}
      <section id="visit" className="py-20 lg:py-24" style={{ backgroundColor: LEAF }}>
        <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p
                className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
                style={{ color: GREEN }}
              >
                Visit
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                Come and see a class
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#14231d]/55">
                The first class is free and you are welcome to sit through it. Most parents
                decide by the end of that one hour.
              </p>

              <dl className="mt-10 space-y-5">
                {[
                  [MapPin, 'Centre', 'Shop 12, Ganesh Market, Vishrantwadi\nPune 411015'],
                  [Clock, 'Class hours', 'Mon – Sat · 7am – 10am & 3pm – 8pm'],
                  [Phone, 'Call us', '+91 00000 00000'],
                  [MessageCircle, 'WhatsApp', '+91 00000 00000'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white"
                      style={{ color: GREEN }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[0.82rem] font-semibold">{label}</dt>
                      <dd className="mt-0.5 whitespace-pre-line text-[0.92rem] leading-relaxed text-[#14231d]/55">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Enquiry form - demo only */}
            <form
              className="rounded-[1.5rem] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(20,35,29,0.4)] sm:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-semibold">Book a free trial class</h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'cf-student', label: "Student's name", type: 'text', ph: 'Full name' },
                  { id: 'cf-phone', label: 'Your mobile', type: 'tel', ph: '+91 00000 00000' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[0.82rem] font-medium">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-[#14231d]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#14231d]/30 focus:border-[#047857]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="cf-class" className="block text-[0.82rem] font-medium">
                    Class / age
                  </label>
                  <select
                    id="cf-class"
                    className="mt-2 w-full rounded-xl border border-[#14231d]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#047857]"
                  >
                    {['Class 6 – 8', 'Class 9 – 10', 'Class 11 – 12', 'Adult learner'].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-subject" className="block text-[0.82rem] font-medium">
                    Interested in
                  </label>
                  <select
                    id="cf-subject"
                    className="mt-2 w-full rounded-xl border border-[#14231d]/15 px-4 py-3 text-[0.95rem] outline-none focus:border-[#047857]"
                  >
                    {[
                      'School Tuition',
                      'Spoken English',
                      'Computer Basics',
                      'Competitive Foundation',
                      'Not sure yet',
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cf-notes" className="block text-[0.82rem] font-medium">
                    Tell us about your child{' '}
                    <span className="text-[#14231d]/40">(optional)</span>
                  </label>
                  <textarea
                    id="cf-notes"
                    rows={3}
                    placeholder="Which subjects are difficult, school timings, anything we should know..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#14231d]/15 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-[#14231d]/30 focus:border-[#047857]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: GREEN }}
              >
                Book Free Trial Class
              </button>
              <p className="mt-3.5 text-center text-[0.78rem] text-[#14231d]/40">
                Sample form &mdash; this demo does not send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER ----------------------------- */}
      <footer className="text-white" style={{ backgroundColor: DARK }}>
        <div className="mx-auto flex max-w-[1140px] flex-col gap-3 px-5 py-10 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-lg font-semibold">NextStep Academy</p>
          <p className="text-[0.88rem] text-white/55">
            Tuition &middot; Spoken English &middot; Computers &middot; Vishrantwadi, Pune
          </p>
        </div>
      </footer>
    </div>
  );
}
