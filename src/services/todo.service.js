import { deleteById, getAll, getById, save, update } from "./http.service";

const url = `${process.env.REACT_APP_API_URL}users`;

export const addTodoForUser = async (id, data) => {
  let requestUrl = `${url}/${id}/todos`;
  const todos = await save(requestUrl, data);
  return todos;
};
export const getAllTodosForUser = async (id) => {
  let requestUrl = `${url}/${id}/todos`;
  const todos = await getAll(requestUrl);
  return todos;
};
