/* ==========================================================================
   FIRSTDASH - MASTER CONFIGURATION
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change your contact details.
   Every button, link and form on the website reads from here.
   ========================================================================== */

const siteConfig = {
  /* ---- Brand ---- */
  brandName: 'FirstDash',
  tagline: 'Websites for local businesses.',
  positioning: 'Websites That Help Local Businesses Grow',

  /* ---- Contact  (CHANGE THESE) ---- */
  email: 'firstdash3118@gmail.com',

  // Digits only, with country code, no "+" and no spaces. India = 91.
  // This is the number the WhatsApp button/FAB link to.
  whatsappNumber: '918127667631',

  // Pre-filled message that opens inside WhatsApp when someone taps the button.
  whatsappMessage:
    "Hi FirstDash! I'd like a website for my business. Can we discuss?",

  // Optional: shown in the footer. Leave as an empty string to hide it.
  phoneDisplay: '+91 81276 67631 / +91 83188 78783',

  /* ---- Social links  (CHANGE THESE) ---- */
  instagram: 'https://instagram.com/firstdash',
  youtube: 'https://youtube.com/@firstdash',

  /* ---- Site meta ---- */
  siteUrl: 'https://firstdash.com',
  copyrightYear: 2026,

  /* ---- Contact form ----
     'demo'      -> logs the enquiry to the console and shows a success message
     'formspree' -> set formspreeEndpoint below
     'custom'    -> wire up your own API inside src/utils/submitEnquiry.js      */
  formProvider: 'demo',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
};

/* ---- Derived links (do not edit) ---- */
export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  'Website Enquiry'
)}`;

export default siteConfig;
