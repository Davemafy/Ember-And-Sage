import { ArrowRight } from "lucide-react";
import Button from "../../ui/button";

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
    <section className="bg-cream-surface text-text-primary px-4 py-14">
      <div>
        <p className="text-burnt-orange text-[13px] font-semibold tracking-[0.24em] uppercase">
          Gallery
        </p>

        <h2 className="mt-4 max-w-[330px] font-serif text-[30px] leading-[0.95] font-semibold tracking-[-0.03em]">
          A glimpse inside Ember &amp; Sage
        </h2>

        <Button variant="text-link" className="gap-2 p-0 text-[13px] font-medium">
          View Gallery <ArrowRight size={18} />
        </Button>
      </div>

      <div className="-mx-4 mt-1 flex gap-4 overflow-y-auto px-4">
        {galleryItems.map((item) => (
          <article key={item.title} className={`h-40 w-70 shrink-0 rounded-xl bg-black`}></article>
        ))}
      </div>

      <div className="bg-near-black mt-8 rounded-xl p-4 pb-8">
        <h2 className="mt-4 text-white  max-w-[25px] font-serif text-[25px] leading-[0.95] font-medium tracking-[-0.03em]">
          Plan something special. We'll take care of the rest.
        </h2>
        <Button
          variant="primary-orange"
          size="sm"
          className="mt-4 px-6 py-4 text-[12px] font-normal"
        >
          Reserve Your Table <ArrowRight size={17} />
        </Button>
      </div>
    </section>
  );
};

export default HomeGalleryPreview;
