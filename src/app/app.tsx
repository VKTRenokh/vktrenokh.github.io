import { ChakraProvider } from "@chakra-ui/react"
import { Home } from "./pages/home/home"
import { theme } from './theme'
import "../styles/style.css"

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider>
  )
}

