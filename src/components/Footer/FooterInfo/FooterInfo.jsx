import s from "./FooterInfo.module.scss";

export const FooterInfo = ({headerText, linkOne, linkTwo, linkThree, linkFour}) => {
  return (
    <div className={s.footerInfo}>
        <header>
            <h4>{headerText}</h4>
        </header>
        <p>{linkOne}</p>
        <p>{linkTwo}</p>
        <p>{linkThree}</p>
        <p>{linkFour}</p>
    </div>
  )
}