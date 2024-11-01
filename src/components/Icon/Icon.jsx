import s from "./Icon.module.scss";

export const Icon = ({ src, alt, isMenuOpen, action }) => {
  return (
       <img
      onClick={action}
      className={`${s.iconStyling} ${isMenuOpen ? "" : s.hideIcons}`}
      src={src}
      alt={alt}
    />
  );
};
