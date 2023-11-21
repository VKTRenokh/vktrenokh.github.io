import { RouterProvider } from "react-router-dom"
import { Header } from "./components/header/header"
import { router } from "./app-routing"

export const App = () => {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

