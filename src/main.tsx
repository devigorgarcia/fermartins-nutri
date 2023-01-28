import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./Styles/theme";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </ChakraProvider>
);
