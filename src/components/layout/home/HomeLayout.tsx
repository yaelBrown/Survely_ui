import ILayoutProps from "../../../types/props/LayoutProps";

export default function HomeLayout(props: ILayoutProps) {
  return (
    <div>
      <p>Home Layout Props start</p>
      { props.children }
      <p>Home Layout Props end</p>
    </div>
  )
}