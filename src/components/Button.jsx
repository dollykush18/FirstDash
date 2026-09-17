import { ArrowRight } from 'lucide-react';

/**
 * Single button primitive used site-wide.
 * Renders an <a> when `href` is given, otherwise a real <button>.
 *
 * variant: 'primary' | 'secondary' | 'light' | 'outline' | 'whatsapp'
 */
const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 select-none';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[0.9rem] sm:px-6 sm:py-3 sm:text-[0.95rem]',
  lg: 'px-6 py-3 text-[0.95rem] sm:px-8 sm:py-4 sm:text-base',
};

const variants = {
  primary:
    'bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(124,77,255,0.8)] hover:shadow-[0_16px_40px_-12px_rgba(124,77,255,0.95)] hover:-translate-y-0.5',
  secondary:
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5',
  light:
    'border border-ink-900/10 bg-white text-ink-900 shadow-soft hover:border-brand-300 hover:text-brand-600 hover:-translate-y-0.5',
  outline:
    'border border-brand-500/40 bg-transparent text-brand-600 hover:bg-brand-500/10 hover:-translate-y-0.5',
  dark:
    'bg-ink-950 text-white shadow-soft hover:bg-ink-800 hover:-translate-y-0.5',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:bg-[#1fbe5a] hover:-translate-y-0.5',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  icon: Icon,
  external = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
