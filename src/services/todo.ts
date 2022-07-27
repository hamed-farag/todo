import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";

import HistoryService from "./history";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import TodoInterface from "@interfaces/todo";
import { IAPIResponse } from "@interfaces/http";
import { UserMiniInterface } from "@interfaces/users";

class Services {
  private requester: IRequester;

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl });
  }

  public async getTodoByUserId(userId: string, pageNumber: string, pageSize: string): Promise<[response: IAPIResponse, error: Error]> {
    const [response, error] = await asyncer(this.requester.get<Array<TodoInterface>>(servicesUrls.userTodo(userId, pageNumber, pageSize)));

    return [response, error];
  }

  public async deleteTodoItemById(id: string, user: UserMiniInterface, oldItem?: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    const [response, error] = await asyncer(this.requester.delete<Array<TodoInterface>>(servicesUrls.deleteTodo(id)));

    if (response) {
      HistoryService.createHistoryLog(user, "delete", oldItem, undefined);
    }

    return [response, error];
  }

  public async updateTodoItemById(
    item: TodoInterface,
    oldItem: TodoInterface,
    user: UserMiniInterface
  ): Promise<[response: IAPIResponse, error: Error]> {
    const [response, error] = await asyncer(this.requester.put<TodoInterface, TodoInterface>(servicesUrls.updateTodo(item.id.toString()), item));

    if (response) {
      HistoryService.createHistoryLog(user, "put", oldItem, item);
    }

    return [response, error];
  }

  public async createTodoItemById(item: TodoInterface, user: UserMiniInterface): Promise<[response: IAPIResponse, error: Error]> {
    const [response, error] = await asyncer(this.requester.post<TodoInterface, TodoInterface>(servicesUrls.createTodo, item));

    if (response) {
      HistoryService.createHistoryLog(user, "post", undefined, item);
    }

    return [response, error];
  }
}

export default new Services();
