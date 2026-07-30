import Button from "../../ui/button";

const dishes = [
  {
    name: "Wagyu Striploin",
    category: "Chef's Special",
    price: "₦38,500",
    description:
      "Charcoal-grilled striploin with herb butter and roasted roots.",
  },
  {
    name: "Truffle Pappardelle",
    category: "Pasta",
    price: "₦21,000",
    description:
      "Fresh ribbons of pasta with black truffle cream and parmesan.",
  },
  {
    name: "Miso Glazed Salmon",
    category: "Seafood",
    price: "₦22,000",
    description: "Slow-glazed salmon with citrus rice and seasonal greens.",
  },
];

const HomeMenuPreview = () => {
  return (
    <section className="bg-warm-ivory px-4 pt-8  text-text-primary">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Discover
        </p>

        <h2 className="mt-4 max-w-[330px] font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
          A menu shaped by fire, season, and soul.
        </h2>

        <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-text-secondary">
          Our kitchen blends bold technique with warm hospitality, creating
          dishes that feel refined without losing their comfort.
        </p>
      </div>

      <div className="mt-9 space-y-4">
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="rounded-[28px] border border-border-light bg-cream-surface p-5"
          >
            <div className="mb-5 h-[220px] rounded-[22px] bg-soft-black" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burnt-orange">
                  {dish.category}
                </p>

                <h3 className="mt-2 font-serif text-[28px] leading-none">
                  {dish.name}
                </h3>
              </div>

              <p className="shrink-0 text-sm font-semibold text-text-primary">
                {dish.price}
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-text-secondary">
              {dish.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Button fullWidth>View Full Menu →</Button>
      </div>
    </section>
  );
};

export default HomeMenuPreview;
