import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { businessTypes, projectNeeds } from '../data/businessTypes';
import { submitEnquiry } from '../utils/submitEnquiry';

const emptyForm = {
  name: '',
  business: '',
  businessType: '',
  phone: '',
  currentWebsite: '',
  need: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';

  if (!values.business.trim()) errors.business = 'Please enter your business name.';

  if (!values.businessType) errors.businessType = 'Please select a business type.';

  const digits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = 'Please enter a WhatsApp or phone number.';
  else if (digits.length < 8 || digits.length > 15)
    errors.phone = 'Please enter a valid phone number.';

  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.';
  else if (values.message.trim().length < 10)
    errors.message = 'A sentence or two helps us reply properly.';

  return errors;
}

const fieldBase =
  'w-full rounded-xl border bg-white/5 px-4 py-3 text-[0.92rem] text-white placeholder:text-slate-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400/70';

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = document.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus({ state: 'loading', message: '' });
    const result = await submitEnquiry(values);

    if (result.ok) {
      setStatus({ state: 'success', message: result.message });
      setValues(emptyForm);
    } else {
      setStatus({ state: 'error', message: result.message });
    }
  };

  const borderFor = (field) =>
    errors[field] ? 'border-red-400/70' : 'border-white/12 hover:border-white/25';

  const ErrorText = ({ field }) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-xs text-red-300">
        {errors[field]}
      </p>
    ) : null;

  const a11y = (field) => ({
    'aria-invalid': errors[field] ? 'true' : 'false',
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[0.8rem] font-medium text-slate-300">
            Your Name <span className="text-brand-300">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="e.g. Ravi Sharma"
            className={`${fieldBase} ${borderFor('name')}`}
            {...a11y('name')}
          />
          <ErrorText field="name" />
        </div>

        {/* Business name */}
        <div>
          <label
            htmlFor="business"
            className="mb-1.5 block text-[0.8rem] font-medium text-slate-300"
          >
            Business Name <span className="text-brand-300">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            value={values.business}
            onChange={handleChange}
            placeholder="e.g. Spice Garden Restaurant"
            className={`${fieldBase} ${borderFor('business')}`}
            {...a11y('business')}
          />
          <ErrorText field="business" />
        </div>

        {/* Business type */}
        <div>
          <label
            htmlFor="businessType"
            className="mb-1.5 block text-[0.8rem] font-medium text-slate-300"
          >
            Business Type <span className="text-brand-300">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            value={values.businessType}
            onChange={handleChange}
            className={`${fieldBase} ${borderFor('businessType')} ${
              values.businessType ? '' : 'text-slate-500'
            }`}
            {...a11y('businessType')}
          >
            <option value="" className="bg-ink-900 text-slate-400">
              Select business type
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-ink-900 text-white">
                {type}
              </option>
            ))}
          </select>
          <ErrorText field="businessType" />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[0.8rem] font-medium text-slate-300">
            WhatsApp / Phone <span className="text-brand-300">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className={`${fieldBase} ${borderFor('phone')}`}
            {...a11y('phone')}
          />
          <ErrorText field="phone" />
        </div>

        {/* Current website */}
        <div>
          <label
            htmlFor="currentWebsite"
            className="mb-1.5 block text-[0.8rem] font-medium text-slate-300"
          >
            Current Website <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="currentWebsite"
            name="currentWebsite"
            type="text"
            inputMode="url"
            value={values.currentWebsite}
            onChange={handleChange}
            placeholder="yourbusiness.com"
            className={`${fieldBase} border-white/12 hover:border-white/25`}
          />
        </div>

        {/* Need */}
        <div>
          <label htmlFor="need" className="mb-1.5 block text-[0.8rem] font-medium text-slate-300">
            What do you need?
          </label>
          <select
            id="need"
            name="need"
            value={values.need}
            onChange={handleChange}
            className={`${fieldBase} border-white/12 hover:border-white/25 ${
              values.need ? '' : 'text-slate-500'
            }`}
          >
            <option value="" className="bg-ink-900 text-slate-400">
              Select an option
            </option>
            {projectNeeds.map((option) => (
              <option key={option} value={option} className="bg-ink-900 text-white">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.8rem] font-medium text-slate-300">
          Project Details <span className="text-brand-300">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us a little about your project..."
          className={`${fieldBase} resize-none ${borderFor('message')}`}
          {...a11y('message')}
        />
        <ErrorText field="message" />
      </div>

      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_14px_34px_-14px_rgba(124,77,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status.state === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Project Enquiry
            <Send
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      {/* Status message */}
      <div aria-live="polite" className="min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          {status.state === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-[0.85rem] text-emerald-200"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {status.message}
            </motion.p>
          )}
          {status.state === 'error' && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-[0.85rem] text-red-200"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
