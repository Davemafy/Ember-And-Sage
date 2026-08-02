import { Link } from "react-router-dom";
import Button from "../../ui/button";
import { ArrowRight, Plus } from "lucide-react";
import homeDish1 from "@/assets/img/home-dish-1.png";

const dishes = [
  {
    name: "Pan-Seared Sea Bass",
    category: "Seasonal Special",
    price: "₦38,500",
    img: homeDish1,
    description: "Crispy skin, roasted fennel, lemon beurre blanc, and dill.",
  },
];

const HomeMenuPreview = () => {
  return (
    <section className="bg-warm-ivory text-text-primary px-4 pt-12">
      <div>
        <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
          Discover
        </p>

        <h2 className="mt-3 font-serif text-[33px] leading-[0.95] font-semibold tracking-[-0.03em]">
          Our Menu
        </h2>

        <p className="text-text-secondary mt-3 max-w-[320px] text-[15px] leading-6">
          Thoughtfully curated dishes crafted inspired by seasonal ingredients and global flavours.
        </p>
      </div>
      <Link to={"/menu"}>
        <Button variant="text-link" className="p-0 text-sm font-normal">
          Explore Full Menu →
        </Button>
      </Link>

      <div className="space-y-4">
        <div>
          <img src={homeDish1} className="h-50 w-full rounded-xl bg-black" alt="Dish 1" />
          <div className="flex items-center justify-center gap-7">
            <div className="grid place-items-center gap-1 py-4">
              <h3 className="text-4xl font-medium">120+</h3>
              <p className="text-xs">Signature Dishes</p>
            </div>
            <span className="h-10 w-0.5 bg-gray-200"></span>
            <div className="grid place-items-center gap-1 py-4">
              <h3 className="text-4xl font-medium">15+</h3>
              <p className="text-xs">Year of Experience</p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200">
            <div className="flex justify-between gap-2 border-b border-gray-200 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Seasonal Specials</p>
              <Plus size={16} className="text-neutral-700" />
            </div>
            <div className="flex justify-between gap-2 border-b border-gray-200 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Main Courses</p>
              <Plus size={16} className="text-neutral-700" />
            </div>
            <div className="flex justify-between gap-2 border-b border-gray-200 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Small Plates</p>
              <Plus size={16} className="text-neutral-700" />
            </div>
            <div className="flex justify-between gap-2 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Desserts & Drinks</p>
              <Plus size={16} className="text-neutral-700" />
            </div>
          </div>
        </div>
        {dishes.map((dish) => (
          <article key={dish.name} className="">
            <img src={dish.img} className="bg-soft-black mb-5 h-55 rounded-xl" alt={dish.name} />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-burnt-orange text-[11px] font-semibold tracking-[0.2em] uppercase">
                  {dish.category}
                </p>

                <h3 className="mt-2 font-serif text-[28px] leading-none font-semibold">
                  {dish.name}
                </h3>
              </div>
            </div>

            <p className="text-border-dark mt-1 text-[13px] leading-6">{dish.description}</p>

            <p className="text-border-dark mt-1 shrink-0 text-xs">{dish.price}</p>

            <Button variant="text-link" className="gap-2 p-0 text-[13px] font-medium">
              View Dish <ArrowRight size={18} />
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeMenuPreview;
