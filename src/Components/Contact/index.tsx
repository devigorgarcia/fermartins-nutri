import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ContactForm } from "./Form";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

export const Contact = () => {
  return (
    <Flex
      bgGradient={{
        base: "linear(to-t, primary-green 20%, white 10%)",
        md: "linear(to-l, primary-green 30%, white 10%)",
      }}
      p="3rem 4rem"
      gap="4rem"
      flexDir={{ base: "column", md: "row" }}
      align={{ base: "center" }}
    >
      <Flex flexDir={"column"} gap="1.2rem">
        <Heading>
          Peça seu{" "}
          <Text as="span" color="primary-green">
            orçamento
          </Text>
        </Heading>
        <Text>
          Por favor, preencha o formulário abaixo para solicitar um orçamento.
          Forneça detalhes sobre o objetivo que procura,e nós entraremos em
          contato o mais breve possível com uma cotação personalizada.
        </Text>
        <ContactForm />
        <HStack justify={"space-around"}>
          <Flex align={"center"} justify="center" gap="0.5rem">
            <BsWhatsapp size={"30px"} />
            <VStack spacing={-1} align="flex-start">
              <Text fontWeight="bold">WhatsApp</Text>
              <Text fontSize={"12px"} color="primary-green">
                (11)11111-1111
              </Text>
            </VStack>
          </Flex>
          <Flex align={"center"} justify="center" gap="0.5rem">
            <MdOutlineMailOutline size={"38px"} />
            <VStack spacing={-1} align="flex-start">
              <Text fontWeight="bold">E-mail</Text>
              <Text fontSize={"14px"} color="primary-green">
                fermartins.nutri@gmail.com
              </Text>
            </VStack>
          </Flex>
        </HStack>
      </Flex>
      <Flex>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8862.891407150202!2d-48.47081607962328!3d-20.936976013128827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bbe7f0024c9d75%3A0xbc1c8e0104def0c0!2sNutricionista%20Larissa%20T%C3%A1tero!5e0!3m2!1spt-BR!2sbr!4v1674960208428!5m2!1spt-BR!2sbr"
          width="600"
          height="700"
          loading="lazy"
          id="mapa"
        ></iframe>
      </Flex>
    </Flex>
  );
};
