import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import images from '../assets/images';
import { technologies } from '../data/whyUs';

export default function About() {
  return (
    <Section id="about" tone="dark" className="border-t border-white/5">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-600/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <Reveal as="p" className="eyebrow text-brand-300">
            About FirstDash
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="heading-lg mt-3 text-white">
              Small Studio.
              <br />
              <span className="text-gradient">Personal Attention.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-300/90">
              FirstDash works closely with local businesses to create websites that are
              simple to use, visually strong and built around real business needs.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              Every project is handled directly, so you always know who is building your
              website and how it is progressing. No long forms, no account managers, no
              templates forced onto your business.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <h3 className="mt-9 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400">
              Built With
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.78rem] font-medium text-slate-200 transition-colors duration-300 hover:border-brand-400/40 hover:text-white"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <Button href="#contact" className="mt-9" withArrow>
              Start a Project
            </Button>
          </Reveal>
        </div>

        {/* Right: workspace image */}
        <Reveal y={30} delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-2 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
            <img
              src={images.workspace}
              alt="A designer's desk with a laptop showing a website being built"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
              className="h-full w-full rounded-[1.1rem] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div
            className="pointer-events-none absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-4 backdrop-blur sm:block"
            aria-hidden="true"
          >
            <p className="text-2xl font-extrabold text-white">1:1</p>
            <p className="mt-0.5 text-[0.72rem] text-slate-400">Direct communication</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
