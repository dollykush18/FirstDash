import { Suspense, lazy, useEffect, useMemo } from 'react';
import { demos, getDemo, demoUrl } from '../data/demos';
import DemoBanner from './DemoBanner';

/* Each template is code-split, so opening one demo never downloads the rest.
   Keys must match the `slug` values in src/data/demos.js. */
const templates = {
  'restaurant-elegant': lazy(() => import('./templates/RestaurantElegant')),
  'restaurant-modern': lazy(() => import('./templates/RestaurantModern')),
  'cafe-artisan': lazy(() => import('./templates/CafeArtisan')),
  'cafe-minimal': lazy(() => import('./templates/CafeMinimal')),
  'salon-luxe': lazy(() => import('./templates/SalonLuxe')),
  'salon-fresh': lazy(() => import('./templates/SalonFresh')),
  'clinic-trusted': lazy(() => import('./templates/ClinicTrusted')),
  'clinic-modern': lazy(() => import('./templates/ClinicModern')),
  'coaching-results': lazy(() => import('./templates/CoachingResults')),
  'coaching-friendly': lazy(() => import('./templates/CoachingFriendly')),
  'boutique-traditional': lazy(() => import('./templates/BoutiqueTraditional')),
  'boutique-modern': lazy(() => import('./templates/BoutiqueModern')),
};

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0718]">
      <div className="flex flex-col items-center gap-3">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-brand-400" />
        <p className="text-sm text-slate-400">Loading template…</p>
      </div>
    </div>
  );
}

/** Shown when ?t= is missing or unknown: a simple picker of every demo. */
function DemoIndex() {
  const byCategory = demos.reduce((acc, d) => {
    (acc[d.category] = acc[d.category] || []).push(d);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#0a0718] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-[900px]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
          FirstDash
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
          Demo Website Templates
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-slate-300/90">
          Two design directions for each type of business. Open them, compare, and tell us
          which one feels right for yours.
        </p>

        {Object.entries(byCategory).map(([category, list]) => (
          <section key={category} className="mt-12">
            <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400">
              {category}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {list.map((d) => (
                <a
                  key={d.slug}
                  href={demoUrl(d.slug)}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-brand-400/40"
                >
                  <span
                    className="inline-block rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white"
                    style={{ backgroundColor: d.accent }}
                  >
                    {d.style}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{d.businessName}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{d.tagline}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                    Open template →
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}

        <a
          href={import.meta.env.BASE_URL}
          className="mt-14 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
        >
          ← Back to FirstDash
        </a>
      </div>
    </main>
  );
}

export default function DemoApp() {
  const slug = useMemo(
    () => new URLSearchParams(window.location.search).get('t'),
    []
  );

  const demo = slug ? getDemo(slug) : null;
  const Template = demo ? templates[demo.slug] : null;

  useEffect(() => {
    document.title = demo
      ? `${demo.businessName} — ${demo.style} template | FirstDash demo`
      : 'Demo Website Templates | FirstDash';
  }, [demo]);

  if (!demo || !Template) return <DemoIndex />;

  return (
    <>
      {/* pb-28 keeps the fixed demo bar from covering the page footer */}
      <div className="pb-24 sm:pb-20">
        <Suspense fallback={<Loading />}>
          <Template demo={demo} />
        </Suspense>
      </div>
      <DemoBanner demo={demo} />
    </>
  );
}
