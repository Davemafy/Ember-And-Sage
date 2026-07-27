import Footer from "../components/layout/footer";
import ReservationBookingCard from "../components/sections/reservations/reservation-booking-card";
import ReservationTimes from "../components/sections/reservations/reservation-times";
import ReservationsHero from "../components/sections/reservations/reservations-hero";

const Reservations = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <ReservationsHero />
        <ReservationBookingCard />
        <ReservationTimes />
      </main>

      <Footer />
    </>
  );
};

export default Reservations;
