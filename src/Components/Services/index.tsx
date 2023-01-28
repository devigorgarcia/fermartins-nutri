import { Divider, Flex, Heading } from "@chakra-ui/react";
import { RiBookOpenFill } from "react-icons/ri";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <Flex flexDir={"column"} gap="2rem" p="0" id="services">
      <Heading alignSelf={"center"} fontSize={"45px"}>
        Serviços
      </Heading>
      <Flex flexDir={"column"} gap="2rem">
        <Flex flexDir="column">
          <Heading pl="4rem" alignSelf={"flex-start"} fontSize="30px">
            Presencial
          </Heading>
          <Divider m="1rem  0" />
          <Flex
            gap="1rem"
            align={"center"}
            justify={{ base: "flex-start", lg: "center" }}
            wrap={{ base: "nowrap", lg: "wrap" }}
            overflowX={{ base: "auto", lg: "hidden" }}
            w="100%"
            p="0 1rem"
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
        <Flex flexDir={"column"} align="center" w="100%">
          <Heading size="lg" pl="4rem" alignSelf={"flex-start"} fontSize="30px">
            Online
          </Heading>
          <Divider m="1rem  0" />
          <Flex
            gap="1rem"
            align={"center"}
            justify={{ base: "flex-start", lg: "center" }}
            wrap={{ base: "nowrap", lg: "wrap" }}
            overflowX={{ base: "auto", lg: "hidden" }}
            w="100%"
            p="0 1rem"
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
