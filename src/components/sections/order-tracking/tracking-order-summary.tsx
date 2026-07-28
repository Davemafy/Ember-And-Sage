import { Link } from "react-router-dom";

import Button from "../../ui/button";
import { cartItems } from "../../../data/cart-items";

const TrackingOrderSummary = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <h2 className="font-serif text-[34px] leading-none">Order Summary</h2>

        <div className="mt-6 space-y-4">
          {cartItems.map((item) => (
            <article key={item.id} className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-soft-black" />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs text-text-muted">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="text-sm font-bold">{item.price}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 border-t border-border-light pt-5">
          <div className="flex items-center justify-between">
            <span className="font-serif text-[28px] leading-none">Total</span>
            <span className="text-lg font-bold">₦70,225</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Link to="/menu">
            <Button fullWidth>Order Again →</Button>
          </Link>

          <Link
            to="/contact"
            className="block text-center text-sm font-semibold text-burnt-orange"
          >
            Need help? Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrackingOrderSummary;
