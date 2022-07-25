/* eslint-disable jsx-a11y/label-has-associated-control */

import "./styles.scss";

interface DropDownProps {
  defaultLabel: string;
  selectedValue: string | null;
  onChange: (value: string | null) => void;
  items: Array<{ value: string; label: string }>;
}

function Dropdown(props: DropDownProps) {
  const { onChange, items, defaultLabel, selectedValue } = props;

  const value = selectedValue ?? "";

  return (
    <div className="wk-dropdown">
      <label className="wk-dropdown__select">
        <select value={value} onChange={(e) => onChange(e.target.value !== "" ? e.target.value : null)}>
          <option value="">{defaultLabel}</option>
          {items.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
