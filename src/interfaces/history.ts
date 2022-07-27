import { UserMiniInterface } from "@interfaces/users";
import TodoInterface from "@interfaces/todo";

export default interface HistoryItemInterface {
  id: number;
  user: UserMiniInterface;
  method: string;
  oldItem?: TodoInterface;
  newItem?: TodoInterface;
  createAt: string;
}
