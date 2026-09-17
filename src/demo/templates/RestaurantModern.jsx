import { Clock, Flame, MapPin, Phone, Star, Truck } from 'lucide-react';
import { demoImages } from '../demoImages';

/* Copper & Flame - bright, bold, casual. Warm orange on cream. */

const img = demoImages.restaurantModern;
const FLAME = '#ea580c';

const categories = ['All', 'Pizza', 'Burgers', 'Bowls', 'Breakfast'];

const dishes = [
  { name: 'Smoked Chilli Pizza', tag: 'Pizza', price: '₹420', time: '18 min', img: img.dishes[0], hot: true },
  { name: 'Wood-Fired Margherita', tag: 'Pizza', price: '₹360', time: '16 min', img: img.dishes[1] },
  { name: 'Harvest Grain Bowl', tag: 'Bowls', price: '₹310', time: '10 min', img: img.dishes[2] },
  { name: 'Big Morning Plate', tag: 'Breakfast', price: '₹280', time: '14 min', img: img.dishes[3] },
  { name: 'Double Stack Burger', tag: 'Burgers', price: '₹390', time: '15 min', img: img.dishes[4], hot: true },
  { name: 'Charred Veg Platter', tag: 'Bowls', price: '₹340', time: '12 min', img: img.dishes[5] },
];

const perks = [
  { icon: Flame, title: 'Wood-fired daily', text: 'Every base and patty cooked over real flame, never a microwave.' },
  { icon: Truck, title: 'Free local delivery', text: 'Within 5km, on orders over ₹500. Usually there in 30 minutes.' },
  { icon: Clock, title: 'Open till late', text: 'Kitchen runs until 11pm, seven days a week. Walk-ins welcome.' },
];

const navItems = ['Menu', 'About', 'Visit'];

