export default interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoUpdatedProps {
  id: number;
  field: string;
  value: string;
}
