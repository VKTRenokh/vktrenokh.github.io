import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/home/home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home></Home>
  },
]);
