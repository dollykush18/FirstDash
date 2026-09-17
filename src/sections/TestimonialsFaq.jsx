import { useState } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import {
  hasRealTestimonials,
  testimonials,
  placeholderTestimonials,
} from '../data/testimonials';
import { faqs } from '../data/faq';

export default function TestimonialsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const showReal = hasRealTestimonials && testimonials.length > 0;
  const items = showReal ? testimonials : placeholderTestimonials;

  return (
    <Section id="faq" tone="light">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Testimonials */}
        <div>
          <Reveal as="p" className="eyebrow">
            Testimonials
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading-lg mt-3 text-ink-950">What Clients Say</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-slate-600">
              {showReal
                ? 'Feedback from businesses we have worked with.'
                : 'WebsiteWallha is a new studio, so there are no client reviews to show yet. Real testimonials will appear here as projects go live.'}
            </p>
          </Reveal>

          {/* Horizontal scroll on mobile, stacked list on desktop */}
          <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-1">
            {items.map((item, i) => (
              <Reveal
                key={`${item.name}-${i}`}
                delay={i * 0.08}
                className="w-[78%] shrink-0 snap-start sm:w-auto"
              >
                <TestimonialCard testimonial={item} placeholder={!showReal} />
              </Reveal>
            ))}
          </div>

          {!showReal && (
            <Reveal delay={0.16}>
              <Button href="#contact" variant="outline" className="mt-6" withArrow>
                Be one of the first
              </Button>
            </Reveal>
          )}
        </div>

        {/* FAQ */}
        <div>
          <Reveal as="p" className="eyebrow">
            FAQ
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading-lg mt-3 text-ink-950">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-slate-600">
              Still unsure about something? Message us on WhatsApp and we will answer
              straight away.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i, 4) * 0.05}>
                <FaqItem
                  id={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
