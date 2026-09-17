import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config/siteConfig';

/**
 * Floating WhatsApp button. Appears once the visitor scrolls past the hero,
 * which keeps WhatsApp within reach on mobile without covering the hero CTA.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with WebsiteWallha on WhatsApp"
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.9)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
