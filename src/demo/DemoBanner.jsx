import { ArrowRight, ExternalLink } from 'lucide-react';
import { demosForCategory } from '../data/demos';
import { demoUrl } from '../data/demos';

/**
 * Persistent bar shown on every demo template.
 *
 * It does three jobs:
 *  1. Makes clear this is a FirstDash sample, not a real business.
 *  2. Lets the visitor flip straight to the other template in the same
 *     category, so they can compare the two designs and pick one.
 *  3. Sends them back to the enquiry form while the design is fresh.
 */
export default function DemoBanner({ demo }) {
  const siblings = demosForCategory(demo.category);
  const homeUrl = import.meta.env.BASE_URL;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-[#0a0718]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Left: what this is */}
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/logo.png"
            alt=""
            width="82"
            height="63"
            className="h-7 w-auto shrink-0"
          />

          <div className="min-w-0">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-300">
              Demo Template
            </p>
            <p className="truncate text-[0.85rem] font-semibold text-white">
              {demo.businessName}
              <span className="ml-2 hidden font-normal text-slate-400 sm:inline">
                {demo.tagline}
              </span>
            </p>
          </div>
        </div>

        {/* Right: compare the two styles, then convert */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex shrink-0 rounded-full border border-white/12 bg-white/5 p-1"
            role="group"
            aria-label={`Switch ${demo.category} template style`}
          >
            {siblings.map((sib) => {
              const isActive = sib.slug === demo.slug;
              return (
                <a
                  key={sib.slug}
                  href={demoUrl(sib.slug)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[0.75rem] font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-gradient text-white'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {sib.style}
                </a>
              );
            })}
          </div>

          <a
            href={`${homeUrl}#contact`}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-[0.8rem] font-semibold text-white shadow-[0_10px_26px_-12px_rgba(124,77,255,0.9)] transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            <span className="hidden sm:inline">I want this design</span>
            <span className="sm:hidden">Enquire</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href={homeUrl}
            title="Back to FirstDash"
            aria-label="Back to FirstDash"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
