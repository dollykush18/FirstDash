import { Instagram, Mail, MessageCircle, Youtube } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/navigation';
import siteConfig, { whatsappLink, mailtoLink } from '../config/siteConfig';

export default function Footer() {
  const socials = [
    { label: 'Instagram', href: siteConfig.instagram, icon: Instagram, external: true },
    { label: 'YouTube', href: siteConfig.youtube, icon: Youtube, external: true },
    { label: 'WhatsApp', href: whatsappLink, icon: MessageCircle, external: true },
    { label: 'Email', href: mailtoLink, icon: Mail, external: false },
  ];

  return (
    <footer className="dark-section border-t border-white/10 bg-ink-950 text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" aria-label="WebsiteWallha home">
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline} Modern, mobile-friendly websites for restaurants, shops,
              salons, clinics and growing local brands.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={mailtoLink}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phoneDisplay && (
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              )}
            </ul>

            <ul className="mt-5 flex gap-2.5">
              {socials.map(({ label, href, icon: SocialIcon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/15 hover:text-white"
                  >
                    <SocialIcon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            &copy; {siteConfig.copyrightYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Portfolio items shown are concept projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
