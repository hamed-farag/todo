import Paginator from "@components/UI/Paginator";
import TodoCard from "../TodoCard";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

interface TodoListingProps {
  isLoading: boolean;
  todoItems: Array<TodoInterface>;
  totalCount: number;
  pageSize: number;
  actions: {
    getCurrentPage: (value: number) => void;
    onItemUpdate: (updatedItem: TodoUpdatedProps) => Promise<boolean>;
    onItemDelete: (id: number) => Promise<boolean>;
  };
}

function TodoListing(props: TodoListingProps) {
  const { isLoading, todoItems, totalCount, pageSize, actions } = props;
  const { getCurrentPage, onItemDelete, onItemUpdate } = actions;

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
        />
      );
    });

    return todoExtraction;
  };

  return (
    <div>
      {isLoading ? <span>Loading</span> : renderTodo()}
      <Paginator
        totalCount={totalCount}
        disabled={false}
        pageSize={pageSize}
        onChange={(selectedPage) => {
          getCurrentPage(selectedPage);
        }}
      />
    </div>
  );
}

export default TodoListing;
