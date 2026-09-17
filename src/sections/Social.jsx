import { Instagram, Youtube } from 'lucide-react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import images from '../assets/images';
import siteConfig from '../config/siteConfig';

const strip = [
  { src: images.socialA, alt: 'Café website concept preview' },
  { src: images.socialB, alt: 'Restaurant website concept preview' },
  { src: images.socialC, alt: 'Local shop website concept preview' },
  { src: images.socialD, alt: 'Clinic website concept preview' },
];

export default function Social() {
  return (
    <section className="dark-section relative overflow-hidden border-t border-white/5 bg-ink-950 py-16 text-white sm:py-20">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal as="p" className="eyebrow text-brand-300">
              Social
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="heading-lg mt-3 text-white">See More Website Ideas</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300/90">
                Follow FirstDash for website concepts, redesigns, business website ideas
                and behind-the-scenes work.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={siteConfig.instagram} external icon={Instagram} variant="instagram">
                  Instagram
                </Button>
                <Button href={siteConfig.youtube} external icon={Youtube} variant="youtube">
                  YouTube
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Preview strip */}
          <Reveal delay={0.12} className="grid grid-cols-4 gap-2 sm:gap-3">
            {strip.map((item, i) => (
              <div
                key={item.alt}
                /* bg-white/5 so a slow or failed image still reads as a tile
                   rather than an empty outline */
                className={`overflow-hidden rounded-xl border border-white/10 bg-white/5 ${
                  i % 2 === 1 ? 'translate-y-3 sm:translate-y-5' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="750"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
