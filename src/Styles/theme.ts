import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1440px",
  },
  colors: {
    "primary-green": "#6D9E68",
    "secudary-white": "#FFFFFF",
    "bg-primary": "#F0F0F0",
    "button-bg": "#9ACD32",
  },
  styles: {
    global: {
      // "#mapa": {
      //   width: "600px",
      //   height: "700px",
      // },
      body: {
        color: "#444",
      },
    },
  },
});
