import { CircleParking, Gift, Shirt, Star, XCircle } from "lucide-react";

const items = [
  {
    icon: Shirt,
    title: "Dress Code",
    text: "Smart casual. We appreciate your effort in dressing up.",
  },
  {
    icon: CircleParking,
    title: "Parking",
    text: "Valet parking is available at the entrance.",
  },
  {
    icon: XCircle,
    title: "Cancellation",
    text: "You can cancel or modify your booking up to 2 hours in advance.",
  },
  {
    icon: Star,
    title: "Special Requests",
    text: "Let us know about dietary needs, seating preferences, or surprises.",
  },
  {
    icon: Gift,
    title: "Celebrations",
    text: "Birthdays, anniversaries, and intimate events are welcome.",
  },
];

const ReservationGoodToKnow = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-10 text-text-primary">
      <h2 className="font-serif text-[34px] leading-none">Good to Know</h2>

      <div className="mt-6 overflow-hidden rounded-[28px] border border-border-light bg-cream-surface">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`flex gap-4 p-5 ${
                index !== items.length - 1 ? "border-b border-border-light" : ""
              }`}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ReservationGoodToKnow;
