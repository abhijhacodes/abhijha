import {
  Flex,
  Heading,
  Text,
  Box,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../components";
import { ExperienceCard } from "../components/ExperienceCard";
import { TypingAnimation } from "../components/Animations";
import { ExperienceData } from "../data/Experience";

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
                bgGradient="linear(to-r, #cc6c06, #22b5ab)"
                bgClip="text"
                fontWeight="bold"
                mt="24"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                textAlign="center"
              >
                <TypingAnimation text=" Work Experience" />
              </Heading>
              <Text color={useColorModeValue("gray.700", "gray.300")} mt={3}>
                A summary of my work experiences 🚀
              </Text>
              <VStack spacing={8} py={8} px={2}>
                {ExperienceData.map((experience, index) => (
                  <ExperienceCard {...experience} key={index} />
                ))}
              </VStack>
            </Flex>
          </Box>
        </main>
      </Layout>
    </>
  );
};

export default Experience;
