import {
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import logoFerWhite from "../../assets/123607-white.svg";
import {
  BsLink45Deg,
  BsInstagram,
  BsWhatsapp,
  BsFacebook,
} from "react-icons/bs";
export const Footer = () => {
  return (
    <Flex
      bg="primary-green"
      color="black"
      p="4rem 2rem"
      align={"center"}
      justify="center"
      flexDir={"column"}
      gap="2rem"
    >
      <Flex align={"center"} gap="0.25rem" flexDir={"column"}>
        <Image src={logoFerWhite} width="250px" />
        <Flex flexDir={"column"} align={"center"}>
          <Text
            fontSize={"36px"}
            fontFamily={"Great Vibes, cursive"}
            letterSpacing="2px"
            color="white"
          >
            Fernanda Martins
          </Text>
        </Flex>
      </Flex>
      <Text>
        Acredito que a nutrição é a chave para o equilíbrio e saúde e estamos
        comprometidos em ajudá-lo a alcançar seus objetivos. Com orientação
        personalizada e um plano de ação especializado, juntos, vamos
        transformar sua saúde e bem-estar para melhor.
      </Text>
      <Heading color={"white"}>Links Uteis</Heading>
      <VStack align={"flex-start"} w="150px">
        <Flex
          align={"center"}
          gap="0.5rem"
          _hover={{ color: "white", fontWeight: "bold" }}
        >
          <BsLink45Deg size="18px" />
          <Link href="#aboutMe">Sobre Mim</Link>
        </Flex>
        <Flex
          align={"center"}
          gap="0.5rem"
          _hover={{ color: "white", fontWeight: "bold" }}
        >
          <BsLink45Deg size="18px" />
          <Link href="#main">Dicas Da Nutri</Link>
        </Flex>
        <Flex
          align={"center"}
          gap="0.5rem"
          _hover={{ color: "white", fontWeight: "bold" }}
        >
          <BsLink45Deg size="18px" />
          <Link href="#services">Serviços</Link>
        </Flex>
        <Flex
          align={"center"}
          gap="0.5rem"
          _hover={{ color: "white", fontWeight: "bold" }}
        >
          <BsLink45Deg size="18px" />
          <Link href="#testemonials">Depoimentos</Link>
        </Flex>
        <Flex
          align={"center"}
          gap="0.5rem"
          _hover={{ color: "white", fontWeight: "bold" }}
        >
          <BsLink45Deg size="18px" />
          <Link>Contatos</Link>
        </Flex>
      </VStack>
      <Heading color={"white"}>Socials</Heading>
      <HStack spacing={6}>
        <Link
          _hover={{ textDecor: "none" }}
          href="https://www.instagram.com/femartins.nutri/"
          target={"_blank"}
        >
          <Flex
            flexDir="column"
            align={"center"}
            gap="0.4rem"
            cursor={"pointer"}
            _hover={{ color: "white", fontWeight: "bold" }}
          >
            <BsInstagram size="20px" />
            <Text>Instagram</Text>
          </Flex>
        </Link>
        <Link
          _hover={{ textDecor: "none" }}
          href="https://api.whatsapp.com/send?phone=5519998283714"
          target={"_blank"}
        >
          <Flex
            flexDir="column"
            align={"center"}
            gap="0.4rem"
            cursor={"pointer"}
            _hover={{ color: "white", fontWeight: "bold" }}
          >
            <BsWhatsapp size="20px" />
            <Text>WhatsApp</Text>
          </Flex>
        </Link>
        <Link
          _hover={{ textDecor: "none" }}
          href="https://www.facebook.com/fernanda.martins.7127"
          target={"_blank"}
        >
          <Flex
            flexDir="column"
            align={"center"}
            gap="0.4rem"
            cursor={"pointer"}
            _hover={{ color: "white", fontWeight: "bold" }}
          >
            <BsFacebook size="20px" />
            <Text>Facebook</Text>
          </Flex>
        </Link>
      </HStack>
    </Flex>
  );
};
