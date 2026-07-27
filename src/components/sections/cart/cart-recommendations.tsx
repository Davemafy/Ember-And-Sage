import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { recommendations } from "../../../data/cart-items";

const CartRecommendations = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-serif text-[34px] leading-none">
          You may also like
        </h2>

        <Link to="/menu" className="text-xs font-semibold text-burnt-orange">
          View Full Menu →
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {recommendations.map((item) => (
          <article
            key={item.id}
            className="w-[220px] shrink-0 overflow-hidden rounded-[24px] border border-border-light bg-cream-surface"
          >
            <div className="h-[140px] bg-soft-black" />

            <div className="p-4">
              <h3 className="font-serif text-[24px] leading-none">
                {item.name}
              </h3>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm font-bold">{item.price}</p>

                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-full border border-burnt-orange text-burnt-orange"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CartRecommendations;
