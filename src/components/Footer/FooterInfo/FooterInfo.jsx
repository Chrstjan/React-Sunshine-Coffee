import { Link } from "react-router-dom";
import s from "./FooterInfo.module.scss";

export const FooterInfo = ({headerText, linkOne, linkTwo, linkThree, linkFour, pageLink}) => {
  return (
    <div className={s.footerInfo}>
        <header>
            <h4>{headerText}</h4>
        </header>
        <Link to={pageLink}>
          <p>{linkOne}</p>
        </Link>
        <p>{linkTwo}</p>
        <p>{linkThree}</p>
        <p>{linkFour}</p>
    </div>
  )
}