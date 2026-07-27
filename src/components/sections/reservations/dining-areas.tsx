const diningAreas = [
  {
    name: "Indoor Dining",
    description: "Elegant and cozy ambience perfect for any occasion.",
    capacity: "2—20 Guests",
  },
  {
    name: "Outdoor Patio",
    description: "Enjoy fresh air and a lively atmosphere.",
    capacity: "2—16 Guests",
  },
  {
    name: "Private Room",
    description: "Intimate setting for special celebrations and events.",
    capacity: "6—24 Guests",
  },
  {
    name: "Chef’s Table",
    description: "A unique counter experience close to the kitchen.",
    capacity: "2—8 Guests",
  },
];

const DiningAreas = () => {
  return (
    <section className="bg-warm-ivory px-4 py-10 text-text-primary">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-serif text-[34px] leading-none">
          Our Dining Areas
        </h2>

        <button
          type="button"
          className="text-xs font-semibold text-burnt-orange"
        >
          View Floor Plan →
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {diningAreas.map((area) => (
          <article
            key={area.name}
            className="w-[230px] shrink-0 overflow-hidden rounded-[24px] border border-border-light bg-cream-surface"
          >
            <div className="h-[150px] bg-soft-black" />

            <div className="p-4">
              <h3 className="font-serif text-[25px] leading-none">
                {area.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {area.description}
              </p>

              <p className="mt-4 text-xs text-text-muted">{area.capacity}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-burnt-orange" />
        <span className="h-2 w-2 rounded-full bg-border-light" />
        <span className="h-2 w-2 rounded-full bg-border-light" />
        <span className="h-2 w-2 rounded-full bg-border-light" />
      </div>
    </section>
  );
};

export default DiningAreas;
