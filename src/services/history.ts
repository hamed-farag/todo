import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";
import logger from "@helpers/logger";

import { generateRandomNumber } from "@utils/number";
import { getCurrentUTCTime } from "@utils/date";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import HistoryItemInterface from "@interfaces/history";
import { IAPIResponse } from "@interfaces/http";

class Services {
  private requester: IRequester;

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl });
  }

  public createHistoryLog(userId: string, url?: string, item?: any, method?: string) {
    const itemId = generateRandomNumber();

    try {
      const dataItem = {
        id: itemId,
        userId: userId,
        data: item,
        createAt: getCurrentUTCTime(),
        method,
        url,
      };
      return asyncer(this.requester.post<HistoryItemInterface, HistoryItemInterface>(servicesUrls.addHistoryItem, dataItem));
    } catch (error) {
      logger.error("Invalid Json Object", error as Error);
    }
  }

  public getHistoryByUserId(userId: string, pageNumber: string, pageSize: string): Promise<[response: IAPIResponse, error: Error]> {
    return asyncer(this.requester.get<Array<HistoryItemInterface>>(servicesUrls.getHistory(userId, pageNumber, pageSize)));
  }
}

export default new Services();
