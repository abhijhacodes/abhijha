import {
  Box,
  Flex,
  Heading,
  Link,
  Skeleton,
  Stack,
  Container,
  useColorModeValue,
  Tag,
  Image,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TagColor } from "../../data/TagColor";

interface LinkCardProps {
  name: string;
  description?: string;
  link: string;
  tags?: Array<string>;
  hero?: string;
  isLoading?: boolean;
}

export const LinkCard = ({
  name,
  description,
  link,
  tags,
  hero,
  isLoading,
}: LinkCardProps) => {
  const isLoadingFromProps = isLoading || false;
  return (
    <NextLink href={link} passHref>
      <Link
        w={{ base: "100%", md: "80%", lg: "95%" }}
        _hover={{ textDecoration: "none" }}
        borderWidth="0.5px"
        borderColor={useColorModeValue("teal.300", "teal.800")}
        backgroundColor={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        borderRadius="lg"
        padding="1.5rem"
      >
        <Skeleton isLoaded={!isLoadingFromProps}>
          <Box display="block" width="100%">
            <Flex
              width="100%"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Stack display="flex" direction={{ base: "column", lg: "row" }}>
                <Container align="flex-start">
                  <Stack
                    direction="row"
                    align="center"
                    style={{ width: "100%" }}
                    justify="space-between"
                  >
                    <Heading size="md" as="h3" letterSpacing="tight">
                      {name}
                    </Heading>
                  </Stack>
                  {description && (
                    <Text
                      mt="1rem"
                      fontSize="md"
                      color="gray.500"
                      variant="solid"
                      colorScheme="teal"
                    >
                      {description}
                    </Text>
                  )}
                  {tags && (
                    <Stack direction="row" mt="1rem">
                      {tags?.map((tag: string) => {
                        const tagColor = TagColor[tag];
                        return (
                          <Tag
                            key={tag}
                            backgroundColor={tagColor.bgColor}
                            color="white"
                            cursor="pointer"
                            _hover={{ backgroundColor: tagColor.hover }}
                          >
                            {tag}
                          </Tag>
                        );
                      })}
                    </Stack>
                  )}
                </Container>
                <Image
                  display={{ base: "none", lg: "block" }}
                  align="flex-end"
                  alt="blog hero image"
                  src={hero ? hero : "/images/blog/blogging.svg"}
                  height={120}
                  width={200}
                />
              </Stack>
            </Flex>
          </Box>
        </Skeleton>
      </Link>
    </NextLink>
  );
};
