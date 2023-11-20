import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { theme } from './theme'
import { Header } from "./components/header/header"
import { router } from "./app-routing"

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

