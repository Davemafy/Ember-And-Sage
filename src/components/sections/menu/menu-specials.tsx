  import DishCard from "../../cards/dish-card";
  import { dishes } from "../../../data/dishes";

  const MenuSpecials = () => {
    return (
      <section className="bg-warm-ivory px-4 py-8 text-text-primary">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-[34px] leading-none">
            Chef’s Specials
          </h2>

          <button
            type="button"
            className="max-w-[120px] text-right text-xs font-semibold leading-5 text-burnt-orange"
          >
            What’s Chef’s Special? →
          </button>
        </div>

        <div className="mt-7 space-y-5">
          {dishes.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </section>
    );
  };

  export default MenuSpecials;