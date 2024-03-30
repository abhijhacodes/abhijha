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
	SiPostgresql,
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

		const tagMap = {
			React: { color: "blue", icon: <FaReact /> },
			Next: { color: "gray", icon: <SiNextdotjs /> },
			Python: { color: "yellow", icon: <FaPython /> },
			JS: { color: "yellow", icon: <FaJs /> },
			TS: { color: "blue", icon: <SiTypescript /> },
			HTML: { color: "orange", icon: <FaHtml5 /> },
			CSS: { color: "teal", icon: <FaCss3 /> },
			Tailwind: { color: "blue", icon: <SiTailwindcss /> },
			Web: { color: "red", icon: <FaGlobe /> },
			Kotlin: { color: "red", icon: <SiKotlin /> },
			Flutter: { color: "blue", icon: <SiFlutter /> },
			Mobile: { color: "cyan", icon: <FaMobileAlt /> },
			ML: { color: "green", icon: <FaRobot /> },
			Firebase: { color: "red", icon: <SiFirebase /> },
			ChakraUI: { color: "blue", icon: <SiChakraui /> },
			Express: { color: "teal", icon: <SiExpress /> },
			MongoDB: { color: "green", icon: <SiMongodb /> },
			PostgreSQL: { color: "blue", icon: <SiPostgresql /> },
		};

		if (tag in tagMap) {
			values = tagMap[tag as keyof typeof tagMap];
		}

		return values;
	};

	return (
		<Stack isInline>
			{tags.map((tag, index) => {
				const { color, icon } = getTag(tag);
				return (
					<Tag
						key={index}
						colorScheme={color}
					>
						<Box
							ml={-1}
							mr={2}
						>
							{icon}
						</Box>
						<TagLabel>{tag}</TagLabel>
					</Tag>
				);
			})}
		</Stack>
	);
};
