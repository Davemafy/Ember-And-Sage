import menuBanner from "../../../assets/img/menu-banner.webp";

const MenuHero = () => {
  return (
    <section className="bg-near-black relative isolate px-4 pt-8 pb-40 text-white">
      <img
        src={menuBanner}
        alt="Menu Banner"
        className="bg-soft-black absolute top-0 left-0 -z-2 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 -z-1 bg-gradient-to-b from-black via-black/50 to-transparent"></div>

      <p className="text-burnt-orange text-xs font-semibold tracking-[0.24em] uppercase">
        Our Menu
      </p>

      <h1 className="mt-4 max-w-[330px] font-serif text-[48px] leading-[0.95] tracking-[-0.03em]">
        Explore flavors crafted with passion.
      </h1>

      <p className="text-warm-ivory mt-5 max-w-[26ch] text-[15px] leading-7">
        From timeless classics to seasonal creations, every dish is a celebration of taste, care,
        and exceptional ingredients.
      </p>
    </section>
  );
};

export default MenuHero;
