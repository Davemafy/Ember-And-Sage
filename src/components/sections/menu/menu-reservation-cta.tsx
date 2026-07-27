import Button from "../../ui/button";

const MenuReservationCTA = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-12 text-text-primary">
      <div className="rounded-[30px] bg-near-black p-6 text-warm-ivory">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Reserve a Table
        </p>

        <h2 className="mt-4 font-serif text-[38px] leading-[0.95]">
          Great food is better when shared.
        </h2>

        <p className="mt-4 text-sm leading-6 text-warm-ivory/70">
          Book your table and enjoy an unforgettable dining experience.
        </p>

        <div className="mt-6">
          <Button fullWidth>Make a Reservation →</Button>
        </div>
      </div>
    </section>
  );
};

export default MenuReservationCTA;
