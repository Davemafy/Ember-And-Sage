import Button from "../ui/button";

const footerLinks = [
  {
    title: "Menu",
    links: ["Chef's Specials", "Main Courses", "Desserts", "Drinks"],
  },
  {
    title: "Reservations",
    links: ["Book a Table", "Private Dining", "Events"],
  },
  {
    title: "About",
    links: ["Our Story", "Gallery", "Careers"],
  },
  {
    title: "Contact",
    links: ["Visit Us", "Call Us", "Support"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-near-black px-4 pb-8 pt-12 text-warm-ivory">
      <div className="space-y-6">
        <div>
          <p className="font-serif text-[34px] leading-none">
            Ember &amp; Sage
          </p>

          <p className="mt-3 max-w-[290px] text-sm leading-6 text-warm-ivory/65">
            Modern cuisine with timeless soul, crafted for unforgettable dining
            moments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Instagram"
            className="grid h-11 w-11 place-items-center rounded-full border border-warm-ivory/25 text-warm-ivory"
          >
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="grid h-11 w-11 place-items-center rounded-full border border-warm-ivory/25 text-warm-ivory"
          >
          </button>

          <button
            type="button"
            aria-label="TikTok"
            className="grid h-11 w-11 place-items-center rounded-full border border-warm-ivory/25 text-sm font-semibold text-warm-ivory"
          >
            T
          </button>
        </div>

        <div className="space-y-0 border-t border-border-dark">
          {footerLinks.map((group) => (
            <details
              key={group.title}
              className="group border-b border-border-dark py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-serif text-[24px] leading-none">
                  {group.title}
                </span>

                <span className="text-xl text-burnt-orange transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-warm-ivory/65"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="rounded-[28px] border border-warm-ivory/15 bg-warm-ivory/[0.04] p-5">
          <p className="font-serif text-[28px] leading-none">
            Ready to dine with us?
          </p>

          <p className="mt-3 text-sm leading-6 text-warm-ivory/65">
            Reserve your table and let us prepare something memorable.
          </p>

          <div className="mt-5">
            <Button fullWidth>Reserve Your Table</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border-dark pt-5 text-xs text-warm-ivory/45">
          <p>© 2026 Ember &amp; Sage. All rights reserved.</p>
          <p>Website by Rivelo Studio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;