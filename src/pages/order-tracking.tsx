import Footer from "../components/layout/footer";
import DeliveryStatusCard from "../components/sections/order-tracking/delivery-status-card";
import OrderProgress from "../components/sections/order-tracking/order-progress";
import OrderTrackingHero from "../components/sections/order-tracking/order-tracking-hero";
import TrackingOrderSummary from "../components/sections/order-tracking/tracking-order-summary";

const OrderTracking = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <OrderTrackingHero />
        <OrderProgress />
        <DeliveryStatusCard />
        <TrackingOrderSummary />
      </main>

      <Footer />
    </>
  );
};

export default OrderTracking;
