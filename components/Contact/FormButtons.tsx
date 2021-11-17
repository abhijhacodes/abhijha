import { Button, VStack, Box } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export const FormButtons = () => {
  return (
    <Box
      py={{ base: 5, sm: 5, md: 8, lg: 10 }}
      alignItems="center"
      justifyContent="center"
    >
      <VStack pl={0} spacing={3} alignItems="center">
        <Button
          size="md"
          height="48px"
          width="200px"
          variant="ghost"
          color="#DCE2FF"
          _hover={{ border: "2px solid #1C6FEB" }}
          leftIcon={<MdPhone color="#1970F1" size="20px" />}
        >
          +91-8485974511
        </Button>
        <Button
          size="md"
          height="48px"
          width="200px"
          variant="ghost"
          color="#DCE2FF"
          _hover={{ border: "2px solid #1C6FEB" }}
          leftIcon={<MdEmail color="#1970F1" size="20px" />}
        >
          abhi.jha.cs@gmail.com
        </Button>
        <Button
          size="md"
          height="48px"
          width="200px"
          variant="ghost"
          color="#DCE2FF"
          _hover={{ border: "2px solid #1C6FEB" }}
          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
        >
          Surat, India
        </Button>
      </VStack>
    </Box>
  );
};
