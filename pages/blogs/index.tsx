import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Layout, PostCard } from "../../components/";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { searchInFrontMatter, sortByPublishedAt } from "../../utils/postUtils";
import { getNotesMetadata } from "../../utils/mdxUtils";
import { BlogFrontMatter } from "../../types";
import { TypingAnimation } from "../../components/Animations";

export function getStaticProps() {
  return { props: { notes: getNotesMetadata() } };
}

const Blog = ({ notes }: { notes: BlogFrontMatter[] }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const sortedPosts = notes.sort(sortByPublishedAt);
  const [posts, setPosts] = useState(sortedPosts);

  const filterPostsOnSearch = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);

    const filteredPosts = sortedPosts
      .filter((f: BlogFrontMatter) => !f.draft)
      .filter((f: BlogFrontMatter) => searchInFrontMatter(f, newSearchQuery))
      .filter((f: BlogFrontMatter) => f.isBlogPost === true);

    setPosts(filteredPosts);
  };

  return (
    <>
      <Layout
        title="Blogs | Abhishek Jha"
        description="Blog posts by Abhishek Jha"
        relativeCanonicalURL="/blogs"
      >
        <Box
          css={{
            backgroundColor: useColorModeValue(
              "rgba(245, 242, 243, 0.8)",
              "rgba(20, 25, 36, 0.6)"
            ),
          }}
        >
          <Flex
            as="main"
            justifyContent="center"
            flexDirection="column"
            px={4}
            minH="100vh"
            mx="auto"
            maxW="950px"
          >
            <Stack spacing={7} alignItems="center" mb="30px">
              <Heading
                as="h2"
                bgGradient="linear(to-l, #43B3AE, #e3192a)"
                bgClip="text"
                fontWeight="bold"
                mt="24"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                <TypingAnimation text="My Blogs" />
              </Heading>
              <Text color={useColorModeValue("gray.700", "gray.300")}>
                This is my piece of the internet where I write some stuff.
                Mostly related to coding.
              </Text>
              <Divider mt={4} color="red" />
              <InputGroup
                justifyContent="center"
                alignItems="center"
                width={{ base: "100%", md: "80%", lg: "95%" }}
              >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  textAlign="center"
                  borderWidth="0.5px"
                  borderColor={useColorModeValue("teal.300", "teal.800")}
                  placeholder="Search blogs by title, tag or description"
                  onChange={(e) => filterPostsOnSearch(e.target.value)}
                  value={searchQuery}
                />
              </InputGroup>
              {posts.length > 0 ? (
                posts.map((frontMatter: BlogFrontMatter) => (
                  <PostCard
                    key={frontMatter.title}
                    frontMatter={frontMatter}
                    folderPrefix="blogs/"
                  />
                ))
              ) : (
                <Heading as="h2" color="red.400">
                  No Posts Found {searchQuery.length > 0 && "for your search"}
                </Heading>
              )}
            </Stack>
          </Flex>
        </Box>
      </Layout>
    </>
  );
};

export default Blog;
