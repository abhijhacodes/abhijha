export type categories = `All` | `Web` | `Mobile` | "Python" | "Misc";

export interface ProjectProps {
  imageURL: string;
  category: categories[];
  title: string;
  desc: string;
  githubLink?: string;
  deployLink?: string;
  tags: Array<string>;
}

export const ProjectData: Array<ProjectProps> = [
  {
    imageURL: "/images/project/colconnect.png",
    category: ["All", "Web"],
    title: "Colconnect",
    desc: "Full stack social media app using Next.js, Tailwind CSS and Firebase. With features like post image, post text, online IDE, and login / logout system.",
    githubLink: "https://github.com/abhijhacodes/colconnect",
    tags: ["Next", "Firebase", "Tailwind"],
  },
  {
    imageURL: "/images/project/ide.png",
    category: ["All", "Web"],
    title: "Online IDE",
    desc: "Web based IDE for web development. Supports coding in HTML, CSS and Javascript. Shows output in real time.",
    githubLink: "https://github.com/abhijhacodes/ide",
    deployLink: "https://colconnect-ide.netlify.app/",
    tags: ["Web", "React", "CSS"],
  },
  {
    imageURL: "/images/project/portfolio.png",
    category: ["All", "Web"],
    title: "Personal Portfolio",
    desc: "The site that you are currently on. SEO optimised, fully responsive portfolio website with dark and light theme. With markdown featured blog section.",
    deployLink: "https://abhijha.me",
    tags: ["Next", "ChakraUI", "mdx"],
  },
  {
    imageURL: "/images/project/coolchat.png",
    category: ["All", "Web"],
    title: "CoolChat",
    desc: "Web based group chatting app built with React JS and Firebase. Has features like authentication, creating new chat room, joining room, message timestamp, etc.",
    githubLink: "https://github.com/abhijhacodes/coolchat",
    deployLink: "https://chit-chat-dfcc0.firebaseapp.com/",
    tags: ["React", "Firebase", "CSS"],
  },
  {
    imageURL: "/images/project/theme.png",
    category: ["All", "Misc"],
    title: "Cool dark theme",
    desc: "Dark color theme extension for Visual Studio Code Text Editor. Currently has ~400 downloads",
    githubLink: "https://github.com/abhijhacodes/cool-dark-theme",
    deployLink:
      "https://marketplace.visualstudio.com/items?itemName=AbhishekJha.cool-dark-theme",
    tags: ["JSON", "VsCode"],
  },
  {
    imageURL: "/images//project/rickmorty.png",
    category: ["All", "Web"],
    title: "Rick and Morty",
    desc: "Web app for getting details of all characters from show Rick and Morty. Built with Next.js, GraphQL and Chakra UI. Has features like search, dark theme and responsive design.",
    githubLink: "https://github.com/abhijhacodes/rick-and-morty",
    deployLink: "https://rick-and-mortyy.vercel.app/",
    tags: ["Next", "GraphQL", "ChakraUI"],
  },
  {
    imageURL: "/images//project/terminal.png",
    category: ["All", "Web"],
    title: "Terminal style portfolio",
    desc: "Minimalistic personal portfolio based on Linux Terminal style.",
    githubLink: "https://github.com/abhi",
    deployLink: "https://abhijhacodes.github.io/abhi/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    imageURL: "/images/project/harbour.png",
    category: ["All", "Mobile"],
    title: "Harbour Management App",
    desc: "Cross platform mobile app for harbour management. Built with Flutter and Firebase for design engineering project",
    githubLink: "https://github.com/abhijhacodes/harbour-manager-flutter",
    tags: ["Flutter", "Firebase"],
  },
  {
    imageURL: "/images/project/tictactoe.png",
    category: ["All", "Mobile"],
    title: "Tic Tac Toe",
    desc: "Tic Tac Toe game android app built with Kotlin",
    githubLink: "https://github.com/abhijhacodes/android-tic-tac-toe",
    tags: ["Mobile", "Kotlin"],
  },
  {
    imageURL: "/images/project/mememania.png",
    category: ["All", "Mobile"],
    title: "MemeMania",
    desc: "Android app built with kotlin for fetching random memes from Reddit using an API and displaying in a beautiful UI. Has feature of sharing the meme link directly from app",
    githubLink: "https://github.com/abhijhacodes/android-MemeMania",
    tags: ["Mobile", "Kotlin", "API"],
  },
  {
    imageURL: "/images/project/techfreaks.png",
    category: ["All", "Web"],
    title: "TechFreaks website",
    desc: "Website for description of design engineering project. Built with HTML and Bootstrap.",
    githubLink: "https://github.com/abhijhacodes/techfreaks",
    deployLink: "https://abhijhacodes.github.io/techfreaks/",
    tags: ["Web", "HTML", "Bootstrap"],
  },
  {
    imageURL: "/images/project/virtual.jpg",
    category: ["All", "Python"],
    title: "Virtual Assistant",
    desc: "Virtual Assistant built with Python. Has features like speak to search google, weekipedia, ask time, play music and youtube videos, set alarm, etc.",
    githubLink: "https://github.com/abhijhacodes/virtual_assistant",
    tags: ["ML", "Python", "Automation"],
  },
  {
    imageURL: "/images/project/game.jpg",
    category: ["All", "Python"],
    title: "Space Invaders",
    desc: "2D game built with Pygame module of Python. Has features like highest score, current score, play and pause, music, etc.",
    githubLink: "https://github.com/abhijhacodes/space_invaders_by_abhi",
    tags: ["Python", "Game", "Pygame"],
  },
  {
    imageURL: "/images/project/p2a.jpg",
    category: ["All", "Python"],
    title: "PDF to AudioBook converter",
    desc: "Python script to convert any pdf file into an AudioBook. Built with Text to speech module.",
    githubLink: "https://github.com/abhijhacodes/PDF_to_AudioBook_converter",
    tags: ["ML", "Python", "PDFtoAudio"],
  },
  {
    imageURL: "/images/project/datascience.jpg",
    category: ["All", "Python"],
    title: "Data Science Learning Resources",
    desc: "Github repository having detailed codes for learning all important data science modules.",
    githubLink: "https://github.com/abhijhacodes/data-science",
    tags: ["ML", "Python", "DataScience"],
  },
  {
    imageURL: "/images/project/hof.png",
    category: ["All", "Misc", "Python"],
    title: "Higher Order Functions",
    desc: "Implementation of some popular higher order functions available in Python using C++ 20",
    githubLink: "https://github.com/abhijhacodes/higher-order-functions",
    tags: ["ML", "CPP", "Python"],
  },
  {
    imageURL: "/images/project/cses.png",
    category: ["All", "Misc"],
    title: "CSES Solutions",
    desc: "C++ solutions to various problems from the popular CSES problem set.",
    githubLink: "https://github.com/abhijhacodes/cses-solutions",
    tags: ["CPP", "CP"],
  },
];
