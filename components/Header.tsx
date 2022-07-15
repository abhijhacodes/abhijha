import NextLink from "next/link";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import {
  IconButton,
  Menu,
  Image,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "@chakra-ui/button";
import { NAV_ITEMS, NavItem } from "../data/Navdata";

const NavBarMenuItem = (props: NavItem) => {
  return (
    <NextLink href={props.href} passHref>
      <MenuItem>{props.label}</MenuItem>
    </NextLink>
  );
};

const NavBarButton = (props: NavItem) => {
  return (
    <NextLink href={props.href} passHref>
      <Button
        as="a"
        variant="ghost"
        fontWeight="400"
        _hover={{
          backgroundColor: "teal.900",
        }}
      >
        {props.label}
      </Button>
    </NextLink>
  );
};

const MobileNavBar = () => {
  return (
    <Box display={{ md: "none", lg: "none", xl: "none", base: "block" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          {NAV_ITEMS.map((item) => (
            <NavBarMenuItem
              label={item.label}
              href={item.href}
              key={item.href}
            />
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

const DesktopNavBar = () => {
  return (
    <Box
      flexDirection="row"
      display={{ md: "block", lg: "block", xl: "block", base: "none" }}
    >
      {NAV_ITEMS.map((item) => (
        <NavBarButton label={item.label} href={item.href} key={item.href} />
      ))}
    </Box>
  );
};

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        as={"header"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.7)",
            "rgba(26, 32, 44, 0.9)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: 4, sm: 4, md: 0 }}
            justify={{ base: "start", md: "start" }}
          >
            <NextLink href={"/"} passHref>
              <Stack
                as={"a"}
                direction={"row"}
                alignItems={"center"}
                spacing={{ base: 2, sm: 4 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  borderRadius="full"
                  height="8"
                  width="8"
                />
                <Heading
                  as={"h1"}
                  fontSize={"2xl"}
                  display={{ base: "none", md: "block" }}
                  bgGradient="linear(to-l, #43B3AE, #e3192a)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  Abhishek Jha
                </Heading>
              </Stack>
            </NextLink>
          </Flex>
          <Stack
            direction={"row"}
            align={"center"}
            spacing={{ base: 6, md: 8, lg: 12 }}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNavBar />
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
            <MobileNavBar />
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};
