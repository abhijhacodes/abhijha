import { HStack, VStack, Button, Link, Icon, Tooltip } from "@chakra-ui/react";
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from "../data/Links";
import NextLink from "next/link";
import { MdMenuBook, MdLaptopChromebook } from "react-icons/md";

export const Socials = () => {
  return (
    <VStack alignItems="left" spacing={6}>
      <HStack spacing={6}>
        <Tooltip hasArrow label="See my projects!" bg="gray.300" color="black">
          <Link href={GITHUB_URL} isExternal>
            <Icon as={FaGithub} boxSize={[6, 7, 8]} />
          </Link>
        </Tooltip>
        <Tooltip
          hasArrow
          label="See my linkedin profile!"
          bg="gray.300"
          color="black"
        >
          <Link href={LINKEDIN_URL} isExternal>
            <Icon as={FaLinkedin} boxSize={[6, 7, 8]} />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="Email me!" bg="gray.300" color="black">
          <Link href={EMAIL_URL} isExternal>
            <Icon as={FaEnvelopeOpenText} boxSize={[6, 7, 8]} />
          </Link>
        </Tooltip>
      </HStack>
      <HStack
        spacing={4}
        align={"left"}
        alignSelf={"left"}
        position={"relative"}
      >
        <NextLink href="/projects" passHref>
          <Button
            as={"a"}
            colorScheme="teal"
            variant="outline"
            leftIcon={<MdLaptopChromebook />}
          >
            See my work
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as={"a"}
            colorScheme="teal"
            variant="outline"
            leftIcon={<MdMenuBook />}
          >
            Read blogs
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
