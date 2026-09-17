import images from '../../assets/images';

/**
 * A fictional restaurant website, drawn with real markup rather than a
 * screenshot so it stays crisp at any size and can be restyled instantly.
 * Purely decorative - the parent hides it from assistive technology.
 */

const dishes = [
  { name: 'Truffle Pasta', price: '₹420', img: images.restaurantDish1 },
  { name: 'Wood-Fired Pizza', price: '₹380', img: images.restaurantDish2 },
  { name: 'Garden Salad', price: '₹260', img: images.restaurantDish3 },
];

const menuRows = [
  ['Soup of the Day', '₹180'],
  ['Herb Grilled Chicken', '₹450'],
  ['Chocolate Lava Cake', '₹220'],
];

export function RestaurantDesktop() {
  return (
    <div className="flex h-full w-full flex-col bg-[#14100f] text-white">
      {/* nav */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[3px] bg-orange-500 sm:h-2.5 sm:w-2.5" />
          <span className="text-[6px] font-bold tracking-tight sm:text-[8px]">VERDE</span>
        </div>
        <div className="flex items-center gap-2 text-[5px] text-white/65 sm:gap-3 sm:text-[6.5px]">
          <span>Home</span>
          <span className="text-orange-400">Menu</span>
          <span>Gallery</span>
          <span>Contact</span>
          <span className="rounded-full bg-orange-500 px-1.5 py-[2px] text-white sm:px-2">Book</span>
        </div>
      </div>

      {/* hero */}
      <div className="relative flex-1">
        <img
          src={images.restaurantHero}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="relative flex h-full flex-col justify-center gap-1 px-3 sm:px-5">
          <span className="text-[5px] uppercase tracking-[0.2em] text-orange-400 sm:text-[6px]">
            Fresh &middot; Local &middot; Daily
          </span>
          <h3 className="text-[11px] font-extrabold leading-tight sm:text-[17px] lg:text-[20px]">
            Good Food,
            <br />
            Good Mood.
          </h3>
          <p className="max-w-[55%] text-[5px] leading-relaxed text-white/70 sm:text-[6.5px]">
            Seasonal plates cooked over wood fire in the heart of the city.
          </p>
          <div className="mt-1 flex gap-1.5">
            <span className="rounded-full bg-orange-500 px-2 py-[3px] text-[5px] font-semibold sm:px-2.5 sm:text-[6.5px]">
              View Menu
            </span>
            <span className="rounded-full border border-white/35 px-2 py-[3px] text-[5px] font-semibold sm:px-2.5 sm:text-[6.5px]">
              Reserve
            </span>
          </div>
        </div>
      </div>

      {/* dish cards */}
      <div className="bg-[#1a1514] px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[6px] font-bold sm:text-[8px]">Today&rsquo;s Specials</span>
          <span className="text-[5px] text-orange-400 sm:text-[6px]">See all &rarr;</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {dishes.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-md bg-white/5">
              <img
                src={d.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-7 w-full object-cover sm:h-10"
              />
              <div className="flex items-center justify-between px-1 py-[3px]">
                <span className="truncate text-[4.5px] font-medium sm:text-[6px]">{d.name}</span>
                <span className="text-[4.5px] text-orange-400 sm:text-[6px]">{d.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* menu + contact strip */}
      <div className="grid grid-cols-5 gap-2 bg-[#14100f] px-3 py-2 sm:px-4">
        <div className="col-span-3 space-y-[3px]">
          {menuRows.map(([item, price]) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-white/10 pb-[2px] text-[4.5px] text-white/70 sm:text-[6px]"
            >
              <span>{item}</span>
              <span className="text-white/90">{price}</span>
            </div>
          ))}
        </div>
        <div className="col-span-2 space-y-[3px] text-[4.5px] text-white/55 sm:text-[6px]">
          <div className="font-semibold text-white/85">Visit Us</div>
          <div>12 Garden Road</div>
          <div>Open 11am &ndash; 11pm</div>
          <div className="text-orange-400">+91 00000 00000</div>
        </div>
      </div>
    </div>
  );
}

export function RestaurantMobile() {
  return (
    <div className="flex h-full w-full flex-col bg-[#14100f] text-white">
      <div className="flex items-center justify-between px-2 pb-1 pt-1.5">
        <span className="text-[5px] font-bold sm:text-[6px]">VERDE</span>
        <div className="space-y-[1.5px]">
          <span className="block h-[1px] w-2 bg-white/70" />
          <span className="block h-[1px] w-2 bg-white/70" />
          <span className="block h-[1px] w-2 bg-white/70" />
        </div>
      </div>

      <div className="relative h-[38%]">
        <img
          src={images.restaurantHero}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
        <div className="absolute inset-x-0 bottom-1 px-2">
          <h4 className="text-[7px] font-extrabold leading-tight sm:text-[9px]">
            Good Food,
            <br />
            Good Mood.
          </h4>
          <span className="mt-1 inline-block rounded-full bg-orange-500 px-1.5 py-[2px] text-[4px] font-semibold sm:text-[5px]">
            View Menu
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-1 px-2 py-1.5">
        {dishes.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 rounded-md bg-white/5 p-[3px]">
            <img
              src={d.img}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-4 w-4 rounded object-cover sm:h-5 sm:w-5"
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[4px] font-medium sm:text-[5px]">{d.name}</div>
              <div className="text-[3.5px] text-white/45 sm:text-[4.5px]">Chef&rsquo;s pick</div>
            </div>
            <span className="text-[4px] text-orange-400 sm:text-[5px]">{d.price}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 bg-orange-500 py-[4px] text-[4px] font-semibold sm:text-[5px]">
        Call &middot; WhatsApp &middot; Directions
      </div>
    </div>
  );
}
