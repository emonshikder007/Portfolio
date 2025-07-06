import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Projects.css";
import chatmeee_home from "../../assets/chatmee_home.png";
import tomato from "../../assets/tomato.png";
import scientificCalculator from "../../assets/scientific_calculator.png";
import mass from "../../assets/mass.png";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function HoverEffectCards() {
  const projects = [
    {
      img: chatmeee_home,
      title: "ChatMee",
      route: "/chatmee",
    },
    {
      img: tomato,
      title: "Tomato",
      route: "/tomato",
    },
    {
      img: scientificCalculator,
      title: "Scientific Calculator",
      route: "/calculator",
    },
    {
      img: mass,
      title: "Mass English",
      route: "/massEnglish",
    },{
      
      title: "Fx Sound",
      route: "/fxSound",
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <ScrollToTop />
      <section className="project_section" id="projects">
        <div className="projects_header" data-aos="zoom-in">
          <h1 className="project_title" data-aos="zoom-in">
            My <span className="projects_span">Projects</span>
          </h1>
        </div>
        <div className="cards-container">
          {projects.map((project, index) => {
            const projectClass = project.title
              .toLowerCase()
              .replace(/\s+/g, "-");

            const aosAnimations = [
              "fade-down-right",
              "fade-down-left",
              "fade-up-right",
              "fade-up-left",
            ];

            return (
              <div
                key={index}
                className={`project-card ${projectClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos={index < 4 ? aosAnimations[index] : ""}
              >
                <div className="project-text">
                  <h3>{project.title}</h3>
                </div>
                <div className="card">
                  <img src={project.img} alt={project.title} />
                  <div className="arrow_container">
                    <Link
                      to={project.route}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <FaArrowRight
                        className={`arrow-icon ${
                          hoveredIndex === index ? "visible" : ""
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
