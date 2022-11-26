import { Box, IconProps, Stack, Tag, TagLabel } from "@chakra-ui/react";
import {
  FaCode,
  FaReact,
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
  SiTypescript,
  SiTailwindcss,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiChakraui,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

type TagProps = {
  color: string;
  icon: IconProps;
};

interface TagsProps {
  tags: Array<string>;
}

export const Tags = (props: TagsProps) => {
  const { tags } = props;

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
    } else if (tag == "Express") {
      values.color = "teal";
      values.icon = <SiExpress />;
    } else if (tag == "MongoDB") {
      values.color = "green";
      values.icon = <SiMongodb />;
    } else {
      values.color = "gray";
      values.icon = <FaCode />;
    }
    return values;
  };

  return (
    <Stack isInline>
      {tags.map((tag, index) => {
        const { color, icon } = getTag(tag);
        return (
          <Tag key={index} colorScheme={color}>
            <Box ml={-1} mr={2}>
              {icon}
            </Box>
            <TagLabel>{tag}</TagLabel>
          </Tag>
        );
      })}
    </Stack>
  );
};
