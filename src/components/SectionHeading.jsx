import Reveal from './Reveal';

/**
 * Eyebrow + H2 + description block used at the top of most sections.
 * `align` = 'left' | 'center'. `tone` switches the text colours.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  tone = 'light',
  className = '',
  children,
}) {
  const isDark = tone === 'dark';
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center items-center' : 'items-start';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal as="p" className={`eyebrow ${isDark ? 'text-brand-300' : 'text-brand-500'}`}>
          {eyebrow}
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <h2
          className={`heading-lg mt-3 max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-white' : 'text-ink-950'}`}
        >
          {title}{' '}
          {highlight && (
            // nowrap from sm up so a highlighted phrase breaks as a unit
            <span className="text-gradient sm:whitespace-nowrap">{highlight}</span>
          )}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 max-w-xl text-[0.98rem] leading-relaxed sm:text-base ${
              align === 'center' ? 'mx-auto' : ''
            } ${isDark ? 'text-slate-300/90' : 'text-slate-600'}`}
          >
            {description}
          </p>
        </Reveal>
      )}

      {children && <div className="mt-7">{children}</div>}
    </div>
  );
}
