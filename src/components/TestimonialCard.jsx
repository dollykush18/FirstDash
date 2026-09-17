import { Quote } from 'lucide-react';

/**
 * `placeholder` renders the honest "no clients yet" styling: dashed border,
 * muted text and no fake avatar. Real testimonials get the solid card.
 */
export default function TestimonialCard({ testimonial, placeholder = false }) {
  return (
    <figure
      className={`flex h-full flex-col rounded-2xl p-6 ${
        placeholder
          ? 'border border-dashed border-brand-200 bg-white/60'
          : 'border border-ink-900/8 bg-white shadow-soft'
      }`}
    >
      <Quote
        className={`h-6 w-6 ${placeholder ? 'text-brand-200' : 'text-brand-400'}`}
        aria-hidden="true"
      />

      <blockquote
        className={`mt-4 flex-1 text-sm leading-relaxed ${
          placeholder ? 'text-slate-500' : 'text-slate-700'
        }`}
      >
        {testimonial.quote}
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-900/5 pt-4">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
            placeholder
              ? 'border border-dashed border-brand-200 text-brand-300'
              : 'bg-brand-gradient text-white'
          }`}
          aria-hidden="true"
        >
          {placeholder ? '?' : testimonial.name.charAt(0)}
        </span>
        <span>
          <span
            className={`block text-[0.82rem] font-semibold ${
              placeholder ? 'text-slate-400' : 'text-ink-950'
            }`}
          >
            {testimonial.name}
          </span>
          <span className="block text-[0.74rem] text-slate-400">{testimonial.business}</span>
        </span>
      </figcaption>
    </figure>
  );
}
