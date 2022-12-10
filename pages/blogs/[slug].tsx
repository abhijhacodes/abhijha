import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../../components/Blog";
import { Layout, PostContainer } from "../../components";
import { BlogFrontMatter, BlogFrontMatterValidator } from "../../types";
import { getNoteMetadata, postFilePaths } from "../../utils/mdxUtils";
import decodeWith from "../../utils/ioTsUtils";
import { FaCopy } from "react-icons/fa";

import {
  Text,
  Button,
  useClipboard,
  Heading,
  Stack,
  Avatar,
  Divider,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import remarkCodeTitles from "remark-code-titles";
import remarkSlug from "remark-slug";
import { TypingAnimation } from "../../components/Animations";

export default function PostPage(props: {
  source: any;
  frontMatter: BlogFrontMatter;
  postFileName: string;
}) {
  const frontMatter: any = decodeWith(BlogFrontMatterValidator)(
    props.frontMatter
  );
  const publishedAt = frontMatter.publishedAt;
  const postTitle = frontMatter.title;
  const postDescription = frontMatter.description;
  const postLink = `${frontMatter.__resourcePath.replace(".mdx", "")}`;
  const { hasCopied, onCopy } = useClipboard(`abhijha.in/blogs/${postLink}`);

  return (
    <>
      <Layout
        title={postTitle}
        description={postDescription}
        relativeCanonicalURL={postLink}
      >
        <Stack
          bg="yellow"
          pt={20}
          justifyContent="center"
          alignItems="center"
          css={{
            backgroundColor: useColorModeValue(
              "rgba(245, 242, 243, 0.8)",
              "rgba(20, 25, 36, 0.6)"
            ),
          }}
        >
          <Stack
            as="section"
            w={["100vw", "95vw"]}
            maxW="850px"
            p={["20px", "20px", "24px", "24px"]}
          >
            <VStack>
              <Heading
                as="h2"
                bgGradient="linear(to-r, #43B3AE, #e3192a)"
                bgClip="text"
                fontWeight="bold"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                <TypingAnimation text={postTitle} />
              </Heading>

              <Stack
                py={4}
                direction={{ base: "column", md: "row" }}
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Stack isInline alignItems="center">
                  <Avatar
                    name="Abhishek Jha"
                    size="xs"
                    src="/images/posterphoto.png"
                    border="1px solid #D1D5DB"
                  />
                  <Text
                    fontSize={["xs", "xs", "sm", "sm"]}
                    color={useColorModeValue("gray.700", "gray.300")}
                  >
                    Abhishek Jha / {dayjs(publishedAt).format("MMMM DD, YYYY")}
                  </Text>
                </Stack>
              </Stack>
              <Divider />
            </VStack>

            <PostContainer>
              <MDXRemote {...props.source} components={MDXComponents} />
            </PostContainer>
            <VStack pt={10} spacing={4}>
              <Divider />
              <HStack spacing={4} justifyContent="center" alignItems="center">
                <Heading size="md">Share Blog 🚀</Heading>
                <Button
                  rightIcon={<FaCopy />}
                  colorScheme="teal"
                  size="sm"
                  variant="outline"
                  onClick={onCopy}
                  boxShadow={
                    "0px 1px 25px -5px rgb(144 214 64 / 56%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    transform: "translate(2px, 6px)",
                  }}
                >
                  {hasCopied ? "Copied 👌 " : "Copy Link "}
                </Button>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const postFileName = `${params.slug}.mdx`;
  const { frontMatter, content } = getNoteMetadata(postFileName);

  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkCodeTitles],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
