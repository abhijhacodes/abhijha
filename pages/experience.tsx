import {
  Container,
  Icon,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Layout } from "../components";

const Experience = () => {
  return (
    <>
      <Layout
        title="Experience | Abhishek Jha"
        description="My work experiences in software engineering"
        relativeCanonicalURL="/experience"
      >
        <main>
          <Box
            css={{
              backgroundColor: useColorModeValue(
                "rgba(245, 242, 243, 0.8)",
                "rgba(20, 25, 36, 0.6)"
              ),
            }}
          >
            <Flex
              direction="column"
              alignItems="center"
              width={{ base: "95%", md: "80%", lg: "90%" }}
              minH="100vh"
              mx="auto"
              maxW="6xl"
            >
              <Heading
                as="h2"
                bgGradient="linear(to-r, #43B3AE, #e3192a)"
                bgClip="text"
                fontWeight="bold"
                mt="24"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                textAlign="center"
              >
                Work Experience
              </Heading>
            </Flex>
          </Box>
        </main>
      </Layout>
    </>
  );
};

export default Experience;
