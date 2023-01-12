import { Button, TextInput } from "evergreen-ui";
import HomeUserLayout from "../components/layout/home-user/HomeUserLayout";
import "../assets/css/signup.css"

export default function Signup() {
  return (
    <HomeUserLayout>
      <div id="signup-wrapper">
        <h2>Nice to meet you !</h2>
        <TextInput name="username" placeholder="Username" className="signup-input"/>
        <TextInput name="email" placeholder="Email" className="signup-input"/>
        <TextInput name="password" placeholder="Password" type="password" className="signup-input"/>
        <Button>Register</Button>
        <small>If you have an account and want to login <a href="/login">click here</a>.</small>
      </div>
    </HomeUserLayout>
  )
}