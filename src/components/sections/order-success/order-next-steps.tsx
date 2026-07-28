const steps = [
  {
    title: "Order received",
    text: "Your order has been confirmed successfully.",
    active: true,
  },
  {
    title: "Preparing your meal",
    text: "Our kitchen team is getting everything ready.",
    active: true,
  },
  {
    title: "Out for delivery",
    text: "You’ll be notified when your order is on the way.",
    active: false,
  },
];

const OrderNextSteps = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <h2 className="font-serif text-[34px] leading-none">
        What happens next?
      </h2>

      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="flex gap-4 rounded-[24px] border border-border-light bg-cream-surface p-5"
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                step.active
                  ? "bg-burnt-orange text-white"
                  : "bg-warm-ivory text-text-muted"
              }`}
            >
              {index + 1}
            </span>

            <div>
              <h3 className="font-serif text-[26px] leading-none">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {step.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OrderNextSteps;
