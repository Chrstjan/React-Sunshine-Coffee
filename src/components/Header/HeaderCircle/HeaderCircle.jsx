import { Link } from "react-router-dom";
import { Icon } from "../../Icon/Icon";
import s from "./HeaderCircle.module.scss";

export const HeaderCircle = ({ isMenuOpen }) => {
  return (
    <div className={`${s.circleStyling} ${isMenuOpen ? s.openStyling : ""}`}>
      <Link to="/"><img src="./Coffee.png" /></Link>
    </div>
  );
};
