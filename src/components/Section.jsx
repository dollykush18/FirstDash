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
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
      {...rest}
    >
      <div className={`container-page relative z-10 ${containerClassName}`}>{children}</div>
    </section>
  );
}
