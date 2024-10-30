import { LoginForm } from "../components/LoginForm/LoginForm"
import { Wrapper } from "../components/Wrapper/Wrapper"

export const SignUpPage = ({user, setUser}) => {
  return (
    <Wrapper type="productWrapper">
        <LoginForm headerText="Sign Up" formRoute="sign-up" link="/login" linkText="Login" user={user} setUser={setUser}/>
    </Wrapper>
  )
}