const CartHero = () => {
  return (
    <section className="bg-near-black px-4 pb-8 pt-8 text-warm-ivory">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Your Cart
      </p>

      <h1 className="mt-4 max-w-[330px] font-serif text-[52px] leading-[0.9] tracking-[-0.03em]">
        Your cart, ready to go.
      </h1>

      <p className="mt-5 max-w-[310px] text-[15px] leading-7 text-warm-ivory/70">
        Review your items, adjust as needed, and we’ll take care of the rest.
      </p>

      <div className="mt-8 h-[260px] rounded-[30px] bg-soft-black" />
    </section>
  );
};

export default CartHero;
