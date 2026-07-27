import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Button from "../../ui/button";

const bookingFields = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "May 17, 2025",
  },
  {
    icon: Clock,
    label: "Time",
    value: "7:00 PM",
  },
  {
    icon: Users,
    label: "Guests",
    value: "2 Guests",
  },
  {
    icon: MapPin,
    label: "Area Preference",
    value: "Any Area",
  },
];

const steps = ["Find a Table", "Your Details", "Confirmation"];

const ReservationBookingCard = () => {
  return (
    <section className="-mt-2 bg-warm-ivory px-4 pb-8 text-text-primary">
      <div className="rounded-[28px] border border-border-light bg-cream-surface p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-0 items-center gap-2">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                  index === 0
                    ? "bg-near-black text-warm-ivory"
                    : "bg-warm-ivory text-text-muted"
                }`}
              >
                {index + 1}
              </span>

              <span
                className={`hidden text-xs font-semibold sm:block ${
                  index === 0 ? "text-text-primary" : "text-text-muted"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {bookingFields.map((field) => {
            const Icon = field.icon;

            return (
              <button
                key={field.label}
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-border-light bg-warm-ivory px-4 py-3 text-left"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-text-muted" />

                  <span>
                    <span className="block text-xs text-text-muted">
                      {field.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {field.value}
                    </span>
                  </span>
                </span>

                <span className="text-text-muted">⌄</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <Button variant="primary-dark" fullWidth>
            Find Available Tables →
          </Button>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-text-muted">
          <span>⚡ Instant confirmation</span>
          <span>•</span>
          <span>No booking fees</span>
          <span>•</span>
          <span>Free cancellation</span>
        </div>
      </div>
    </section>
  );
};

export default ReservationBookingCard;
