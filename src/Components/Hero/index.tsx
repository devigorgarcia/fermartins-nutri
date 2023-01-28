import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import dicaNutri from "../../assets/fruit-2109043_1280.jpg";
import { NutriTipsCard } from "../NutriTipsCard";
import parallaxBG from "../../assets/parallaxjpg.jpg";
import { MdTipsAndUpdates } from "react-icons/md";

export const Hero = () => {
  return (
    <ParallaxBanner
      layers={[{ image: parallaxBG, speed: -90 }]}
      style={{ padding: "2rem 0" }}
    >
      <Container maxW={"100%"}>
        <Flex
          p="4rem 0"
          gap={"2rem"}
          align="center"
          justify={"center"}
          rounded="10px"
          id="main"
        >
          <Flex flexDir={"column"} align="center" justify={"center"} gap="2rem">
            <ParallaxBannerLayer style={{ margin: "2rem 0" }}>
              <Flex
                align={"center"}
                justify="center"
                color={"black"}
                bg="white"
                w={{base: "90%", md: "50%", lg: "40%"}}
                m="0 auto"
                rounded={"10"}
                position="relative"
              >
                <Box
                  bg="primary-green"
                  p={"10px"}
                  position={"absolute"}
                  top="-20px"
                  right={"-20px"}
                  borderRadius={"10px 10px 10px 0"}
                >
                  <MdTipsAndUpdates color="white" size={"25px"} />
                </Box>
                <Heading>DICAS DA NUTRI</Heading>
              </Flex>
            </ParallaxBannerLayer>

            <Flex gap={"2rem"} wrap="wrap" justify="center" mt="2rem">
              <Box>
                <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae provident aperiam consequatur corporis deleniti
                  velit iusto praesentium, delectus illum neque doloremque
                  optio, sequi reprehenderit commodi numquam! Culpa, laudantium.
                  Consequatur, quibusdam?
                </NutriTipsCard>
              </Box>
              <Box>
                <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae provident aperiam consequatur corporis deleniti
                  velit iusto praesentium, delectus illum neque doloremque
                  optio, sequi reprehenderit commodi numquam! Culpa, laudantium.
                  Consequatur, quibusdam?
                </NutriTipsCard>
              </Box>
              <Box>
                <NutriTipsCard title="Dica 1'" src={dicaNutri}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae provident aperiam consequatur corporis deleniti
                  velit iusto praesentium, delectus illum neque doloremque
                  optio, sequi reprehenderit commodi numquam! Culpa, laudantium.
                  Consequatur, quibusdam?
                </NutriTipsCard>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </ParallaxBanner>
  );
};
