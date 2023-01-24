import { SurveyStatus } from "./surveyEnums";
import { Author } from "./surveyEnums";

interface ISurveyInitialState {
  chat?: IChatMessage[];
  questions: string[];
  text: string;
  status: SurveyStatus;
  username: string;
  surveyee: string;
}

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
  ISurveyInitialState,
  IChatMessage,
  IChatBubble
}