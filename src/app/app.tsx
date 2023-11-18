import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { theme } from './theme'
import { router } from "./app-routing"
import { Header } from "./components/header/header"

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Header></Header>
        <RouterProvider router={router}></RouterProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

