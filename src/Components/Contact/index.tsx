import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ContactForm } from "./Form";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";

export const Contact = () => {
  const [height, setHeight] = useState("");
  const [width, setwidth] = useState("");

  useEffect(() => {
    handleWindow();
    window.addEventListener("resize", handleWindow);
    return () => window.removeEventListener("resize", handleWindow);
  }, []);

  const handleWindow = () => {
    if (window.innerWidth < 1024) {
      setHeight("300");
      const newWidth = window.innerWidth - window.innerWidth * 0.35;
      setwidth(String(newWidth));
    } else {
      setHeight("700");
      const newWidth = window.innerWidth - window.innerWidth * 0.65;
      setwidth(String(newWidth));
    }
  };

  return (
    <Flex
      bgGradient={{
        base: "linear(to-t, primary-green 20%, white 10%)",
        lg: "linear(to-l, primary-green 30%, white 10%)",
      }}
      p="3rem 4rem"
      gap="4rem"
      flexDir={{ base: "column", lg: "row" }}
      align={{ base: "center" }}
      id="contact"
    >
      <Flex
        flexDir={"column"}
        gap="1.2rem"
        w="100%"
        maxW={"1000px"}
        margin={{ base: 0, lg: "0 auto" }}
      >
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
        <Flex
          maxW="500px"
          w="100%"
          margin="0 auto"
          flexDir={{ base: "column", lg: "row" }}
          align="flex-start"
          justify={"center"}
          gap="1rem"
        >
          <Flex align={"center"} justify="center" gap="0.5rem">
            <BsWhatsapp size={"30px"} />
            <VStack spacing={-1} align="flex-start">
              <Text fontWeight="bold">WhatsApp</Text>
              <Text fontSize={"12px"} color="primary-green">
                (19) 99828-3714
              </Text>
            </VStack>
          </Flex>
          <Flex align={"center"} justify="center" gap="0.5rem">
            <MdOutlineMailOutline size={"38px"} />
            <VStack spacing={-1} align="flex-start">
              <Text fontWeight="bold">E-mail</Text>
              <Text fontSize={"12px"} color="primary-green">
                nutri.fermartins@outlook.com
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.1063152252673!2d-47.487072685630295!3d-21.853434506624485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8024c75da4483%3A0xb0e4a2c33dc0c8d4!2sR.%20Bento%20Jos%C3%A9%20de%20Carvalho%2C%20223%2C%20Porto%20Ferreira%20-%20SP%2C%2013660-000!5e0!3m2!1spt-BR!2sbr!4v1674965027835!5m2!1spt-BR!2sbr"
          width={width}
          height={height}
          loading="lazy"
        ></iframe>
      </Flex>
    </Flex>
  );
};
