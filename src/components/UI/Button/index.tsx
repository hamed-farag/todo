import "./styles.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  value: string | React.ReactNode;
  name: string;
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

function Button(props: ButtonProps) {
  const { type, value, name, onClick, disabled } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} name={name} aria-label={name} disabled={disabled}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
