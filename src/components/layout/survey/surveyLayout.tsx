import ILayoutProps from "../../../types/props/LayoutProps";
import '../../../assets/css/SurveyLayout.css'

export default function SurveyLayout(props: ILayoutProps) {

  return (
    <main>
      <div id="survey-wrapper">
        <section id="survey-chat">{ props.children }</section>
        <section id="survey-ad"></section>
      </div>
    </main>
  )
}