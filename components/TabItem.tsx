import { Tab, useColorModeValue, HStack, Icon, Text } from "@chakra-ui/react";
import { TabListProps } from "../data/Projects";

export const TabItem = (tabData: TabListProps) => {
  return (
    <Tab
      bg={useColorModeValue("white.100", "gray.800")}
      color={useColorModeValue("gray.600", "gray.500")}
      _selected={{
        color: `${tabData.selectedColor}.800`,
        bg: `${tabData.selectedColor}.100`,
      }}
      mr={2}
      mt={2}
    >
      <HStack spacing={1}>
        <Icon as={tabData.icon} />
        <Text>{tabData.title}</Text>
      </HStack>
    </Tab>
  );
};
