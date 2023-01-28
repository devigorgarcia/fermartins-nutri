import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import dicaNutri from "../../assets/fruit-2109043_1280.jpg";
import { NutriTipsCard } from "../NutriTipsCard";
import Slider from "react-slick";

export const Hero = () => {
  return (
    <Flex bg="primary-green" color="white" gap={"2rem"}>
      <Container maxW={"80%"}>
        <Flex flexDir={"column"} align="center" justify={"center"} gap="1rem">
          <Heading mt="1rem">DICA DA NUTRI</Heading>
          <Divider />
          <Flex gap={"2rem"} wrap="wrap" gijustify="center">
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
