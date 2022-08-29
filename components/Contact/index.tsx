import {
  Container,
  Box,
  Heading,
  Text,
  Center,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { CONFETTI_LIGHT, CONFETTI_DARK } from "../";
import { IoRocketSharp } from "react-icons/io5";
import { FormIcons } from "./FormIcons";
import { FormButtons } from "./FormButtons";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const successToast = () => {
    return toast({
      position: "top",
      title: "Your message was sent successfully!",
      status: "success",
      isClosable: true,
    });
  };

  const errorToast = () => {
    return toast({
      position: "top",
      title: "An error occured, Please try again!",
      status: "error",
      isClosable: true,
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // start to send mail
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const { error } = await res.json();

    setLoading(false);

    // error handling
    if (error) {
      errorToast();
      return;
    }

    successToast();

    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container
      maxW="full"
      minH={"100vh"}
      bg={useColorModeValue("gray.200", "gray.900")}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      h="full"
      mt={20}
      py={20}
      overflow="hidden"
    >
      <Center>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="2xl"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 10, lg: 16 }}
        >
          <Box py={4} px={{ base: 4, md: 24, lg: 4 }}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading
                    fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
                    bgGradient="linear(to-r, #50DBB4, #E21717)"
                    bgClip="text"
                    mb={5}
                    textAlign="center"
                    fontWeight="bold"
                  >
                    Contact
                  </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.400">
                    Contact me by filling up this form
                  </Text>
                  <FormButtons />
                  <FormIcons />
                </Box>
              </WrapItem>
              <WrapItem>
                {/* form starts here */}
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                        {/* name input*/}
                        <FormControl id="name" isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              {<BsPerson color="gray.800" />}
                            </InputLeftElement>
                            <Input
                              value={values.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              type="text"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        {/* email input*/}
                        <FormControl id="email" isRequired>
                          <FormLabel>Your Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              {<MdOutlineEmail color="gray.800" />}
                            </InputLeftElement>
                            <Input
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Your Email"
                              type="text"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        {/* message textarea*/}
                        <FormControl id="message" isRequired>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Your message for me :)"
                            borderColor="#E0E1E7"
                          />
                        </FormControl>

                        {/* submit button */}
                        <FormControl mt={4} float="right">
                          <Button
                            id="sendButton"
                            isLoading={loading}
                            type="submit"
                            mt={4}
                            variant="solid"
                            bg="#02054B"
                            color="white"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            rightIcon={<IoRocketSharp />}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};
