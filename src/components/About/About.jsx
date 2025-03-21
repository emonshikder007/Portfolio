import React from "react";
import "./About.css";
import VanillaTilt from 'vanilla-tilt';
import { FaBookOpen } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoBalloonSharp } from "react-icons/io5";
import myImage from "../../assets/img.jpg";
import aboutImg from '../../assets/about_page.png'

const About = () => {
  return (
    <section className="about_section" id="about">
      <div
        className="about_title_container"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <h1 className="about_title">
          About <span className="span_me">Me</span>
        </h1>
      </div>
      <div className="content_container" data-tilt>
        <div
          className="light-container"
          data-aos="zoom-out"
          data-aos-duration="300"
        >
          <div className="light-ball"></div>
          <div className="light-beam"></div>
        </div>
        <div className="text_container">
          <div
            className="learning_journey"
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <div className="learning_journey_text">
            <div className="learning_heading">
                <div className="logo">
                  <FaBookOpen />
                </div>
                <h1 className="learning_title">My Learning Journey</h1>
              </div>
              <p className="p">
                I'm a MERN stack web developer with a deep passion for the IT
                sector. Although I'm not currently working in the field, I'm
                constantly learning and improving my skills through online
                courses on platforms like Udemy and Programming Hero.
              </p>
            </div>
          </div>
          <div
            className="interest"
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <div className="interest_text">
              <div className="interest_heading">
                <div className="logo">
                  <IoBalloonSharp />
                </div>
                <h1 className="interest_title">My Interest</h1>
              </div>
              <p className="p">
                Apart from coding, I have a love for outdoor games and
                traveling. Engaging in physical activities not only keeps me fit
                but also helps me sharpen my problem-solving skills. I strongly
                believe in maintaining a healthy work-life balance.
              </p>
            </div>
          </div>
          <div className="goal" data-aos="fade-right" data-aos-duration="300">
            <div className="goal_text">
              <div className="goal_heading">
                <div className="logo">
                  <GoGoal />
                </div>
                <h1 className="goal_title">My Goal</h1>
              </div>
              <p className="p">
                With my continuous learning mindset and diverse range of
                interests, I consider myself a well-rounded web developer who is
                always ready <br /> for new challenges. My portfolio website
                reflects my exceptional <br /> skills and showcases my passion
                for both web development and <br /> adventure.
              </p>
            </div>
          </div>
        </div>
        <div className="picture_container">
        <div className="new-picture-container">
          <img src="" alt="" />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default About;



