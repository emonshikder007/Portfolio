import React from 'react';
import './ImageSlider.css';
import chatmeeHome from "../../assets/chatmee_home.png";
import chatmeeProfile from "../../assets/chatmee_profile.png";
import chatmeeSettings from "../../assets/chatmee_settings.png";
import chatmeeConversation from "../../assets/chatmee_conversation.png";
import chatmeeSignup from "../../assets/chatmee_signup.png";
import chatmeeSignin from "../../assets/chatmee_signin.png";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);

  const slides = [
    { id: 1, src: chatmeeHome, caption: "Home Page" },
    { id: 2, src: chatmeeProfile, caption: "Profile Page" },
    { id: 3, src: chatmeeConversation, caption: "Conversation View" },
    { id: 4, src: chatmeeSettings, caption: "Settings Page" },
    { id: 5, src: chatmeeSignup, caption: "Signup Page" },
    { id: 6, src: chatmeeSignin, caption: "Signin Page" },
  ];

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    if (n > slides.length) newIndex = 1;
    if (n < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`mySlides fade ${
              slideIndex === index + 1 ? "active" : ""
            }`}
            style={{ display: slideIndex === index + 1 ? "block" : "none" }}
          >
            <div className="numbertext">{`${index + 1} / ${
              slides.length
            }`}</div>
            <img
              src={slide.src}
              alt={slide.caption}
              style={{ width: "100%" }}
            />
            <div className="text">{slide.caption}</div>
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;