import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactNode } from "react";

export interface IServiceCard {
  title: string;
  children: ReactNode;
  icon: IconType;
}

export const ServicesCard = ({ title, children, icon: Icon }: IServiceCard) => {
  return (
    <Box
      border="1px solid #4444441f"
      p="1rem"
      rounded="10px"
      maxW={"370px"}
      minW={"370px"}
      position="relative"
      mt="40px"
    >
      <Box
        bg="primary-green"
        p={"10px"}
        position={"absolute"}
        top="-35px"
        borderRadius={"10px 10px 10px 0"}
      >
        <Icon size={"30px"} color="white" />
      </Box>
      <Flex mt="10px" flexDir={"column"} gap="2rem" width={"80%"}>
        <Heading fontSize={"22px"}>{title}</Heading>
        <Text>{children}</Text>
      </Flex>
    </Box>
  );
};
