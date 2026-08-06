import { ArrowRight } from "lucide-react";
import Button from "../../ui/button";
import Gallery1 from "@/assets/img/gallery-1.webp";
import Gallery2 from "@/assets/img/gallery-2.webp";
import Gallery3 from "@/assets/img/gallery-3.webp";
import Gallery4 from "@/assets/img/gallery-4.webp";
import ReserveTable from "@/assets/img/reserve-table.webp";

const galleryItems = [
  {
    title: "Main Dining",
    label: "Atmosphere",
    image: Gallery1,
  },
  {
    title: "Chef’s Counter",
    label: "Experience",
    image: Gallery2,
  },
  {
    title: "Private Table",
    label: "Events",
    image: Gallery3,
  },
  {
    title: "Signature Plates",
    label: "Cuisine",
    image: Gallery4,
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
          <img
            key={item.title}
            src={item.image}
            alt={item.title}
            className={`h-40 w-80 shrink-0 rounded-xl bg-black`}
          ></img>
        ))}
      </div>

      <div className="bg-near-black relative isolate mt-8 overflow-clip rounded-xl p-4 pb-8">
        <img
          src={ReserveTable}
          alt="Reserve Table"
          className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
        />
        <h2 className="mt-4 max-w-[250px] font-serif text-[25px] leading-[0.95] font-medium tracking-[-0.03em] text-white">
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
