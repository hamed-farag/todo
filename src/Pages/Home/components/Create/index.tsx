import { FaPlusCircle } from "react-icons/fa";

import { NewTodoInterface } from "@interfaces/todo";

import { generateRandomNumber } from "@utils/number";

import colors from "@configs/colors";

interface TodoCreateInterface {
  userId: number;
  onCreate: (item: NewTodoInterface) => void;
}

function TodoCreate(props: TodoCreateInterface) {
  const { userId, onCreate } = props;

  return (
    <FaPlusCircle
      cursor={"pointer"}
      size="60"
      color={colors.iconColor}
      onClick={() => {
        onCreate({ id: generateRandomNumber(), title: "", completed: false, userId, isEditMode: true, isNew: true });
      }}
      display={userId}
    />
  );
}

export default TodoCreate;
