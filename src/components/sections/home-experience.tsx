import { Flame, Leaf, Wine } from "lucide-react";

const experiences = [
  {
    icon: Leaf,
    title: "Seasonal Ingredients",
    description:
      "Our menu changes with the best produce available, keeping every visit fresh and intentional.",
  },
  {
    icon: Flame,
    title: "Fire-Kissed Cooking",
    description:
      "From grilled mains to roasted vegetables, fire brings depth, warmth, and character to every plate.",
  },
  {
    icon: Wine,
    title: "Warm Hospitality",
    description:
      "Refined dining without stiffness. Every guest is welcomed with care, calm, and attention.",
  },
];

const HomeExperience = () => {
  return (
    <section className="bg-cream-surface px-4 py-14 text-text-primary">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          The Experience
        </p>

        <h2 className="mt-4 max-w-[330px] font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
          Designed for slow dinners and lasting memories.
        </h2>

        <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-text-secondary">
          Every detail is shaped to make dining feel warm, elegant, and deeply
          personal.
        </p>
      </div>

      <div className="mt-9 space-y-4">
        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[28px] border border-border-light bg-warm-ivory p-5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 font-serif text-[30px] leading-none">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HomeExperience;
