import { Flame, HeartHandshake, Leaf } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Fire-led Flavor",
    text: "We use heat, smoke, and patience to bring depth and character to every dish.",
  },
  {
    icon: Leaf,
    title: "Seasonal Produce",
    text: "Our menu follows the rhythm of fresh ingredients and thoughtful sourcing.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    text: "Every guest is welcomed with care, calm, and attention to detail.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-cream-surface px-4 py-12 text-text-primary">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        What We Value
      </p>

      <h2 className="mt-4 font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
        The details that shape every visit.
      </h2>

      <div className="mt-8 space-y-4">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <article
              key={value.title}
              className="rounded-[26px] border border-border-light bg-warm-ivory p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                <Icon size={20} />
              </div>

              <h3 className="mt-5 font-serif text-[28px] leading-none">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {value.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AboutValues;
