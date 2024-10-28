import s from "./Icon.module.scss";

export const Icon = ({src, alt}) => {
  return (
   <img className={s.iconStyling} src={src} alt={alt}/>
  )
}