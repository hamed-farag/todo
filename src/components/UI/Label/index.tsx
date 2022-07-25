import classNames from "classnames";

import "./styles.scss";

interface LabelProps {
  text: string;
  size?: "normal" | "small" | "big";
}

function Label(props: LabelProps) {
  const { text, size } = props;

  const className = classNames("wk-label", {
    "wk-label--small": size === "small",
    "wk-label--normal": size === "normal",
    "wk-label--big": size === "big",
  });

  return <span className={className}>{text}</span>;
}

Label.defaultProps = {
  size: "normal",
};

export default Label;
