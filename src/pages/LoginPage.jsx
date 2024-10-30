import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper"

export const LoginPage = () => {
  return <Wrapper type="productWrapper">
    <LoginForm headerText="Login" link="/signup" linkText="Sign up"/>
  </Wrapper>;
};
