import React, { useEffect, useRef, useState } from "react";
import "./MassEnglishDetails.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import css from "../../assets/css_img.png";
import react from "../../assets/react.png";
import react_router from "../../assets/react_router.png";
import vite from "../../assets/Vite.js.png";
import js from "../../assets/javascript-removebg-preview.png";
import clickSound from "../../assets/click.mp3";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Video1 from "../../components/Video1/Video1";

const MassENglishDetails = () => {
  const languages = [
    {
      name: "JavaScript",
      img: js,
      description:
        "JavaScript is a programming language that allows you to implement complex features on web pages.",
    },
    {
      name: "React",
      img: react,
      description:
        "React is a JavaScript library for building user interfaces.",
    },
    {
      name: "React Router",
      img: react_router,
      description: "React Router is a standard library for routing in React.",
    },
    {
      name: "Vite",
      img: vite,
      description:
        "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
    },
    {
      name: "CSS",
      img: css,
      description:
        "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    },
  ];

    const playSound = () => {
      const audio = new Audio(clickSound);
      audio.play();
    };
  

  return (
    <section>
      <div className="header_container">
        <Link to="/">
          <button className="arrow-container">
            <FaArrowLeft />
          </button>
        </Link>
      </div>
      <div className="main_text">
        <h1>Mass English - English Learning Academy</h1>
      </div>

      <Video1 />

      <div className="buttons">
        <a
         className="livePreview"
         href="#"
         onClick={playSound}
         >
          Live Preview
          <div className="live">
            <TbWorldWww />
          </div>
        </a>
        <a
          target="_blank"
          className="github"
          href="https://github.com/emon-shikder2217/my_portfolio"
          onClick={playSound}
        >
          Code
          <div className="git">
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="tech_container">
        <div className="tech_language">
          <h1 className="tech_header">Technology I Used To Make This</h1>
        </div>
        <div className="languages">
          {languages.map((language, index) => {
            return (
              <div className="react_container" key={index}>
                <div className="react_header">
                  <img src={language.img} alt={language.name} />
                  <h2>{language.name}</h2>
                </div>
                <div className="react_text">
                  <p>{language.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MassENglishDetails;
