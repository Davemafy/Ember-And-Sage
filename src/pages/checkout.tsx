import Footer from "../components/layout/footer";
import CheckoutDeliveryMethod from "../components/sections/checkout/checkout-delivery-method";
import CheckoutDetailsForm from "../components/sections/checkout/checkout-details-form";
import CheckoutHero from "../components/sections/checkout/checkout-hero";
import CheckoutOrderSummary from "../components/sections/checkout/checkout-order-summary";
import CheckoutPaymentMethod from "../components/sections/checkout/checkout-payment-method";
import CheckoutTrustStrip from "../components/sections/checkout/checkout-trust-strip";

const Checkout = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <CheckoutHero />
        <CheckoutDeliveryMethod />
        <CheckoutDetailsForm />
        <CheckoutPaymentMethod />
        <CheckoutOrderSummary />
        <CheckoutTrustStrip />
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
    