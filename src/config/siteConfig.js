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
  positioning: 'Turning Business Into Digital Brands',

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
  instagram: 'https://www.instagram.com/firstdash31',
  youtube: 'https://www.youtube.com/@FirstDash31',

  /* ---- Site meta ---- */
  siteUrl: 'https://firstdash.com',
  copyrightYear: 2026,

  /* ---- Contact form ----
     Where enquiries from the contact form are delivered.

     'web3forms' -> emails every enquiry to the address that owns the access
                    key below. Get a free key at https://web3forms.com: enter
                    firstdash3118@gmail.com, confirm the verification email,
                    then paste the key it gives you into web3formsKey.
     'formspree' -> set formspreeEndpoint below
     'custom'    -> wire up your own API inside src/utils/submitEnquiry.js
     'demo'      -> NOTHING IS SENT. Logs to the browser console only.
                    Use this for local testing, never on the live site.       */
  formProvider: 'web3forms',

  // Access key from web3forms.com, tied to firstdash3118@gmail.com.
  // Public by design: it only allows sending to that verified address.
  web3formsKey: '71dc285c-158a-4fb3-80cd-e92b76a50055',

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
