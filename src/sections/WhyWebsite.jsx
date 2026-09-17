import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { benefits } from '../data/benefits';

export default function WhyWebsite() {
  return (
    <Section id="why" tone="dark" className="border-t border-white/5">
      <div
        className="pointer-events-none absolute right-[-10%] top-[-20%] h-[26rem] w-[26rem] rounded-full bg-brand-600/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <SectionHeading
          eyebrow="Why You Need a Website"
          title="Your Business Deserves a Better Online Presence"
          description="A professional website helps customers discover your business, understand what you offer and contact you easily."
          tone="dark"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06]"
            >
              <span
                className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_10px_26px_-12px_rgba(124,77,255,0.9)]">
                <Icon name={benefit.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[1.05rem] font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
