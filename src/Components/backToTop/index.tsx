import { Box } from "@chakra-ui/react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { scroller } from "react-scroll";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    scroller.scrollTo("top", {
      duration: 1500,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <>
      {showButton && (
        <Box
          id="buttonback"
          position={"fixed"}
          bottom="10px"
          right="10px"
          cursor={"pointer"}
        >
          <BsFillArrowUpCircleFill
            color="black"
            size={"40px"}
            onClick={handleClick}
          />
        </Box>
      )}
    </>
  );
};
