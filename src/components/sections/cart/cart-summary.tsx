import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../ui/button";

const CartSummary = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-10 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <h2 className="font-serif text-[32px] leading-none">Order Summary</h2>

        <div className="mt-6 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Subtotal</span>
            <span className="font-semibold">₦64,500</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Service Fee (5%)</span>
            <span className="font-semibold">₦3,225</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Delivery Fee</span>
            <span className="font-semibold">₦2,500</span>
          </div>
        </div>

        <div className="mt-6 border-t border-border-light pt-5">
          <div className="flex items-center justify-between">
            <span className="font-serif text-[28px] leading-none">Total</span>
            <span className="text-lg font-bold">₦70,225</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold">Have a promo code?</p>

          <div className="mt-3 flex overflow-hidden rounded-2xl border border-border-light bg-warm-ivory">
            <input
              type="text"
              placeholder="Enter code"
              className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-text-muted"
            />

            <button
              type="button"
              className="border-l border-border-light px-4 text-sm font-semibold"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] bg-burnt-orange/10 p-4">
          <Clock size={22} className="text-burnt-orange" />

          <p className="mt-3 text-xs text-text-muted">Estimated Delivery</p>

          <p className="mt-1 font-serif text-[26px] leading-none">
            30 — 45 mins
          </p>

          <p className="mt-2 text-xs leading-5 text-text-secondary">
            Delivering to Victoria Island, Lagos
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <Link to="/checkout">
            <Button fullWidth>Proceed to Checkout →</Button>
          </Link>

          <Link
            to="/menu"
            className="block text-center text-sm font-semibold text-burnt-orange"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;
