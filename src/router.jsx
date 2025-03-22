import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home/Home"
import ChatWithMeInfo from "./pages/Chatmee_Details/ChatmeeDetails";
import SintificCalculatorDetails from "./pages/SintificCalculator_Details/SintificCalculatorDetails";

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
            path: "/chatmee-details",
            element: <ChatWithMeInfo />
        },
        {
          path: "/calculator-details",
          element: <SintificCalculatorDetails />
      }
    ]
  }
]);

export default router;


