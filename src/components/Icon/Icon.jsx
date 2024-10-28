import s from "./Icon.module.scss";

export const Icon = ({ src, alt, isMenuOpen }) => {
  return (
    <img
      className={`${s.iconStyling} ${isMenuOpen ? "" : s.hideIcons}`}
      src={src}
      alt={alt}
    />
  );
};
