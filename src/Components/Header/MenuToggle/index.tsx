import { Box } from "@chakra-ui/react";
import { IMenuOpenProps } from "../../Interfaces/Header/Header.interfaces";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuToggle = ({ isOpen, toggle }: IMenuOpenProps) => {
  return (
    <>
      <Box onClick={toggle} display={{ base: "block", md: "none" }}>
        {isOpen ? (
          <IoMdClose cursor="pointer" />
        ) : (
          <GiHamburgerMenu cursor="pointer" />
        )}
      </Box>
    </>
  );
};
