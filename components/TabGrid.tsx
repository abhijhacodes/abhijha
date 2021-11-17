import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectData, categories, ProjectProps } from "../data/Projects";

export const TabGrid = ({ filter }: { filter: categories }): JSX.Element => {
  return (
    <SimpleGrid
      pt={10}
      columns={{ base: 1, md: 2 }}
      spacingX={10}
      spacingY={10}
    >
      {ProjectData.filter((x) => x.category.includes(filter)).map(
        (project: ProjectProps, index: number) => (
          <ProjectCard {...project} key={index.toString()} />
        )
      )}
    </SimpleGrid>
  );
};
