import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import UserInterface from "@interfaces/users";
import { IAPIResponse } from "@interfaces/http";

class Services {
  private requester: IRequester;

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl });
  }

  public getUsers(): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.get<Array<UserInterface>>(servicesUrls.users));
  }
}

export default new Services();
