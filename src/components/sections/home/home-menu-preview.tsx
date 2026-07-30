import Button from "../../ui/button";

const dishes = [
  {
    name: "Wagyu Striploin",
    category: "Chef's Special",
    price: "₦38,500",
    description: "Charcoal-grilled striploin with herb butter and roasted roots.",
  },
  {
    name: "Truffle Pappardelle",
    category: "Pasta",
    price: "₦21,000",
    description: "Fresh ribbons of pasta with black truffle cream and parmesan.",
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
    <section className="bg-warm-ivory text-text-primary px-4 pt-12">
      <div>
        <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
          Discover
        </p>

        <h2 className="mt-3 max-w-[330px] font-serif text-[33px] leading-[0.95] font-semibold tracking-[-0.03em]">
          Our Menu
        </h2>

        <p className="text-text-secondary mt-3 max-w-[320px] text-[15px] leading-6">
         Thoughtfully curated dishes crafted inspired by seasonal ingredients and global flavours.
        </p>
      </div>

      <div className="mt-9 space-y-4">
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="border-border-light bg-cream-surface rounded-[28px] border p-5"
          >
            <div className="bg-soft-black mb-5 h-[220px] rounded-[22px]" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-burnt-orange text-xs font-semibold tracking-[0.2em] uppercase">
                  {dish.category}
                </p>

                <h3 className="mt-2 font-serif text-[28px] leading-none">{dish.name}</h3>
              </div>

              <p className="text-text-primary shrink-0 text-sm font-semibold">{dish.price}</p>
            </div>

            <p className="text-text-secondary mt-4 text-sm leading-6">{dish.description}</p>
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
