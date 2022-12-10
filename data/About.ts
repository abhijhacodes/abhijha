import { ImHeart } from "react-icons/im";
import {
  MdPerson,
  MdLanguage,
  MdLeaderboard,
  MdSchool,
  MdCheckCircle,
  MdHome,
  MdMic,
} from "react-icons/md";

export interface AboutDataProps {
  question: string;
  answers: Array<AboutAnswerProps>;
}

export interface AboutAnswerProps {
  text: string;
  color: string;
  icon: any;
}

export const AboutMeData: Array<AboutDataProps> = [
  {
    question: "Who am I ?",
    answers: [
      {
        text: "I am Abhishek Jha, a final year Computer Engineering undergrad, who is passionate about coding and development",
        color: "purple",
        icon: MdPerson,
      },
    ],
  },
  {
    question: "What I do ?",
    answers: [
      {
        text: "I am interested in Web development, Mobile app development, Machine Learning and Problem solving.",
        color: "yellow",
        icon: MdLanguage,
      },
      {
        text: "Most time of my day is spent solving DSA and CP problems and making some cool stuff with code.",
        color: "blue",
        icon: MdLeaderboard,
      },
    ],
  },
  {
    question: "What is my educational background ?",
    answers: [
      {
        text: "Currently I am pursuing Computer engineering from Sarvajanik College of Engineering and Technology, Surat.",
        color: "green",
        icon: MdSchool,
      },
      {
        text: "I will complete my graduation in 2023.",
        color: "green",
        icon: MdCheckCircle,
      },
      {
        text: "I have completed my schooling from St. Xavier High School, Surat.",
        color: "green",
        icon: MdHome,
      },
    ],
  },
  {
    question: "What I do apart from coding ?",
    answers: [
      {
        text: "You can ping me for any discussion about Hip-Hop & Cricket:)",
        color: "blue",
        icon: MdMic,
      },
      {
        text: "I am also a huge fan of Maths, Poem, Literature and Sports.",
        color: "red",
        icon: ImHeart,
      },
    ],
  },
];
