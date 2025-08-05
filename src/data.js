import HeroImage from "/assets/hero-image.JPG";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/swift.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/xcode.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools5,
    nama: "Swift",
    ket: "Language",
    dad: "500",
  },
  {
    id: 3,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 4,
    gambar: Tools9,
    nama: "Xcode",
    ket: "Code Editor",
    dad: "900",
  },
  {
    id: 5,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 6,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Wisebake from "/assets/proyek/WiseBake.png";
import Wisebake1 from "/assets/proyek/WiseBake1.jpg";
import Wisebake2 from "/assets/proyek/WiseBake2.jpg";
import Wisebake3 from "/assets/proyek/WiseBake3.jpg";
import CriminalCrew from "/assets/proyek/CriminalCrew.png";
import CriminalCrew1 from "/assets/proyek/CriminalCrew1.jpg";
import CriminalCrew2 from "/assets/proyek/CriminalCrew2.jpg";
import CriminalCrew3 from "/assets/proyek/CriminalCrew3.jpg";
import Shuttle_OD from "/assets/proyek/Shuttle.png";
import Shuttle_OD1 from "/assets/proyek/Shuttle1.png";
import Shuttle_OD2 from "/assets/proyek/Shuttle2.png";
import Shuttle_OD3 from "/assets/proyek/Shuttle3.png";
import OnTime from "/assets/proyek/OnTime.jpg";
import OnTime1 from "/assets/proyek/OnTime1.jpg";
import OnTime2 from "/assets/proyek/OnTime2.jpg";
import OnTime3 from "/assets/proyek/OnTime3.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: [Wisebake, Wisebake1, Wisebake2, Wisebake3],
    nama: "Wisebake",
    desk: "Recipe calculator mobile app designed specifically for elderly users, prioritizing ease of use, readability, and accessibility.",
    detailedDesc: [
      "Wisebake is a thoughtfully designed iOS application aimed at making cooking easier and more enjoyable for the elderly. It features a recipe calculator with a user-friendly interface, large text for better readability, and high-contrast visuals.",
      "My role: I was responsible for UI Layouting at ingridient detail page and bussiness logic for accessing camera & gallery to use Image to Text AI Feature at inputing ingridients feature.",
      "The inspiration came from one of our team member's grandmother, Mak Sri, a 65-year-old baker. For her catering business, she needed to perform multi-step calculations to manage complex ingredient portions. Using a basic calculator was challenging as she would often forget the numbers due to her age. Additionally, her weak motoric joints made it difficult to input measurements one by one.",
      "With Wisebake, Mak Sri's workflow has been transformed. She no longer needs to remember complex calculations for different portion sizes. The innovative Image-to-Text AI feature allows her to simply take a photo of her recipe, eliminating the difficulty of manual input."
    ],
    tools: ["Swift", "SwiftUI", "MVVM", "Swift Data", "AVFoundation", "Image to Text AI"],
    dad: "200",
    prototypeLink: "https://github.com/jojopapanana/NanoChallenge3.git"
  },
  {
    id: 2,
    gambar: [CriminalCrew, CriminalCrew1, CriminalCrew2, CriminalCrew3],
    nama: "Criminal Crew",
    desk: "Pastime Multipeer 2 - 6 people teamwork game bank robbery theme, that rely on team work and communication.",
    detailedDesc: [
      "Criminal Crew is an exciting multi-peer cooperative game for 2-6 players, centered around a thrilling bank robbery theme. Developed using Swift and UIKit, the game heavily relies on teamwork and effective communication. Inspired from Spaceteam and AmongUs",
      "Players must collaborate to solve intricate puzzles and navigate challenges to execute the perfect heist. The game's architecture is a hybrid of MVVM and VIPER, ensuring a robust, scalable, and maintainable codebase.",
      "My Role: I was responsible for the UI Layouting and implementing the business logic for the core Cable and Card modules.",
      "During an exhibition program, our app received over 100 positive reviews in just two days, highlighting its engaging gameplay and solid performance."
    ],
    tools: ["Swift", "UIKit", "MVVM", "VIPER", "AVFoundation", "Combine"],
    dad: "300",
    prototypeLink: "https://github.com/Vinncz/criminal-crew.git"
  },
  {
    id: 3,
    gambar: [Shuttle_OD, Shuttle_OD1, Shuttle_OD2, Shuttle_OD3],
    nama: "Shuttle of Destiny",
    desk: "Narrative reality game about young determined athlete chasing his dream to be champion badminton player. Based on decision making with multiple different ending. ",
    detailedDesc: [
      "Inspired by life simulation games like BitLife, Shuttle of Destiny is an immersive interactive narrative game that lets players step into the shoes of a young, determined badminton athlete.",
      "Built with SwiftUI, the game features a rich, branching storyline where every decision matters, leading to multiple unique endings. It's a compelling tale of ambition, choices, and the relentless pursuit of a dream.",
      "My Role: I was responsible for the business logic behind the decision-making system, managing player in-game stats, and the UI layout for the decision page.",
      "The game was well-received during an exhibition program, garnering over 30 positive reviews from players who enjoyed the narrative and gameplay."
    ],
    tools: ["Swift", "SwiftUI", "MVVM", "Swift Data", "AVFoundation"],
    dad: "400",
    prototypeLink: "https://github.com/BalyaElfata/Shuttle-of-Destiny.git"
  },
  {
    id: 4,
    gambar: [OnTime, OnTime1, OnTime2, OnTime3],
    nama: "OnTime",
    desk: "Reminder and Scheduling application for college student to reminding task & learning time.",
    detailedDesc: [
      "Statistics show the need for better time management tools. According to the National College Health Assessment (2022), over 40% of college students experience high stress from poor time management, and a 2020 study by Beverly et al. found that 70% struggle with procrastination.",
      "Thats why we make OnTime. OnTime is a practical and intuitive scheduling and reminder application designed specifically for college students. It empowers users to efficiently manage their academic tasks, keep track of important deadlines, and schedule dedicated study sessions.",
      "My Role: I was responsible for the UI Layouting on the home page, calendar page, and the 'add task' form. I also handled the business logic for searching and adding teammates for group assignments and the core logic for the task calendar.",
      "The app was highly successful in user testing, with 98 out of 103 participants (around 95%) reporting satisfaction with its features and usability.",
      "Available in TestFlight"
    ],
    tools: ["App Storage", "Firebase", "MVVM", "SwiftUI"],
    dad: "500",
    prototypeLink: "https://testflight.apple.com/join/bzcQFAWF"
  },
];

