import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";

import HistoryService from "./history";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import TodoInterface from "@interfaces/todo";
import { IAPIResponse, IConfig } from "@interfaces/http";

class Services {
  private requester: IRequester;

  private headers = { headers: { "x-monitor": "true" } };

  private handleRequestInterceptor(axiosRequestConfig: IConfig) {
    if (
      axiosRequestConfig &&
      axiosRequestConfig.headers &&
      axiosRequestConfig.headers["x-monitor"] &&
      axiosRequestConfig.headers["x-monitor"] === "true"
    ) {
      HistoryService.createHistoryLog(axiosRequestConfig.url, axiosRequestConfig.data, axiosRequestConfig.method);
    }
  }

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl }, undefined, this.handleRequestInterceptor);
  }

  public getTodoByUserId(userId: string, pageNumber: string, pageSize: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.get<Array<TodoInterface>>(servicesUrls.userTodo(userId, pageNumber, pageSize)));
  }

  public deleteTodoItemById(id: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.delete<Array<TodoInterface>>(servicesUrls.deleteTodo(id), this.headers));
  }

  public updateTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.put<TodoInterface, TodoInterface>(servicesUrls.updateTodo(item.id.toString()), item, this.headers));
  }

  public createTodoItemById(item: TodoInterface): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.post<TodoInterface, TodoInterface>(servicesUrls.createTodo, item, this.headers));
  }
}

export default new Services();
