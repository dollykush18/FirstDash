import { Check, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import DeviceMockup from '../components/mockups/DeviceMockup';
import { caseStudy } from '../data/caseStudy';
import { demoUrl } from '../data/demos';

export default function CaseStudy() {
  return (
    <Section id="case-study" tone="light">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: mockup */}
        <Reveal y={30} className="relative order-2 lg:order-1">
          <div className="relative rounded-[1.75rem] bg-gradient-to-br from-brand-50 via-white to-brand-100/60 p-6 shadow-soft ring-1 ring-ink-900/5 sm:p-9">
            <div
              className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-brand-300/30 blur-2xl"
              aria-hidden="true"
            />
            <DeviceMockup />
          </div>
          <p className="mt-14 text-xs text-slate-400 sm:mt-16">
            Concept design created by FirstDash. Not an existing client project.
          </p>
        </Reveal>

        {/* Right: detail */}
        <div className="order-1 lg:order-2">
          <Reveal as="p" className="eyebrow">
            {caseStudy.label}
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="heading-lg mt-3 text-ink-950">{caseStudy.title}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
              {caseStudy.description}
            </p>
          </Reveal>

          <div className="mt-9 grid gap-7 sm:grid-cols-2">
            {caseStudy.columns.map((col, i) => (
              <Reveal key={col.title} delay={0.14 + i * 0.07}>
                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-950">
                  {col.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{col.text}</p>
              </Reveal>
            ))}

            <Reveal delay={0.28} className="sm:col-span-2">
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-950">
                Features
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {caseStudy.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-[1.1rem] w-[1.1rem] shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <Check className="h-3 w-3 text-brand-600" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={demoUrl('restaurant-elegant')}
                external
                icon={ExternalLink}
              >
                View Live Demo
              </Button>
              <Button href={caseStudy.ctaHref} variant="light" withArrow>
                {caseStudy.ctaLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
