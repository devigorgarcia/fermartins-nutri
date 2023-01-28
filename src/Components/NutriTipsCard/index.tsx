import {
  Box,
  Card,
  CardBody,
  chakra,
  Collapse,
  Heading,
  Image,
  shouldForwardProp,
  Stack,
  Text,
  useDisclosure,
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
  const { isOpen, onToggle } = useDisclosure();
  const handleToggle = () => {
    onToggle();
    setIsHovered(!isHovered);
  };

  return (
    <Card maxW="sm" minW="300px">
      <CardBody onClick={handleToggle} cursor="pointer">
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
        <Collapse in={isOpen} animateOpacity>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{children}</Text>
          </Stack>
        </Collapse>
      </CardBody>
    </Card>
  );
};
