import React from "react";
import { Button, Flex, IconButton, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import NextLink from "next/link";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../data/Links";

const FooterButton = (props: { text: string; href: string }) => {
  return (
    <NextLink href={props.href} passHref>
      <Button as="a" variant="ghost" fontWeight="300">
        {props.text}
      </Button>
    </NextLink>
  );
};

export const Footer = () => (
  <Flex align="center" bottom="0" py={3} direction="column">
    <div>
      <Link href={GITHUB_URL} title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href={EMAIL_URL} title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<FaMailBulk />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href={LINKEDIN_URL} title="LinkedIn" isExternal>
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href={INSTAGRAM_URL} title="Instagram" isExternal>
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href={TWITTER_URL} title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon={<FaTwitter />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
  </Flex>
);
