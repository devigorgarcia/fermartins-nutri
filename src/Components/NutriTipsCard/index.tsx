import {
  Box,
  Card,
  CardBody,
  chakra,
  Heading,
  Image,
  shouldForwardProp,
  Stack,
  Text,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { ReactNode, useState } from "react";

export interface INutriTipsProps {
  children: ReactNode;
  src: string;
  title: string;
}

export const NutriTipsCard = ({ children, src, title }: INutriTipsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHeigth, setCardHeigth] = useState("100px");

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop: any) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <Card
      maxW="sm"
      minW="300px"
      as={motion.div}
      onHoverStart={() => {
        setIsHovered(true);
        setCardHeigth("auto");
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setCardHeigth("100px");
      }}
    >
      <CardBody>
        <Box position="relative">
          <Image opacity={isHovered ? 1 : 0.7} src={src} borderRadius="lg" />
          <Box>
            <Heading
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              {title}
            </Heading>
          </Box>
        </Box>
        <ChakraBox
          as={motion.div}
          whileHover={{
            height: cardHeigth,
            overflow: "hidden",
          }}
        >
          <Stack
            mt="6"
            spacing="3"
            as={motion.div}
            animate={{ height: cardHeigth }}
            exit={{ height: 0 }}
          >
            {isHovered ? (
              <>
                <Heading size="md">{title}</Heading>
                <Text>{children}</Text>
              </>
            ) : null}
          </Stack>
        </ChakraBox>
      </CardBody>
    </Card>
  );
};
