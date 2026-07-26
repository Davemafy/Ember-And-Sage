import Button from "../ui/button";

const HomeHero = () => {
  return (
    <section className="bg-near-black px-4 pb-8 pt-6 text-warm-ivory">
      <div className="space-y-6">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
            Modern Cuisine
          </p>

          <h1 className="font-serif text-[56px] leading-[0.92] tracking-[-0.03em]">
            Good food is our love language.
          </h1>

          <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-warm-ivory/70">
            Ember &amp; Sage brings fire-kissed cooking, warm hospitality, and
            seasonal ingredients together for memorable dining.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-warm-ivory/10 bg-soft-black">
          <div className="h-[390px] bg-[url('/src/assets/images/hero-dish.jpg')] bg-cover bg-center" />

          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-warm-ivory/45">
                Signature Dish
              </p>
              <p className="mt-1 font-serif text-[25px] leading-none">
                Ember Roast
              </p>
            </div>

            <p className="text-sm text-warm-ivory/65">₦28,500</p>
          </div>
        </div>

        <div className="rounded-[28px] bg-cream-surface p-5 text-text-primary">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burnt-orange">
            Reservations
          </p>

          <h2 className="mt-3 font-serif text-[32px] leading-none">
            Find your table
          </h2>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-border-light px-4 py-3">
              <p className="text-xs text-text-muted">Date</p>
              <p className="mt-1 text-sm font-semibold">Tonight</p>
            </div>

            <div className="rounded-2xl border border-border-light px-4 py-3">
              <p className="text-xs text-text-muted">Time</p>
              <p className="mt-1 text-sm font-semibold">7:30 PM</p>
            </div>

            <div className="rounded-2xl border border-border-light px-4 py-3">
              <p className="text-xs text-text-muted">Guests</p>
              <p className="mt-1 text-sm font-semibold">2 Guests</p>
            </div>
          </div>

          <div className="mt-5">
            <Button fullWidth>Find a Table →</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;