import React, { useEffect } from "react";
import {
  Outlet,
} from "react-router-dom";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();

    const handleWheel = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.7,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
