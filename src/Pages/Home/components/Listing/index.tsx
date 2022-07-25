import Paginator from "@components/UI/Paginator";
import TodoCard from "../TodoCard";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

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
      return <span>Loading</span>;
    }

    if (!isLoading && todoItems.length === 0) {
      return <span>Empty</span>;
    }

    return renderTodo();
  };

  return (
    <div className="wk-todo-list">
      <div className="wk-todo-list__content">{renderContent()}</div>
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
    </div>
  );
}

export default TodoListing;
