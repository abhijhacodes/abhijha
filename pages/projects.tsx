import type { NextPage } from "next";
import {
  Flex,
  Box,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Layout, TabGrid } from "../components";
import { TabListData } from "../data/Projects";
import { TabItem } from "../components/TabItem";

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
                  {TabListData.map((tabData, index) => (
                    <TabItem {...tabData} key={index} />
                  ))}
                </TabList>

                <TabPanels>
                  {TabListData.map((tabData, index) => (
                    <TabPanel key={index}>
                      <TabGrid filter={tabData.title} />
                    </TabPanel>
                  ))}
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
