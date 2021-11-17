import type { NextPage } from "next";
import React from "react";
import {
  Flex,
  HStack,
  Icon,
  Tab,
  Box,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillChrome, AiOutlineCode, AiOutlineDesktop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { Layout, TabGrid } from "../components";

const Projects: NextPage = () => {
  return (
    <>
      <Layout
        title="Projects | Abhishek Jha"
        description="These are coding projects made by Abhishek Jha"
        relativeCanonicalURL="/projects"
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
                My Projects
              </Heading>
              <Text color={useColorModeValue("gray.700", "gray.300")} mt={3}>
                Here are some of the projects I have built :)
              </Text>
              <Tabs
                variant="soft-rounded"
                colorScheme="blue"
                align="center"
                w="100%"
                mt="10"
                mb="24"
              >
                <TabList display="flex" flexWrap="wrap">
                  <Tab
                    bg={useColorModeValue("white.100", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "red.800",
                      bg: "red.100",
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={AiOutlineCode} />
                      <Text>All</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "yellow.800",
                      bg: "yellow.100",
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={AiFillChrome} />
                      <Text>Web</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "blue.800",
                      bg: "blue.100",
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={BsPhone} />
                      <Text>Mobile</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "purple.800",
                      bg: "purple.100",
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={FaRobot} />
                      <Text>Python</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "gray.500")}
                    _selected={{
                      color: "teal.800",
                      bg: "teal.100",
                    }}
                    mr={2}
                    mt={2}
                  >
                    <HStack spacing={1}>
                      <Icon as={AiOutlineDesktop} />
                      <Text>Misc</Text>
                    </HStack>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TabGrid filter="All" />
                  </TabPanel>
                  <TabPanel>
                    <TabGrid filter="Web" />
                  </TabPanel>
                  <TabPanel>
                    <TabGrid filter="Mobile" />
                  </TabPanel>
                  <TabPanel>
                    <TabGrid filter="Python" />
                  </TabPanel>
                  <TabPanel>
                    <TabGrid filter="Misc" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Box>
        </main>
      </Layout>
    </>
  );
};

export default Projects;
