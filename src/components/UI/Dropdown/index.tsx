/* eslint-disable jsx-a11y/label-has-associated-control */

import "./styles.scss";

interface DropDownProps {
  defaultLabel: string;
  selectedValue: string;
  onChange: (value: string) => void;
  items: Array<{ value: string; label: string }>;
}

function Dropdown(props: DropDownProps) {
  const { onChange, items, defaultLabel, selectedValue } = props;

  return (
    <div>
      <label>
        <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
          <option value={undefined}>{defaultLabel}</option>
          {items.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
