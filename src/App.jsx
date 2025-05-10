import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useSmoothScroll from "./SmoothScroll";

const App = () => {

  useSmoothScroll();

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
