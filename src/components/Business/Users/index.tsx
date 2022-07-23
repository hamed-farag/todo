import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Dropdown from "@components/UI/Dropdown";

import userService from "@services/users";

import UserInterface from "@interfaces/users";

import logger from "@helpers/logger";

interface UsersProps {
  onChange: (value: string | null) => void;
}

function Users(props: UsersProps) {
  const { onChange } = props;

  const [users, setUsers] = useState<Array<UserInterface>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<string | null>("");

  const getUsersData = async () => {
    const [response, error] = await userService.getUsers();

    if (response) {
      setUsers(response.data);
    } else {
      toast.error("Cannot Fetch Users!");
      logger.error("Something went Wrong, Cannot Fetch Users!", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    if (selectedUser !== "") {
      onChange(selectedUser);
    }
  }, [selectedUser]);

  const renderUsers = () => {
    const usersExtraction = users.map((user: UserInterface) => {
      return { value: user.id.toString(), label: user.name };
    });

    return <Dropdown onChange={(value) => setSelectedUser(value)} selectedValue={selectedUser} items={usersExtraction} defaultLabel="Select User" />;
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div>{renderUsers()}</div>;
}

export default Users;
