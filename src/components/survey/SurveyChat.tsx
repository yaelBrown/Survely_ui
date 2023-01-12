import "../../assets/css/surveyChat.css"

interface ISurveyChatProps {
  chat: Array<any>;
}

export default function SurveyChat(props: ISurveyChatProps) {
  const renderChat = () => {
    const out: any[] = []
    
    props.chat.forEach((e,i) => {
      out.push((
        <div className="surveyChat-message" key={i}>
          <div className="surveyChat-message-name">{e.from}: </div>
          <div className="surveyChat-message-msg"> {e.msg}</div>
        </div>
      ))
    })

    return out
  }
  
  if (props.chat.length === 0) {
    return (
      <div id="surveyChat-wrapper">
        <small>Survey Chat would go here</small>
      </div>
    )
  } else {
    return (
      <div id="surveyChat-wrapper">
        { renderChat() }   
      </div>
    )
  }

}