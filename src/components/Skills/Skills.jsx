import React from "react";
import "./Skills.css";
import TailwindSVG from "../../assets/tailwindcss.svg";
import NodeSVG from "../../assets/node.svg";
import MongoDBSVG from "../../assets/mongodb.svg";
import ReactSVG from "../../assets/react.svg";
import HTMLSVG from "../../assets/html.svg";
import CSSSVG from "../../assets/css.svg";
import JS_SVG from "../../assets/js.svg";

const Skills = () => {
  const skills = [
    { name: "Tailwind CSS", icon: TailwindSVG },
    { name: "Node.js", icon: NodeSVG },
    { name: "MongoDB", icon: MongoDBSVG },
    { name: "React", icon: ReactSVG },
    { name: "HTML", icon: HTMLSVG },
    { name: "CSS", icon: CSSSVG },
    { name: "JavaScript", icon: JS_SVG },
  ];

  // **3 times repeat for smooth looping**
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills">
      <div className="main_container">
        <div className="skills_title" data-aos="zoom-in">
          <h1 data-aos="zoom-in" className="skills-title">
            My <span className="skills_span">Skills</span>
          </h1>
        </div>

        <div className="skills-wrapper">
          <div className="skills-container">
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className={`skill-card ${
                  index % 2 === 0 ? "up-down" : "down-up"
                }`}
                style={{ animationDelay: `${(index % skills.length) * 0.5}s` }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  data-aos="zoom-out-down"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
