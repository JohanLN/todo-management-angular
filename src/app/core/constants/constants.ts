export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiUrl = 'http://localhost:3000/';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiUrl}auth/login`,
    logout: `${apiUrl}auth/logout`,
    loggedUser: `${apiUrl}user`,
  },
  TodoEnpoint: {
    getAllTodo: `${apiUrl}todo`,
    addTodo: `${apiUrl}todo`,
    updateTodo: `${apiUrl}todo`,
    deleteTodo: `${apiUrl}todo`,
  },
};
