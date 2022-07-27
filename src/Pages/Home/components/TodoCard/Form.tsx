import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import Textbox from "@components/UI/Textbox";

import { FaSave, FaTimesCircle } from "react-icons/fa";

import colors from "@configs/colors";

let todoTitleSchema = yup.string().required();

interface FormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  text: {
    inputPlaceholder: string;
  };
}

function Form(props: FormProps) {
  const { t } = useTranslation();

  const { value, onChange, onSave, onCancel, text } = props;

  const handleSave = async () => {
    const isValid = await todoTitleSchema.isValid(value.trim());

    if (isValid) {
      onSave();
    } else {
      toast.warn(t("home.write_title_warn"));
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
