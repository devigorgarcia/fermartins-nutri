import { Divider, Flex, Heading } from "@chakra-ui/react";
import { RiBookOpenFill } from "react-icons/ri";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <Flex align={"center"} justify="center" flexDir={"column"} gap="2rem" p="0">
      <Heading fontSize={"45px"}>Serviços</Heading>
      <Flex flexDir={"column"} align="center" justify="center" gap="2rem">
        <Flex flexDir="column" align={"center"} w="100%">
          <Heading fontSize="30px">Presencial</Heading>
          <Divider m="1rem  0" />
          <Flex gap={"1rem"} wrap="wrap" align={"center"} justify="center">
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} align="center">
          <Heading size="lg">Online</Heading>
          <Divider m="1rem  0" />
          <Flex
            w="100%"
            gap={"1rem"}
            wrap="wrap"
            align={"center"}
            justify="center"
          >
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
            <ServicesCard title="Reducação Alimentar" icon={RiBookOpenFill}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolore delectus quos. Modi veniam doloremque fuga similique
              quisquam. Praesentium iusto fugiat corporis quaerat quam. Maiores
              natus eaque dolor at excepturi!
            </ServicesCard>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
