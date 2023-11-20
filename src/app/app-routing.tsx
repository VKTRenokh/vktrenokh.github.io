import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    lazy: () => import('@/app/pages/home/home')
  },
  {
    path: "/dotfiles",
    lazy: () => import('@/app/pages/rices/rices')
  }
]);
