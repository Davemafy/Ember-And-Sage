import { ShieldCheck } from "lucide-react";

const steps = ["Delivery", "Details", "Payment", "Review"];

const CheckoutHero = () => {
  return (
    <section className="bg-near-black px-4 pb-8 pt-8 text-warm-ivory">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Checkout
      </p>

      <h1 className="mt-4 max-w-[330px] font-serif text-[50px] leading-[0.9] tracking-[-0.03em]">
        Almost there, let’s complete your order.
      </h1>

      <p className="mt-5 inline-flex items-center gap-2 text-sm text-warm-ivory/70">
        <ShieldCheck size={17} />
        Secure checkout · 100% safe and encrypted
      </p>

      <div className="mt-8 rounded-[26px] border border-warm-ivory/10 bg-warm-ivory/[0.04] p-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-xs font-semibold ${
                  index === 0
                    ? "bg-burnt-orange text-white"
                    : "border border-warm-ivory/20 text-warm-ivory/55"
                }`}
              >
                {index + 1}
              </span>

              <span
                className={`text-[11px] ${
                  index === 0 ? "text-warm-ivory" : "text-warm-ivory/45"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckoutHero;
