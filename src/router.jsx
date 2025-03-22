import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../src/pages/Home/Home"
import ChatWithMeInfo from "./pages/Chatmee_Details/ChatmeeDetails";

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
        }
    ]
  }
]);

export default router;


