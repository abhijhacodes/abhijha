import {
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  Box,
  useColorModeValue,
  Image,
  Tooltip,
  IconProps,
} from "@chakra-ui/react";
import {
  FaReact,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiKotlin,
  SiFlutter,
  SiTailwindcss,
  SiChakraui,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { ProjectProps } from "../data/Projects";

type TagProps = {
  color: string;
  icon: IconProps;
};

export const ProjectCard = (props: ProjectProps) => {
  const { imageURL, title, desc, githubLink, deployLink, tags } = props;

  const getTag = (tag: string): TagProps => {
    let values: TagProps = { color: "gray", icon: <FaCode /> };
    if (tag == "React") {
      values.color = "blue";
      values.icon = <FaReact />;
    } else if (tag == "Next") {
      values.color = "gray";
      values.icon = <SiNextdotjs />;
    } else if (tag == "Python") {
      values.color = "yellow";
      values.icon = <FaPython />;
    } else if (tag == "JS") {
      values.color = "yellow";
      values.icon = <FaJs />;
    } else if (tag == "TS") {
      values.color = "blue";
      values.icon = <SiTypescript />;
    } else if (tag == "HTML") {
      values.color = "orange";
      values.icon = <FaHtml5 />;
    } else if (tag == "CSS") {
      values.color = "teal";
      values.icon = <FaCss3 />;
    } else if (tag == "Tailwind") {
      values.color = "blue";
      values.icon = <SiTailwindcss />;
    } else if (tag == "Web") {
      values.color = "red";
      values.icon = <FaGlobe />;
    } else if (tag == "Kotlin") {
      values.color = "red";
      values.icon = <SiKotlin />;
    } else if (tag == "Flutter") {
      values.color = "blue";
      values.icon = <SiFlutter />;
    } else if (tag == "Mobile") {
      values.color = "cyan";
      values.icon = <FaMobileAlt />;
    } else if (tag == "ML") {
      values.color = "green";
      values.icon = <FaRobot />;
    } else if (tag == "Firebase") {
      values.color = "red";
      values.icon = <SiFirebase />;
    } else if (tag == "ChakraUI") {
      values.color = "blue";
      values.icon = <SiChakraui />;
    } else {
      values.color = "gray";
      values.icon = <FaCode />;
    }
    return values;
  };

  const Tags = tags.map((item) => (
    <Tag key={item} colorScheme={getTag(item).color}>
      <Box ml={-1} mr={2}>
        {getTag(item).icon}
      </Box>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ));

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
        <Stack isInline>{Tags}</Stack>
        <Divider />
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize={["sm", "md"]}
        >
          {desc}
        </Text>
      </Stack>
    </Stack>
  );
};
