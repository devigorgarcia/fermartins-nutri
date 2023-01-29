import { Divider, Flex } from "@chakra-ui/react";
import { AboutMe } from "../../Components/About";
import { BackToTop } from "../../Components/backToTop";
import { Contact } from "../../Components/Contact";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Hero } from "../../Components/Hero";
import { Services } from "../../Components/Services";
import { Testemonials } from "../../Components/Testemonials";

export const HomePage = () => {
  return (
    <Flex flexDir={"column"} gap="2rem">
      <Header />
      <AboutMe />
      <Hero />
      <Services />
      <Testemonials />
      <Divider />
      <Contact />
      <Footer />
      <BackToTop />
    </Flex>
  );
};
