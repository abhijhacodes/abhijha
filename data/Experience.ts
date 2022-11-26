export interface ExperienceProps {
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  companyLogoUrl: string;
  companyLocation: string;
  timeline: string;
  points: Array<string>;
  skills: Array<string>;
}

export const ExperienceData: Array<ExperienceProps> = [
  {
    jobTitle: "Software Engineer Intern",
    companyName: "Setu",
    companyWebsite: "https://setu.co/",
    companyLogoUrl:
      "https://pbs.twimg.com/profile_images/1410497916343492610/CheIyEzB_400x400.jpg",
    companyLocation: "Remote - Bengaluru, India",
    timeline: "September 2022 - Current",
    points: [
      "Working as SDE Intern with the Account Aggregator team at Setu",
      "Built the frontend for whole AA product in team, which is completely themable and high performance",
      "Built hooks for API integration in Next JS with react-query, that is being used in multiple projects",
      "Reduced loading time of product website by 70%",
      "Worked on a Typescript based SDK that is used as a connector between multiple AA APIs and UI",
    ],
    skills: [
      "Next JS",
      "Typescript",
      "REST APIs",
      "CSS",
      "Full stack development",
    ],
  },
  {
    jobTitle: "Problem Setter",
    companyName: "Codechef SCET Chapter",
    companyWebsite:
      "https://www.codechef.com/campus_chapter/CodeChef_SCET_Chapter",
    companyLogoUrl:
      "https://cdn.codechef.com/download/campus/campus_284485114.png",
    companyLocation: "Surat, India",
    timeline: "August 2021 - May 2022",
    points: [
      "Created problems for various competitive programming contents held by Codechef in SCET",
      "Took sessions on competitive programming for students at SCET to guide them",
      "Mentored 100+ students for DSA and competitive programming",
    ],
    skills: [
      "Competitive Programming",
      "DSA",
      "Problem Solving",
      "Community building",
    ],
  },
];
