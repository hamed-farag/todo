import { useEffect, useState } from "react";

import Button from "@components/UI/Button";
import Checkbox from "@components/UI/Checkbox";
import Textbox from "@components/UI/Textbox";
import Icon from "@components/UI/Icon";
import Label from "@components/UI/Label";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

import "./styles.scss";

interface TodoCardProps {
  data: TodoInterface;
  onUpdate: (updatedItem: TodoUpdatedProps) => Promise<boolean>;
  onDelete: (id: number) => Promise<boolean>;
}

function TodoCard(props: TodoCardProps) {
  const { data, onUpdate, onDelete } = props;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>("");

  useEffect(() => {
    setTodoTitle(data.title);
  }, [data.title]);

  const handleUpdates = async (field: string, value: string) => {
    const isUpdateSuccess = await onUpdate({ id: data.id, field, value });
    if (isUpdateSuccess) {
      setIsEditMode(false);
    }
  };

  const handleCancelUpdates = () => {
    setTodoTitle(data.title);
    setIsEditMode(false);
  };

  const handleDelete = async () => {
    const isDeleteSuccess = await onDelete(data.id);
    if (isDeleteSuccess) {
    }
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
          handleDelete();
        }}
      />
    </div>
  );
}

export default TodoCard;
