import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { whyUs } from '../data/whyUs';

export default function WhyUs() {
  return (
    <Section id="why-us" tone="dark" className="pt-0 sm:pt-0 lg:pt-4">
      <SectionHeading
        eyebrow="Why Choose WebsiteWallha"
        title="Reliable. Flexible."
        highlight="Business Focused."
        description="Everything is built to make your business easier to find, easier to trust and easier to contact."
        tone="dark"
        align="center"
      />

      {/* 6-column track on desktop so the final two cards sit centred */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {whyUs.map((reason, i) => (
          <Reveal
            key={reason.title}
            delay={(i % 3) * 0.08}
            className={`group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.06] lg:col-span-2 ${
              i === 3 ? 'lg:col-start-2' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-400/25 bg-brand-500/10 text-brand-300 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[1rem] font-bold text-white">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300/80">
                  {reason.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
