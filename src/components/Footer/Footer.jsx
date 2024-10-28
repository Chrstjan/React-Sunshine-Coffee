import s from "./Footer.module.scss";

export const Footer = ({children}) => {
  return (
    <footer className={s.footerStyling}>{children}</footer>
  )
}
