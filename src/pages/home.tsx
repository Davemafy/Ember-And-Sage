import HomeHero from "../components/sections/home-hero";
import Footer from "../components/layout/footer";
import HomeMenuPreview from "../components/sections/home-menu-preview";
import HomeExperience from "../components/sections/home-experience";
import HomeStory from "../components/sections/home-story";
import HomeGalleryPreview from "../components/sections/home-gallery-preview";

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeMenuPreview />
        <HomeExperience />
        <HomeStory />
        <HomeGalleryPreview />
      </main>

      <Footer />
    </>
  );
};

export default Home;