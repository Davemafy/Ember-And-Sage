const MenuSeasonalCTA = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-8 text-text-primary">
      <div className="rounded-[28px] border border-border-light bg-cream-surface p-6">
        <p className="text-2xl text-burnt-orange">✦</p>

        <h2 className="mt-4 font-serif text-[30px] leading-none">
          Seasonal menu changes every month.
        </h2>

        <p className="mt-4 text-sm leading-6 text-text-secondary">
          Discover new plates inspired by the freshest ingredients of the
          season.
        </p>

        <button
          type="button"
          className="mt-5 text-sm font-semibold text-burnt-orange"
        >
          View Seasonal Menu →
        </button>
      </div>
    </section>
  );
};

export default MenuSeasonalCTA;
