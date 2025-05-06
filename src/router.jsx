import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home/Home"
import ChatWithMeInfo from "./pages/Chatmee_Details/ChatmeeDetails";
import SintificCalculatorDetails from "./pages/SintificCalculator_Details/SintificCalculatorDetails";
import TomatoDetails from './pages/Tomato_Details/TomatoDetails'
import MassEnglishDetails from "./pages/MassEnglish/MassEnglishDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/chatmee",
            element: <ChatWithMeInfo />
        },
        {
          path: "/calculator",
          element: <SintificCalculatorDetails />
      },
      {
        path: "/tomato",
        element: <TomatoDetails />
      },
      {
        path: "/massEnglish",
        element: <MassEnglishDetails />
      }
    ]
  }
]);

export default router;


