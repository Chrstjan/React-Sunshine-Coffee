import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Button } from "../components/Button/Button";
import { Icon } from "../components/Icon/Icon";
import { Footer } from "../components/Footer/Footer";
import { FooterInfo } from "../components/Footer/FooterInfo/FooterInfo";
import { Burgermenu } from "../components/Header/Burgermenu/Burgermenu";
import { useState } from "react";
import { HeaderCircle } from "../components/Header/HeaderCircle/HeaderCircle";

export const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header>
        <h1>Sunshine Coffee</h1>
        <Wrapper>
          <Burgermenu setIsMenuOpen={setIsMenuOpen} />
          <Button type="regionStyling" text="Europa" />
          <Icon src="./Cart.png" alt="Shopping Cart" isMenuOpen={isMenuOpen} />
          <Icon src="./User.png" alt="User Account" isMenuOpen={isMenuOpen} />
        </Wrapper>
      </Header>
      <HeaderCircle />
      <Outlet />
      <Footer>
        <FooterInfo
          headerText="Contact"
          linkOne="Supercoffeeroad 223b"
          linkTwo="92230 New Coffeland"
          linkThree="Phone: 22331122"
          linkFour="Mail: coffeeland@info.com"
        />
        <FooterInfo
          headerText="Legal"
          linkOne="Cookie policy"
          linkTwo="Return policy"
          linkThree="Shipping"
          linkFour="Terms and Conditions"
        />
        <FooterInfo
          headerText="About"
          linkOne="History"
          linkTwo="The people behind"
          linkThree="Partnerships"
          linkFour="International"
        />
      </Footer>
    </>
  );
};
