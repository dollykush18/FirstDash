/**
 * FirstDash logo mark: a browser window with an abstract zigzag mark inside,
 * standing in for a website/growth graph.
 * `variant` controls the wordmark colour on dark vs light backgrounds.
 */
export default function Logo({ variant = 'light', showWordmark = true, className = '' }) {
  const wordmarkColor = variant === 'dark' ? 'text-ink-950' : 'text-white';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow sm:h-10 sm:w-10">
        <svg
          viewBox="0 0 40 40"
          className="h-6 w-6 sm:h-[1.65rem] sm:w-[1.65rem]"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            x="4.5"
            y="6.5"
            width="31"
            height="27"
            rx="5"
            stroke="white"
            strokeWidth="2.4"
          />
          <path d="M4.5 14h31" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="9.5" cy="10.3" r="1.35" fill="white" />
          <circle cx="14" cy="10.3" r="1.35" fill="white" />
          <path
            d="M11 19.5l3.4 8.4 3.6-6.6 3.6 6.6 3.4-8.4"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
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
