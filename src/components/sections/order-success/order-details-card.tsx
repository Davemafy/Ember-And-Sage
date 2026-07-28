import { Clock, MapPin, ReceiptText } from "lucide-react";

const details = [
  {
    icon: ReceiptText,
    label: "Order Number",
    value: "#ES-2048",
  },
  {
    icon: Clock,
    label: "Estimated Time",
    value: "30 — 45 mins",
  },
  {
    icon: MapPin,
    label: "Delivery Address",
    value: "Victoria Island, Lagos",
  },
];

const OrderDetailsCard = () => {
  return (
    <section className="bg-warm-ivory px-4 py-10 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <h2 className="font-serif text-[34px] leading-none">Order Details</h2>

        <div className="mt-6 space-y-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <article
                key={detail.label}
                className="flex gap-4 rounded-2xl border border-border-light bg-warm-ivory p-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xs text-text-muted">{detail.label}</p>
                  <p className="mt-1 text-sm font-semibold">{detail.value}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsCard;
