import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  children: string;
}

export const CustomLink = (props: CustomLinkProps) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "#383CC1",
    dark: "#35BDD0",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return (
    <NextLink href={href} passHref>
      <Link color={color[colorMode]} isExternal={!isInternalLink} {...props}>
        {props.children}
        {!isInternalLink && <ExternalLinkIcon mx="2px" />}
      </Link>
    </NextLink>
  );
};
