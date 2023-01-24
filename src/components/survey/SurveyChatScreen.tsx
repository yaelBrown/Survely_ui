import { Author } from "../../interfaces/survey/surveyEnums"
import SurveyChatBubble from "./SurveyChatBubble"

const SurveyChatScreen = () => {
  return (
    <section id="survey-chat-wrapper">
      <SurveyChatBubble author={Author.SYS} index={0} message="Test message One"/>
      <SurveyChatBubble author={Author.USER} index={1} message="Test message two"/>
      <SurveyChatBubble author={Author.SYS} index={2} message="Test message three"/>
      <SurveyChatBubble author={Author.USER} index={3} message="Test message four"/>
      <SurveyChatBubble author={Author.SYS} index={4} message="Test message five"/>
      <SurveyChatBubble author={Author.USER} index={5} message="Test message six"/>
      <SurveyChatBubble author={Author.SYS} index={6} message="Test message seven"/>
      <SurveyChatBubble author={Author.SYS} index={7} message="Test message One"/>
      <SurveyChatBubble author={Author.USER} index={8} message="Test message two"/>
      <SurveyChatBubble author={Author.SYS} index={9} message="Test message three"/>
      <SurveyChatBubble author={Author.USER} index={10} message="Test message four"/>
      <SurveyChatBubble author={Author.SYS} index={11} message="Test message five"/>
      <SurveyChatBubble author={Author.USER} index={12} message="Test message six"/>
      <SurveyChatBubble author={Author.SYS} index={13} message="Test message seven"/>
  </section>
  )
}

export default SurveyChatScreen