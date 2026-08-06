import { ArrowRight } from "lucide-react";
import Button from "../../ui/button";
import reserveTable from "@/assets/img/reserve-table.webp";

const MenuReservationCTA = () => {
  return (
    <section className="bg-warm-ivory text-text-primary isolate px-4 pb-6">
      <div className="text-warm-ivory relative overflow-clip rounded-xl bg-gradient-to-r from-black via-black/85 to-transparent p-8">
        <img
          src={reserveTable}
          alt="Fine dining table with candles and wine glasses"
          className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
        />
        <p className="text-burnt-orange text-xs font-semibold tracking-[0.14em] uppercase">
          Reserve a Table
        </p>

        <h2 className="mt-4 max-w-[20ch] font-serif text-[30px] leading-[0.95] font-semibold">
          Great food is better when shared.
        </h2>

        <p className="text-warm-ivory/70 mt-3 text-sm leading-6">
          Book your table and enjoy an unforgettable dining experience.
        </p>

        <div className="mt-6">
          <Button
            fullWidth
            className="text-text-primary h-fit w-fit gap-3 rounded-full bg-white py-3 text-sm"
          >
            Make a Reservation <ArrowRight className="text-burnt-orange" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuReservationCTA;
