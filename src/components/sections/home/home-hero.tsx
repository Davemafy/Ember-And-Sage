import { Play } from "lucide-react";
import Button from "../../ui/button";
import heroBanner from "@/assets/img/home-hero.png";

const HomeHero = () => {
  return (
    <section className={`relative isolate text-warm-ivory `}>
      <div className={` h-full  bg-near-black px-4 pb-8 pt-6`}>
        <img
          src={heroBanner}
          alt="hero-banner"
          className="absolute w-full -z-1 top-0 left-0"
        />
        <div className="space-y-6">
          <div>
            <p className="text-[9.5px] mb-3 font-semibold uppercase tracking-[0.15em] text-burnt-orange">
              Modern Cuisine. Timeless Experience.
            </p>

            <h1 className="font-serif text-[56px] leading-[0.92] tracking-[-0.03em] max-w-[10ch]">
              Good food is our <span className="italic font-normal">love</span>{" "}
              language.
            </h1>

            <p className="mt-5 max-w-[320px] tracking-[0.1px] font-light text-[15px] leading-6">
              Ember &amp; Sage brings together the finest ingredients,
              exceptional flavours and genuine hospitality.
            </p>
            <div className="flex gap-3 items-center mt-4">
              <Button variant="icon-button" className="h-9 w-9">
                <Play size={14} stroke="white" />
              </Button>
              <p className="text-[15px] font-light">Watch our story</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[28px] bg-cream-surface p-5 text-text-primary">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burnt-orange">
          Reservations
        </p>

        <h2 className="mt-3 font-serif text-[32px] leading-none">
          Find your table
        </h2>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl border border-border-light px-4 py-3">
            <p className="text-xs text-text-muted">Date</p>
            <p className="mt-1 text-sm font-semibold">Tonight</p>
          </div>

          <div className="rounded-2xl border border-border-light px-4 py-3">
            <p className="text-xs text-text-muted">Time</p>
            <p className="mt-1 text-sm font-semibold">7:30 PM</p>
          </div>

          <div className="rounded-2xl border border-border-light px-4 py-3">
            <p className="text-xs text-text-muted">Guests</p>
            <p className="mt-1 text-sm font-semibold">2 Guests</p>
          </div>
        </div>

        <div className="mt-5">
          <Button fullWidth>Find a Table →</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
