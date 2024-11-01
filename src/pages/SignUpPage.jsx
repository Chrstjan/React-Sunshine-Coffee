import { Divider } from "../components/Divider/Divider"
import { LoginForm } from "../components/LoginForm/LoginForm"
import { Testimonies } from "../components/Testimonies/Testimonies"
import { Wrapper } from "../components/Wrapper/Wrapper"

export const SignUpPage = ({user, setUser}) => {
  return (
    <>
    <Wrapper type="loginWrapper">
        <LoginForm headerText="Sign Up" formRoute="sign-up" link="/login" linkText="Login" user={user} setUser={setUser}/>
    </Wrapper>
    <Divider />
    <Testimonies />
    </>
  )
}