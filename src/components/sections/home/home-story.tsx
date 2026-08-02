import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import restaurantDining from "@/assets/img/restaurant-dining.png";

const HomeStory = () => {
  return (
    <section className="bg-warm-ivory text-text-primary">
      <div className="overflow-hidden">
        <div className="px-5 py-7">
          <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
            Our Story
          </p>

          <h2 className="mt-4 font-serif text-[33px] leading-[0.95] font-semibold tracking-[-0.03em]">
            More than <span className="italic">a</span> restaurant.
          </h2>

          <p className="mt-5 text-[15px] leading-6">
            Ember &amp; Sage was created around a simple idea, dining should feel warm, memorable,
            and deeply considered. From the first welcome to the final course, every detail is
            shaped with care.
          </p>
          <Button variant="text-link" className="gap-2 p-0 text-[13px]">
            Learn Our Story <ArrowRight size={18} />
          </Button>
          <img src={restaurantDining} className="bg-soft-black h-[190px] rounded-xl" alt="Restaurant Dining" />
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
