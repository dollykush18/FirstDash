/* ==========================================================================
   TESTIMONIALS
   --------------------------------------------------------------------------
   IMPORTANT: no testimonial here is invented. Placeholders are shown until
   real client feedback exists.

   TO ADD A REAL TESTIMONIAL:
   1. Set  hasRealTestimonials = true
   2. Add entries to the `testimonials` array below
   The section swaps from placeholders to real quotes automatically.

   `link` is optional. When set, the card shows a "View the live site" link
   so visitors can see the work the quote is talking about.
   ========================================================================== */

export const hasRealTestimonials = true;

export const testimonials = [
  {
    quote:
      'FirstDash turned our paper attendance registers into an employee management system the whole factory actually uses every day. Daily reports that used to take hours of paperwork now take a few clicks.',
    name: 'Hirdesh Patwa',
    business: 'Trading Engineers',
    project: 'Factory employee management system',
    link: 'https://trading-engineers-dpr.vercel.app/login',
  },
  {
    quote:
      'My portfolio finally looks as sharp as the work it is meant to showcase, and it loads instantly on every device. Sending one link now says more about me than a CV ever did.',
    name: 'Abhishek Jain',
    business: 'abhishekjain.dev',
    project: 'Personal portfolio website',
    link: 'https://www.abhishekjain.dev/',
  },
];

export const placeholderTestimonials = [
  {
    quote: 'Your client story could appear here.',
    name: 'Client Name',
    business: 'Business Name',
  },
  {
    quote: 'Real client testimonials will be added as FirstDash grows.',
    name: 'Client Name',
    business: 'Business Name',
  },
  {
    quote: 'Be one of the first businesses we build a website for.',
    name: 'Client Name',
    business: 'Business Name',
  },
];

export default testimonials;
