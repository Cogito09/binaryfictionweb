// Public copy and project details. Keep private demos out of this file.
export const hero = {
  description:
    "Independent games with a sense of adventure. Reliable technology behind every experience. We turn imagination into worlds you can explore — on Android, web and iOS.",
  statement:
    "In a world full of noise, we believe in creating something that resonates. Stories that draw you in. Movement, music and moments that stay with you.",
};

type Game = {
  id: string;
  kind: "original" | "third-party";
  title: string;
  category: string;
  status: string;
  overline: string;
  tags: string[];
  description: string;
  artworkCaption: string;
  storeUrl?: string;
  releaseNotes?: string[];
};

// Add new projects here; the chapters and scroll navigation are generated together.
export const games: Game[] = [
  {
    id: "cube-miner",
    kind: "original",
    title: "Cube Miner",
    category: "Original game",
    status: "Independently developed & published",
    overline: "A small cube. A big adventure.",
    tags: ["Mobile", "Adventure", "Solo developed"],
    description:
      "Cube Miner offers a satisfying and dynamic tapping experience. Navigate through cube walls, explore labyrinthine corridors in search of powerful monsters! Engage in bow battles, master evasion, evolve your village, and upgrade companions. The entire world and its dungeons await your discovery!",
    artworkCaption: "World illustration · gameplay screenshots coming soon",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.BinaryFiction.CubeMiner",
    releaseNotes: [
      "Added cutscenes.",
      "Added customizable characters.",
      "Polished looks on maps.",
      "Fixed save bug.",
      "Fixed many small visual and mechanics bugs.",
    ],
  },
  {
    id: "next-game",
    kind: "third-party",
    title: "Project title",
    category: "Third-party development",
    status: "Project placeholder",
    overline: "We also make games for other teams.",
    tags: ["Casino game template", "Visual development", "Coming next"],
    description:
      "A space for our next casino game template. From a distinctive visual direction to game development and content delivery, we can help bring a partner’s vision to life. Project details and screenshots will follow.",
    artworkCaption: "Visual concept · casino template placeholder",
  },
];

export const services = [
  {
    title: "Game development",
    description:
      "From the first playable idea to a finished experience. Independent mobile game development and development for third-party teams, with support across Android, web and iOS.",
  },
  {
    title: "Content delivery that scales",
    description:
      "Stable, database-driven content delivery systems built to keep games moving. Reliable foundations for managing and delivering content across platforms.",
  },
  {
    title: "A new animation pipeline",
    description:
      "An AI-assisted video and animation workflow that opens new creative possibilities for games. Expressive visuals, distinctive motion and stories with a stronger sense of life.",
  },
];

// Replace these placeholders with the collaborator's approved details.
// A portfolio link is only rendered once a real URL is supplied.
export const collaborator: {
  name: string;
  description: string;
  portfolioUrl: string | null;
} = {
  name: "Artist name & surname",
  description:
    "Game art, visual worlds and the details that make them memorable. Artist profile and portrait coming soon.",
  portfolioUrl: null,
};
