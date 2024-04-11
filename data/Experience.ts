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
			"Working on Next JS, Fast API, AWS and SQL.",
			"Built analytics and reports dashboard for Account Aggregator and BI teams, which has been a selling point and reduced manual efforts for report generation.",
			"Currently working on a Personal Finance Management app for ICICI Bank's mobile and net banking apps.",
			"Leading the frontend for the PFM app and working on the backend and cloud parts as well.",
			"Working extensively with analytics tools like Clickhouse, Posthog, Google Analytics, etc.",
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
			"Worked on Flutter, Dart, GraphQL and Javscript.",
			"Built an internal app for Microsoft Teams for Microsoft India employees’ mental wellbeing using Flutter web and Javascript",
			"Had the complete ownership for this app including development, unit testing and CI/CD pipelines",
		],
		skills: ["Flutter", "Dart", "Javascript", "GraphQL"],
	},
	{
		jobTitle: "SDE Intern (Frontend)",
		companyName: "Setu",
		companyWebsite: "https://setu.co/",
		companyLogoUrl:
			"https://pbs.twimg.com/profile_images/1410497916343492610/CheIyEzB_400x400.jpg",
		companyLocation: "Remote - Bengaluru, India",
		timeline: "September 2022 - April 2023",
		points: [
			"Worked on Next JS, Typescript, Fictoan, Styled components and Zustand.",
			"Built consent approval system for Account Aggregator gateway product from scratch which has shown significant improvement in consent conversion rates and UX.",
			"Worked on Typescript based SDK (internal tool) for multi AA support",
			"Built completely themeable UI system with dozens of feature flags and hundreds of user journeys, and wrote a lot of CSS and animations",
			"Improved performance of existing AA frontend project.",
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
		jobTitle: "Problem Setter (DSA & CP)",
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
