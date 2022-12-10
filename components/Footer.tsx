import { Flex, IconButton, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../data/Links";

interface FooterButtonProps {
  title: string;
  href: string;
  icon: any;
}

const FooterIcon = (props: FooterButtonProps) => {
  return (
    <Link href={props.href} title={props.title} isExternal>
      <IconButton
        aria-label={props.title}
        icon={props.icon}
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  );
};

export const Footer = () => (
  <Flex align="center" bottom="0" py={3} direction="column">
    <div>
      <FooterIcon title="Github" href={GITHUB_URL} icon={<FaGithub />} />
      <FooterIcon title="Email" href={EMAIL_URL} icon={<FaMailBulk />} />
      <FooterIcon title="LinkedIn" href={LINKEDIN_URL} icon={<FaLinkedin />} />
      <FooterIcon
        title="Instagram"
        href={INSTAGRAM_URL}
        icon={<FaInstagram />}
      />
      <FooterIcon title="Twitter" href={TWITTER_URL} icon={<FaTwitter />} />
    </div>
  </Flex>
);
