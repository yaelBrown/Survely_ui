import ILayoutProps from "../../../types/props/LayoutProps";
import '../../../assets/css/HomeUserLayout.css'

export default function HomeUserLayout(props: ILayoutProps) {
  return (
    <main>
      <div id="homeUser-wrapper">
        { props.children }
      </div>
    </main>
  )
}