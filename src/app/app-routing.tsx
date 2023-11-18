import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/home/home";

export const router = createHashRouter([
  {
    path: '/projects',
    element: 'no projects'
  },
  {
    path: "/",
    element: <Home></Home>
  },
]);
