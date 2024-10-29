import s from "./Wrapper.module.scss";

export const Wrapper = ({children, type}) => {
  return (
    <div className={`${s.wrapperStyling} ${s[type]}`}>{children}</div>
  )
}