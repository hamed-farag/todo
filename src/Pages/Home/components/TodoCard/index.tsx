import { useEffect, useState } from "react";

import Button from "@components/UI/Button";
import Checkbox from "@components/UI/Checkbox";
import Icon from "@components/UI/Icon";

import Form from "./Form";
import View from "./View";

import TodoInterface, { TodoUpdatedProps, todoEnum, NewTodoInterface } from "@interfaces/todo";

import "./styles.scss";

interface TodoCardProps {
  data: NewTodoInterface;
  onUpdate: (updatedItem: TodoUpdatedProps) => Promise<boolean>;
  onCreate: (newItem: TodoInterface) => Promise<boolean>;
  onCancel: (isNew: boolean) => void;
  onDelete: (id: number) => Promise<boolean>;
}

function TodoCard(props: TodoCardProps) {
  const { data, onUpdate, onDelete, onCreate, onCancel } = props;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>("");

  useEffect(() => {
    if (data.isEditMode === true) {
      setIsEditMode(true);
    }
  }, [data.isEditMode]);

  useEffect(() => {
    setTodoTitle(data.title);
  }, [data.title]);

  const handleUpdates = async (field: keyof typeof todoEnum, value: any) => {
    const isUpdateSuccess = await onUpdate({ id: data.id, field, value });
    if (isUpdateSuccess) {
      setIsEditMode(false);
    }
  };

  const handleCreate = async () => {
    const isCreateSuccess = await onCreate({ ...data, title: todoTitle });
    if (isCreateSuccess) {
      setIsEditMode(false);
    }
  };

  const handleCancelUpdates = () => {
    setTodoTitle(data.title);
    setIsEditMode(false);
    onCancel(data.isNew ? true : false);
  };

  const handleDelete = async () => {
    const isDeleteSuccess = await onDelete(data.id);
    if (isDeleteSuccess) {
    }
  };

  const handleSaveClick = () => {
    if (data.isNew) {
      handleCreate();
    } else {
      handleUpdates("title", todoTitle);
    }
  };

  const renderTodoContent = () => {
    if (isEditMode) {
      return (
        <Form
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
          onSave={handleSaveClick}
          onCancel={handleCancelUpdates}
          text={{ save: "Update", cancel: "Cancel", inputPlaceholder: "Write your item!" }}
        />
      );
    }

    return (
      <View
        value={data.title}
        onDoubleClick={() => {
          setIsEditMode(true);
        }}
      />
    );
  };

  return (
    <div className="wk-todo-card">
      {/* mark as done */}
      <Checkbox checked={data.completed} onChange={(value: boolean) => handleUpdates("completed", value)} />
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
