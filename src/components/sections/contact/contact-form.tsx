import Button from "../../ui/button";

const ContactForm = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-10 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Send a Message
        </p>

        <h2 className="mt-4 font-serif text-[36px] leading-none">
          How can we help?
        </h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <input
            type="email"
            placeholder="Email address"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <select className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none focus:border-burnt-orange">
            <option>Reservation question</option>
            <option>Private dining</option>
            <option>Event enquiry</option>
            <option>General message</option>
          </select>

          <textarea
            placeholder="Write your message..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-border-light bg-warm-ivory px-4 py-3 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <Button fullWidth>Send Message →</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
