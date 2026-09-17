/**
 * A small generated website preview for a portfolio card.
 * Driven entirely by the project entry in src/data/projects.js, so a new
 * project gets a matching preview without any new markup.
 */
export default function MiniSite({ project, className = '' }) {
  const { preview, image, accent, title } = project;

  return (
    <div
      className={`flex h-full w-full flex-col bg-white ${className}`}
      aria-hidden="true"
    >
      {/* site nav */}
      <div className="flex items-center justify-between border-b border-black/5 px-2 py-1.5">
        <div className="flex items-center gap-1">
          <span
            className="h-1.5 w-1.5 rounded-[2px]"
            style={{ backgroundColor: accent }}
          />
          <span className="text-[5.5px] font-bold text-ink-900 sm:text-[6.5px]">
            {preview.label}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[4.5px] text-slate-500 sm:text-[5.5px]">
          {preview.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
          <span
            className="rounded-full px-1.5 py-[1.5px] text-white"
            style={{ backgroundColor: accent }}
          >
            Call
          </span>
        </div>
      </div>

      {/* hero */}
      <div className="relative flex-1">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-1.5 px-2">
          <div className="text-[8px] font-extrabold leading-tight text-white sm:text-[10px]">
            {preview.headline}
          </div>
          <div className="mt-1 flex gap-1">
            <span
              className="rounded-full px-1.5 py-[2px] text-[4.5px] font-semibold text-white sm:text-[5.5px]"
              style={{ backgroundColor: accent }}
            >
              Explore
            </span>
            <span className="rounded-full border border-white/50 px-1.5 py-[2px] text-[4.5px] font-semibold text-white sm:text-[5.5px]">
              Contact
            </span>
          </div>
        </div>
      </div>

      {/* content blocks */}
      <div className="grid grid-cols-3 gap-1 px-2 py-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-[2px] rounded bg-slate-100 p-[3px]">
            <span
              className="block h-[3px] w-[70%] rounded-full"
              style={{ backgroundColor: accent, opacity: 0.7 }}
            />
            <span className="block h-[2px] w-full rounded-full bg-slate-300" />
            <span className="block h-[2px] w-[80%] rounded-full bg-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
