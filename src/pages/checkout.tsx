import Footer from "../components/layout/footer";
import CheckoutDeliveryMethod from "../components/sections/checkout/checkout-delivery-method";
import CheckoutDetailsForm from "../components/sections/checkout/checkout-details-form";
import CheckoutHero from "../components/sections/checkout/checkout-hero";

const Checkout = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <CheckoutHero />
        <CheckoutDeliveryMethod />
        <CheckoutDetailsForm />
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
  