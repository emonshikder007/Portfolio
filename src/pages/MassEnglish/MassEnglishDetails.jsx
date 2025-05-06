import React, { useEffect, useRef, useState } from "react";
import './MassEnglishDetails.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import css from "../../assets/css_img.png";
import react from "../../assets/react.png";
import react_router from "../../assets/react_router.png";
import vite from "../../assets/Vite.js.png";
import js from "../../assets/javascript-removebg-preview.png";
import { IoMdPause } from "react-icons/io";
import massVideo from '../../assets/massVideo.mp4';
import { FaPlay } from "react-icons/fa6";

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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration);
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
    setCurrentTime(video.currentTime);
    document.documentElement.style.setProperty('--progress', `${progress}%`);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const seekTime = (video.duration / 100) * e.target.value;
    video.currentTime = seekTime;
    setProgress(e.target.value);
    document.documentElement.style.setProperty('--progress', `${e.target.value}%`);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
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
      <div className="video-player-container">
      <video
        ref={videoRef}
        src={massVideo}
        onTimeUpdate={handleTimeUpdate}
        className="video-element"
      />
      <div className="controls">
        <button onClick={togglePlay} className="btn">
          {isPlaying ? '⏸' : '▶'}
        </button>
        <span className="time">{formatTime(currentTime)} / 1:58</span>
        <input
          type="range"
          className="progress-bar"
          value={progress}
          max="100"
          onChange={handleSeek}
        />
        <button onClick={handleFullscreen} className="btn fullScreen"><MdFullscreen /></button>
      </div>
    </div>
    </section>
  );
};

export default MassENglishDetails;
