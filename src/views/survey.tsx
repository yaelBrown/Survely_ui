import { Button, TextInput } from "evergreen-ui";
import { useParams } from "react-router-dom";
import "../assets/css/survey.css";
import { ChangeEventHandler, useEffect, useState } from "react";
import SurveyLayout from "../components/layout/survey/surveyLayout";

interface ISurveyInitialState {
  chat?: IChatMessage[];
  questions: string[];
  answers: string[];
  questioned: number[];
  text: string;
  cur: number;
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

enum Author {
  USER,
  SYS
}

const DefaultSystemIcon = () => (<span id="survey-default-avatar">S</span>)
const DefaultUserIcon = () => (<span id="survey-default-avatar">U</span>)

const ChatBubble = (props: IChatBubble) => {
  const chatbubbleTextStyle = { 
    borderRadius: (props.author === Author.USER) ? "12px 0px 12px 12px" : "0px 12px 12px 12px",
    marginRight: (props.author === Author.USER) ? "1em" : "auto",
    marginLeft: (props.author === Author.SYS) ? "1em" : "auto"
  }
  
  return (
    <div className="chatbubble-wrapper">
      <div className={`chatbubble-icon ${(props.author === Author.SYS) ? "chatbubble-visibility-visible" : "chatbubble-visibility-none"}`} >
        <DefaultSystemIcon/>
      </div>
      <div className="chatbubble-text" style={chatbubbleTextStyle}>{props.message}</div>  
      <div className={`chatbubble-icon ${(props.author === Author.USER) ? "chatbubble-visibility-visible" : "chatbubble-visibility-none"}`}>
        <DefaultUserIcon/>
      </div>
    </div>
  )
}

export default function Survey() {
  const { param } = useParams();

  const USER: string = "user";
  const SYS: string = "Demo";

  const initialState: ISurveyInitialState = {
    chat: [],
    questions: [
      "Whats your favorite color?",
      "Whats your favorite 2 digit number?",
      "Whos your favorite actor?",
    ],
    answers: [],
    questioned: [],
    text: "",
    cur: 0,
  };

  const [state, setState] = useState(initialState);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setState({ ...state, text: e.target.value });
  const handleTextSubmit = () => {
    const newChat: IChatMessage = {
      from: USER,
      msg: state.text,
    };

    const newCur: number = state.cur++;

    const newChatLog: IChatMessage[] = state.chat || [];
    newChatLog.push(newChat);

    const newAnswers: string[] = state.answers;
    newAnswers.push(state.text);

    setState({
      ...state,
      chat: newChatLog,
      answers: newAnswers,
      cur: newCur,
      text: "",
    });
  };

  useEffect(() => {}, []);

  return (
    <SurveyLayout>
      <section id="survey-chat-wrapper">
        <ChatBubble author={Author.SYS} index={0} message="Test message One"/>
        <ChatBubble author={Author.USER} index={1} message="Test message two"/>
        <ChatBubble author={Author.SYS} index={2} message="Test message three"/>
        <ChatBubble author={Author.USER} index={3} message="Test message four"/>
        <ChatBubble author={Author.SYS} index={4} message="Test message five"/>
        <ChatBubble author={Author.USER} index={5} message="Test message six"/>
        <ChatBubble author={Author.SYS} index={6} message="Test message seven"/>
      </section>
      <section id="survey-chat-input-row">
        <TextInput
          id="survey-chat-input-row-input"
          value={state.text}
          onChange={(event: any) => handleTextChange(event)}
          placeholder="Enter your response here."
        />
        <Button
          appearance="primary"
          onClick={() => handleTextSubmit()}
        >
          Send
        </Button>      
      </section>
    </SurveyLayout>
  );
}
// <div id="survey-wrapper">
//   <h2>Survey Screen: {param}</h2>
//   <SurveyChat chat={state.chat || []}/>
//   <div id="survey-divider"/>
//   <div id="survey-btn-row">
//     <Textarea
//       value={state.text}
//       onChange={(event: any) => handleTextChange(event)}
//     />
//     <Button
//       appearance="primary"
//       onClick={() => handleTextSubmit()}
//     >
//       Send
//     </Button>
//   </div>
// </div>
