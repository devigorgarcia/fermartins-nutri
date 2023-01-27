import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";

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
    "bg-primary": "#F5F5DC",
    "button-bg": "#9ACD32",
  },
  
});
