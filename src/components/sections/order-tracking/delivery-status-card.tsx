import { MapPin, Phone, UserRound } from "lucide-react";

const DeliveryStatusCard = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-10 text-text-primary">
      <div className="rounded-[30px] border border-border-light bg-cream-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
          Delivery Details
        </p>

        <h2 className="mt-4 font-serif text-[34px] leading-none">
          Rider assigned soon.
        </h2>

        <div className="mt-6 space-y-4">
          <article className="flex gap-4 rounded-2xl border border-border-light bg-warm-ivory p-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs text-text-muted">Delivering to</p>
              <p className="mt-1 text-sm font-semibold">
                Victoria Island, Lagos
              </p>
            </div>
          </article>

          <article className="flex gap-4 rounded-2xl border border-border-light bg-warm-ivory p-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
              <UserRound size={20} />
            </div>

            <div>
              <p className="text-xs text-text-muted">Rider</p>
              <p className="mt-1 text-sm font-semibold">
                Assigning rider after packing
              </p>
            </div>
          </article>

          <article className="flex gap-4 rounded-2xl border border-border-light bg-warm-ivory p-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
              <Phone size={20} />
            </div>

            <div>
              <p className="text-xs text-text-muted">Support</p>
              <p className="mt-1 text-sm font-semibold">+234 800 000 0000</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DeliveryStatusCard;
