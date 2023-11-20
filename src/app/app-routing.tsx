import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Rices } from "./pages/rices/rices";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/dotfiles",
    element: <Rices></Rices>
  }
]);
