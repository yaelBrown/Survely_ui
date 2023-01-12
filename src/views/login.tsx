import HomeUserLayout from "../components/layout/home-user/HomeUserLayout";
import "../assets/css/login.css"
import { Button, TextInput } from "evergreen-ui";

export default function Login() {
  return (
    <HomeUserLayout>
      <div id="login-wrapper">
        <h2>Welcome back!</h2>
        <TextInput name="username" placeholder="Username or Email" className="login-input"/>
        <TextInput name="password" placeholder="Password" type="password" className="login-input"/>
        <Button>Login</Button>
        <small>If you want to register a new user <a href="/signup">click here</a>.</small>
      </div>
    </HomeUserLayout>
  )
}