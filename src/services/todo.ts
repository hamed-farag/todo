import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import TodoInterface from "@interfaces/todo";
import { IAPIResponse, IConfig } from "@interfaces/http";

class Services {
  private requester: IRequester;

  private handleResponseInterceptor(AxiosResponse: IAPIResponse) {
    console.info(AxiosResponse.headers);
  }

  private handleRequestInterceptor(AxiosRequestConfig: IConfig) {
    console.info(AxiosRequestConfig.headers);
  }

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl }, this.handleResponseInterceptor, this.handleRequestInterceptor);
  }

  public getTodoByUserId(userId: string, pageNumber: string, pageSize: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(
      this.requester.get<Array<TodoInterface>>(servicesUrls.userTodo(userId, pageNumber, pageSize), { headers: { "x-monitor": "true" } })
    );
  }

  public deleteTodoItemById(id: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.delete<Array<TodoInterface>>(servicesUrls.deleteTodo(id), { headers: { "x-monitor": "true" } }));
  }

  public updateTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(
      this.requester.put<TodoInterface, TodoInterface>(servicesUrls.updateTodo(item.id.toString()), item, { headers: { "x-monitor": "true" } })
    );
  }

  public createTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.post<TodoInterface, TodoInterface>(servicesUrls.createTodo, item, { headers: { "x-monitor": "true" } }));
  }
}

export default new Services();
