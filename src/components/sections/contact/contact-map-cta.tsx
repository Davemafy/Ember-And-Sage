import Button from "../../ui/button";

const ContactMapCTA = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-14 text-text-primary">
      <div className="overflow-hidden rounded-[32px] bg-near-black p-6 text-warm-ivory">
        <div className="h-[220px] rounded-[24px] bg-soft-black" />

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Find Us
        </p>

        <h2 className="mt-4 font-serif text-[42px] leading-[0.92] tracking-[-0.03em]">
          Your table is closer than you think.
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-warm-ivory/70">
          Visit Ember &amp; Sage in the heart of Abuja for warm hospitality,
          memorable dishes, and a calm dining atmosphere.
        </p>

        <div className="mt-7">
          <Button variant="outline-light" fullWidth>
            Open in Google Maps →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMapCTA;