export default function RestaurantModern() {
  return (
    <div className="font-outfit bg-[#fffaf5] text-[#1c1410]">
      {/* ------------------------------ NAV ------------------------------ */}
      <header className="sticky top-0 z-30 border-b border-[#1c1410]/8 bg-[#fffaf5]/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8"
          aria-label="Main"
        >
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: FLAME }}
            >
              <Flame className="h-4 w-4" aria-hidden="true" />
            </span>
            Copper &amp; Flame
          </span>

          <ul className="hidden items-center gap-8 text-[0.92rem] font-medium md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#1c1410]/60 transition-colors hover:text-[#1c1410]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#visit"
            className="rounded-full px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: FLAME }}
          >
            Order Now
          </a>
        </nav>
      </header>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.78rem] font-semibold"
              style={{ backgroundColor: 'rgba(234,88,12,0.12)', color: FLAME }}
            >
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              4.7 on Google &middot; 1,200+ reviews
            </span>

            <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
              Real fire.
              <br />
              <span style={{ color: FLAME }}>Real fast.</span>
            </h1>

            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[#1c1410]/60">
              Wood-fired pizzas, stacked burgers and big bowls &mdash; made fresh to order and
              out of the kitchen in under twenty minutes.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: FLAME }}
              >
                See the Menu
              </a>
              <a
                href="#visit"
                className="rounded-full border-2 border-[#1c1410]/12 px-7 py-3.5 font-semibold transition-colors hover:border-[#1c1410]/40"
              >
                Book a Table
              </a>
            </div>

            <dl className="mt-12 flex gap-10 border-t border-[#1c1410]/10 pt-7">
              {[
                ['20 min', 'Average wait'],
                ['5 km', 'Free delivery'],
                ['11 pm', 'Kitchen closes'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold">{value}</span>
                    <span className="mt-0.5 block text-[0.82rem] text-[#1c1410]/50">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={img.hero}
              alt="A freshly made burger and fries on the counter"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(28,20,16,0.4)] sm:-left-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-wider text-[#1c1410]/45">
                Today&rsquo;s special
              </p>
              <p className="mt-1 text-[0.98rem] font-bold">Smoked Chilli Pizza</p>
              <p className="mt-0.5 text-sm font-semibold" style={{ color: FLAME }}>
                &#8377;420 &middot; save &#8377;80
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ PERKS ---------------------------- */}
      <section className="border-y border-[#1c1410]/8 bg-white py-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-8 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(234,88,12,0.1)', color: FLAME }}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-[#1c1410]/55">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ MENU ----------------------------- */}
      <section id="menu" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em]" style={{ color: FLAME }}>
              Our Menu
            </p>
            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.75rem]">
              Everything&rsquo;s made to order
            </h2>
          </div>
        </div>

        {/* Category pills - visual only in this demo */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full px-4 py-2 text-[0.88rem] font-medium ${
                i === 0 ? 'text-white' : 'bg-[#1c1410]/5 text-[#1c1410]/60'
              }`}
              style={i === 0 ? { backgroundColor: FLAME } : undefined}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-12px_rgba(28,20,16,0.18)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(28,20,16,0.3)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {dish.hot && (
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: FLAME }}
                  >
                    Popular
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{dish.name}</h3>
                    <p className="mt-1 text-[0.82rem] text-[#1c1410]/45">
                      {dish.tag} &middot; {dish.time}
                    </p>
                  </div>
                  <span className="shrink-0 text-lg font-bold">{dish.price}</span>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-full border-2 border-[#1c1410]/10 py-2.5 text-[0.88rem] font-semibold transition-colors group-hover:border-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white"
                >
                  Add to order
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------ ABOUT ---------------------------- */}
      <section id="about" className="bg-[#1c1410] py-20 text-[#fffaf5] lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <img
            src={img.interior}
            alt="The open kitchen and counter seating at Copper and Flame"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em]" style={{ color: '#fb923c' }}>
              About Us
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.75rem]">
              One oven. One counter. No shortcuts.
            </h2>
            <p className="mt-6 leading-relaxed text-[#fffaf5]/65">
              We started in 2019 with a second-hand wood oven and a very small menu. Not much
              has changed &mdash; we still make dough every morning, still grind our own patties,
              and still cook everything in front of you.
            </p>
            <p className="mt-4 leading-relaxed text-[#fffaf5]/65">
              Pull up a stool at the counter and watch it happen.
            </p>
            <a
              href="#visit"
              className="mt-8 inline-flex rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: FLAME }}
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------ VISIT ---------------------------- */}
      <section id="visit" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            [MapPin, 'Find us', '18 Market Street\nIndiranagar, Bengaluru'],
            [Clock, 'Opening hours', 'Mon – Sun\n11:00am – 11:00pm'],
            [Phone, 'Order by phone', '+91 00000 00000\nDelivery within 5km'],
          ].map(([Icon, label, value]) => (
            <div key={label} className="rounded-2xl border border-[#1c1410]/10 p-7">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(234,88,12,0.1)', color: FLAME }}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-semibold">{label}</h3>
              <p className="mt-2 whitespace-pre-line leading-relaxed text-[#1c1410]/55">{value}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-5 rounded-[1.75rem] px-8 py-12 text-center text-white sm:py-14"
          style={{ backgroundColor: FLAME }}
        >
          <h2 className="max-w-lg text-[1.75rem] font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
            Hungry now? We deliver in 30 minutes.
          </h2>
          <p className="max-w-md text-white/80">
            Order straight from us and skip the app commission &mdash; it all goes to the kitchen.
          </p>
          <a
            href="#menu"
            className="mt-2 rounded-full bg-white px-8 py-3.5 font-bold text-[#1c1410] transition-transform hover:-translate-y-0.5"
          >
            Start Your Order
          </a>
        </div>
      </section>

      {/* ----------------------------- FOOTER ---------------------------- */}
      <footer className="border-t border-[#1c1410]/8 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <p className="font-bold">Copper &amp; Flame</p>
          <p className="text-[0.88rem] text-[#1c1410]/45">
            Wood-fired kitchen &middot; Indiranagar, Bengaluru
          </p>
        </div>
      </footer>
    </div>
  );
}
