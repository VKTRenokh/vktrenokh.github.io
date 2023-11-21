import { RouterProvider } from "react-router-dom"
import { router } from "./app-routing"
import { lazy, Suspense } from "react"

const Header = lazy(() => import('@/app/components/header/header'))

export const App = () => {
  return (
    <>
      <Suspense>
        <Header></Header>
      </Suspense>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

