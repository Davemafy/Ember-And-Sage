import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Flame,
  Leaf,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

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
        <main className="min-h-screen bg-warm-ivory px-4 py-12 text-text-primary">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-burnt-orange"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </Link>

          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
              Dish Not Found
            </p>

            <h1 className="mt-4 font-serif text-[48px] leading-[0.95] tracking-[-0.03em]">
              This dish is not on the menu.
            </h1>

            <p className="mt-5 text-[15px] leading-7 text-text-secondary">
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

  const relatedDishes = dishes
    .filter((item) => item.id !== dish.id)
    .slice(0, 2);

  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <section className="bg-near-black px-4 pb-8 pt-6 text-warm-ivory">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-warm-ivory/70"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </Link>

          <div className="mt-6 overflow-hidden rounded-[32px] bg-soft-black">
            <div className="h-[360px] bg-soft-black" />

            <div className="border-t border-warm-ivory/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/45">
                Signature Plate
              </p>

              <p className="mt-1 font-serif text-[25px] leading-none">
                {dish.name}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
            {dish.category}
          </p>

          <div className="mt-4 flex items-start justify-between gap-4">
            <h1 className="font-serif text-[50px] leading-[0.9] tracking-[-0.03em]">
              {dish.name}
            </h1>

            <p className="shrink-0 rounded-full bg-cream-surface px-4 py-2 text-sm font-bold">
              {dish.price}
            </p>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-text-secondary">
            {dish.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-cream-surface px-3 py-2 text-xs text-text-secondary"
              >
                {tag.toLowerCase().includes("high") ? (
                  <Sparkles size={13} className="text-burnt-orange" />
                ) : (
                  <Leaf size={13} className="text-burnt-orange" />
                )}
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border-light bg-cream-surface p-4">
              <Clock size={18} className="text-burnt-orange" />
              <p className="mt-3 text-xs text-text-muted">Prep</p>
              <p className="mt-1 text-sm font-semibold">{dish.prepTime}</p>
            </div>

            <div className="rounded-2xl border border-border-light bg-cream-surface p-4">
              <Flame size={18} className="text-burnt-orange" />
              <p className="mt-3 text-xs text-text-muted">Energy</p>
              <p className="mt-1 text-sm font-semibold">{dish.calories}</p>
            </div>

            <div className="rounded-2xl border border-border-light bg-cream-surface p-4">
              <Users size={18} className="text-burnt-orange" />
              <p className="mt-3 text-xs text-text-muted">Serving</p>
              <p className="mt-1 text-sm font-semibold">{dish.serving}</p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-8">
          <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
              Customize Order
            </p>

            <h2 className="mt-4 font-serif text-[32px] leading-none">
              Choose your portion
            </h2>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-burnt-orange bg-burnt-orange/5 px-4 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Regular</span>
                  <span className="mt-1 block text-xs text-text-muted">
                    Standard serving
                  </span>
                </span>

                <span className="text-sm font-bold">{dish.price}</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-border-light px-4 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Large</span>
                  <span className="mt-1 block text-xs text-text-muted">
                    Bigger portion
                  </span>
                </span>

                <span className="text-sm font-bold">+ ₦6,000</span>
              </button>
            </div>

            <div className="mt-6">
              <Button fullWidth>
                <Plus size={18} />
                Add to Cart
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-serif text-[34px] leading-none">
              You may also like
            </h2>

            <Link
              to="/menu"
              className="text-xs font-semibold text-burnt-orange"
            >
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
