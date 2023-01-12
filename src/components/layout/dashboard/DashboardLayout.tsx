import ILayoutProps from "../../../types/props/LayoutProps";

export default function DashboardLayout(props: ILayoutProps) {
  return (
    <div>
      <p>Dashboard Layout Props start</p>
      { props.children }
      <p>Dashboard Layout Props end</p>
    </div>
  )
}