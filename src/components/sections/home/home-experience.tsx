import QuoteIcon from "@/components/icons/quote-icon";
import { ChefHat, Leaf, Star, Users } from "lucide-react";
import guest1 from "@/assets/img/guest-1.png";

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
              className="border-border-light flex gap-6 rounded-xl border p-5"
            >
              <div className="text-burnt-orange border-border-light aspect-square h-full rounded-full border p-3">
                <Icon size={50} strokeWidth={1} />
              </div>
              <div>
                <h3 className="flex-3 font-serif text-[22px] leading-none font-semibold">
                  {item.title}
                </h3>

                <p className="text-text-secondary/90 mt-2 text-sm leading-5.5">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-10">
        <p className="text-burnt-orange text-[11px] font-semibold tracking-[0.24em] uppercase">
          What Guests Say
        </p>
        <div className="border-border-light mt-2 grid gap-4 rounded-xl border p-5">
          <QuoteIcon width={30} />
          <h3 className="max-w-[22ch] flex-3 font-serif text-[22px] leading-none font-semibold">
            An unforgettable dining experience. The flavours, the ambience, the service - everything
            was perfect.”
          </h3>
          <div>
            <div className="flex items-center gap-3 items-end">
              <img src={guest1} className="bg-text-primary h-10 w-10 rounded-full" alt="" />
              <div>
                <p className="text-[13px] font-medium">Sophia M.</p>
                <p className="text-xs text-gray-400">Loyal Guest</p>
              </div>
              <div className="flex ml-auto gap-2">
                <Star size={13} fill="#d9471e" className="text-burnt-orange" />
                <Star size={13} fill="#d9471e" className="text-burnt-orange" />
                <Star size={13} fill="#d9471e" className="text-burnt-orange" />
                <Star size={13} fill="#d9471e" className="text-burnt-orange" />
                <Star size={13} fill="#d9471e" className="text-burnt-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
