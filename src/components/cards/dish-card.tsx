import { Link } from "react-router-dom";
import { Leaf, Plus, Sparkles } from "lucide-react";

type DishCardProps = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  tags: string[];
};

const DishCard = ({
  id,
  name,
  category,
  price,
  description,
  tags,
}: DishCardProps) => {
  return (
    <article className="overflow-hidden rounded-[26px] border border-border-light bg-cream-surface shadow-sm">
      <Link to={`/menu/${id}`} className="block">
        <div className="h-[230px] bg-soft-black" />
      </Link>

      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-burnt-orange">
          {category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <Link to={`/menu/${id}`}>
            <h3 className="font-serif text-[28px] leading-none text-text-primary">
              {name}
            </h3>
          </Link>

          <p className="shrink-0 text-sm font-bold text-text-primary">
            {price}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-text-secondary">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs text-text-secondary"
              >
                {tag.toLowerCase().includes("high") ? (
                  <Sparkles size={13} className="text-burnt-orange" />
                ) : (
                  <Leaf size={13} className="text-burnt-orange" />
                )}
                {tag}
              </span>
            ))}
          </div>

          <Link
            to="/cart"
            aria-label={`Add ${name} to cart`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-burnt-orange text-burnt-orange"
          >
            <Plus size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
