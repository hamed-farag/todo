import historyService from "@services/history";

import HistoryItemInterface from "@interfaces/history";

import logger from "@helpers/logger";

interface HistoryGetResponse {
  collection: Array<HistoryItemInterface>;
  totalCount: string;
}

export async function getHistoryByUserId(
  userId: string,
  pageNumber: number,
  pageSize: number
): Promise<[response: HistoryGetResponse | undefined, error: Error | undefined]> {
  const [response, error] = await historyService.getHistoryByUserId(userId, pageNumber.toString(), pageSize.toString());

  if (response) {
    return [{ collection: response.data, totalCount: response.headers["x-total-count"] }, undefined];
  } else {
    logger.error("Something went Wrong, Cannot Fetch History!", error);
    return [undefined, error];
  }
}
