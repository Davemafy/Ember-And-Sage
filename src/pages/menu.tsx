import Footer from "../components/layout/footer";
import MenuControls from "../components/sections/menu/menu-controls";
import MenuHero from "../components/sections/menu/menu-hero";
import MenuReservationCTA from "../components/sections/menu/menu-reservation-cta";
import MenuSeasonalCTA from "../components/sections/menu/menu-seasonal-cta";
import MenuSpecials from "../components/sections/menu/menu-specials";

const Menu = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <MenuHero />
        <MenuControls />
        <MenuSpecials />
        <MenuSeasonalCTA />
        <MenuReservationCTA />
      </main>

      <Footer />
    </>
  );
};

export default Menu;
