import { Clock } from "lucide-react";

const OrderTrackingHero = () => {
  return (
    <section className="bg-near-black px-4 pb-8 pt-8 text-warm-ivory">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Order Tracking
      </p>

      <h1 className="mt-4 max-w-[330px] font-serif text-[52px] leading-[0.9] tracking-[-0.03em]">
        Your meal is on its way.
      </h1>

      <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-warm-ivory/70">
        Follow your order from kitchen preparation to doorstep delivery.
      </p>

      <div className="mt-8 rounded-[28px] border border-warm-ivory/10 bg-warm-ivory/[0.04] p-5">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-burnt-orange/15 text-burnt-orange">
            <Clock size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/45">
              Estimated Arrival
            </p>

            <p className="mt-1 font-serif text-[30px] leading-none">
              30 — 45 mins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTrackingHero;
