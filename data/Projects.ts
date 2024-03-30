import { AiOutlineCode, AiFillChrome, AiOutlineDesktop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

export type categories = "All" | "Web" | "Mobile" | "Python" | "Misc";

export interface ProjectProps {
	imageURL: string;
	category: categories[];
	title: string;
	description: string;
	githubLink?: string;
	deployLink?: string;
	tags: Array<string>;
}

export interface TabListProps {
	icon: any;
	selectedColor: string;
	title: categories;
}

export const TabListData: Array<TabListProps> = [
	{
		icon: AiOutlineCode,
		selectedColor: "red",
		title: "All",
	},
	{
		icon: AiFillChrome,
		selectedColor: "yellow",
		title: "Web",
	},
	{
		icon: BsPhone,
		selectedColor: "blue",
		title: "Mobile",
	},
	{
		icon: FaRobot,
		selectedColor: "purple",
		title: "Python",
	},
	{
		icon: AiOutlineDesktop,
		selectedColor: "teal",
		title: "Misc",
	},
];

export const ProjectsData: Array<ProjectProps> = [
	{
		imageURL: "/images/projects/sankhya.png",
		category: ["All", "Web"],
		title: "Sankhya",
		description:
			"An open source user analytics tool that gives you insights about your users like traffic, geographic and device details, etc. all with zero config and out of the box.",
		githubLink: "https://github.com/abhijhacodes/sankhya-backend",
		deployLink: "https://sankhya.pro",
		tags: ["Express", "PostgreSQL", "Next"],
	},
	{
		imageURL: "/images/projects/sellpro.jpg",
		category: ["All", "Web"],
		title: "SellPro",
		description:
			"Online selling platform. Users can upload their products to sell, and they will be available for buying after admin approval. Auth, admin and user dashboard, and many other features.",
		githubLink: "https://github.com/abhijhacodes/sellpro",
		deployLink: "https://youtu.be/yxeopIPJ3cM",
		tags: ["Next", "Express", "MongoDB"],
	},
	{
		imageURL: "/images/projects/colconnect.png",
		category: ["All", "Web"],
		title: "Colconnect",
		description:
			"Full stack social media app using Next.js, Tailwind CSS and Firebase. With features like post image, post text, online IDE, and login / logout system.",
		githubLink: "https://github.com/abhijhacodes/colconnect",
		tags: ["Next", "Firebase", "Tailwind"],
	},
	{
		imageURL: "/images/projects/newsletter.png",
		category: ["All", "Web", "Python"],
		title: "Newsletter",
		description:
			"Full stack newsletter project where other users can subscribe and I can publish newsletter and send it as email to all users using my admin panel.",
		deployLink: "https://abhijha-newsletter.netlify.app/",
		githubLink: "https://github.com/abhijhacodes/newsletter",
		tags: ["FastAPI", "React", "PostgreSQL"],
	},
	{
		imageURL: "/images/projects/portfolio.png",
		category: ["All", "Web"],
		title: "Personal Portfolio",
		description:
			"The site that you are currently on. SEO optimised, fully responsive portfolio website with dark and light theme. With markdown featured blogs.",
		deployLink: "https://abhijha.in/",
		tags: ["Next", "ChakraUI", "MDX"],
	},
	{
		imageURL: "/images/projects/splitwise.png",
		category: ["All", "Web"],
		title: "Splitwise Clone",
		description:
			"Fully featured frontend clone of Splitwise. Keep track of all your expenses, pay and split by individual or multiple people. And see history of your splits.",
		deployLink: "https://splitwisest.vercel.app/",
		tags: ["Next", "JS", "CSS"],
	},
	{
		imageURL: "/images/projects/ringover.png",
		category: ["All", "Web"],
		title: "Customizable Shoe Store",
		description:
			"Multi page responsive website for a shoe store. You can select different variations of any shoe, add to cart, filter shoes by various parameters, etc.",
		githubLink: "https://github.com/abhijhacodes/ringover",
		deployLink: "https://ringover-abhi.vercel.app/store",
		tags: ["Next", "JS", "CSS"],
	},
	{
		imageURL: "/images/projects/ide.png",
		category: ["All", "Web"],
		title: "Online IDE",
		description:
			"Web based IDE for web development. Supports coding in HTML, CSS and Javascript. Shows output in real time.",
		githubLink: "https://github.com/abhijhacodes/ide",
		deployLink: "https://colconnect-ide.netlify.app/",
		tags: ["Web", "React", "CSS"],
	},
	{
		imageURL: "/images/projects/ipldashboard.png",
		category: ["All", "Web"],
		title: "IPL Dashboard",
		description:
			"Dashboard to display IPL data using various charts in multiple cateogries. Uses Next, Chart.js and ChakraUI.",
		githubLink: "https://github.com/abhijhacodes/ipl-dashboard",
		deployLink: "https://ipl-dashboard.vercel.app/",
		tags: ["Next", "ChakraUI", "Chart.js"],
	},
	{
		imageURL: "/images/projects/coolchat.png",
		category: ["All", "Web"],
		title: "CoolChat",
		description:
			"Web based group chatting app built with React JS and Firebase. Has features like authentication, creating new chat room, joining room, message timestamp, etc.",
		githubLink: "https://github.com/abhijhacodes/coolchat",
		deployLink: "https://chit-chat-dfcc0.firebaseapp.com/",
		tags: ["React", "Firebase", "CSS"],
	},
	{
		imageURL: "/images/projects/theme.png",
		category: ["All", "Misc"],
		title: "Cool dark theme",
		description:
			"Dark color theme extension for Visual Studio Code Text Editor. Currently has 500+ downloads",
		githubLink: "https://github.com/abhijhacodes/cool-dark-theme",
		deployLink:
			"https://marketplace.visualstudio.com/items?itemName=AbhishekJha.cool-dark-theme",
		tags: ["JSON", "VsCode"],
	},
	{
		imageURL: "/images/projects/shoppingcart.png",
		category: ["All", "Web"],
		title: "Shopping Cart with Redux",
		description:
			"Product List with Shopping cart made using Next.js and Redux Toolkit to demonstrate Redux state management.",
		githubLink: "https://github.com/abhijhacodes/next-redux-shopping-cart",
		deployLink: "https://next-redux-shopping-cart.vercel.app/",
		tags: ["Redux", "Redux Toolkit", "Next.js"],
	},
	{
		imageURL: "/images/projects/harbour.png",
		category: ["All", "Mobile"],
		title: "Harbour Management App",
		description:
			"Cross platform mobile app for harbour management. Built with Flutter and Firebase for design engineering project",
		githubLink: "https://github.com/abhijhacodes/harbour-manager-flutter",
		tags: ["Flutter", "Firebase"],
	},
	{
		imageURL: "/images/projects/rickmorty.png",
		category: ["All", "Web"],
		title: "Rick and Morty",
		description:
			"Web app for getting details of all characters from show Rick and Morty. Built with Next.js, GraphQL and Chakra UI. Has features like search, dark theme and responsive design.",
		githubLink: "https://github.com/abhijhacodes/rick-and-morty",
		deployLink: "https://rick-and-mortyy.vercel.app/",
		tags: ["Next", "GraphQL", "ChakraUI"],
	},
	{
		imageURL: "/images/projects/terminal.png",
		category: ["All", "Web"],
		title: "Terminal style portfolio",
		description:
			"Minimalistic personal portfolio based on Linux Terminal style.",
		githubLink: "https://github.com/abhi",
		deployLink: "https://abhijhacodes.github.io/abhi/",
		tags: ["HTML", "CSS", "JS"],
	},
	{
		imageURL: "/images/projects/tictactoe.png",
		category: ["All", "Mobile"],
		title: "Tic Tac Toe",
		description: "Tic Tac Toe game android app built with Kotlin",
		githubLink: "https://github.com/abhijhacodes/android-tic-tac-toe",
		tags: ["Mobile", "Kotlin"],
	},
	{
		imageURL: "/images/projects/mememania.png",
		category: ["All", "Mobile"],
		title: "MemeMania",
		description:
			"Android app built with kotlin for fetching random memes from Reddit using an API and displaying in a beautiful UI. Has feature of sharing the meme link directly from app",
		githubLink: "https://github.com/abhijhacodes/android-MemeMania",
		tags: ["Mobile", "Kotlin", "API"],
	},
	{
		imageURL: "/images/projects/superheroes.png",
		category: ["All", "Web"],
		title: "SuperHeroes",
		description:
			"Full stack CRUD app built with Next.js, MongoDB and material design. Uses custom Rest APIs for all operations.",
		githubLink: "https://github.com/abhijhacodes/nextjs-full-stack",
		tags: ["Web", "Next", "MongoDB"],
	},
	{
		imageURL: "/images/projects/techfreaks.png",
		category: ["All", "Web"],
		title: "TechFreaks website",
		description:
			"Website for descriptionription of design engineering project. Built with HTML and Bootstrap.",
		githubLink: "https://github.com/abhijhacodes/techfreaks",
		deployLink: "https://abhijhacodes.github.io/techfreaks/",
		tags: ["Web", "HTML", "Bootstrap"],
	},
	{
		imageURL: "/images/projects/virtual.jpg",
		category: ["All", "Python"],
		title: "Virtual Assistant",
		description:
			"Virtual Assistant built with Python. Has features like speak to search google, weekipedia, ask time, play music and youtube videos, set alarm, etc.",
		githubLink: "https://github.com/abhijhacodes/virtual_assistant",
		tags: ["ML", "Python", "Automation"],
	},
	{
		imageURL: "/images/projects/game.jpg",
		category: ["All", "Python"],
		title: "Space Invaders",
		description:
			"2D game built with Pygame module of Python. Has features like highest score, current score, play and pause, music, etc.",
		githubLink: "https://github.com/abhijhacodes/space_invaders_by_abhi",
		tags: ["Python", "Game", "Pygame"],
	},
	{
		imageURL: "/images/projects/p2a.jpg",
		category: ["All", "Python"],
		title: "PDF to AudioBook converter",
		description:
			"Python script to convert any pdf file into an AudioBook. Built with Text to speech module.",
		githubLink:
			"https://github.com/abhijhacodes/PDF_to_AudioBook_converter",
		tags: ["ML", "Python", "PDFtoAudio"],
	},
	{
		imageURL: "/images/projects/datascience.jpg",
		category: ["All", "Python"],
		title: "Data Science Learning Resources",
		description:
			"Github repository having detailed codes for learning all important data science modules.",
		githubLink: "https://github.com/abhijhacodes/data-science",
		tags: ["ML", "Python", "DataScience"],
	},
	{
		imageURL: "/images/projects/hof.png",
		category: ["All", "Misc", "Python"],
		title: "Higher Order Functions",
		description:
			"Implementation of some popular higher order functions available in Python using C++ 20",
		githubLink: "https://github.com/abhijhacodes/higher-order-functions",
		tags: ["ML", "CPP", "Python"],
	},
	{
		imageURL: "/images/projects/cses.png",
		category: ["All", "Misc"],
		title: "CSES Solutions",
		description:
			"C++ solutions to various problems from the popular CSES problem set.",
		githubLink: "https://github.com/abhijhacodes/cses-solutions",
		tags: ["CPP", "CP"],
	},
];
