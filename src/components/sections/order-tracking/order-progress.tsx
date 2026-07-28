import { CheckCircle2, ChefHat, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Order Confirmed",
    text: "We’ve received your order.",
    status: "complete",
  },
  {
    icon: ChefHat,
    title: "Preparing",
    text: "Our kitchen is preparing your meal.",
    status: "active",
  },
  {
    icon: PackageCheck,
    title: "Packed",
    text: "Your order will be packed carefully.",
    status: "upcoming",
  },
  {
    icon: Truck,
    title: "Out for Delivery",
    text: "Your rider will be on the way soon.",
    status: "upcoming",
  },
];

const OrderProgress = () => {
  return (
    <section className="bg-warm-ivory px-4 py-10 text-text-primary">
      <h2 className="font-serif text-[36px] leading-none">Order Progress</h2>

      <div className="mt-6 space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = step.status === "active";
          const isComplete = step.status === "complete";

          return (
            <article
              key={step.title}
              className={`flex gap-4 rounded-[26px] border p-5 ${
                isActive
                  ? "border-burnt-orange bg-burnt-orange/5"
                  : "border-border-light bg-cream-surface"
              }`}
            >
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
                  isActive || isComplete
                    ? "bg-burnt-orange text-white"
                    : "bg-warm-ivory text-text-muted"
                }`}
              >
                <Icon size={21} />
              </div>

              <div>
                <h3 className="font-serif text-[28px] leading-none">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {step.text}
                </p>

                {isActive && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-burnt-orange">
                    In Progress
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OrderProgress;
