import React from "react";
import gradient from "../../assets/gradient.png";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero_Section/Hero";
import Spline from "@splinetool/react-spline";
import "aos/dist/aos.css";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import "./Home.css";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <img className="img" src={gradient} />
      <div className="blur"></div>

      <div className="container">
        <Navbar />
        <Hero />
        <div>
          <Spline
            className="robot"
            data-aos="fade-left"
            data-aos-duration="1000"
            scene="https://prod.spline.design/f7DpMuOcxWE86Ufc/scene.splinecode"
          />
        </div>
      </div>
      <div className="about_container">
        <About />
      </div>
      <div className="skills_container">
        <Skills />
      </div>
      <div className="projects_container">
        <Projects />
      </div>
      <div className="contact_container">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
