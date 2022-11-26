import {
  Alert,
  Box,
  Image,
  Code,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CustomLink, Headings, CodeBlock } from "../";

const Quote = (props: any) => {
  return (
    <Alert
      mt={4}
      w="98%"
      bg={useColorModeValue("rgba(218, 232, 240, 0.6)", "#01283d")}
      variant="left-accent"
      status="success"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const MDXComponents = {
  h1: (props: any) => <Headings as="h1" fontSize="36px" {...props} />,
  h2: (props: any) => <Headings as="h2" fontSize="28px" {...props} />,
  h3: (props: any) => <Headings as="h3" fontSize="24px" {...props} />,
  h4: (props: any) => <Headings as="h4" fontSize="18px" {...props} />,
  h5: (props: any) => <Headings as="h5" fontSize="16px" {...props} />,
  h6: (props: any) => <Headings as="h6" fontSize="14px" {...props} />,
  code: CodeBlock,
  a: CustomLink,
  hr: function DividerFn() {
    return (
      <Divider
        my={4}
        width="100%"
        borderColor={useColorModeValue("gray.200", "gray.600")}
      />
    );
  },
  blockquote: Quote,
  inlineCode: function CodeFn(props: any) {
    return <Code colorScheme="yellow" fontSize="0.84em" {...props} />;
  },
  br: (props: any) => <Box height="20px" {...props} />,
  brl: (props: any) => <Box height="4px" {...props} />,
  p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={4} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={4} {...props} />,
  li: (props: any) => <Box as="li" pt={2} pb={1} {...props} />,
  highlight: function HighLight(props: any) {
    return (
      <Box
        as="section"
        mt={4}
        bg={useColorModeValue("gray.100", "gray.900")}
        p={4}
        {...props}
      />
    );
  },
  Image: (props: any) => (
    <Image
      alt="blog image"
      ml="auto"
      mr="auto"
      mt="20px"
      mb="20px"
      {...props}
    />
  ),
};

export default MDXComponents;
