import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import "@fontsource/fira-code";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    bg: mode("#f0e7db", "#202023")(props),
  }),
};

const config = {
  initialColorMode: "dark",
};

export const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "Fira Code",
    body: "Fira Code",
  },
});
