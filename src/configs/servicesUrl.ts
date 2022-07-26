const USERS_URL = "/users";
const TODO_URL = "/todos";
const HISTORY_URL = "/history";

const servicesUrls = {
  users: `${USERS_URL}`,
  userTodo: (userId: string, pageNumber: string, pageSize: string) => `${TODO_URL}?userId=${userId}&_page=${pageNumber}&_limit=${pageSize}`,
  deleteTodo: (id: string) => `${TODO_URL}/${id}`,
  updateTodo: (id: string) => `${TODO_URL}/${id}`,
  createTodo: `${TODO_URL}`,
  getHistory: (userId: string, pageNumber: string, pageSize: string) => `${HISTORY_URL}?userId=${userId}&_page=${pageNumber}&_limit=${pageSize}`,
  addHistoryItem: `${HISTORY_URL}`,
};

export default servicesUrls;
