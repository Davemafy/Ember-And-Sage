import { Menu, ShoppingBag } from "lucide-react";
import Button from "../ui/button";

type MobileHeaderProps = {
  cartCount?: number;
  showOrderButton?: boolean;
  onMenuClick?: () => void;
};

const MobileHeader = ({
  cartCount = 0,
  showOrderButton = true,
  onMenuClick,
}: MobileHeaderProps) => {
  return (
    <header className="h-[72px] bg-near-black text-warm-ivory px-4 flex items-center justify-between">
      <a href="/" className="font-serif text-[25px] leading-none">
        Ember &amp; Sage
      </a>

      <div className="flex items-center gap-2.5">
        {showOrderButton ? (
          <Button variant="outline-light" size="sm">
            Order Online →
          </Button>
        ) : (
          <button
            type="button"
            aria-label="Open cart"
            className="relative grid h-11 w-11 place-items-center rounded-full border border-warm-ivory/35 text-warm-ivory"
          >
            <ShoppingBag size={19} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-[18px] w-[18px] place-items-center rounded-full bg-burnt-orange text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        )}

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-warm-ivory/35 text-warm-ivory"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;