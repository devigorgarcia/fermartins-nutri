import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
export interface ITesmemonialCard {
  name: string;
  children: ReactNode;
  date: string;
}

export const TestemonialCard = ({ name, children, date }: ITesmemonialCard) => {
  return (
    <Flex
      border="1px solid #4444441a"
      p="1rem"
      minW="350px"
      maxW="350px"
      flexDir={"column"}
      gap="3rem"
      rounded={"9px"}
    >
      <Flex>
        <Text>"{children}"</Text>
      </Flex>
      <Flex align={"center"} justify="space-between">
        <Flex align={"center"} gap="1rem">
          <Avatar size={"sm"} name={name} />
          <Heading size={"md"}>{name}</Heading>
        </Flex>
        <Text>{date}</Text>
      </Flex>
    </Flex>
  );
};
