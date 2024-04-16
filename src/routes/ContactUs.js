import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import ContactImg from "../assets/img18.jpg";

function ContactUs() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="ContactUs"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default ContactUs;
