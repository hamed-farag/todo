import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import TodoInterface from "@interfaces/todo";
import { IAPIResponse } from "@interfaces/http";

class Services {
  private requester: IRequester;

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl });
  }

  public getTodoByUserId(userId: string, pageNumber: string, pageSize: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.get<Array<TodoInterface>>(servicesUrls.userTodo(userId, pageNumber, pageSize)));
  }

  public deleteTodoItemById(id: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.delete<Array<TodoInterface>>(servicesUrls.deleteTodo(id)));
  }

  public updateTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.put<TodoInterface, TodoInterface>(servicesUrls.updateTodo(item.id.toString()), item));
  }

  public createTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.post<TodoInterface, TodoInterface>(servicesUrls.createTodo, item));
  }
}

export default new Services();
