import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FaqItem({ faq, isOpen, onToggle, id }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-900/8 bg-white transition-colors duration-300 hover:border-brand-200">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-button-${id}`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="text-[0.92rem] font-semibold text-ink-950 sm:text-[0.98rem]">
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
              isOpen ? 'bg-brand-gradient text-white' : 'bg-brand-50 text-brand-600'
            }`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
