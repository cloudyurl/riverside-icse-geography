export type PaperSettings = {
  schoolName: string;
  address: string;
  examTitle: string;
  session: string;
  grade: string;
  subject: string;
  marks: string;
  duration: string;
  date: string;
  setLabel: string;
  instructions: string;
};

export type TopoPair = {
  id: string;
  a: string;
  aAnswer: string;
  b: string;
  bAnswer: string;
};

export type MapItem = {
  id: string;
  category: string;
  text: string;
  answer: string;
};

export type Mcq = {
  id: string;
  chapter: string;
  stem: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
};

export type Part = {
  marks: 2 | 3;
  text: string;
  answer: string;
};

export type Structured = {
  id: string;
  chapter: string;
  parts: [Part, Part, Part, Part];
};

export type PaperPart = {
  label: string;
  text: string;
  marks: number;
  answer: string;
};

export type Paper = {
  code: string;
  topo: { label: string; a: PaperPart; b: PaperPart }[];
  map: PaperPart[];
  mcqs: {
    label: string;
    stem: string;
    options: [string, string, string, string];
    answer: string;
    answerLetter: string;
  }[];
  structured: {
    number: number;
    chapter: string;
    parts: PaperPart[];
  }[];
  ids: string[];
};

export const DEFAULT_SETTINGS: PaperSettings = {
  schoolName: "RIVERSIDE PUBLIC SCHOOL",
  address:
    "Post Box No # 34, Corsley Road, Kotagiri \u2013 643217, The Nilgiris, TN, India",
  examTitle: "PRE-BOARD EXAMINATION",
  session: "2026 - 27",
  grade: "10",
  subject: "Geography",
  marks: "80",
  duration: "2 Hrs",
  date: "",
  setLabel: "A",
  instructions: [
    "Answers to this paper must be written on the answer sheet provided separately.",
    "You will not be allowed to write during the first 15 minutes. This time is to be spent in reading the question paper.",
    "The time given at the head of this paper is the time allowed for writing the answers.",
    "Attempt all questions from Part I and any five questions from Part II.",
    "The intended marks for questions or parts of questions are given in brackets ( ).",
    "Follow the correct order of questions in the answer sheet.",
  ].join("\n"),
};

export const CHAPTERS = [
  "Climate of India",
  "Soil Resources",
  "Natural Vegetation",
  "Water Resources",
  "Mineral and Energy Resources",
  "Agriculture",
  "Manufacturing Industries",
  "Transport",
  "Waste Management",
] as const;
