import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const Link = {
  baseStyle: {
    _hover: { color: '#F6A20E', textDecoration: 'none' },
  },
}

export const theme = extendTheme({
  fonts,
  components: {
    Link,
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
  styles: {
    global: {
      "html, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
      },
      ".body": {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: "scroll", // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: "smooth",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "green.400",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },
});
