import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

const root = document.createElement('div')

document.body.append(root)

createRoot(root).render(<ChakraProvider theme={theme}><App /></ChakraProvider>)
