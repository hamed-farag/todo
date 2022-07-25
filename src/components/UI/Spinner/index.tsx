import classNames from "classnames";

import "./styles.scss";

interface SpinnerProps {
  size?: "normal" | "small" | "big";
}

function Spinner(props: SpinnerProps) {
  const { size } = props;

  const className = classNames("wk-spinner", {
    "wk-spinner--small": size === "small",
    "wk-spinner--normal": size === "normal",
    "wk-spinner--big": size === "big",
  });

  return <span className={className}></span>;
}

Spinner.defaultProps = {
  size: "normal",
};

export default Spinner;
