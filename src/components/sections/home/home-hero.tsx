import { Play } from "lucide-react";
import Button from "../../ui/button";
import heroBanner from "@/assets/img/home-hero.png";

const HomeHero = () => {
  return (
    <section className={` grid gap-4 text-warm-ivory `}>
      <div
        className={`relative isolate  min-h-[550px] round-bottom overflow-clip  bg-near-black px-4 pb-8 pt-6`}
      >
        <img
          src={heroBanner}
          alt="hero-banner"
          className="absolute h-full w-full -z-1 top-0 left-0"
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

            <p className="mt-5 tracking-[0.1px] max-w-[30ch] font-light text-[15px] leading-6">
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
    </section>
  );
};

export default HomeHero;
