import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import UsersDropdown from "@components/Business/Users";
import TodoListing from "./components/Listing";
import Create from "./components/Create";

import { getTodoByUserId, deleteTodoItemById, updateTodoItemById, createTodoItem, removeTempTodoItem } from "./actions";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";
import { UserMiniInterface } from "@interfaces/users";

import env from "@configs/env";

import "./styles.scss";

function Home() {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState<UserMiniInterface | null>(null);
  const [todo, setTodo] = useState<Array<TodoInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getTodoData = async (user: UserMiniInterface, pageNumber: number) => {
    const [data, _] = await getTodoByUserId(user.id.toString(), pageNumber, env.pageSize);

    if (data) {
      setTodo(data.collection);
      setTotalCount(Number(data.totalCount));
    } else {
      toast.error(t("home.fetch_error_friendly"));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUser) {
      setIsLoading(true);
      getTodoData(selectedUser, currentPage);
    } else {
      // reset
      setTodo([]);
      setTotalCount(0);
      setCurrentPage(1);
    }
  }, [selectedUser, currentPage]);

  const handleUpdateTodoItem = async (item: TodoUpdatedProps) => {
    if (selectedUser) {
      const [data, _] = await updateTodoItemById(item, selectedUser, todo);

      if (data) {
        setTodo(data);
        toast.success(t("home.updated_successfully"));
        return true;
      } else {
        toast.error(t("home.update_failed"));
        return false;
      }
    } else {
      toast.error(t("home.user_not_selected_error"));
      return false;
    }
  };

  const handleDeleteTodoItem = async (id: number) => {
    if (selectedUser) {
      const [data, _] = await deleteTodoItemById(id, selectedUser, todo);

      if (data) {
        setTodo(data);
        // setTotalCount((prevValue) => prevValue - 1);
        toast.success(t("home.deleted_successfully"));
        return true;
      } else {
        toast.error(t("home.delete_failed"));
        return false;
      }
    } else {
      toast.error(t("home.user_not_selected_error"));
      return false;
    }
  };

  const handleCreateTodoItem = async (newItem: TodoInterface) => {
    if (selectedUser) {
      const [data, _] = await createTodoItem(selectedUser, newItem, todo);
      if (data) {
        setTodo(data);
        // setTotalCount((prevValue) => prevValue + 1);
        toast.success(t("home.added_successfully"));
        return true;
      } else {
        toast.error(t("home.add_failed"));
        return false;
      }
    } else {
      toast.error(t("home.user_not_selected_error"));
      return false;
    }
  };

  return (
    <div className="wk-home-page">
      <Helmet>
        <title>{t("home.page_title")}</title>
      </Helmet>
      <div className="wk-home-page__users">
        <UsersDropdown onChange={(miniUser) => setSelectedUser(miniUser)} />
      </div>
      <div className="wk-home-page__content">
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
            onItemCreate: (newItem) => handleCreateTodoItem(newItem),
            onItemCancel: (isNewItem) => {
              if (isNewItem) {
                const newTodoState = removeTempTodoItem(todo);
                setTodo(newTodoState);
              }
            },
          }}
        />
      </div>
      <div className="wk-home-page__create">
        <Create
          userId={Number(selectedUser?.id)}
          onCreate={(item) => {
            const isNewItemExist = todo.findIndex((itm) => itm.title === "");
            if (isNewItemExist === -1) {
              setTodo([item, ...todo]);
            } else {
              toast.warn(t("home.cannot_add_new_one"));
            }
          }}
        />
      </div>
      <div className="wk-home-page__footer">
        <small>{t("home.double_edit")}</small>
      </div>
    </div>
  );
}

export default Home;
