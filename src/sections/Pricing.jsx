import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import PricingCard from '../components/PricingCard';
import { pricingPlans, pricingNote } from '../data/pricing';

export default function Pricing() {
  return (
    <Section id="pricing" tone="soft">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple &"
        highlight="Transparent"
        description="Choose a package that fits your business needs."
        align="center"
      />

      <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3 lg:gap-6">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.1} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-[0.82rem] leading-relaxed text-slate-500">
          {pricingNote}
        </p>
      </Reveal>
    </Section>
  );
}
