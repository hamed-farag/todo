import { Requester, IRequester } from "@helpers/http/requester";
import asyncer from "@helpers/http/asyncer";
import logger from "@helpers/logger";

import { generateRandomNumber } from "@utils/number";

import env from "@configs/env";
import servicesUrls from "@configs/servicesUrl";

import HistoryItemInterface from "@interfaces/history";

class Services {
  private requester: IRequester;

  constructor() {
    this.requester = new Requester({ baseUrl: env.baseUrl });
  }

  public createHistoryLog(url?: string, item?: any, method?: string) {
    const itemId = generateRandomNumber();

    try {
      const dataItem = {
        id: itemId,
        data: item,
        createAt: new Date().toISOString(),
        method,
        url,
      };
      return asyncer(this.requester.post<HistoryItemInterface, HistoryItemInterface>(servicesUrls.addHistoryItem, dataItem));
    } catch (error) {
      logger.error("Invalid Json Object", error as Error);
    }
  }
}

export default new Services();
