import { useEffect, useState } from "react";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Form from "./Form";
import View from "./View";

import TodoInterface, { TodoUpdatedProps, todoEnum, NewTodoInterface } from "@interfaces/todo";

import colors from "@configs/colors";

import "./styles.scss";

interface TodoCardProps {
  data: NewTodoInterface;
  onUpdate: (updatedItem: TodoUpdatedProps) => Promise<boolean>;
  onCreate: (newItem: TodoInterface) => Promise<boolean>;
  onCancel: (isNew: boolean) => void;
  onDelete: (id: number) => Promise<boolean>;
}

function TodoCard(props: TodoCardProps) {
  const { t } = useTranslation();

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
          text={{ inputPlaceholder: t("home.write_todo") }}
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

  const renderCheckbox = () => {
    if (data.completed) {
      return <FaCheckCircle size={"25"} color={colors.iconColor} cursor={"pointer"} onClick={() => handleUpdates("completed", false)} />;
    }
    return <FaRegCircle size={"25"} color={colors.iconColor} cursor={"pointer"} onClick={() => handleUpdates("completed", true)} />;
  };

  return (
    <div className="wk-todo-card">
      {/* mark as done */}
      <div className="wk-todo-card__checkbox">{renderCheckbox()}</div>
      {/* todo content */}
      {renderTodoContent()}
      {/* remove */}
      <div className="wk-todo-card__delete">
        <FaRegTrashAlt
          cursor={"pointer"}
          size={"20"}
          color={colors.iconColor}
          onClick={() => {
            handleDelete();
          }}
        />
      </div>
    </div>
  );
}

export default TodoCard;
