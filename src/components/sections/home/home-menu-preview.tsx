import { Link } from "react-router-dom";
import Button from "../../ui/button";
import { Plus } from "lucide-react";
import homeDish1 from "@/assets/img/home-dish-1.png";

const dishes = [
  {
    name: "Wagyu Striploin",
    category: "Chef's Special",
    price: "₦38,500",
    description: "Charcoal-grilled striploin with herb butter and roasted roots.",
  },
  {
    name: "Truffle Pappardelle",
    category: "Pasta",
    price: "₦21,000",
    description: "Fresh ribbons of pasta with black truffle cream and parmesan.",
  },
  {
    name: "Miso Glazed Salmon",
    category: "Seafood",
    price: "₦22,000",
    description: "Slow-glazed salmon with citrus rice and seasonal greens.",
  },
];

const HomeMenuPreview = () => {
  return (
    <section className="bg-warm-ivory text-text-primary px-4 pt-12">
      <div>
        <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
          Discover
        </p>

        <h2 className="mt-3 max-w-[330px] font-serif text-[33px] leading-[0.95] font-semibold tracking-[-0.03em]">
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
              <Plus size={16} className="text-gray-500" />
            </div>
            <div className="flex justify-between gap-2 border-b border-gray-200 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Main Courses</p>
              <Plus size={16} className="text-gray-500" />
            </div>
            <div className="flex justify-between gap-2 border-b border-gray-200 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Small Plates</p>
              <Plus size={16} className="text-gray-500" />
            </div>
            <div className="flex justify-between gap-2 p-6 py-4">
              <p className="font-serif text-[15px] font-semibold">Desserts & Drinks</p>
              <Plus size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="border-border-light bg-cream-surface rounded-[28px] border p-0"
          >
            <div className="bg-soft-black mb-5 h-[220px] rounded-[22px]" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-burnt-orange text-xs font-semibold tracking-[0.2em] uppercase">
                  Seasonal Special
                </p>

                <h3 className="mt-2 font-serif text-[28px] leading-none">Pan-Seared Sea Bass</h3>
              </div>

              <p className="text-text-primary shrink-0 text-sm font-semibold">{dish.price}</p>
            </div>

            <p className="text-text-secondary mt-4 text-sm leading-6">{dish.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeMenuPreview;
