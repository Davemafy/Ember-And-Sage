const CheckoutDetailsForm = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-8 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-near-black text-xs font-semibold text-warm-ivory">
            2
          </span>

          <h2 className="text-sm font-semibold">Your Details</h2>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <input
            type="tel"
            placeholder="+234 810 123 4567"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <input
            type="email"
            placeholder="Email address"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <input
            type="text"
            placeholder="Delivery address"
            className="h-13 w-full rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
          />

          <div className="grid grid-cols-2 gap-3">
            <select className="h-13 rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none focus:border-burnt-orange">
              <option>Select city</option>
              <option>Abuja</option>
              <option>Lagos</option>
            </select>

            <select className="h-13 rounded-2xl border border-border-light bg-warm-ivory px-4 text-sm outline-none focus:border-burnt-orange">
              <option>Select area</option>
              <option>Wuse</option>
              <option>Maitama</option>
              <option>Victoria Island</option>
            </select>
          </div>

          <label className="flex items-center gap-3 text-sm text-text-secondary">
            <input type="checkbox" className="h-4 w-4 accent-burnt-orange" />
            Save my details for faster checkout
          </label>
        </form>
      </div>
    </section>
  );
};

export default CheckoutDetailsForm;
