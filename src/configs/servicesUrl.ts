const USERS_URL = "/users";
const TODO_URL = "/todos";

const servicesUrls = {
  users: `${USERS_URL}`,
  userTodo: (userId: string, pageNumber: string, pageSize: string) => `${TODO_URL}?userId=${userId}&_page=${pageNumber}&_limit=${pageSize}`,
  deleteTodo: (id: string) => `${TODO_URL}/${id}`,
};

export default servicesUrls;
