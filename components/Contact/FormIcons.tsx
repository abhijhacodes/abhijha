import { HStack, Link, IconButton } from "@chakra-ui/react";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from "../../data/Links";
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa";

export const FormIcons = () => {
  return (
    <HStack
      mt={{ lg: 10, md: 10 }}
      spacing={5}
      px={5}
      alignItems="center"
      justifyContent="center"
    >
      <Link href={LINKEDIN_URL} isExternal>
        <IconButton
          aria-label="facebook"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<FaLinkedin size="28px" />}
        />
      </Link>
      <Link href={GITHUB_URL} isExternal>
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<FaGithub size="28px" />}
        />
      </Link>
      <Link href={EMAIL_URL} isExternal>
        <IconButton
          aria-label="discord"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<FaEnvelopeOpenText size="28px" />}
        />
      </Link>
    </HStack>
  );
};
