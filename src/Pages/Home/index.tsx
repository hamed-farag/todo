import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import UsersDropdown from "@components/Business/Users";
import TodoListing from "./components/Listing";

import { getTodoByUserId, deleteTodoItemById, updateTodoItemById } from "./actions";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

import env from "@configs/env";

function Home() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [todo, setTodo] = useState<Array<TodoInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getTodoData = async (userId: string, pageNumber: number) => {
    const [data, _] = await getTodoByUserId(userId, pageNumber, env.pageSize);

    if (data) {
      setTodo(data.collection);
      setTotalCount(Number(data.totalCount));
    } else {
      toast.error("Cannot Fetch Todo for the selected User!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUserId) {
      setIsLoading(true);
      getTodoData(selectedUserId, currentPage);
    }
  }, [selectedUserId, currentPage]);

  const handleUpdateTodoItem = async (item: TodoUpdatedProps) => {
    const [data, _] = await updateTodoItemById(item, todo);

    if (data) {
      setTodo(data);
      toast.success("Todo item Updated Successfully!");
      return true;
    } else {
      toast.error("Cannot update Todo item!");
      return false;
    }
  };

  const handleDeleteTodoItem = async (id: number) => {
    const [data, _] = await deleteTodoItemById(id, todo);

    if (data) {
      setTodo(data);
      toast.success("Todo item Deleted Successfully!");
      return true;
    } else {
      toast.error("Cannot delete Todo item!");
      return false;
    }
  };

  return (
    <div>
      <UsersDropdown onChange={(userId) => setSelectedUserId(userId)} />
      <br />
      <TodoListing
        isLoading={isLoading}
        todoItems={todo}
        totalCount={totalCount}
        pageSize={env.pageSize}
        actions={{
          getCurrentPage: (value) => {
            setCurrentPage(value);
          },
          onItemUpdate: (item) => handleUpdateTodoItem(item),
          onItemDelete: (id) => handleDeleteTodoItem(id),
        }}
      />
    </div>
  );
}

export default Home;
