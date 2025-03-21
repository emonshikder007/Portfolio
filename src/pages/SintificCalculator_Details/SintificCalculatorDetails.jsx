import React from "react";
import "./SintificCalculatorDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import calculator from "../../assets/scientific_calculator.png";
import html from '../../assets/html.png';
import css from '../../assets/css_img.png';
import js from '../../assets/javascript-removebg-preview.png';

const SintificCalculatorDetails = () => {
  return (
    <section className="scientific-calculator_details">
      <div className="header_container">
        <Link to="/">
          <button className="arrow-container">
            <FaArrowLeft />
          </button>
        </Link>
      </div>
      <div className="main_text_calculator">
        <h1>Scientific Calculator</h1>
      </div>
      <div className="image_container">
        <img src={calculator} alt="" />
      </div>
      <div className="scientific-calculator_languages">
        <h1>Languages I Used to make this Calculator</h1>
        <div className="language_container">
          <div className="html_container">
            <div className="html_header">
              <img src={html} alt="React" />
              <h2>HTML</h2>
            </div>
            <div className="html_text">
              <p>
                For create a structure of this scientific calculator
              </p>
            </div>
          </div>
          <div className="css_container">
            <div className="css_header">
              <img src={css} alt="React" />
              <h2>CSS</h2>
            </div>
            <div className="css_text">
              <p>
                For add simple design on this scientific calculator
              </p>
            </div>
          </div>
          <div className="js_container">
            <div className="js_header">
              <img src={js} alt="React" />
              <h2>Java Script</h2>
            </div>
            <div className="js_text">
              <p>
                For add functionality to this scientific calculator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SintificCalculatorDetails;
