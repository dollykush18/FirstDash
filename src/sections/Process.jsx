import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { processSteps } from '../data/process';

export default function Process() {
  return (
    <Section id="process" tone="soft">
      <SectionHeading
        eyebrow="How It Works"
        title="From Idea to Launch"
        description="A simple and smooth process to get your business online."
      />

      {/* Desktop: connected row. Mobile: vertical timeline. */}
      <div className="mt-14">
        {/* Mobile timeline */}
        <ol className="relative space-y-8 border-l border-dashed border-brand-200 pl-8 md:hidden">
          {processSteps.map((step) => (
            <Reveal as="li" key={step.number} className="relative">
              <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_10px_24px_-12px_rgba(124,77,255,0.9)]">
                <Icon name={step.icon} className="h-4 w-4" />
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.16em] text-brand-500">
                {step.number}
              </span>
              <h3 className="mt-1 text-base font-bold text-ink-950">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        {/* Desktop row */}
        <div className="hidden md:grid md:grid-cols-[repeat(4,minmax(0,1fr))] md:gap-2">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative">
              <div className="pr-6 lg:pr-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-900/5 transition-transform duration-300 hover:-translate-y-1">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <div className="mt-5 text-[0.7rem] font-bold tracking-[0.16em] text-brand-500">
                  {step.number}
                </div>
                <h3 className="mt-1.5 text-[1.05rem] font-bold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>

              {i < processSteps.length - 1 && (
                <ArrowRight
                  className="absolute right-2 top-[1.15rem] h-5 w-5 text-brand-300 lg:right-5"
                  aria-hidden="true"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
