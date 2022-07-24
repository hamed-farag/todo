import { useEffect, useState } from "react";

import Button from "@components/UI/Button";
import Checkbox from "@components/UI/Checkbox";
import Textbox from "@components/UI/Textbox";
import Icon from "@components/UI/Icon";
import Label from "@components/UI/Label";

import TodoInterface from "@interfaces/todo";

import "./styles.scss";

interface TodoUpdatedProps {
  id: number;
  field: string;
  value: string;
}

interface TodoCardProps {
  data: TodoInterface;
  onUpdate: (updatedItem: TodoUpdatedProps) => void;
  onDelete: (id: number) => void;
}

function TodoCard(props: TodoCardProps) {
  const { data, onUpdate, onDelete } = props;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>("");

  useEffect(() => {
    setTodoTitle(data.title);
  }, [data.title]);

  const handleUpdates = (field: string, value: string) => {
    onUpdate({ id: data.id, field, value });
  };

  const handleCancelUpdates = () => {
    setTodoTitle(data.title);
    setIsEditMode(false);
  };

  const renderTodoContent = () => {
    if (isEditMode) {
      return (
        <div>
          <Textbox
            value={todoTitle}
            placeholder="Write your item!"
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <div>
            <Button name="Update" value="Update" onClick={() => handleUpdates("title", todoTitle)} />
            <Button name="Cancel" value="Cancel" onClick={handleCancelUpdates} />
          </div>
        </div>
      );
    }

    return (
      <div
        onDoubleClick={() => {
          setIsEditMode(true);
        }}
      >
        <Label text={data.title} />
      </div>
    );
  };

  return (
    <div className="wk-todo-card">
      {/* mark as done */}
      <Checkbox checked={data.completed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdates("completed", e.target.value)} />
      {/* todo content */}
      {renderTodoContent()}
      {/* remove */}
      <Button
        name="delete-todo-item"
        value={<Icon name="times" />}
        onClick={() => {
          onDelete(data.id);
        }}
      />
    </div>
  );
}

export default TodoCard;
