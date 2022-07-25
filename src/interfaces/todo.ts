export default interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface NewTodoInterface extends TodoInterface {
  isEditMode?: boolean;
  isNew?: boolean;
}

// just for use it as enum for typing purpose
export const todoEnum: TodoInterface = {
  id: 0,
  userId: 0,
  title: "",
  completed: false,
};

export interface TodoUpdatedProps {
  id: number;
  field: keyof typeof todoEnum;
  value: any;
}
