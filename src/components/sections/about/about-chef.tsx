const AboutChef = () => {
  return (
    <section className="bg-warm-ivory px-4 py-12 text-text-primary">
      <div className="overflow-hidden rounded-[32px] bg-near-black text-warm-ivory">
        <div className="h-[300px] bg-soft-black" />

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
            The Kitchen
          </p>

          <h2 className="mt-4 font-serif text-[42px] leading-[0.95] tracking-[-0.03em]">
            Led by instinct, discipline, and a love for honest flavor.
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-warm-ivory/70">
            Our kitchen team brings together careful technique and emotional
            cooking. Every dish is designed to feel familiar, elevated, and
            worth returning to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutChef;
