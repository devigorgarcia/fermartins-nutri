import { Flex, Heading, Text } from "@chakra-ui/react";
import { TestemonialCard } from "./TestemonialCard";

export const Testemonials = () => {
  return (
    <Flex
      bg="#8f9779e"
      flexDir={"column"}
      align="center"
      justify={"center"}
      p="4rem 0"
      id='testemonials'
    >
      <Heading fontSize={"45px"}>Depoimentos</Heading>
      <Text fontSize={"18px"} w="90%" margin="01rem auto" textAlign={"center"}>
        Veja o que alguns clientes comentam sobre o meu atendimento.
      </Text>
      <Flex
        gap="1rem"
        align={"center"}
        justify="center"
        wrap={{ base: "nowrap", lg: "wrap" }}
        overflowX={{ base: "auto", lg: "hidden" }}
        w="100%"
        p="0 1rem"
      >
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
        <TestemonialCard name="Igor Garcia" date="27/01/2023">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          dolorum! Accusantium, natus. Ea architecto a ut sapiente provident
          dolor hic eum commodi! Quas animi corrupti ratione assumenda, tempora
          impedit eius!
        </TestemonialCard>
      </Flex>
    </Flex>
  );
};
