import Button from "../ui/button";

const galleryItems = [
  {
    title: "Main Dining",
    label: "Atmosphere",
  },
  {
    title: "Chef’s Counter",
    label: "Experience",
  },
  {
    title: "Private Table",
    label: "Events",
  },
  {
    title: "Signature Plates",
    label: "Cuisine",
  },
];

const HomeGalleryPreview = () => {
  return (
    <section className="bg-cream-surface px-4 py-14 text-text-primary">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Gallery
        </p>

        <h2 className="mt-4 max-w-[330px] font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
          A glimpse into the Ember &amp; Sage atmosphere.
        </h2>

        <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-text-secondary">
          From intimate tables to beautifully plated dishes, every corner is
          designed to feel warm, elegant, and memorable.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-3">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className={`overflow-hidden rounded-[24px] bg-soft-black ${
              index === 0 || index === 3 ? "h-[240px]" : "h-[190px]"
            }`}
          >
            <div className="flex h-full flex-col justify-end bg-black/20 p-4 text-warm-ivory">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-burnt-orange">
                {item.label}
              </p>

              <h3 className="mt-2 font-serif text-[22px] leading-none">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Button variant="primary-dark" fullWidth>
          View Gallery →
        </Button>
      </div>
    </section>
  );
};

export default HomeGalleryPreview;
