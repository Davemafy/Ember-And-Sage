  const AboutHero = () => {
    return (
      <section className="bg-near-black px-4 pb-8 pt-8 text-warm-ivory">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          About Ember &amp; Sage
        </p>

        <h1 className="mt-4 max-w-[340px] font-serif text-[50px] leading-[0.92] tracking-[-0.03em]">
          A restaurant built around warmth, fire, and memory.
        </h1>

        <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-warm-ivory/70">
          We create refined dining experiences that feel intimate, thoughtful,
          and deeply human.
        </p>

        <div className="mt-8 h-[300px] rounded-[30px] bg-soft-black" />
      </section>
    );
  };

  export default AboutHero;