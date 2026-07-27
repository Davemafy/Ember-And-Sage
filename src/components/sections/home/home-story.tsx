const HomeStory = () => {
  return (
    <section className="bg-warm-ivory px-4 py-14 text-text-primary">
      <div className="overflow-hidden rounded-[34px] bg-near-black text-warm-ivory">
        <div className="h-[320px] bg-soft-black" />

        <div className="px-5 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
            Our Story
          </p>

          <h2 className="mt-4 font-serif text-[42px] leading-[0.95] tracking-[-0.03em]">
            A quiet place for food that feels intentional.
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-warm-ivory/70">
            Ember &amp; Sage was created around a simple idea: dining should
            feel warm, memorable, and deeply considered. From the first welcome
            to the final course, every detail is shaped with care.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-warm-ivory/10 p-4">
              <p className="font-serif text-[34px] leading-none">12+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-warm-ivory/45">
                Signature Dishes
              </p>
            </div>

            <div className="rounded-2xl border border-warm-ivory/10 p-4">
              <p className="font-serif text-[34px] leading-none">4.9</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-warm-ivory/45">
                Guest Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
