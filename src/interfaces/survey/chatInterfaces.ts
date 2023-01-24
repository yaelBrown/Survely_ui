import { Author } from "./surveyEnums";

interface IChatMessage {
  from: string;
  msg: string;
}

interface IChatBubble {
  author: Author;
  index: number;
  message: string;
}

export type {
  IChatMessage,
  IChatBubble
}