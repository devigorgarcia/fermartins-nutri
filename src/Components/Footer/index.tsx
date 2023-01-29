import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
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
    <>
      <Flex flexDir={"column"}>
        <Flex w="100%" justify={"space-evenly"} bg="primary-green" p="3rem 0">
          <Flex align={"center"} gap="0.25rem" flexDir={"column"} w="33%">
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
            <Text>
              Acredito que a nutrição é a chave para o equilíbrio e saúde e
              estamos comprometidos em ajudá-lo a alcançar seus objetivos. Com
              orientação personalizada e um plano de ação especializado, juntos,
              vamos transformar sua saúde e bem-estar para melhor.
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            gap="0.5rem"
            align={{ base: "center", md: "flex-start" }}
            mt={{ base: 0, md: "10px" }}
            pl={{ base: 0, md: "3rem" }}
          >
            <Heading color={"white"}>Links Uteis</Heading>
            <Flex flexDir={"column"} gap="0.5rem">
              <Flex
                align={"center"}
                gap="0.5rem"
                _hover={{ color: "white", fontWeight: "bold" }}
                mt={{ base: "20px", md: "2rem" }}
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
                <Link href="#contact">Contatos</Link>
              </Flex>
            </Flex>
          </Flex>
          <VStack mt={{ base: 0, md: "10px" }} gap="0.5rem">
            <Heading mb={{ base: "20px", md: "2rem" }} color={"white"}>
              Socials
            </Heading>
            <Flex gap="1.4rem">
              <Tooltip label="Instagram">
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
                    _hover={{ color: "#F153B2", fontWeight: "bold" }}
                  >
                    <Flex
                      width="40px"
                      height="40px"
                      rounded={"50%"}
                      bg="white"
                      align={"center"}
                      justify="center"
                    >
                      <BsInstagram size="20px" />
                    </Flex>
                  </Flex>
                </Link>
              </Tooltip>
              <Tooltip label="WhatsApp">
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
                    _hover={{ color: "#25D366", fontWeight: "bold" }}
                  >
                    <Flex
                      width="40px"
                      height="40px"
                      rounded={"50%"}
                      bg="white"
                      align={"center"}
                      justify="center"
                    >
                      <BsWhatsapp size="20px" />
                    </Flex>
                  </Flex>
                </Link>
              </Tooltip>
              <Tooltip label="Facebook">
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
                    _hover={{ color: "#1877F2", fontWeight: "bold" }}
                  >
                    <Flex
                      width="40px"
                      height="40px"
                      rounded={"50%"}
                      bg="white"
                      align={"center"}
                      justify="center"
                    >
                      <BsFacebook size="20px" />
                    </Flex>
                  </Flex>
                </Link>
              </Tooltip>
            </Flex>
          </VStack>
        </Flex>
        <Flex bg="primary-green" flexDir={"column"} align="center">
          <Divider />
          <Text color={"white"} p="1rem 0">
            Desenvolvido por{" "}
            <Link
              href="https://portifolio-pink-two.vercel.app/"
              target={"_blank"}
            >
              Igor Garcia
            </Link>
            {" "}&copy; 2022
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
