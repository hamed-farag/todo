import produce from "immer";

import todoService from "@services/todo";

import TodoInterface, { TodoUpdatedProps } from "@interfaces/todo";

import logger from "@helpers/logger";

interface TodoGetResponse {
  collection: Array<TodoInterface>;
  totalCount: string;
}

export async function getTodoByUserId(
  userId: string,
  pageNumber: number,
  pageSize: number
): Promise<[response: TodoGetResponse | undefined, error: Error | undefined]> {
  const [response, error] = await todoService.getTodoByUserId(userId, pageNumber.toString(), pageSize.toString());

  if (response) {
    return [{ collection: response.data, totalCount: response.headers["x-total-count"] }, undefined];
  } else {
    logger.error("Something went Wrong, Cannot Fetch Todo!", error);
    return [undefined, error];
  }
}

export async function deleteTodoItemById(
  id: number,
  state: Array<TodoInterface>
): Promise<[response: Array<TodoInterface> | undefined, error: Error | undefined]> {
  const [response, error] = await todoService.deleteTodoItemById(id.toString());

  if (response) {
    const newState = produce(state, (draftState) => {
      draftState = draftState.filter((item) => {
        return item.id !== id;
      });
      return draftState;
    });

    return [newState, undefined];
  } else {
    logger.error("Something went Wrong, Cannot delete Todo item!", error);
    return [undefined, error];
  }
}

export async function updateTodoItemById(
  item: TodoUpdatedProps,
  state: Array<TodoInterface>
): Promise<[response: Array<TodoInterface> | undefined, error: Error | undefined]> {
  const itemToBeUpdated = state.find((itm) => itm.id === item.id);

  if (!itemToBeUpdated) {
    const error = new Error("item not found in react state!");
    logger.error("Item not found locally!", error);
    return [undefined, error];
  }

  // cloned, the "itemToBeUpdated" is read only object 🤦‍♂️
  const clonedItemToBeUpdated = { ...itemToBeUpdated };

  // stupid check i know 🤦‍♂️
  if (item.field === "completed") {
    clonedItemToBeUpdated.completed = item.value;
  } else if (item.field === "title") {
    clonedItemToBeUpdated.title = item.value;
  }

  const [response, error] = await todoService.updateTodoItemById(clonedItemToBeUpdated);

  if (response) {
    const newState = produce(state, (draftState) => {
      const itemToBeUpdatedIndex = draftState.findIndex((itm) => itm.id === item.id);
      draftState[itemToBeUpdatedIndex] = clonedItemToBeUpdated;
      return draftState;
    });

    return [newState, undefined];
  } else {
    logger.error("Something went Wrong, Cannot delete Todo item!", error);
    return [undefined, error];
  }
}
