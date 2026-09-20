import siteConfig from '../config/siteConfig';

/* ==========================================================================
   CONTACT FORM SUBMISSION
   --------------------------------------------------------------------------
   Switch provider in src/config/siteConfig.js -> formProvider

   'web3forms' emails the enquiry to the address that owns the access key.
   'formspree' posts to siteConfig.formspreeEndpoint. Create a free form at
               formspree.io, paste the endpoint into siteConfig and you are live.
   'custom'    put your own fetch() in the branch below (EmailJS, your API,
               Google Apps Script, etc).
   'demo'      no network call. Logs the enquiry and reports success.

   Always resolves to { ok: boolean, message: string } so the UI never throws.
   ========================================================================== */

const FAILURE = {
  ok: false,
  message: 'Something went wrong. Please message us on WhatsApp instead.',
};

/** Labelled so the notification email reads as a summary, not a field dump. */
const asEmailFields = (data) => ({
  Name: data.name,
  Business: data.business,
  'Business type': data.businessType,
  'Phone / WhatsApp': data.phone,
  'Current website': data.currentWebsite?.trim() || 'Not provided',
  'Looking for': data.need || 'Not specified',
  Details: data.message,
});

export async function submitEnquiry(data) {
  const provider = siteConfig.formProvider;

  try {
    if (provider === 'web3forms') {
      const key = siteConfig.web3formsKey;

      // Better to send people to WhatsApp than to accept an enquiry the
      // unconfigured form would silently drop.
      if (!key || key.startsWith('PASTE_')) {
        return FAILURE;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `New website enquiry from ${data.business || data.name}`,
          from_name: 'FirstDash website',
          ...asEmailFields(data),
        }),
      });

      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.success) throw new Error(body?.message || 'Request failed');

      return { ok: true, message: 'Thanks! Your enquiry has been sent.' };
    }

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
    console.info('[FirstDash] Enquiry captured (demo mode):', data);
    await new Promise((r) => setTimeout(r, 700));
    return {
      ok: true,
      message: 'Thanks! Your enquiry has been received. We will reply shortly.',
    };
  } catch (error) {
    return FAILURE;
  }
}

export default submitEnquiry;
