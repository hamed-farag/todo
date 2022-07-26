import { FaList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Paginator from "@components/UI/Paginator";
import Empty from "@components/UI/Empty";
import Spinner from "@components/UI/Spinner";

import TodoCard from "../TodoCard";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

import colors from "@configs/colors";

import "./styles.scss";

interface TodoListingProps {
  isLoading: boolean;
  todoItems: Array<TodoInterface>;
  totalCount: number;
  pageSize: number;
  actions: {
    getCurrentPage: (value: number) => void;
    onItemUpdate: (updatedItem: TodoUpdatedProps) => Promise<boolean>;
    onItemDelete: (id: number) => Promise<boolean>;
    onItemCreate: (newItem: TodoInterface) => Promise<boolean>;
    onItemCancel: (isNewItem: boolean) => void;
  };
}

function TodoListing(props: TodoListingProps) {
  const { t } = useTranslation();

  const { isLoading, todoItems, totalCount, pageSize, actions } = props;
  const { getCurrentPage, onItemDelete, onItemUpdate, onItemCreate, onItemCancel } = actions;

  const renderTodo = () => {
    const todoExtraction = todoItems.map((item: TodoInterface) => {
      return (
        <TodoCard
          key={item.id}
          data={item}
          onUpdate={(updatedItem) => {
            return onItemUpdate(updatedItem);
          }}
          onDelete={(id) => {
            return onItemDelete(id);
          }}
          onCreate={(newItem) => {
            return onItemCreate(newItem);
          }}
          onCancel={(isNewItem) => {
            onItemCancel(isNewItem);
          }}
        />
      );
    });

    return todoExtraction;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="wk-todo-list__loading">
          <Spinner size="big" />
        </div>
      );
    }

    if (!isLoading && todoItems.length === 0) {
      return (
        <div className="wk-todo-list__empty">
          <Empty icon={<FaList size="80" color={colors.iconColor} />} title={t("home.empty_todo")} />
        </div>
      );
    }

    return renderTodo();
  };

  return (
    <div className="wk-todo-list">
      <div className="wk-todo-list__content">{renderContent()}</div>
      {totalCount > todoItems.length && (
        <div className="wk-todo-list__footer">
          <Paginator
            totalCount={totalCount}
            disabled={false}
            pageSize={pageSize}
            onChange={(selectedPage) => {
              getCurrentPage(selectedPage);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default TodoListing;
