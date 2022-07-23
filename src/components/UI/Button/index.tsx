import "./styles.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  value: string | React.ReactNode;
  name: string;
  onClick: React.MouseEventHandler;
}

function Button(props: ButtonProps) {
  const { type, value, name, onClick } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} name={name} aria-label={name}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
};

export default Button;
