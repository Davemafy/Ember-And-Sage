import { Bike, ShoppingBag } from "lucide-react";

const methods = [
  {
    icon: Bike,
    title: "Delivery",
    text: "We’ll deliver your order to your doorstep.",
    time: "30 — 45 mins",
    active: true,
  },
  {
    icon: ShoppingBag,
    title: "Pickup",
    text: "Pick up your order at our restaurant.",
    time: "20 — 25 mins",
    active: false,
  },
];

const CheckoutDeliveryMethod = () => {
  return (
    <section className="bg-warm-ivory px-4 py-8 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-near-black text-xs font-semibold text-warm-ivory">
            1
          </span>

          <h2 className="text-sm font-semibold">Delivery Method</h2>
        </div>

        <div className="space-y-3">
          {methods.map((method) => {
            const Icon = method.icon;

            return (
              <button
                key={method.title}
                type="button"
                className={`flex w-full gap-4 rounded-2xl border p-4 text-left ${
                  method.active
                    ? "border-burnt-orange bg-burnt-orange/5"
                    : "border-border-light bg-warm-ivory"
                }`}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold">{method.title}</h3>

                    <span
                      className={`h-4 w-4 rounded-full border ${
                        method.active
                          ? "border-burnt-orange bg-burnt-orange"
                          : "border-border-light"
                      }`}
                    />
                  </div>

                  <p className="mt-2 text-xs leading-5 text-text-secondary">
                    {method.text}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-burnt-orange">
                    {method.time}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckoutDeliveryMethod;
