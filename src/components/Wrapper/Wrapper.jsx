import s from "./Wrapper.module.scss";

export const Wrapper = ({children}) => {
  return (
    <div className={s.wrapperStyling}>{children}</div>
  )
}