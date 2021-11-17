import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      display={isVisible ? "inline" : "none"}
      size="md"
      rounded="2xl"
      onClick={scrollToTop}
      position="fixed"
      right="5"
      bottom="5"
    >
      <FaArrowCircleUp />
    </Button>
  );
};
