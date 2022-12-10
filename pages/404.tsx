import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Layout } from "../components";
import { TypingAnimation } from "../components/Animations";

const NotFound = () => {
  return (
    <>
      <Layout
        title="Page Not Found"
        description="Page you are trying to visit is not available, please check URL"
        relativeCanonicalURL=""
      >
        <Flex align={"center"} justify={"center"} h={"100vh"} w={"full"}>
          <Stack
            as={Container}
            bg={useColorModeValue("gray.50", "gray.900")}
            rounded={"xl"}
            p={8}
            spacing={6}
            maxW={"lg"}
            align={"center"}
            textAlign={"center"}
          >
            <Stack spacing={2}>
              <Heading>
                <TypingAnimation text="Page not found" />
              </Heading>
              <Text>
                This page was not found. You may have mistyped the address or
                the page may have moved.
              </Text>
            </Stack>
            <Flex>
              <NextLink href={"/"} passHref>
                <Button
                  as={"a"}
                  colorScheme={"green"}
                  rounded={"full"}
                  bg={"green.400"}
                  _hover={{ bg: "green.500" }}
                >
                  Take me to the home page
                </Button>
              </NextLink>
            </Flex>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};

export default NotFound;
