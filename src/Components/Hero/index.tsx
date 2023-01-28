import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import dicaNutri from "../../assets/fruit-2109043_1280.jpg";
import { NutriTipsCard } from "../NutriTipsCard";

export const Hero = () => {
  return (
    <Flex bg="primary-green" color="white" p='2rem 0' gap={"2rem"}>
      <Container maxW={"100%"}>
        <Flex flexDir={"column"} align="center" justify={"center"} gap="2rem">
          <Heading mt="1rem">DICA DA NUTRI</Heading>
          <Divider />
          <Flex gap={"2rem"} wrap="wrap" justify="center">
            <Box>
              <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae provident aperiam consequatur corporis deleniti velit
                iusto praesentium, delectus illum neque doloremque optio, sequi
                reprehenderit commodi numquam! Culpa, laudantium. Consequatur,
                quibusdam?
              </NutriTipsCard>
            </Box>
            <Box>
              <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae provident aperiam consequatur corporis deleniti velit
                iusto praesentium, delectus illum neque doloremque optio, sequi
                reprehenderit commodi numquam! Culpa, laudantium. Consequatur,
                quibusdam?
              </NutriTipsCard>
            </Box>
            <Box>
              <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae provident aperiam consequatur corporis deleniti velit
                iusto praesentium, delectus illum neque doloremque optio, sequi
                reprehenderit commodi numquam! Culpa, laudantium. Consequatur,
                quibusdam?
              </NutriTipsCard>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
