import HistoryItemInterface from "@interfaces/history";
import { UserMiniInterface } from "@interfaces/users";
import TodoInterface, { todoEnum } from "@interfaces/todo";
import { getRelativeTime } from "@utils/date";
import { getDifferenceKey } from "@utils/object";

import i18n from "@i18n/i18n";

const methodType = {
  put: "put",
  delete: "delete",
  post: "post",
};

interface HistoryItemReturnItem {
  relativeTime: string;
  message: string;
  actionType: keyof typeof methodType;
}

function constructMessage(user: UserMiniInterface, method: string, originalItem?: TodoInterface, updatedItem?: TodoInterface) {
  switch (method) {
    case methodType.post: {
      return i18n.t("history.card.create", { username: user.name, todoId: updatedItem?.id });
    }

    case methodType.delete: {
      return i18n.t("history.card.delete", { username: user.name, todoId: originalItem?.id });
    }

    case methodType.put: {
      // get the difference between originalItem, updatedItem
      const differentKey = getDifferenceKey<TodoInterface | {}>(originalItem ?? {}, updatedItem ?? {});

      if (differentKey === "completed") {
        if (updatedItem?.completed === true) {
          // done
          return i18n.t("history.card.update_completed_done", { username: user.name, todoId: originalItem?.id });
        } else {
          return i18n.t("history.card.update_completed_active", { username: user.name, todoId: originalItem?.id });
        }
      }

      if (differentKey === "title") {
        return i18n.t("history.card.update_title", { username: user.name, todoId: originalItem?.id, title: updatedItem?.title });
      }

      return i18n.t("history.card.update_normal", { username: user.name, todoId: originalItem?.id });
    }

    default: {
      return "N/A";
    }
  }
}

export function transformHistoryItem(historyItem: HistoryItemInterface): HistoryItemReturnItem {
  let message = constructMessage(historyItem.user, historyItem.method, historyItem.oldItem, historyItem.newItem);

  return {
    relativeTime: getRelativeTime(historyItem.createAt),
    message: message,
    actionType: historyItem.method as keyof typeof methodType,
  };
}
