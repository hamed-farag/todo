/* eslint-disable jsx-a11y/label-has-associated-control */
import Spinner from "../Spinner";

import "./styles.scss";

interface DropDownProps {
  defaultLabel: string;
  selectedValue: string | null;
  onChange: (value: string | null) => void;
  items: Array<{ value: string; label: string }>;
  loading?: boolean;
}

function Dropdown(props: DropDownProps) {
  const { onChange, items, defaultLabel, selectedValue, loading } = props;

  const value = selectedValue ?? "";

  return (
    <div className="wk-dropdown">
      {loading && (
        <div className="wk-dropdown__loading">
          <Spinner size="small" />
        </div>
      )}
      <label className="wk-dropdown__select">
        <select value={value} onChange={(e) => onChange(e.target.value !== "" ? e.target.value : null)} disabled={loading}>
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
