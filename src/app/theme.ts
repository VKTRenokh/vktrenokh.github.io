import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import "@fontsource/fira-code";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    bg: mode("#f0e7db", "#202023")(props),
  }),
};

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles,
  fonts: {
    heading: "Fira Code",
    body: "Fira Code",
  },
});
