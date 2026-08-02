import HomeHero from "../components/sections/home/home-hero";
import Footer from "../components/layout/footer";
import HomeMenuPreview from "../components/sections/home/home-menu-preview";
import HomeExperience from "../components/sections/home/home-experience";
import HomeStory from "../components/sections/home/home-story";
import HomeGalleryPreview from "../components/sections/home/home-gallery-preview";

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeMenuPreview />
        <HomeStory />
        <HomeExperience />
        <HomeGalleryPreview />
      </main>

      <Footer />
    </>
  );
};

export default Home;
