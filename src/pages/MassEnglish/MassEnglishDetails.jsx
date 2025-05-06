import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import css from "../../assets/css_img.png";
import react from "../../assets/react.png";
import react_router from "../../assets/react_router.png";
import vite from "../../assets/Vite.js.png";
import js from '../../assets/javascript-removebg-preview.png';

const MassENglishDetails = () => {
    

    const languages = [
        {
            name: "JavaScript",
            img: js,
            description: "JavaScript is a programming language that allows you to implement complex features on web pages.",
        },
        {
            name: "React",
            img: react,
            description: "React is a JavaScript library for building user interfaces.",
        },
        {
            name: "React Router",
            img: react_router,
            description: "React Router is a standard library for routing in React.",
        },
        {
            name: "Vite",
            img: vite,
            description: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
        },
        {
            name: "CSS",
            img: css,
            description: "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
        }
    ]

  return (
    <section>
            <div className="header_container">
              <Link to="/">
                <button className="arrow-container">
                  <FaArrowLeft />
                </button>
              </Link>
            </div>
    </section>
  )
}

export default MassENglishDetails;

