/**
 * Page section shell. Handles the alternating dark/light rhythm, the
 * container width and the vertical spacing so every section stays consistent.
 */
export default function Section({
  id,
  tone = 'light', // 'light' | 'dark' | 'soft'
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  const tones = {
    light: 'bg-white text-ink-900',
    soft: 'bg-[#f7f6fb] text-ink-900',
    dark: 'dark-section bg-ink-950 text-white',
  };

  return (
    <section
      id={id}
      /* overflow-clip, not overflow-hidden: it contains the decorative glows
         without turning the section into a scroll container, which would stop
         `position: sticky` working for anything inside it. */
      className={`relative overflow-clip py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
      {...rest}
    >
      <div className={`container-page relative z-10 ${containerClassName}`}>{children}</div>
    </section>
  );
}
