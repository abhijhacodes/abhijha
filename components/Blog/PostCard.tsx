import React from "react";
import { LinkCard } from "../";
import decodeWith from "../../utils/ioTsUtils";
import { BlogFrontMatterValidator } from "../../types";

interface PostCardProps {
  frontMatter: any;
  folderPrefix: string;
}

export const PostCard = (props: PostCardProps) => {
  const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
  const slug = frontMatter.__resourcePath
    .replace(props.folderPrefix, "")
    .replace(".mdx", "");
  return (
    <LinkCard
      name={frontMatter.title}
      description={frontMatter.description}
      link={`${props.folderPrefix}${slug}`}
      tags={frontMatter.tags}
      hero={frontMatter.hero}
    />
  );
};
