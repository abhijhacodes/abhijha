import Typewriter from "typewriter-effect";

export const TypingAnimation = (props: { text: string }) => {
  const { text } = props;

  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
