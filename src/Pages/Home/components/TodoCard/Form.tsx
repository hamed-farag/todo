import { toast } from "react-toastify";

import Textbox from "@components/UI/Textbox";

import { FaSave, FaTimesCircle } from "react-icons/fa";

import colors from "@configs/colors";

interface FormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  text: {
    save: string;
    cancel: string;
    inputPlaceholder: string;
  };
}

function Form(props: FormProps) {
  const { value, onChange, onSave, onCancel, text } = props;

  const handleSave = () => {
    if (value.length === 0) {
      toast.warn("Please write a title!");
    } else {
      onSave();
    }
  };

  return (
    <div className="wk-todo-card__form">
      <Textbox value={value} placeholder={text.inputPlaceholder} onChange={onChange} />
      <div className="wk-todo-card__actions">
        <FaSave cursor={"pointer"} onClick={handleSave} size="20" color={colors.iconColor} />
        <FaTimesCircle cursor={"pointer"} onClick={onCancel} size="20" color={colors.iconColor} />
      </div>
    </div>
  );
}

export default Form;
