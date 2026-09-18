/**
 * FirstDash logo: the FD monogram, with an optional wordmark beside it.
 * `variant` controls the wordmark colour on dark vs light backgrounds.
 *
 * To swap the mark, replace /public/images/logo.png. A transparent PNG or SVG
 * works; nothing else needs to change.
 */
export default function Logo({ variant = 'light', showWordmark = true, className = '' }) {
  const wordmarkColor = variant === 'dark' ? 'text-ink-950' : 'text-white';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/logo.png"
        alt=""
        width="82"
        height="63"
        className="h-8 w-auto sm:h-9"
      />
      {showWordmark && (
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-[-0.02em] sm:text-lg ${wordmarkColor}`}
        >
          First<span className="text-brand-400">Dash</span>
        </span>
      )}
    </span>
  );
}
