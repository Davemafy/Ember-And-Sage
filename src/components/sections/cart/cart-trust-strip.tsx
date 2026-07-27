import { Headphones, ShieldCheck, ShoppingBag } from "lucide-react";

const trustItems = [
  {
    icon: ShoppingBag,
    title: "Freshly Prepared",
    text: "Your order is prepared fresh by our chefs and packed with care.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    text: "Your payment is safe with us during checkout.",
  },
  {
    icon: Headphones,
    title: "Need Help?",
    text: "Call or chat with our support team anytime.",
  },
];

const CartTrustStrip = () => {
  return (
    <section className="bg-warm-ivory px-4 pb-10 text-text-primary">
      <div className="space-y-3 rounded-[28px] bg-cream-surface p-5">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex gap-4 border-b border-border-light pb-4 last:border-b-0 last:pb-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burnt-orange/10 text-burnt-orange">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="font-serif text-[24px] leading-none">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CartTrustStrip;
