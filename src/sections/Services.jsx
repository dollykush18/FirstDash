import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { services } from '../data/services';

export default function Services() {
  return (
    <Section id="services" tone="soft">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="What We Build"
            title="Websites Designed Around Your Business"
            description={'Custom websites created for different types of local businesses. Whether you run a restaurant, café, shop or service business, we build around what your customers actually need.'}
          >
            <Button href="#contact" withArrow>
              Start a Project
            </Button>
          </SectionHeading>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 0.07}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-[1.05rem] font-bold text-ink-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.78rem] text-slate-500">
                  {service.features.map((feature, idx) => (
                    <li key={feature} className="flex items-center gap-2">
                      {idx > 0 && (
                        <span className="h-1 w-1 rounded-full bg-brand-300" aria-hidden="true" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Discuss this
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
