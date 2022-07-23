import "./styles.scss";

import icons from "./icons";

interface IconProps {
  size?: "normal" | "small" | "big";
  name: keyof typeof icons;
}

function Icon(props: IconProps) {
  const { size, name } = props;
  const iconPath = icons[name] as unknown as string;

  // handle size with classnames to set the proper className
  return <img src={iconPath} alt={name as string} />;
}

Icon.defaultProps = {
  size: "normal",
};

export { icons };
export default Icon;
