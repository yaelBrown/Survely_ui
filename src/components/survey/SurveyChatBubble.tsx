import { IChatBubble } from "../../interfaces/survey/chatInterfaces"
import { Author } from "../../interfaces/survey/surveyEnums"

const DefaultSystemIcon = () => (<span id="survey-default-avatar">S</span>)
const DefaultUserIcon = () => (<span id="survey-default-avatar">U</span>)

const SurveyChatBubble = (props: IChatBubble) => {
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

export default SurveyChatBubble