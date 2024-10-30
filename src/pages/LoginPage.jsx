import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper"

export const LoginPage = ({user, setUser}) => {
  return <Wrapper type="productWrapper">
    <LoginForm headerText="Login" formRoute="sign-in" link="/signup" linkText="Sign up" user={user} setUser={setUser}/>
  </Wrapper>;
};
