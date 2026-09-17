import { motion } from 'framer-motion';

/**
 * Scroll-reveal wrapper. Subtle by design: short distance, short duration,
 * fires once, and respects reduced-motion via Framer's global settings.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.55,
  className = '',
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
