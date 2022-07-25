import classNames from "classnames";

import "./styles.scss";

import icons from "./icons";

interface IconProps {
  size?: "normal" | "small" | "big";
  name: keyof typeof icons;
}

function Icon(props: IconProps) {
  const { size, name } = props;
  const iconPath = icons[name] as unknown as string;

  const className = classNames("wk-icon", {
    "wk-icon--small": size === "small",
    "wk-icon--normal": size === "normal",
    "wk-icon--big": size === "big",
  });

  // handle size with classnames to set the proper className
  return <img className={className} src={iconPath} alt={name as string} />;
}

Icon.defaultProps = {
  size: "normal",
};

export { icons };
export default Icon;
