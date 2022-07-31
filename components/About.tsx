import {
  Stack,
  Image,
  Center,
  Container,
  Heading,
  VStack,
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
import { ReactNode } from "react";
import {
  MdCheckCircle,
  MdLeaderboard,
  MdLanguage,
  MdSchool,
  MdHome,
  MdPerson,
  MdMic,
} from "react-icons/md";
import { ImHeart } from "react-icons/im";
interface AcordItemProps {
  question: string;
  answer: ReactNode;
}

const AcordItem = (props: AcordItemProps) => {
  const { question, answer } = props;
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
      <AccordionPanel pb={4}>{answer}</AccordionPanel>
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
            <Image
              src="/images/abhishek.jpg"
              borderRadius="full"
              w={{ base: "220px", md: "280px", lg: "350px" }}
              h={{ base: "220px", md: "280px", lg: "350px" }}
              alt="Abhishek Jha"
            />
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
              <AcordItem
                question="Who am I ?"
                answer={
                  <List>
                    <ListItem>
                      <ListIcon as={MdPerson} color="purple.500" />I am Abhishek
                      Jha, a final year Computer Engineering undergrad,
                      <br />
                      who is passionate about coding and development
                    </ListItem>
                  </List>
                }
              />
              <AcordItem
                question="What I do ?"
                answer={
                  <List>
                    <ListItem>
                      <ListIcon as={MdLanguage} color="yellow.500" />I am
                      interested in Web development, Mobile app development,
                      Machine Learning and Problem solving.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdLeaderboard} color="blue.500" />
                      Most time of my day is spent solving DSA and CP problems
                      and making some cool stuff with code.
                    </ListItem>
                  </List>
                }
              />
              <AcordItem
                question="What is my educational background ?"
                answer={
                  <List>
                    <ListItem>
                      <ListIcon as={MdSchool} color="green.500" />
                      Currently I am pursuing Computer engineering from
                      Sarvajanik College of Engineering and Technology, Surat.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />I will
                      complete my graduation in 2023.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdHome} color="green.500" />I have completed
                      my schooling from St. Xavier High School, Surat.
                    </ListItem>
                  </List>
                }
              />
              <AcordItem
                question="What I do apart from coding ?"
                answer={
                  <List>
                    <ListItem>
                      <ListIcon as={MdMic} color="blue.500" />
                      You can ping me for any discussion about Hip-Hop & Cricket
                      :)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={ImHeart} color="red.500" />I am also a huge
                      fan of Maths, Poem, Literature and Sports
                    </ListItem>
                  </List>
                }
              />
            </Accordion>
          </Center>
        </Flex>
      </Stack>
    </Container>
  );
};
