const servicesUrls = {
  users: "/users",
  userTodos: (userId: string, pageNumber: string, pageSize: string) => `/todos?userId=${userId}&_page=${pageNumber}&_limit=${pageSize}`,
};

export default servicesUrls;
