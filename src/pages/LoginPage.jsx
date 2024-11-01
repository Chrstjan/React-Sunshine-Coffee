import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Testimonies } from "../components/Testimonies/Testimonies"
import { Divider } from "../components/Divider/Divider";

export const LoginPage = ({user, setUser}) => {
  return <><Wrapper type="loginWrapper">
    <LoginForm headerText="Login" formRoute="sign-in" link="/signup" linkText="Sign up" user={user} setUser={setUser}/>
  </Wrapper>
  <Divider />
  <Testimonies />
  </>;
};
