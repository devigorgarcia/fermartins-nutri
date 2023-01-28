import { Flex } from "@chakra-ui/react";
import { AboutMe } from "../../Components/About";
import { Header } from "../../Components/Header";
import { Hero } from "../../Components/Hero";

export const HomePage = () => {
  return (
    <Flex flexDir={"column"} gap='2rem'>
      <Header />
      <AboutMe />
      <Hero />
    </Flex>
  );
};
