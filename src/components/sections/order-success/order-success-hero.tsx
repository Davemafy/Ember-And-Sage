import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../ui/button";

const OrderSuccessHero = () => {
  return (
    <section className="bg-near-black px-4 pb-10 pt-10 text-warm-ivory">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-burnt-orange/15 text-burnt-orange">
        <CheckCircle2 size={34} />
      </div>

      <div className="mt-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Order Confirmed
        </p>

        <h1 className="mt-4 font-serif text-[50px] leading-[0.9] tracking-[-0.03em]">
          Your order is in the kitchen.
        </h1>

        <p className="mx-auto mt-5 max-w-[320px] text-[15px] leading-7 text-warm-ivory/70">
          Thank you for ordering from Ember &amp; Sage. We’re preparing your
          meal with care.
        </p>

        <div className="mt-8 space-y-3">
          <Link to="/order-tracking">
            <Button fullWidth>Track Order →</Button>
          </Link>

          <Link to="/menu">
            <Button variant="outline-light" fullWidth>
              Continue Ordering
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccessHero;
