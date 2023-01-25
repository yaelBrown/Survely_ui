import { Button, TextInput } from "evergreen-ui";
import { useParams } from "react-router-dom";
import { ChangeEventHandler, useEffect, useState } from "react";
import SurveyLayout from "../components/layout/survey/surveyLayout";
import Axios from 'axios';
import { API_URL } from "../utils/constants";
import Loading from "../components/loading";
import "../assets/css/survey.css";
import { convertDBBoolToStatus } from "../services/surveyService";

interface ISurveyInitialState {
  chat?: IChatMessage[];
  questions: string[];
  text: string;
  status: SurveyStatus;
  username: string;
  surveyee: string;
  survey_data: object;
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

interface ISurveyChatScreenProps {
  handleTextChange: Function;
  handleTextSubmit: Function;
  state: any;     // TODO: Change this to react state datatype
}

enum Author {
  USER,
  SYS
}

enum SurveyStatus {
  LOADING,
  SURVEY_NO_EXIST,
  SURVEY_IN_PROG,
  SURVEY_COMPLETE,
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

const SurveyChatScreen = (props: ISurveyChatScreenProps) => {
  return (
    <>
      <section id="survey-chat-wrapper">
        <ChatBubble author={Author.SYS} index={0} message="Test message One"/>
        <ChatBubble author={Author.USER} index={1} message="Test message two"/>
        <ChatBubble author={Author.SYS} index={2} message="Test message three"/>
        <ChatBubble author={Author.USER} index={3} message="Test message four"/>
        <ChatBubble author={Author.SYS} index={4} message="Test message five"/>
        <ChatBubble author={Author.USER} index={5} message="Test message six"/>
        <ChatBubble author={Author.SYS} index={6} message="Test message seven"/>
        <ChatBubble author={Author.SYS} index={7} message="Test message One"/>
        <ChatBubble author={Author.USER} index={8} message="Test message two"/>
        <ChatBubble author={Author.SYS} index={9} message="Test message three"/>
        <ChatBubble author={Author.USER} index={10} message="Test message four"/>
        <ChatBubble author={Author.SYS} index={11} message="Test message five"/>
        <ChatBubble author={Author.USER} index={12} message="Test message six"/>
        <ChatBubble author={Author.SYS} index={13} message="Test message seven"/>
      </section>
      <section id="survey-chat-input-row">
        <TextInput
          id="survey-chat-input-row-input"
          value={props.state.text}
          onChange={(event: any) => props.handleTextChange(event)}
          placeholder="Enter your response here."
        />
        <Button
          appearance="primary"
          onClick={() => props.handleTextSubmit()}
        >
          Send
        </Button>
      </section>
    </>
  )
}

const SurveyComplete = () => {
  return (
    <section id="survey-chat-wrapper">
      <h4>Survey Complete Screen</h4>
    </section>
  )
}

const SurveyNoExist = () => {
  return (
    <section id="survey-chat-wrapper">
      <h4>Survey Does Not Exist</h4>
    </section>
  )
}

export default function Survey() {
  const { param } = useParams();
  
  const USER: string = "user";
  const SYS: string = "Demo";
  
  const initialState: ISurveyInitialState = {
    chat: [],
    questions: [],
    text: "",
    status: SurveyStatus.LOADING,
    username: USER,
    surveyee: SYS,
    survey_data: {}
  };

  const [state, setState] = useState(initialState);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) => setState({ ...state, text: e.target.value });
  const handleTextSubmit = () => {
    const newChat: IChatMessage = {
      from: USER,
      msg: state.text,
    };

    const newChatLog: IChatMessage[] = state.chat || [];
    newChatLog.push(newChat);

    setState({
      ...state,
      chat: newChatLog,
      text: "",
    });
  };

  useEffect(() => {   
    let newState = state
    Axios.get(API_URL + `survey/${param}`)
      .then((res) => {
        if (res.data[0]) {
          let data = res.data[0]
          data.survey_is_active = Boolean(data.survey_is_active)
          newState.status = convertDBBoolToStatus(data.survey_is_active)
          console.log(newState)
          setState(newState)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, []);

  const renderView = () => {
    switch(state.status) {
      case SurveyStatus.SURVEY_COMPLETE:
        return <SurveyComplete/>
      case SurveyStatus.SURVEY_IN_PROG:
        return <SurveyChatScreen state handleTextChange={handleTextChange} handleTextSubmit={handleTextSubmit} />
      case SurveyStatus.SURVEY_NO_EXIST:
        return <SurveyNoExist/>
      case SurveyStatus.LOADING:
      default:
        return <Loading/>
    }
  }

  return (
    <SurveyLayout>
      { renderView() }
    </SurveyLayout>
  );
}
