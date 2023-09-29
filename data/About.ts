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
        text: "I am Abhishek Jha, a Full stack Software Engineer and Computer nerd who is passionate about coding and development.",
        color: "purple",
        icon: MdPerson,
      },
    ],
  },
  {
    question: "What I do ?",
    answers: [
      {
        text: "I currently work as a Full time Software Engineer at Setu, a fintech startup in India.",
        color: "yellow",
        icon: MdLanguage,
      },
      {
        text: "I spend my time building cool and innovative stuffs at my job, and learn more and more about Coding and Computers in my free time.",
        color: "blue",
        icon: MdLeaderboard,
      },
    ],
  },
  {
    question: "What is my educational background ?",
    answers: [
      {
        text: "I have done Computer Engineering from Gujarat Technological University, Ahmedabad.",
        color: "green",
        icon: MdSchool,
      },
      {
        text: "I have completed my graduation in 2023.",
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
        text: "You can ping me for any discussion about Music, Sports and Technology.",
        color: "blue",
        icon: MdMic,
      },
      {
        text: "I am also a huge fan of Maths, Poem and Literature.",
        color: "red",
        icon: ImHeart,
      },
    ],
  },
];
