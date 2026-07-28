import { Apple, Building2, CreditCard, Wallet } from "lucide-react";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Card",
    active: true,
  },
  {
    icon: Wallet,
    title: "Pay on Delivery",
    active: false,
  },
  {
    icon: Apple,
    title: "Apple Pay",
    active: false,
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    active: false,
  },
];

const CheckoutPaymentMethod = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-8 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-near-black text-xs font-semibold text-warm-ivory">
            3
          </span>

          <h2 className="text-sm font-semibold">Payment Method</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon;

            return (
              <button
                key={method.title}
                type="button"
                className={`flex min-h-[92px] flex-col items-start justify-between rounded-2xl border p-4 text-left ${
                  method.active
                    ? "border-burnt-orange bg-burnt-orange/5"
                    : "border-border-light bg-warm-ivory"
                }`}
              >
                <Icon size={20} className="text-burnt-orange" />

                <div className="flex w-full items-center justify-between gap-3">
                  <span className="text-sm font-semibold">{method.title}</span>

                  <span
                    className={`h-4 w-4 rounded-full border ${
                      method.active
                        ? "border-burnt-orange bg-burnt-orange"
                        : "border-border-light"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 space-y-4">
          <input
            type="text"
            placeholder="Card number"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="MM / YY"
              className="h-13 rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
            />

            <input
              type="text"
              placeholder="CVV"
              className="h-13 rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-text-secondary">
            <input type="checkbox" className="h-4 w-4 accent-burnt-orange" />
            Save this card for future payments
          </label>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPaymentMethod;
