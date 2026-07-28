import Footer from "../components/layout/footer";
import OrderDetailsCard from "../components/sections/order-success/order-details-card";
import OrderNextSteps from "../components/sections/order-success/order-next-steps";
import OrderSuccessHero from "../components/sections/order-success/order-success-hero";

const OrderSuccess = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <OrderSuccessHero />
        <OrderDetailsCard />
        <OrderNextSteps />
      </main>

      <Footer />
    </>
  );
};

export default OrderSuccess;
