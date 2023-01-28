import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import logoFer from "../../assets/123607.svg";
export const Footer = () => {
  return (
    <Flex bg="primary-green" color="white">
      <Flex align={"center"} gap="0.25rem" flexDir={"column"}>
        <Image src={logoFer} width="150px" />
        <Flex flexDir={"column"} align={"center"}>
          <Text
            fontSize={"26px"}
            fontFamily={"Great Vibes, cursive"}
            letterSpacing="2px"
          >
            Fernanda Martins
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
