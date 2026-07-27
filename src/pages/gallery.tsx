import Footer from "../components/layout/footer";
import GalleryGrid from "../components/sections/gallery/gallery-grid";
import GalleryHero from "../components/sections/gallery/gallery-hero";
import GalleryReservationCTA from "../components/sections/gallery/gallery-reservation-cta";

const Gallery = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <GalleryHero />
        <GalleryGrid />
        <GalleryReservationCTA />
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
