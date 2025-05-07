import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header>
      <h1 className="navbar_logo" data-aos="zoom-in" data-aos-duration="1000">
        EMON
      </h1>

      <nav data-aos="zoom-in" data-aos-duration="800">
        <a data-aos="fade-left" data-aos-duration="1300">
          <span className="linkTxt">Home</span>
        </a>
        <Link
          to="about"
          smooth={true}
          duration={500}
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <span className="linkTxt">About</span>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          data-aos="fade-left"
          data-aos-duration="2300"
          >
            <span className="linkTxt">Skills</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            data-aos="fade-left"
            data-aos-duration="2800"
          >
            <span className="linkTxt">Projects</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <span className="linkTxt">Contact</span>
          </Link>
      </nav>

      <a
        href="https://www.linkedin.com/in/emonshikder2217/"
        target="_blank"
        className="social_icon"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <GrLinkedin />
      </a>
    </header>
  );
};

export default Navbar;


