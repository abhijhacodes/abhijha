import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoRocket, IoRocketOutline } from "react-icons/io5";
import { ExperienceProps } from "../data/Experience";

export const ExperienceCard = (props: ExperienceProps) => {
  const {
    jobTitle,
    companyName,
    companyWebsite,
    companyLogoUrl,
    companyLocation,
    timeline,
    points,
    skills,
  } = props;

  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.800")}
      boxShadow={"xl"}
      rounded={"2xl"}
      width="100%"
      direction={["column", "row", "row"]}
      mx={8}
      py={6}
      _hover={{
        backgroundColor: useColorModeValue("gray.100", "gray.900"),
        boxShadow: "none",
      }}
    >
      <VStack width={["100%", "10%", "10%"]}>
        <Link href={companyWebsite} isExternal>
          <Image
            src={companyLogoUrl}
            alt={companyName}
            rounded="full"
            height={16}
            width={16}
            cursor="pointer"
          />
        </Link>
        <Divider orientation="vertical" />
      </VStack>
      <Flex
        direction="column"
        width={["100%", "90%", "90%"]}
        padding="0 1.5rem"
        gridGap={4}
      >
        <Flex direction="column" alignItems="flex-start">
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "3xl" }}>
            {jobTitle} -{" "}
            <Link href={companyWebsite} isExternal color="#F6A20E">
              {companyName}
            </Link>
          </Heading>
          <Flex
            width="100%"
            justifyContent="space-between"
            color={useColorModeValue("gray.500", "gray.300")}
          >
            <Text>{companyLocation}</Text>
            <Text>{timeline}</Text>
          </Flex>
        </Flex>
        <Divider />
        <List spacing={2}>
          {points.map((point, index) => (
            <ListItem key={index}>
              <ListIcon as={IoRocketOutline} color="teal.300" />
              {point}
            </ListItem>
          ))}
        </List>
        <Divider />
        <Wrap>
          {skills.map((skill, index) => (
            <WrapItem key={index}>
              <Tag
                cursor="pointer"
                _hover={{
                  transform: "translate(2px, 6px)",
                }}
              >
                {skill}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Flex>
  );
};
