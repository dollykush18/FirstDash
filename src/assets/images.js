/* ==========================================================================
   IMAGE REGISTRY
   --------------------------------------------------------------------------
   Every photo used on the site is listed here once.

   TO REPLACE AN IMAGE:
   1. Drop your file into  /public/images/   (e.g. /public/images/hero-food.jpg)
   2. Change the value below to  '/images/hero-food.jpg'
   Nothing else in the codebase needs to change.

   The defaults point at free-to-use Unsplash photography so the site looks
   complete straight after `npm install`. Swap them for your own client work
   (or real project screenshots) as soon as you have them.
   ========================================================================== */

const u = (id, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  /* Hero + featured restaurant concept */
  restaurantHero: u('1504674900247-0877df9cc836', 1400),
  restaurantDish1: u('1565299624946-b28f40a0ae38', 600),
  restaurantDish2: u('1565958011703-44f9829ba187', 600),
  restaurantDish3: u('1546069901-ba9599a7e63c', 600),
  restaurantInterior: u('1517248135467-4c7edcad34c4', 1000),

  /* Portfolio / work section thumbnails */
  cafe: u('1495474472287-4d71bcdd2085', 1000),
  cafeAlt: u('1442512595331-e89e73853f31', 800),
  boutique: u('1441986300917-64674bd600d8', 1000),
  boutiqueAlt: u('1483985988355-763728e1935b', 800),
  salon: u('1560066984-138dadb4c035', 1000),
  salonAlt: u('1562322140-8baeececf3df', 800),
  shop: u('1578916171728-46686eac8d58', 1000),
  shopAlt: u('1534452203293-494d7ddbf7e0', 800),
  clinic: u('1576091160550-2173dba999ef', 1000),
  clinicAlt: u('1519494026892-80bbd2d6fd0d', 800),

  /* About section workspace */
  workspace: u('1497366754035-f200968a6e72', 1200),

  /* Social strip */
  socialA: u('1559496417-e7f25cb247f3', 600),
  socialB: u('1517248135467-4c7edcad34c4', 600),
  socialC: u('1555396273-367ea4eb4db5', 600),
  socialD: u('1600880292203-757bb62b4baf', 600),
};

export default images;
