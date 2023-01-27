import { Box, chakra, Link, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

import { IMenuLinksProps } from "../../../Interfaces/Header/Header.interfaces";

export const MenuItem = ({
  children,
  to,
  setIsOpen,
  isOpen,
  ...rest
}: IMenuLinksProps) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop: any) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      {isOpen ? (
        <ChakraBox
          as={motion.div}
          whileHover={{
            borderBottom: "2px solid green",
            color: "green",
            width: "100%",
            fontWeight: "600",
          }}
          transition="0.2s ease"
        >
          <Link onClick={() => setIsOpen(false)} _hover={{}} href={to}>
            <Text
              textAlign={["left", "left", "center", "center"]}
              display={"flex"}
              alignItems="center"
              align={"center"}
              fontSize={["18px", "17px"]}
              gap="2"
              {...rest}
            >
              {children}
            </Text>
          </Link>
        </ChakraBox>
      ) : (
        <ChakraBox
          as={motion.div}
          whileHover={{
            borderBottom: "2px solid green",
            color: "green",
            fontWeight: "600",
          }}
          transition="0.2s ease"
        >
          <Link onClick={() => setIsOpen(false)} href={to} _hover={{}}>
            <Text
              textAlign={["left", "left", "center", "center"]}
              display={"flex"}
              alignItems="center"
              align={"center"}
              fontSize={["18px", "17px"]}
              gap="2"
              {...rest}
            >
              {children}
            </Text>
          </Link>
        </ChakraBox>
      )}
    </>
  );
};
