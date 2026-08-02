import { ChefHat, Flame, Leaf, Users, Users2, Wine } from "lucide-react";

const experiences = [
  {
    icon: Users,
    title: "Private Dining",
    description: "Intimate spaces for meaningful gatherings, tailored to you.",
  },
  {
    icon: ChefHat,
    title: "Chef's Table",
    description: "Exclusive multi-course experiences, up close and personal.",
  },
  {
    icon: Leaf,
    title: "Seasonal Tastings",
    description: "Curated menus that celebrate the best of each season.",
  },
];

const HomeExperience = () => {
  return (
    <section className="text-text-primary px-4 py-10">
      <div>
        <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
          The Ember & Sage Experience
        </p>

        <h2 className="mt-4 max-w-[330px] font-serif text-[30px] leading-[0.95] font-semibold tracking-[-0.03em]">
          Designed for slow dinners, celebrations, and good conversations.
        </h2>
      </div>

      <div className="mt-9 space-y-4">
        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex gap-6 rounded-xl border border-border-light p-5"
            >
              <div className="text-burnt-orange aspect-square h-full rounded-full border border-border-light p-3">
                <Icon size={50} strokeWidth={1} />
              </div>
              <div>
                <h3 className="flex-3 font-serif text-[22px] leading-none font-semibold">
                  {item.title}
                </h3>

                <p className="text-text-secondary/90 mt-2 text-sm leading-6">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HomeExperience;
