import React from "react";
import { Link } from "react-router-dom";
import "./ChatmeeDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import css from "../../assets/css_img.png";
import react from "../../assets/react.png";
import node from "../../assets/Node.js.png";
import express from "../../assets/express.png";
import jwt from "../../assets/icons8-json-web-token-48.png";
import mongodb from "../../assets/MongoDB.png";
import mongoose from "../../assets/Mongoose.js.png";
import socket from "../../assets/socket.io.svg";
import daisy from "../../assets/daisyui.png";
import react_router from "../../assets/react_router.png";
import vite from "../../assets/Vite.js.png";
import axios from "../../assets/axios.svg";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const ChatWithMeInfo = () => {
  return (
    <section className="chatmee-details_section">
      <div className="chatmee_container">
        <div className="header_container">
          <Link to="/">
            <button className="arrow-container">
              <FaArrowLeft />
            </button>
          </Link>
        </div>
        <div className="main_text">
          <h1>Chatmee - Full Stack Chat Application</h1>
        </div>
        <div className="slideshow_section">
          <ImageSlider />
        </div>
        <div className="tech_container">
          <div className="tech_language">
            <h1 className="tech_header">Technology I Used To Make This</h1>
          </div>

          <div className="languages">
            <div className="react_container">
              <div className="react_header">
                <img src={react} alt="React" />
                <h2>React</h2>
              </div>
              <div className="react_text">
                <p>
                  Basic React, hooks, Virtual DOM, React Router,
                  Recharts etc.
                </p>
              </div>
            </div>
            <div className="tailwind_container">
              <div className="tailwind_header">
                <img src={css} alt="Tailwind" />
                <h2>CSS</h2>
              </div>
              <div className="tailwind_text">
                <p>Utility-first CSS framework for rapid UI development</p>
              </div>
            </div>
            <div className="daisy_container">
              <div className="daisy_header">
                <img src={daisy} alt="Daisy UI" />
                <h2>Daisy UI</h2>
              </div>
              <div className="daisy_text">
                <p>
                  Tailwind CSS component library for beautiful UI components
                </p>
              </div>
            </div>
            <div className="vite_container">
              <div className="vite_header">
                <img src={vite} alt="Vite" />
                <h2>Vite</h2>
              </div>
              <div className="vite_text">
                <p>Next generation frontend tooling with fast development</p>
              </div>
            </div>
            <div className="node_container">
              <div className="node_header">
                <img src={node} alt="Node.js" />
                <h2>Node</h2>
              </div>
              <div className="node_text">
                <p>
                  JavaScript runtime for building scalable backend applications
                </p>
              </div>
            </div>
            <div className="mongodb_container">
              <div className="mongodb_header">
                <img className="mmmm" src={mongodb} alt="MongoDB" />
                <h2>MongoDB</h2>
              </div>
              <div className="mongodb_text">
                <p>NoSQL database for flexible and scalable data storage</p>
              </div>
            </div>
            <div className="mongoose_container">
              <div className="mongoose_header">
                <img src={mongoose} alt="Mongoose" className="mongoose_image" />
                <h2>Mongoose</h2>
              </div>
              <div className="mongoose_text">
                <p>ODM library for MongoDB and Node.js</p>
              </div>
            </div>
            <div className="jwt_container">
              <div className="jwt_header">
                <img src={jwt} alt="JWT" />
                <h2>Json Web Token</h2>
              </div>
              <div className="jwt_text">
                <p>Secure authentication and authorization</p>
              </div>
            </div>
            <div className="react-router_container">
              <div className="react-router_header">
                <img src={react_router} alt="React Router" />
                <h2>React Router Dom</h2>
              </div>
              <div className="react-router_text">
                <p>Declarative routing for React applications</p>
              </div>
            </div>
            <div className="socket_container">
              <div className="socket_header">
                <img src={socket} alt="Socket.io" />
                <h2>Socket.io</h2>
              </div>
              <div className="socket_text">
                <p>Real-time bidirectional event-based communication</p>
              </div>
            </div>
            <div className="express_container">
              <div className="express_header">
                <img src={express} alt="Express" className="express_image" />
                <h2>Express</h2>
              </div>
              <div className="express_text">
                <p>Fast, minimalist web framework for Node.js</p>
              </div>
            </div>
            <div className="axios_container">
              <div className="axios_header">
                <img src={axios} alt="Axios" className="axios_image" />
                <h2>Axios</h2>
              </div>
              <div className="axios_text">
                <p>Promise-based HTTP client for the browser and Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWithMeInfo;
