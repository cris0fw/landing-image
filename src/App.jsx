import AboutUs from "./page/AboutUs";
import ComunicateGather from "./page/ComunicateGather";
import ImagineFeatures from "./page/ImagineFeatures";
import MakeBussines from "./page/MakeBussines";
import OurTeam from "./page/OurTeam";
import "./App.css";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import BlogsPost from "./page/BlogsPost";
import FormOverlay from "./components/FormOverlay";
import Footer from "./page/Footer";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />

      {/* Make Your Bussines More Profitable */}
      <MakeBussines />

      {/* Imagine Features */}
      <ImagineFeatures />

      {/* Communicate and gather feedback */}
      <ComunicateGather />

      {/* About Us */}
      <AboutUs />

      {/* Our Team */}
      <OurTeam />

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Blogs */}
      <BlogsPost />

      {/* Formulario  */}
      <section id="contact">
        <FormOverlay />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
