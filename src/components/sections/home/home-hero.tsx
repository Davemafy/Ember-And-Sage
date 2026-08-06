import { ArrowRight, Calendar, ChevronDown, Clock, Play, ShieldCheck, User } from "lucide-react";
import Button from "../../ui/button";
import heroBannerMobile from "@/assets/img/home-hero-mobile.webp";
import heroBannerDesktop from "@/assets/img/home-hero-desktop.webp";

const HomeHero = () => {
  return (
    <section className={`text-warm-ivory grid pb-4 sm:h-screen`}>
      <div
        className={`round-bottom bg-near-black relative min-h-[560px] overflow-clip px-4 pt-6 pb-8 *:isolate sm:static sm:h-full sm:px-16 sm:pt-[120px] sm:[clip-path:none]!`}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBannerMobile} />
          <img
            src={heroBannerDesktop}
            alt="hero-banner"
            className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
          />
        </picture>
        <div className="space-y-6">
          <div>
            <p className="text-burnt-orange mb-3 text-[9.5px] font-semibold tracking-[0.15em] uppercase">
              Modern Cuisine. Timeless Experience.
            </p>

            <h1 className="max-w-[10ch] font-serif text-[56px] leading-[0.92] tracking-[-0.03em] sm:text-[66px]">
              Good food is our <span className="font-normal italic">love</span> language.
            </h1>

            <p className="mt-5 max-w-[30ch] text-[15px] leading-6 font-extralight tracking-[0.1px] sm:max-w-[40ch] sm:text-[13px]">
              Ember &amp; Sage brings together the finest ingredients, exceptional flavours and
              genuine hospitality.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Button variant="icon-button" className="h-9 w-9">
                <Play size={14} stroke="white" />
              </Button>
              <p className="text-[15px] font-light">Watch our story</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-7 sm:px-16">
        <div className="card text-text-primary relative -mt-20 w-full rounded-2xl bg-[#f9f4f1] p-5 px-8 pt-4 shadow-xl shadow-[#d6d2d1]">
          <div className="gap-4 sm:flex">
            <h2 className="mt-3 font-serif text-[24px] leading-none font-semibold">
              Reserve Your Table
            </h2>
            <p className="0 text-text-muted mt-2 flex items-center gap-2 text-sm font-light">
              <span className="bg-burnt-orange h-1 w-1 rounded-full" />
              <span className="text-xs">Quick and Easy</span>
            </p>
          </div>
          <div className="justify-between sm:flex">
            <div className="mt-5 space-y-3 sm:flex sm:gap-4 sm:space-y-0">
              <div className="border-border-light flex items-center gap-2 rounded-xl border bg-white px-4 py-3">
                <Calendar size={16} />
                <p className="mt-1 -translate-y-[2px] text-[13px] font-medium">Select Date</p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
              <div className="border-border-light flex items-center gap-2 rounded-xl border bg-white px-4 py-3">
                <Clock size={16} />
                <p className="mt-1 -translate-y-[2px] text-[13px] font-medium">Select Time</p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
              <div className="border-border-light flex items-center gap-2 rounded-xl border bg-white px-4 py-3">
                <User size={16} />
                <p className="mt-1 -translate-y-[2px] text-[13px] font-medium">2 Guests</p>
                <ChevronDown size={20} className="ml-auto text-gray-500" />
              </div>
            </div>
            <div className="mt-5">
              <Button className="font-regular flex h-12 items-center rounded-md text-xs" fullWidth>
                <span className="ml-auto">Find a Table</span>
                <ArrowRight className="ml-auto" size={18} />
              </Button>
            </div>
          </div>
          <div className="text-text-muted mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:justify-start">
            <p className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="text-burnt-orange" />
              <span>No booking fees.</span>
            </p>

            <p className="inline-flex items-center gap-2">
              <span className="bg-burnt-orange h-1.5 w-1.5 rounded-full" />
              <span>Instant confirmation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
