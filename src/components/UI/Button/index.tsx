import classNames from "classnames";

import "./styles.scss";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  theme: "primary" | "secondary";
  value: string | React.ReactNode;
  name: string;
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

function Button(props: ButtonProps) {
  const { type, value, name, onClick, disabled, theme } = props;

  const className = classNames("wk-button", { "wk-button__primary": theme === "primary", "wk-button__secondary": theme === "secondary" });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} type={type} onClick={onClick} name={name} aria-label={name} disabled={disabled}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  theme: "primary",
};

export default Button;
