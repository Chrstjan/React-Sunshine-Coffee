import { LoginForm } from "../components/LoginForm/LoginForm"
import { Wrapper } from "../components/Wrapper/Wrapper"

export const SignUpPage = ({user, setUser}) => {
  return (
    <Wrapper type="loginWrapper">
        <LoginForm headerText="Sign Up" formRoute="sign-up" link="/login" linkText="Login" user={user} setUser={setUser}/>
    </Wrapper>
  )
}