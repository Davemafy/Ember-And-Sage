const GalleryHero = () => {
  return (
    <section className="bg-near-black px-4 pb-8 pt-8 text-warm-ivory">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Gallery
      </p>

      <h1 className="mt-4 max-w-[340px] font-serif text-[50px] leading-[0.92] tracking-[-0.03em]">
        Moments from the Ember &amp; Sage table.
      </h1>

      <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-warm-ivory/70">
        A glimpse into our dining room, signature plates, private spaces, and
        the quiet details that make every visit memorable.
      </p>

      <div className="mt-8 h-[300px] rounded-[30px] bg-soft-black" />
    </section>
  );
};

export default GalleryHero;
