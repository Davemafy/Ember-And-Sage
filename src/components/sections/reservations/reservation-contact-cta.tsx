import Button from "../../ui/button";

const ReservationContactCTA = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <div className="overflow-hidden rounded-[32px] bg-near-black p-6 text-warm-ivory">
        <div className="h-[220px] rounded-[24px] bg-soft-black" />

        <div className="pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
            Private Dining
          </p>

          <h2 className="mt-4 max-w-[280px] font-serif text-[44px] leading-[0.92] tracking-[-0.03em]">
            Let’s make it special.
          </h2>

          <p className="mt-5 max-w-[290px] text-[15px] leading-7 text-warm-ivory/70">
            Have a special request or an event to plan? Our team is here to help
            you create a memorable dining experience.
          </p>

          <div className="mt-7">
            <Button variant="outline-light" fullWidth>
              Contact Our Team →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationContactCTA;
