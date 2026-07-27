import Footer from "../components/layout/footer";
import DiningAreas from "../components/sections/reservations/dining-areas";
import ReservationBookingCard from "../components/sections/reservations/reservation-booking-card";
import ReservationContactCTA from "../components/sections/reservations/reservation-contact-cta";
import ReservationFAQ from "../components/sections/reservations/reservation-faq";
import ReservationGoodToKnow from "../components/sections/reservations/reservation-good-to-know";
import ReservationTimes from "../components/sections/reservations/reservation-times";
import ReservationsHero from "../components/sections/reservations/reservations-hero";

const Reservations = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <ReservationsHero />
        <ReservationBookingCard />
        <ReservationTimes />
        <DiningAreas />
        <ReservationGoodToKnow />
        <ReservationFAQ />
        <ReservationContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default Reservations;
