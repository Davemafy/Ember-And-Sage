import { ArrowDown, ChevronDown } from "lucide-react";
import Button from "../ui/button";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import TripAdvidor from "../icons/tripadvidor";

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
    title: "About Us",
    links: ["Our Story", "Gallery", "Careers"],
  },
  {
    title: "Contact",
    links: ["Visit Us", "Call Us", "Support"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-near-black text-warm-ivory px-4 pt-12 pb-6">
      <div className="space-y-2">
        <div>
          <p className="font-serif text-[28px] leading-none">Ember &amp; Sage</p>

          <p className="text-warm-ivory/65 mt-3 max-w-[290px] text-sm leading-6">
            Modern cuisine with timeless soul.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Instagram"
            className="border-warm-ivory/25 text-warm-ivory grid h-11 w-11 place-items-center rounded-full border"
          >
            <Instagram />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="border-warm-ivory/25 text-warm-ivory grid h-11 w-11 place-items-center rounded-full border"
          >
            <Facebook />
          </button>

          <button
            type="button"
            aria-label="TikTok"
            className="border-warm-ivory/25 text-warm-ivory grid h-11 w-11 place-items-center rounded-full border text-sm font-semibold"
          >
            <TripAdvidor />
          </button>
        </div>

        <div className="border-border-dark space-y-0">
          {footerLinks.map((group) => (
            <details key={group.title} className="group border-border-dark border-b py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-sans text-[15px] leading-none font-normal tracking-[0.2px]">
                  {group.title}
                </span>

                <ChevronDown size={20} />
              </summary>

              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <a key={link} href="#" className="text-warm-ivory/65 block text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className="border-border-dark text-warm-ivory/45 flex flex-col gap-2 pt-5 text-center text-xs">
          <div className="text-text-muted mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold">
            <p className="inline-flex items-center gap-2">
              <span>Privacy Policy.</span>
            </p>

            <span className="bg-burnt-orange h-1 w-1 rounded-full" />
            <p className="inline-flex items-center gap-2">
              <span>Term of Service</span>
            </p>
          </div>
          <p className="text-[11px]">© 2026 Ember &amp; Sage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;