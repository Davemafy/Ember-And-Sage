import Button from "../../ui/button";

const GalleryReservationCTA = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <div className="rounded-[32px] bg-near-black p-6 text-warm-ivory">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Visit Us
        </p>

        <h2 className="mt-4 max-w-[300px] font-serif text-[44px] leading-[0.92] tracking-[-0.03em]">
          Come experience it in person.
        </h2>

        <p className="mt-5 max-w-[300px] text-[15px] leading-7 text-warm-ivory/70">
          The atmosphere is best felt at the table. Reserve your seat and let us
          host you properly.
        </p>

        <div className="mt-7">
          <Button fullWidth>Reserve Your Table →</Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryReservationCTA;
