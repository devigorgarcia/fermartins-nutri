import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Fer from "../../assets/fer.png";

export const AboutMe = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Flex align="center" justify={"center"} flexDir="column" gap={"1rem"} p='4rem 0'>
      <Heading>SOBRE MIM</Heading>
      <Flex
        flexDir={{ base: "column", md: "row-reverse" }}
        align="center"
        gap="2rem"
        width="100%"
        justify={"center"}
      >
        <Box
          width="200px"
          height="200px"
          borderRadius="50%"
          bg="pink"
          position="relative"
          overflow="hidden"
        >
          <Image src={Fer} position="absolute" width="100%" />
        </Box>
        <Text lineHeight={"1.6"} maxW="60%">
          Fernanda Martins, {currentYear - 1995} anos, sou graduada em nutrição
          pela Universidade Federal do Triângulo Mineiro (2018), ao final da
          faculdade entrei para o programa de Residência Multiprofissional em
          saúde do adulto no Hospital de Clínicas HC-UFTM (2021), atuando na
          clínica médica, endocrinologia, neurologia, clínica cirurgica,
          oncologia e UTI coronariana, atualmente pós-graduanda em Nutrição
          Esportiva.
        </Text>
      </Flex>
    </Flex>
  );
};
