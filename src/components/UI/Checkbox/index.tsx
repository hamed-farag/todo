import "./styles.scss";

interface CheckboxProps {
  label?: string;
  checked: true | false;
  onChange: (e: boolean) => void;
}

function Checkbox(props: CheckboxProps) {
  const { label, checked, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="wk-checkbox">
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <svg className={`wk-checkbox__cb ${checked ? "wk-checkbox__cb--active" : ""}`} aria-hidden="true" viewBox="0 0 15 11" fill="none">
        <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={checked ? "#fff" : "none"} />
      </svg>
      {label}
    </label>
  );
}

Checkbox.defaultProps = {
  label: "",
};

export default Checkbox;
