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
    jobTitle: "SDE - 1 (Full Stack)",
    companyName: "Setu",
    companyWebsite: "https://setu.co",
    companyLogoUrl:
      "https://pbs.twimg.com/profile_images/1410497916343492610/CheIyEzB_400x400.jpg",
    companyLocation: "Remote - Bengaluru, India",
    timeline: "June 2023 - Current",
    points: [
      "Working on Next JS, Fast API and AWS in production",
      "Working on adding new features, maintaining and improving the Account Aggregator frontend",
      "Working across multiple backend projects in Python for adding new features",
      "Using and integrating external tools like Posthog, Clickhouse, etc.",
      "Fixing bugs of Account Aggregator product on staging, QA and production environments",
    ],
    skills: ["Typescript", "Next JS", "Python", "Fast API", "AWS"],
  },
  {
    jobTitle: "Research Intern",
    companyName: "Microsoft",
    companyWebsite: "https://microsoft.com",
    companyLogoUrl:
      "https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png",
    companyLocation: "Bengaluru, India",
    timeline: "April 2023 - June 2023",
    points: [
      "Worked on Flutter, Dart, GraphQL and Javscript in production",
      "Built an internal app for Microsoft Teams for Microsoft India employees’ mental wellbeing using Flutter web and Javascript",
      "Had the complete ownership for this app including development, unit testing and CI/CD pipelines",
      "This Teams app has state management, Microsoft SOS, encrypted data storage, etc.",
    ],
    skills: ["Flutter", "Dart", "Javascript", "GraphQL"],
  },
  {
    jobTitle: "Software Engineer Intern",
    companyName: "Setu",
    companyWebsite: "https://setu.co/",
    companyLogoUrl:
      "https://pbs.twimg.com/profile_images/1410497916343492610/CheIyEzB_400x400.jpg",
    companyLocation: "Remote - Bengaluru, India",
    timeline: "September 2022 - April 2023",
    points: [
      "Worked on Next JS, Typescript, CSS, REST APIs and Zustand in production",
      "Built frontend of Account Aggregator B2B product (newer version) which is used by thousands of users daily",
      "Worked on Typescript based SDK (internal tool) for multi AA support",
      "Wrote custom hooks for better consumption of APIs on client side and improved UX",
      "Built completely themeable UI system, and wrote a lot of CSS and react-spring animations",
      "Improved loading time of existing AA product by 40% and reduced first load JS by 70%",
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
      "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
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
