import Footer from "../components/layout/footer";
import AboutChef from "../components/sections/about/about-chef";
import AboutHero from "../components/sections/about/about-hero";
import AboutStory from "../components/sections/about/about-story";
import AboutValues from "../components/sections/about/about-values";

const About = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutChef />
      </main>

      <Footer />
    </>
  );
};

export default About;
