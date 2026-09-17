import siteConfig from '../config/siteConfig';

/* ==========================================================================
   CONTACT FORM SUBMISSION
   --------------------------------------------------------------------------
   Switch provider in src/config/siteConfig.js -> formProvider

   'demo'      no network call. Logs the enquiry and reports success.
   'formspree' posts to siteConfig.formspreeEndpoint. Create a free form at
               formspree.io, paste the endpoint into siteConfig and you are live.
   'custom'    put your own fetch() in the branch below (EmailJS, your API,
               Google Apps Script, etc).

   Always resolves to { ok: boolean, message: string } so the UI never throws.
   ========================================================================== */

export async function submitEnquiry(data) {
  const provider = siteConfig.formProvider;

  try {
    if (provider === 'formspree') {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');
      return { ok: true, message: 'Thanks! Your enquiry has been sent.' };
    }

    if (provider === 'custom') {
      /* ---- YOUR BACKEND GOES HERE ----------------------------------------
      const res = await fetch('https://your-api.com/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      --------------------------------------------------------------------- */
      return { ok: true, message: 'Thanks! Your enquiry has been sent.' };
    }

    /* demo */
    // eslint-disable-next-line no-console
    console.info('[WebsiteWallha] Enquiry captured (demo mode):', data);
    await new Promise((r) => setTimeout(r, 700));
    return {
      ok: true,
      message: 'Thanks! Your enquiry has been received. We will reply shortly.',
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Something went wrong. Please message us on WhatsApp instead.',
    };
  }
}

export default submitEnquiry;
