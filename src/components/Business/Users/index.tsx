import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import Dropdown from "@components/UI/Dropdown";
import Label from "@components/UI/Label";

import userService from "@services/users";

import UserInterface, { UserMiniInterface } from "@interfaces/users";

import logger from "@helpers/logger";

import "./styles.scss";

interface UsersProps {
  onChange: (value: UserMiniInterface | null) => void;
}

function Users(props: UsersProps) {
  const { t } = useTranslation();
  const { onChange } = props;

  const [users, setUsers] = useState<Array<UserInterface>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserMiniInterface | null>(null);

  const getUsersData = async () => {
    const [response, error] = await userService.getUsers();

    if (response) {
      setUsers(response.data);
    } else {
      toast.error(t("users.fetch_error_friendly"));
      logger.error("Something went Wrong, Cannot Fetch Users!", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      onChange(selectedUser);
    }
  }, [selectedUser]);

  const usersExtraction = users.map((user: UserInterface) => {
    return { value: user.id.toString(), label: user.name };
  });

  const getMiniUser = (id: string): UserMiniInterface => {
    const user = users.find((user) => user.id === Number(id));
    return {
      id: user?.id ?? 0,
      name: user?.name ?? "",
    };
  };

  return (
    <div className="wk-users-dropdown">
      <div className="wk-users-dropdown__label">
        <Label text={t("users.users_placeholder")} size="big" />
      </div>
      <div className="wk-users-dropdown__collection">
        <Dropdown
          loading={isLoading}
          onChange={(value) => setSelectedUser(getMiniUser(value ?? "0"))}
          selectedValue={selectedUser?.id.toString() ?? null}
          items={usersExtraction}
          defaultLabel={t("users.user_select")}
        />
      </div>
    </div>
  );
}

export default Users;
