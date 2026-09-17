import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import DeviceMockup from '../components/mockups/DeviceMockup';
import { heroFeatures } from '../data/heroFeatures';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="dark-section relative overflow-hidden bg-ink-950 pb-24 pt-28 text-white sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14"
        >
          {/* Left: copy */}
          <div>
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-200 sm:text-[0.7rem]"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Web Design for Local Businesses
            </motion.span>

            <motion.h1
              variants={item}
              className="heading-xl mt-6 text-white"
            >
              Websites That Help
              <br />
              <span className="text-gradient">Local Businesses</span> Grow
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
            >
              Modern, responsive websites for restaurants, caf&eacute;s, shops and growing
              businesses that want a stronger online presence.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <Button href="#contact" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="#work" size="lg" variant="secondary">
                View Our Work
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-3"
            >
              {heroFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-[0.82rem] text-slate-300/85 sm:text-sm"
                >
                  <span className="flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-full bg-brand-500/20 ring-1 ring-brand-400/30">
                    <Check className="h-3 w-3 text-brand-300" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: device mockup */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
          >
            {/* floating decorations */}
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute -left-6 top-4 h-24 w-24 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-brand-400/25 blur-3xl" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <DeviceMockup />
            </motion.div>

            {/* decorative accents, kept clear of the device so nothing reads
                as a rendering artifact */}
            <span
              className="pointer-events-none absolute -right-3 top-1/3 hidden h-3 w-3 rounded-full bg-brand-400 shadow-glow sm:block"
              aria-hidden="true"
            />
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -left-6 -bottom-12 hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[0.7rem] font-medium text-slate-200 backdrop-blur lg:block"
            >
              <span className="text-brand-300">Concept</span> &middot; Restaurant site
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
