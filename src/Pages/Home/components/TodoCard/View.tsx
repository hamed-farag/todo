import Label from "@components/UI/Label";

interface ViewProps {
  value: string;
  onDoubleClick: () => void;
}

function View(props: ViewProps) {
  const { value, onDoubleClick } = props;
  return (
    <div className="wk-todo-card__view" onDoubleClick={onDoubleClick}>
      <Label text={value} />
    </div>
  );
}

export default View;
