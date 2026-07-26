import HomeHero from "../components/sections/home-hero";
import Footer from "../components/layout/footer";
import HomeMenuPreview from "../components/sections/home-menu-preview";

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeMenuPreview />
      </main>

      <Footer />
    </>
  );
};

export default Home;