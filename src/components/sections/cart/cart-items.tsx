import { Leaf, Minus, Plus, Trash2, X } from "lucide-react";

import { cartItems } from "../../../data/cart-items";

const CartItems = () => {
  return (
    <section className="bg-warm-ivory px-4 py-10 text-text-primary">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-end gap-2">
          <h2 className="font-serif text-[36px] leading-none">Your Order</h2>
          <p className="text-sm text-text-secondary">(3 items)</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted"
        >
          Clear
          <Trash2 size={14} />
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <article
            key={item.id}
            className="rounded-[26px] border border-border-light bg-cream-surface p-4"
          >
            <div className="flex gap-4">
              <div className="h-[96px] w-[96px] shrink-0 rounded-[20px] bg-soft-black" />

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[24px] leading-none">
                    {item.name}
                  </h3>

                  <button
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    className="text-text-muted"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-text-secondary">
                  {item.description}
                </p>

                <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-secondary">
                  <Leaf size={13} className="text-burnt-orange" />
                  {item.tag}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="inline-flex h-10 items-center rounded-xl border border-border-light bg-warm-ivory">
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center text-text-secondary"
                >
                  <Minus size={15} />
                </button>

                <span className="grid h-10 w-8 place-items-center text-sm font-semibold">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center text-text-secondary"
                >
                  <Plus size={15} />
                </button>
              </div>

              <p className="text-sm font-bold">{item.price}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-[24px] border border-border-light bg-cream-surface p-4">
        <label className="font-serif text-[24px] leading-none">
          Special Instructions
        </label>

        <textarea
          rows={4}
          maxLength={200}
          placeholder="Example: No onions, extra sauces on the side, birthday celebration..."
          className="mt-3 w-full resize-none rounded-2xl border border-border-light bg-warm-ivory px-4 py-3 text-sm outline-none placeholder:text-text-muted focus:border-burnt-orange"
        />

        <p className="mt-2 text-right text-xs text-text-muted">0/200</p>
      </div>
    </section>
  );
};

export default CartItems;
