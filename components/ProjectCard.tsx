import {
  Text,
  Stack,
  Divider,
  Link,
  useColorModeValue,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectProps } from "../data/Projects";
import { Tags } from "./Tags";

export const ProjectCard = (props: ProjectProps) => {
  const { imageURL, title, description, githubLink, deployLink, tags } = props;

  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      boxShadow={"2xl"}
      rounded={"2xl"}
      minH="320px"
      maxH="500px"
    >
      <Image
        width={1250}
        height={600}
        w="auto"
        h="auto"
        src={imageURL}
        transition="0.3s"
        alt={title}
      />
      <Stack px={4} py={4}>
        <Stack isInline justifyContent="space-between" alignItems="center">
          <Text
            fontFamily="Ubuntu"
            fontSize={{ base: "xl", md: "2xl" }}
            color={useColorModeValue("gray.700", "white")}
          >
            {title}
          </Text>
          <Stack
            isInline
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
            {githubLink && (
              <Tooltip
                hasArrow
                label="See the github repo!"
                bg="gray.300"
                color="black"
              >
                <Link href={githubLink} isExternal>
                  <FaGithub aria-label="github" size={23} />
                </Link>
              </Tooltip>
            )}
            {deployLink && (
              <Tooltip
                hasArrow
                label="See it live!"
                bg="gray.300"
                color="black"
              >
                <Link href={deployLink} isExternal>
                  <FaExternalLinkAlt aria-label="project link" size={20} />
                </Link>
              </Tooltip>
            )}
          </Stack>
        </Stack>
        <Tags tags={tags} />
        <Divider />
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize={["sm", "md"]}
        >
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};
