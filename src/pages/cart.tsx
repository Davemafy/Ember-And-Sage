import Footer from "../components/layout/footer";
import CartHero from "../components/sections/cart/cart-hero";
import CartItems from "../components/sections/cart/cart-items";
import CartRecommendations from "../components/sections/cart/cart-recommendations";
import CartSummary from "../components/sections/cart/cart-summary";
import CartTrustStrip from "../components/sections/cart/cart-trust-strip";

const Cart = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <CartHero />
        <CartItems />
        <CartSummary />
        <CartTrustStrip />
        <CartRecommendations />
      </main>

      <Footer />
    </>
  );
};

export default Cart;
