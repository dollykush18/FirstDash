/* ==========================================================================
   DEMO TEMPLATE IMAGERY
   --------------------------------------------------------------------------
   Photos used inside the six demo websites, grouped by template.

   TO REPLACE: drop a file into /public/images/ and change the value here,
   e.g.  hero: '/images/my-restaurant.jpg'
   ========================================================================== */

const u = (id, w = 1400, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const demoImages = {
  /* ---------- Restaurant 01 · Saffron House (elegant, fine dining) -------- */
  restaurantElegant: {
    hero: u('1414235077428-338989a2e8c0', 1800),
    interior: u('1552566626-52f8b828add9', 1200),
    chef: u('1466978913421-dad2ebd01d17', 1000),
    wine: u('1424847651672-bf20a4b0982b', 900),
    dishes: [
      u('1467003909585-2f8a72700288', 800),
      u('1600891964092-4316c288032e', 800),
      u('1473093295043-cdd812d0e601', 800),
      u('1540189549336-e6e99c3679fe', 800),
    ],
    gallery: [
      u('1559339352-11d035aa65de', 700),
      u('1432139555190-58524dae6a55', 700),
      u('1504674900247-0877df9cc836', 700),
      u('1552566626-52f8b828add9', 700),
    ],
  },

  /* ---------- Restaurant 02 · Copper & Flame (bright, casual modern) ------ */
  restaurantModern: {
    hero: u('1551782450-a2132b4ba21d', 1800),
    interior: u('1517248135467-4c7edcad34c4', 1200),
    dishes: [
      u('1513104890138-7c749659a591', 800),
      u('1565299624946-b28f40a0ae38', 800),
      u('1546069901-ba9599a7e63c', 800),
      u('1476224203421-9ac39bcb3327', 800),
      u('1565958011703-44f9829ba187', 800),
      u('1559339352-11d035aa65de', 800),
    ],
  },

  /* ---------- Café 01 · Brew & Bloom (warm, artisan) --------------------- */
  cafeArtisan: {
    hero: u('1501339847302-ac426a4a7cbb', 1800),
    beans: u('1453614512568-c4024d13c247', 1000),
    interior: u('1442512595331-e89e73853f31', 1200),
    latte: u('1509042239860-f550ce710b93', 900),
    menu: [
      u('1447933601403-0c6688de566e', 700),
      u('1486427944299-d1955d23e34d', 700),
      u('1497935586351-b67a49e012bf', 700),
    ],
    gallery: [
      u('1534040385115-33dcb3acba5b', 700),
      u('1554118811-1e0d58224f24', 700),
      u('1521017432531-fbd92d768814', 700),
      u('1495474472287-4d71bcdd2085', 700),
    ],
  },

  /* ---------- Café 02 · Daylight Coffee (minimal, airy) ------------------ */
  cafeMinimal: {
    hero: u('1559496417-e7f25cb247f3', 1600),
    interior: u('1521017432531-fbd92d768814', 1200),
    cup: u('1495474472287-4d71bcdd2085', 900),
    grid: [
      u('1447933601403-0c6688de566e', 700),
      u('1453614512568-c4024d13c247', 700),
      u('1486427944299-d1955d23e34d', 700),
      u('1555396273-367ea4eb4db5', 700),
    ],
  },

  /* ---------- Salon 01 · Maison Lux (dark, premium) --------------------- */
  salonLuxe: {
    hero: u('1522337360788-8b13dee7a37e', 1800),
    interior: u('1516975080664-ed2fc6a32937', 1200),
    styling: u('1470259078422-826894b933aa', 1000),
    portrait: u('1487412947147-5cebf100ffc2', 900),
    gallery: [
      u('1519415510236-718bdfcd89c8', 700),
      u('1571875257727-256c39da42af', 700),
      u('1503951914875-452162b0f3f1', 700),
      u('1560066984-138dadb4c035', 700),
    ],
  },

  /* ---------- Salon 02 · Bloom Beauty Bar (soft, fresh) ----------------- */
  salonFresh: {
    hero: u('1560869713-7d0a29430803', 1600),
    spa: u('1595476108010-b4d1f102b1b1', 1200),
    nails: u('1605497788044-5a32c7078486', 900),
    facial: u('1596462502278-27bfdc403348', 900),
    gallery: [
      u('1562322140-8baeececf3df', 700),
      u('1571875257727-256c39da42af', 700),
      u('1519415510236-718bdfcd89c8', 700),
      u('1516975080664-ed2fc6a32937', 700),
    ],
  },
};

export default demoImages;
