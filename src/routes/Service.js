import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import ServiceImg from "../assets/img13.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
