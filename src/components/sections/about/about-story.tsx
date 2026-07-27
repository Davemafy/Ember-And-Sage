const AboutStory = () => {
  return (
    <section className="bg-warm-ivory px-4 py-12 text-text-primary">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Our Story
      </p>

      <h2 className="mt-4 font-serif text-[44px] leading-[0.95] tracking-[-0.03em]">
        Not just dinner. A slower way to gather.
      </h2>

      <div className="mt-6 space-y-5 text-[15px] leading-7 text-text-secondary">
        <p>
          Ember &amp; Sage began with a simple belief: food should make people
          pause. Every plate, table, and welcome is shaped to create a moment
          worth remembering.
        </p>

        <p>
          Our kitchen is inspired by open-fire cooking, seasonal ingredients,
          and the quiet elegance of shared meals. The result is a dining
          experience that feels polished without becoming distant.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-border-light bg-cream-surface p-4">
          <p className="font-serif text-[34px] leading-none">12+</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-text-muted">
            Signature Plates
          </p>
        </div>

        <div className="rounded-2xl border border-border-light bg-cream-surface p-4">
          <p className="font-serif text-[34px] leading-none">4.9</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-text-muted">
            Guest Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
