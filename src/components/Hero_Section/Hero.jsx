import React from "react";
import clickSound from "../../assets/click.mp3";
import "./Hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const texts = [
    "Transforming Ideas Into Reality",
    "Innovate Solution Though MERN",
    "Creating Modern and Responsive User Interface WIth React",
  ];
  const typingSpeed = 120;
  const deletingSpeed = 55;
  const delayBetweenLines = 1000;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenLines);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <main id="home">
      <div className="content" data-aos="fade-right" data-aos-duration="1000">
        <div className="tag-box">
          <div className="tag">WELCOME</div>
        </div>
        <h1>
          Discober The World Of <br className="brTag" /> <span className="span_name">EMON</span>
        </h1>
        <div className="text-box">
          <span>{displayedText}</span>
          <span className="cursor">|</span>
        </div>

     <button className="btn" onClick={playSound} data-aos="zoom-in" data-aos-duration="1000">
       Watch My Resume
     </button>

     
      </div>
      <div className="scroll_down"></div>
    </main>
  );
};

export default Hero;

