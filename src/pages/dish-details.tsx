import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Flame, Leaf, Plus, Sparkles, Star, Users } from "lucide-react";

import Button from "../components/ui/button";
import Footer from "../components/layout/footer";
import DishCard from "../components/cards/dish-card";
import { dishes } from "../data/dishes";

const DishDetails = () => {
  const { dishId } = useParams();

  const dish = dishes.find((item) => item.id === dishId);

  if (!dish) {
    return (
      <>
        <main className="bg-warm-ivory text-text-primary min-h-screen px-4 py-12">
          <Link
            to="/menu"
            className="text-burnt-orange inline-flex items-center gap-2 text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            Main Courses
          </Link>

          <div className="mt-16">
            <p className="text-burnt-orange text-xs font-semibold tracking-[0.24em] uppercase">
              Dish Not Found
            </p>

            <h1 className="mt-4 font-serif text-[48px] leading-[0.95] tracking-[-0.03em]">
              This dish is not on the menu.
            </h1>

            <p className="text-text-secondary mt-5 text-[15px] leading-7">
              The dish may have been removed or the link may be incorrect.
            </p>

            <div className="mt-7">
              <Link to="/menu">
                <Button>Explore Menu</Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const relatedDishes = dishes.filter((item) => item.id !== dish.id).slice(0, 2);

  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <section className="text-warm-ivory relative isolate min-h-120 px-4 pt-6 pb-8">
          <img
            src={dish.image}
            className="absolute top-0 left-0 -z-2 h-full w-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 -z-1 bg-gradient-to-b from-black/85 via-black/0 to-transparent"></div>
          <div className="pointer-events-none absolute inset-0 -z-1 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
          <Link
            to="/menu"
            className="text-warm-ivory/70 inline-flex items-center gap-3 font-medium"
          >
            <ArrowLeft size={20} />
            Main Courses
          </Link>
          <div className="mt-3 flex h-fit w-fit items-center gap-2 rounded-full border p-5 py-2.5 text-sm">
            <Star size={20} className="text-white" />
            Bestseller
          </div>
          <div className="absolute bottom-4 left-0 w-full rounded-[32px] px-4">
            <div className="flex gap-2">
              <img
                src={dish.image}
                className="border-burnt-orange aspect-square w-full min-w-16 rounded-xl border-2 object-cover"
              />
              <img
                src={dish.image}
                className="border-warm-ivory aspect-square w-full min-w-16 rounded-xl border-2 object-cover"
              />
              <img
                src={dish.image}
                className="border-warm-ivory aspect-square w-full min-w-16 rounded-xl border-2 object-cover"
              />
              <img
                src={dish.image}
                className="border-warm-ivory aspect-square w-full min-w-16 rounded-xl border-2 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <p className="text-burnt-orange text-xs font-semibold tracking-[0.24em] uppercase">
            {dish.category}
          </p>

          <div className="mt-4 flex items-start justify-between gap-4">
            <h1 className="font-serif text-[46px] leading-[1.1] font-bold tracking-[-0.03em]">
              {dish.name}
            </h1>
          </div>

          <p className="text-text-secondary mt-5 text-[16px] leading-8">{dish.longDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="border-border-light bg-cream-surface text-text-secondary inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs"
              >
                {tag.toLowerCase().includes("high") ? (
                  <Sparkles size={19} className="text-burnt-orange" />
                ) : (
                  <Leaf size={19} className="text-burnt-orange" />
                )}
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="border-border-light bg-cream-surface rounded-2xl border p-4">
              <Clock size={18} className="text-burnt-orange" />
              <p className="text-text-muted mt-3 text-xs">Prep</p>
              <p className="mt-1 text-sm font-semibold">{dish.prepTime}</p>
            </div>

            <div className="border-border-light bg-cream-surface rounded-2xl border p-4">
              <Flame size={18} className="text-burnt-orange" />
              <p className="text-text-muted mt-3 text-xs">Energy</p>
              <p className="mt-1 text-sm font-semibold">{dish.calories}</p>
            </div>

            <div className="border-border-light bg-cream-surface rounded-2xl border p-4">
              <Users size={18} className="text-burnt-orange" />
              <p className="text-text-muted mt-3 text-xs">Serving</p>
              <p className="mt-1 text-sm font-semibold">{dish.serving}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="shrink-0 rounded-full py-2 text-[28px] font-bold tracking-wider">
              {dish.price}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex gap-2">
                <Star size={19} fill="#d9471e" className="text-burnt-orange" />
                <Star size={19} fill="#d9471e" className="text-burnt-orange" />
                <Star size={19} fill="#d9471e" className="text-burnt-orange" />
                <Star size={19} fill="#d9471e" className="text-burnt-orange" />
                <Star size={19} fill="#d9471e" className="text-burnt-orange" />
              </div>
              <p>4.8 (126 reviews)</p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-8">
          <div className="border-border-light bg-cream-surface rounded-[30px] border p-5">
            <p className="text-burnt-orange text-xs font-semibold tracking-[0.24em] uppercase">
              Customize Order
            </p>

            <h2 className="mt-4 font-serif text-[32px] leading-none">Choose your portion</h2>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="border-burnt-orange bg-burnt-orange/5 flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Regular</span>
                  <span className="text-text-muted mt-1 block text-xs">Standard serving</span>
                </span>

                <span className="text-sm font-bold">{dish.price}</span>
              </button>

              <button
                type="button"
                className="border-border-light flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Large</span>
                  <span className="text-text-muted mt-1 block text-xs">Bigger portion</span>
                </span>

                <span className="text-sm font-bold">+ ₦6,000</span>
              </button>
            </div>

            <div className="mt-6">
              <Link to="/cart">
                <Button fullWidth>
                  <Plus size={18} />
                  Add to Cart
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-serif text-[34px] leading-none">You may also like</h2>

            <Link to="/menu" className="text-burnt-orange text-xs font-semibold">
              View all →
            </Link>
          </div>

          <div className="space-y-5">
            {relatedDishes.map((item) => (
              <DishCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DishDetails;
