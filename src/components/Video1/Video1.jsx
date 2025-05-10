import React, { useEffect, useRef, useState } from "react";
import "./Video1.css";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import clickSound from "../../assets/click.mp3";
import massVideo from "../../assets/massVideo.mp4";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Video1 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", () => {
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
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const seekTime = (video.duration / 100) * e.target.value;
    video.currentTime = seekTime;
    setProgress(e.target.value);
    document.documentElement.style.setProperty(
      "--progress",
      `${e.target.value}%`
    );
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
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


  return (
    <>
      <div className="video-player-container" onClick={() => window.scrollTo(0, 0)}>
        <video
          ref={videoRef}
          src={massVideo}
          onTimeUpdate={handleTimeUpdate}
          className="video-element"
        />
        <div className="controls">
          <button onClick={togglePlay} className="btnn">
            {isPlaying ? "⏸" : "▶"}
          </button>
          <span className="time">{formatTime(currentTime)} / 1:58</span>
          <input
            type="range"
            className="progress-bar"
            value={progress}
            max="100"
            onChange={handleSeek}
          />
          <button onClick={handleFullscreen} className="btnn fullScreen">
            <MdFullscreen />
          </button>
        </div>
      </div>
    </>
  );
};

export default Video1;
