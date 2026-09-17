import { Instagram, Mail, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import siteConfig, { whatsappLink, mailtoLink } from '../config/siteConfig';

export default function Contact() {
  return (
    <section
      id="contact"
      className="dark-section relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Purple glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute left-1/2 top-[-20%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[140px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand-500/20 blur-[130px]" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Left: final CTA */}
          <div className="lg:pt-4">
            <Reveal as="p" className="eyebrow text-brand-300">
              Let&rsquo;s Build It
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="heading-lg mt-3 text-white">
                Ready to Take Your
                <br />
                <span className="text-gradient">Business Online?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md leading-relaxed text-slate-300/90">
                Tell us about your business and let&rsquo;s create a website your customers
                will love.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappLink} external variant="whatsapp" icon={MessageCircle}>
                  WhatsApp Us
                </Button>
                <Button href={mailtoLink} variant="secondary" icon={Mail}>
                  Email Us
                </Button>
                <Button
                  href={siteConfig.instagram}
                  external
                  variant="secondary"
                  icon={Instagram}
                >
                  Instagram
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <dl className="mt-10 space-y-4 border-t border-white/10 pt-8">
                <div>
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={mailtoLink}
                      className="text-[0.95rem] text-slate-200 transition-colors hover:text-brand-300"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Response Time
                  </dt>
                  <dd className="mt-1 text-[0.95rem] text-slate-200">
                    Usually within a few hours on WhatsApp
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal y={30} delay={0.12}>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <h3 className="heading-md text-white">Tell Us About Your Business</h3>
              <p className="mt-2 text-sm text-slate-400">
                Fields marked <span className="text-brand-300">*</span> are required. We reply
                to every enquiry.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
