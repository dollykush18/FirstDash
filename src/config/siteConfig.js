/* ==========================================================================
   WEBSITEWALLHA - MASTER CONFIGURATION
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change your contact details.
   Every button, link and form on the website reads from here.
   ========================================================================== */

const siteConfig = {
  /* ---- Brand ---- */
  brandName: 'WebsiteWallha',
  tagline: 'Websites for local businesses.',
  positioning: 'Websites That Help Local Businesses Grow',

  /* ---- Contact  (CHANGE THESE) ---- */
  email: 'hello@websitewallha.com',

  // Digits only, with country code, no "+" and no spaces. India = 91.
  whatsappNumber: '919999999999',

  // Pre-filled message that opens inside WhatsApp when someone taps the button.
  whatsappMessage:
    "Hi WebsiteWallha! I'd like a website for my business. Can we discuss?",

  // Optional: shown in the footer. Leave as an empty string to hide it.
  phoneDisplay: '',

  /* ---- Social links  (CHANGE THESE) ---- */
  instagram: 'https://instagram.com/websitewallha',
  youtube: 'https://youtube.com/@websitewallha',

  /* ---- Site meta ---- */
  siteUrl: 'https://websitewallha.com',
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
