import { Check } from 'lucide-react';
import Button from './Button';
import Icon from './Icon';

export default function PricingCard({ plan }) {
  const { popular } = plan;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 sm:p-8 ${
        popular
          ? 'border-2 border-brand-500 bg-white shadow-card lg:-translate-y-3'
          : 'border border-ink-900/8 bg-white shadow-soft hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-brand-gradient px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_-8px_rgba(124,77,255,0.9)]">
          Popular
        </span>
      )}

      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          popular ? 'bg-brand-gradient text-white' : 'bg-brand-50 text-brand-600'
        }`}
      >
        <Icon name={plan.icon} className="h-5 w-5" />
      </span>

      <h3 className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-500">
        {plan.name}
      </h3>
      <p className="mt-1.5 text-sm text-slate-600">{plan.description}</p>

      <p className="mt-6 font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.02em] text-ink-950 sm:text-[2.4rem]">
        {plan.price}
      </p>
      {plan.priceNote && <p className="mt-2 text-xs text-slate-500">{plan.priceNote}</p>}

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
            <span
              className={`mt-0.5 flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-full ${
                popular ? 'bg-brand-gradient text-white' : 'bg-brand-100 text-brand-600'
              }`}
            >
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={plan.buttonVariant || (popular ? 'primary' : 'dark')}
        className="mt-8 w-full"
      >
        {plan.buttonText}
      </Button>
    </article>
  );
}
