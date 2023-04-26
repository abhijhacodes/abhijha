import {
  Stack,
  Image,
  Center,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ScaleOnHover } from "./Animations";
import { AboutDataProps, AboutMeData } from "../data/About";

const AcordItem = (props: AboutDataProps) => {
  const { question, answers } = props;

  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          minW={{ sm: 400, md: 500, lg: 600 }}
          _expanded={{
            bg: useColorModeValue("teal.700", "teal.100"),
            color: useColorModeValue("gray.100", "gray.800"),
          }}
        >
          <Box flex="1" textAlign="center">
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List>
          {answers.map((answer, index) => (
            <ListItem key={index}>
              <ListIcon as={answer.icon} color={`${answer.color}.500`} />
              {answer.text}
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const About = () => {
  return (
    <Container maxW={"7xl"} alignItems="center" justifyContent="center">
      <Stack
        as={Container}
        flex={1}
        maxW={"7xl"}
        position="relative"
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ base: 5, md: 10 }}
          flex={0.4}
        >
          <Heading
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
            bgGradient="linear(to-r, #50DBB4, #E21717)"
            bgClip="text"
            fontWeight="bold"
          >
            About Me
          </Heading>
          <Box
            maxW={{ base: "220px", md: "280px", lg: "350px" }}
            maxH={{ base: "220px", md: "280px", lg: "350px" }}
          >
            <ScaleOnHover>
              <Image
                src="images/posterphoto.png"
                borderRadius="full"
                w={{ base: "220px", md: "280px", lg: "350px" }}
                h={{ base: "220px", md: "280px", lg: "350px" }}
                alt="Abhishek Jha"
                cursor="pointer"
              />
            </ScaleOnHover>
          </Box>
        </Stack>
        <Flex
          flex={0.6}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Center
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Accordion defaultIndex={[0]} allowToggle>
              {AboutMeData.map((aboutMe, index) => (
                <AcordItem
                  question={aboutMe.question}
                  answers={aboutMe.answers}
                  key={index}
                />
              ))}
            </Accordion>
          </Center>
        </Flex>
      </Stack>
    </Container>
  );
};
