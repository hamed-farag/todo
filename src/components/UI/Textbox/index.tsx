import "./styles.scss";

interface TextboxProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Textbox(props: TextboxProps) {
  const { placeholder, value, onChange } = props;

  // support required and make if it required show red border
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default Textbox;
