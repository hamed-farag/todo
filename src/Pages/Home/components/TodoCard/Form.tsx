import Textbox from "@components/UI/Textbox";
import Button from "@components/UI/Button";

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
  return (
    <div className="wk-todo-card__form">
      <Textbox value={value} placeholder={text.inputPlaceholder} onChange={onChange} />
      <div>
        <Button name={text.save} value={text.save} onClick={onSave} />
        <Button name={text.cancel} value={text.cancel} onClick={onCancel} />
      </div>
    </div>
  );
}

export default Form;
