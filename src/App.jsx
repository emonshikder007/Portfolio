import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chatmee_details from "./pages/Chatmee_Details/ChatmeeDetails";
import SintificCalculator_details from "./pages/SintificCalculator_Details/SintificCalculatorDetails";
import Tomato_details from "./pages/Tomato_Details/TomatoDetails";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();


    const handleWheel = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.5,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatmee-details" element={<Chatmee_details />} />
        <Route path="/calculator-details" element={<SintificCalculator_details />} />
        <Route path="/tomato-details" element={<Tomato_details />} />
      </Routes>
    </Router>
  );
};

export default App;

