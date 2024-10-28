import { Icon } from "../../Icon/Icon";
import s from "./HeaderCircle.module.scss";

export const HeaderCircle = ({ isMenuOpen }) => {
  return (
    <div className={`${s.circleStyling} ${isMenuOpen ? s.openStyling : ""}`}>
      <img src="./Coffee.png" />
    </div>
  );
};
