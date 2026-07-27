import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "Chef’s Specials",
  "Starters",
  "Salads",
  "Main Courses",
  "Seafood",
  "Desserts",
  "Drinks",
];

const MenuControls = () => {
  return (
    <section className="bg-warm-ivory px-4 pt-8 text-text-primary">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Browse Menu
      </p>

      <div className="mt-4 flex h-13 items-center gap-3 rounded-2xl border border-border-light bg-cream-surface px-4">
        <Search size={18} className="text-text-muted" />

        <input
          type="text"
          placeholder="Search for dishes..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-text-muted"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border-light bg-cream-surface text-sm"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>

        <button
          type="button"
          className="h-12 rounded-xl border border-border-light bg-cream-surface text-sm"
        >
          Sort: Popular
        </button>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={`shrink-0 rounded-full border px-4 py-2 text-sm ${
              index === 0
                ? "border-burnt-orange bg-burnt-orange text-white"
                : "border-border-light bg-cream-surface text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MenuControls;
