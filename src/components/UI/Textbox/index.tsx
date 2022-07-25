import classNames from "classnames";

import "./styles.scss";

interface TextboxProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Textbox(props: TextboxProps) {
  const { placeholder, value, onChange } = props;

  const className = classNames("wk-textbox");

  // support required and make if it required show red border
  return <input className={className} type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default Textbox;
