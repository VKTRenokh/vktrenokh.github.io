import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import "@fontsource/fira-code";
import { mode } from "@chakra-ui/theme-tools";

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "list-title": {
        textDecoration: "underline",
        fontSize: 16,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("teal", "#f4d35e")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  grassTeal: "#88ccca",
};

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors,
  components,
  fonts: {
    heading: "Fira Code",
    body: "Fira Code",
  },
});
