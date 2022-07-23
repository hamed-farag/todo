import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Paginator from "@components/UI/Paginator";

import env from "@configs/env";

import todoService from "@services/todo";

import TodoInterface from "@interfaces/todo";

import logger from "@helpers/logger";

interface TodoListingProps {
  selectedUser: string | null;
}

function TodoListing(props: TodoListingProps) {
  const { selectedUser } = props;

  const [todo, setTodo] = useState<Array<TodoInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getTodoData = async (userId: string, pageNumber: string) => {
    const [response, error] = await todoService.getTodoByUserId(userId, pageNumber, env.pageSize.toString());

    if (response) {
      setTodo(response.data);
      setTotalCount(Number(response.headers["x-total-count"]));
    } else {
      toast.error("Cannot Fetch Todo for the selected User!");
      logger.error("Something went Wrong, Cannot Fetch Todo!", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUser) {
      setIsLoading(true);
      getTodoData(selectedUser, currentPage.toString());
    }
  }, [selectedUser, currentPage]);

  const renderTodo = () => {
    const todoExtraction = todo.map((item: TodoInterface) => {
      return <div>{item.title}</div>;
    });

    return todoExtraction;
  };

  return (
    <div>
      {isLoading ? <span>Loading</span> : renderTodo()}
      <Paginator
        totalCount={totalCount}
        disabled={false}
        pageSize={env.pageSize}
        onChange={(selectedPage) => {
          setCurrentPage(selectedPage);
        }}
      />
    </div>
  );
}

export default TodoListing;
