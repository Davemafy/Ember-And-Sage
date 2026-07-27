import Footer from "../components/layout/footer";
import ContactDetails from "../components/sections/contact/contact-details";
import ContactForm from "../components/sections/contact/contact-form";
import ContactHero from "../components/sections/contact/contact-hero";
import ContactMapCTA from "../components/sections/contact/contact-map-cta";

const Contact = () => {
  return (
    <>
      <main className="bg-warm-ivory text-text-primary">
        <ContactHero />
        <ContactDetails />
        <ContactForm />
        <ContactMapCTA />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
