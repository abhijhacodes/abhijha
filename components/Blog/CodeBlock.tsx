import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/vsDark";
import lightTheme from "prism-react-renderer/themes/vsLight";
import { FaCopy } from "react-icons/fa";
import { Box, Button, useClipboard, useColorMode } from "@chakra-ui/react";
import { useRef } from "react";

interface CodeBlockProps {
  children: string;
  className: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const { colorMode } = useColorMode();
  const { hasCopied, onCopy } = useClipboard(children.trim());
  const codeRef = useRef<HTMLDivElement>(null);
  const language: unknown = className ? className.replace(/language-/, "") : "";

  return (
    <Box fontSize="sm" position="relative" ref={codeRef}>
      <Button
        rightIcon={<FaCopy />}
        colorScheme="telegram"
        size="sm"
        variant="outline"
        position="absolute"
        top={-10}
        right={4}
        onClick={onCopy}
      >
        {hasCopied ? "Copied 👌 " : "Copy "}
      </Button>
      <Highlight
        {...defaultProps}
        theme={colorMode === "dark" ? darkTheme : lightTheme}
        code={children}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: 10,
              overflowX: "auto",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
