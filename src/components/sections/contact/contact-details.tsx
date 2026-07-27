import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Abuja, Nigeria",
  },
  {
    icon: Phone,
    title: "Call",
    text: "+234 800 000 0000",
  },
  {
    icon: Mail,
    title: "Email",
    text: "hello@emberandsage.com",
  },
  {
    icon: Clock,
    title: "Hours",
    text: "Mon — Sun, 5:00 PM — 11:00 PM",
  },
];

const ContactDetails = () => {
  return (
    <section className="bg-warm-ivory px-4 py-10 text-text-primary">
      <div className="grid gap-4">
        {details.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[26px] border border-border-light bg-cream-surface p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                <Icon size={20} />
              </div>

              <h2 className="mt-5 font-serif text-[28px] leading-none">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ContactDetails;
