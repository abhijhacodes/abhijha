import {
  Container,
  Stack,
  Heading,
  Image,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { CONFETTI_LIGHT, CONFETTI_DARK, Socials } from "./";

export const Hero = () => {
  return (
    <Box
      minH="100vh"
      css={{
        backgroundColor: useColorModeValue(
          "rgba(245, 242, 243, 0.8)",
          "rgba(20, 25, 36, 0.6)"
        ),
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
    >
      <Stack
        as={Container}
        display="flex"
        maxW={"7xl"}
        position="relative"
        h={{ base: "100%", lg: "100vh" }}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 0, lg: 24 }}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
      >
        <Stack
          spacing={8}
          mb={{ base: 12, lg: 0 }}
          flex={{ base: "0.8", md: "0.6", lg: "0.6" }}
        >
          <Heading
            as={"h2"}
            bgGradient="linear(to-r, #43B3AE, #e3192a)"
            bgClip="text"
            fontWeight="bold"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            maxW={"2xl"}
          >
            Hi, I&apos;m Abhishek Jha
          </Heading>
          <Stack spacing={2}>
            <Text
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              maxW={"3xl"}
            >
              Programmer | Developer | Designer
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              maxW={"2xl"}
            >
              I build apps for the web, mobile and machines.
              <br /> I can build scalable softwares and solve competitive
              programming problems.
            </Text>
          </Stack>
          <Socials />
        </Stack>
        <Box flex={{ base: "0.2", md: "0.4", lg: "0.4" }}>
          <Image
            src="/images/heroImage.svg"
            height={{ base: "300", md: "400", lg: "500" }}
            alt="hero image"
            width={{ base: "300", md: "400", lg: "500" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
