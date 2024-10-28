import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Button } from "../components/Button/Button";
import { Icon } from "../components/Icon/Icon";
import { Footer } from "../components/Footer/Footer";
import { FooterInfo } from "../components/Footer/FooterInfo/FooterInfo";

export const MainLayout = () => {
  return (
    <>
      <Header>
        <h1>Sunshine Coffee</h1>
        <Wrapper>
          <Button type="regionStyling" text="Europa"/>
          <Icon src="./Cart.png" alt="Shopping Cart"/>
          <Icon src="./User.png" alt="User Account"/>
        </Wrapper>
      </Header>
      <Outlet />
      <Footer>
        <FooterInfo headerText="Contact" linkOne="Supercoffeeroad 223b" linkTwo="92230 New Coffeland" linkThree="Phone: 22331122" linkFour="Mail: coffeeland@info.com"/>
        <FooterInfo headerText="Legal" linkOne="Cookie policy" linkTwo="Return policy" linkThree="Shipping" linkFour="Terms and Conditions"/>
        <FooterInfo headerText="About" linkOne="History" linkTwo="The people behind" linkThree="Partnerships" linkFour="International"/>
      </Footer>
    </>
  );
};
