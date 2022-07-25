import Button from "@components/UI/Button";
import Icon from "@components//UI/Icon";

import { NewTodoInterface } from "@interfaces/todo";

import { generateRandomNumber } from "@utils/number";

interface TodoCreateInterface {
  userId: number;
  onCreate: (item: NewTodoInterface) => void;
}

function TodoCreate(props: TodoCreateInterface) {
  const { userId, onCreate } = props;

  return (
    <Button
      disabled={userId ? false : true}
      value={<Icon name="plus" />}
      name="add-todo"
      onClick={() => {
        onCreate({ id: generateRandomNumber(), title: "", completed: false, userId, isEditMode: true, isNew: true });
      }}
    />
  );
}

export default TodoCreate;
