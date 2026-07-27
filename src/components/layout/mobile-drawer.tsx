import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/button";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/reservations" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];
const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  if (!isOpen) return null;

  const location = useLocation()

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <aside className="ml-auto flex h-full w-[340px] flex-col bg-near-black text-warm-ivory shadow-[-20px_0_60px_rgba(0,0,0,0.35)]">
        <div className="flex h-[88px] items-center justify-between border-b border-border-dark px-6">
          <a href="/" className="font-serif text-[27px] leading-none">
            Ember &amp; Sage
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-12 w-12 place-items-center rounded-full border border-warm-ivory/35 text-warm-ivory"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                className="flex min-h-14 items-center gap-4 border-b border-border-dark"
              >
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-burnt-orange" : "text-muted-orange"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`font-serif text-[28px] leading-none ${
                    isActive ? "text-burnt-orange" : "text-warm-ivory"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

          <div className="mt-8 space-y-4">
            <Link to="/reservations" onClick={onClose}>
              <Button fullWidth>Reserve Your Table</Button>
            </Link>

            <Link to="/cart" onClick={onClose}>
              <Button variant="outline-light" fullWidth>
                Order Online
              </Button>
            </Link>

            <div className="flex items-center gap-3 pt-4">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-warm-ivory/25"></button>

              <button className="grid h-10 w-10 place-items-center rounded-full border border-warm-ivory/25"></button>

              <button className="grid h-10 w-10 place-items-center rounded-full border border-warm-ivory/25 text-sm font-semibold">
                T
              </button>
            </div>

            <p className="max-w-[220px] pt-2 text-sm leading-6 text-warm-ivory/65">
              Modern cuisine with timeless soul.
            </p>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MobileDrawer;
