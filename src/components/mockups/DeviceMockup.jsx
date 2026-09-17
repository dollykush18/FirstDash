import { RestaurantDesktop, RestaurantMobile } from './RestaurantSite';

/**
 * Laptop + phone device stack showing the restaurant website concept.
 * Decorative only, so the whole block is hidden from screen readers and the
 * surrounding section carries a text description instead.
 */
export default function DeviceMockup({ className = '', showPhone = true }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Laptop */}
      <div className="relative">
        <div className="rounded-[14px] border border-white/15 bg-gradient-to-b from-[#2a2545] to-[#17142b] p-[6px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] sm:rounded-[18px] sm:p-[8px]">
          <div className="overflow-hidden rounded-[8px] bg-black sm:rounded-[11px]">
            {/* camera notch strip */}
            <div className="flex h-[10px] items-center justify-center bg-[#0d0b18] sm:h-[14px]">
              <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
            </div>
            <div className="aspect-[16/10] w-full">
              <RestaurantDesktop />
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-[8px] w-[112%] -translate-x-[5.35%] rounded-b-[10px] bg-gradient-to-b from-[#2a2545] to-[#100e1f] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.9)] sm:h-[11px]">
          <span className="absolute left-1/2 top-0 h-[3px] w-[14%] -translate-x-1/2 rounded-b-full bg-white/10" />
        </div>
      </div>

      {/* Phone */}
      {showPhone && (
        <div className="absolute -bottom-9 right-[-2%] w-[21%] max-w-[112px] sm:-bottom-11 sm:right-[-8%]">
          <div className="rounded-[12px] border border-white/15 bg-[#17142b] p-[3px] shadow-[0_28px_60px_-20px_rgba(0,0,0,0.9)] sm:rounded-[16px] sm:p-[4px]">
            <div className="relative overflow-hidden rounded-[9px] bg-black sm:rounded-[12px]">
              <span className="absolute left-1/2 top-[3px] z-10 h-[3px] w-[28%] -translate-x-1/2 rounded-full bg-white/25" />
              <div className="aspect-[9/18]">
                <RestaurantMobile />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
