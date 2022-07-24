import Paginator from "@components/UI/Paginator";
import TodoCard from "../TodoCard";

import TodoInterface from "@interfaces/todo";

interface TodoListingProps {
  isLoading: boolean;
  todoItems: Array<TodoInterface>;
  totalCount: number;
  pageSize: number;
  getCurrentPage: (value: number) => void;
}

function TodoListing(props: TodoListingProps) {
  const { isLoading, todoItems, totalCount, pageSize, getCurrentPage } = props;

  const renderTodo = () => {
    const todoExtraction = todoItems.map((item: TodoInterface) => {
      return <TodoCard key={item.id} data={item} onUpdate={() => {}} onDelete={() => {}} />;
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
