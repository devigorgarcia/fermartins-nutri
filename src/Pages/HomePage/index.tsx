import { Flex } from "@chakra-ui/react";
import { AboutMe } from "../../Components/About";
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
    </Flex>
  );
};
