import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { MenuToggle } from "./MenuToggle";
import { NavLinks } from "./NavLinks";
import { useEffect, useState } from "react";
import logoFer from "../../assets/123607.svg";
import { Element } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (screenWidth > 768) {
      setIsOpen(false);
    }
  }, [screenWidth]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Element name="top">
      <Flex
        as="nav"
        align="center"
        justify={[
          "space-between",
          "space-between",
          "space-between",
          "space-evenly",
        ]}
        wrap="wrap"
        w="100%"
        h={"100%"}
        p={["1rem 3rem"]}
        boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
        bg={"white"}
      >
        <Flex align={"center"} gap="0.25rem" flexDir={"column"}>
          <Image src={logoFer} width="150px" />
          <Flex flexDir={"column"} align={"center"}>
            <Heading
              letterSpacing={"2px"}
              fontSize={"24px"}
              fontFamily={"Great Vibes, cursive;"}
            >
              Fernanda Martins
            </Heading>
            <Text fontSize={"14px"}>Nutricionista - CRN3 55526</Text>
          </Flex>
        </Flex>
        <MenuToggle isOpen={isOpen} toggle={toggle} />
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      </Flex>
    </Element>
  );
};
