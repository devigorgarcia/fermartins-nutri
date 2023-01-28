import { Flex, Stack } from "@chakra-ui/react";
import { INavLinksProps } from "../../Interfaces/Header/Header.interfaces";
import { MenuItem } from "./MenuItem";

export const NavLinks = ({ isOpen, setIsOpen }: INavLinksProps) => {
  return (
    <Flex
      mt="1rem"
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={{ sm: "1rem" }}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
      >
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#">
          Início
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#main">
          Dicas da Nutri
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#aboutMe">
          Sobre
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#services">
          Serviços
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#testemonials">
          Depoimentos
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} isOpen={isOpen} to="#contact">
          Contato
        </MenuItem>
      </Stack>
    </Flex>
  );
};
