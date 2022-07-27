import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { NewTodoInterface } from "@interfaces/todo";

import { generateRandomNumber } from "@utils/number";

import colors from "@configs/colors";

interface TodoCreateInterface {
  userId: number;
  onCreate: (item: NewTodoInterface) => void;
}

function TodoCreate(props: TodoCreateInterface) {
  const { t } = useTranslation();

  const { userId, onCreate } = props;

  return (
    <FaPlusCircle
      cursor={"pointer"}
      size="60"
      color={colors.primeColor}
      onClick={() => {
        if (userId) {
          onCreate({ id: generateRandomNumber(), title: "", completed: false, userId, isEditMode: true, isNew: true });
        } else {
          toast.warn(t("home.select_user_want"));
        }
      }}
    />
  );
}

export default TodoCreate;
