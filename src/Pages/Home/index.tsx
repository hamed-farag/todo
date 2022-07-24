import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import UsersDropdown from "@components/Business/Users";
import TodoListing from "./components/Listing";

import todoService from "@services/todo";

import TodoInterface from "@interfaces/todo";

import logger from "@helpers/logger";

import env from "@configs/env";

function Home() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
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
    if (selectedUserId) {
      setIsLoading(true);
      getTodoData(selectedUserId, currentPage.toString());
    }
  }, [selectedUserId, currentPage]);

  return (
    <div>
      <UsersDropdown onChange={(userId) => setSelectedUserId(userId)} />
      <br />
      <TodoListing
        isLoading={isLoading}
        todoItems={todo}
        totalCount={totalCount}
        pageSize={env.pageSize}
        getCurrentPage={(value) => {
          setCurrentPage(value);
        }}
      />
    </div>
  );
}

export default Home;
