const galleryItems = [
  {
    title: "Main Dining Room",
    category: "Atmosphere",
    size: "large",
  },
  {
    title: "Signature Plates",
    category: "Cuisine",
    size: "small",
  },
  {
    title: "Chef’s Counter",
    category: "Experience",
    size: "small",
  },
  {
    title: "Private Dining",
    category: "Events",
    size: "large",
  },
  {
    title: "Evening Service",
    category: "Hospitality",
    size: "small",
  },
  {
    title: "Dessert Course",
    category: "Sweet Finish",
    size: "small",
  },
];

const GalleryGrid = () => {
  return (
    <section className="bg-warm-ivory px-4 py-12 text-text-primary">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Inside Ember &amp; Sage
      </p>

      <h2 className="mt-4 max-w-[330px] font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
        Every corner is designed to feel warm and intentional.
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className={`overflow-hidden rounded-[24px] bg-soft-black ${
              item.size === "large" ? "h-[260px]" : "h-[200px]"
            }`}
          >
            <div className="flex h-full flex-col justify-end bg-black/25 p-4 text-warm-ivory">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-burnt-orange">
                {item.category}
              </p>

              <h3 className="mt-2 font-serif text-[22px] leading-none">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
