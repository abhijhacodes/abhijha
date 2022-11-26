import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ProjectsData as Projects } from "../data/Projects";
import { ProjectCard } from "./";

export const Featured = () => {
  return (
    <Stack
      minH={"100vh"}
      as="main"
      spacing="144px"
      css={{
        backgroundColor: useColorModeValue(
          "rgba(245, 242, 243, 0.8)",
          "rgba(20, 25, 36, 0.6)"
        ),
      }}
      justifyContent="center"
      alignItems="flex-start"
      px={{ base: "5vw", md: "10vw" }}
      mt={{ base: "15vh", md: "22.5vh" }}
    >
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <Stack spacing={1}>
            <Stack isInline alignItems="center" justifyContent="space-between">
              <Heading
                fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                bgGradient="linear(to-r, #50DBB4, #E21717)"
                bgClip="text"
                fontWeight="bold"
              >
                Featured projects
              </Heading>
              <NextLink href="/projects" passHref>
                <Link href="/projects">
                  <Text
                    display={{ base: "block", md: "none" }}
                    fontSize={{ base: "md", md: "xl" }}
                    color="#F4CE6A"
                  >
                    {" "}
                    See all projects&rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
            <Text fontSize={{ base: "md", md: "xl" }}>
              Here are some of my projects that I have worked on.
            </Text>
            <NextLink href="/projects">
              <Link href="/projects">
                <Text
                  display={{ base: "none", md: "block" }}
                  fontSize={{ base: "lg", md: "xl" }}
                  color="#F4CE6A"
                >
                  See all projects&rarr;
                </Text>
              </Link>
            </NextLink>
          </Stack>
          <ProjectCard {...Projects[0]} key={"1"} />
          <Box mt={{ md: "-50%" }}>
            <ProjectCard {...Projects[1]} key={"2"} />
          </Box>
          <ProjectCard {...Projects[2]} key={"3"} />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
