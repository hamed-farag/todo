import HistoryItemInterface from "@interfaces/history";
import { getRelativeTime } from "@utils/date";

const methodType = {
  update: "put",
  delete: "delete",
  create: "post",
};

interface HistoryItemReturnItem {
  relativeTime: string;
  message: string;
  actionType: keyof typeof methodType;
}

function constructMessage(userId: string, itemId: number, method?: string) {
  switch (method) {
    case methodType.create:
      return `${userId} created TODO#${itemId}`;

    case methodType.delete:
      return `${userId} deleted TODO#${itemId}`;

    case methodType.update:
      return `${userId} updated TODO#${itemId}`;

    default:
      return "N/A";
  }
}

export function transformHistoryItem(item: HistoryItemInterface): HistoryItemReturnItem {
  let message: string = "";
  let itemId: number = 0;

  // we have to extract the todo number from one of two places
  // item.data.id (work fine with post and put)
  // or item.url (work with delete)
  const urlAsArray = item.url?.split("/");
  const todoItemId = (urlAsArray && urlAsArray[urlAsArray.length - 1]) || "NA";

  if (isNaN(Number(todoItemId))) {
    itemId = item.data && item.data.id;
  } else {
    itemId = Number(todoItemId);
  }

  message = constructMessage(item.userId, itemId, item.method);

  return {
    relativeTime: getRelativeTime(item.createAt),
    message: message,
    actionType: item.method as keyof typeof methodType,
  };
}
