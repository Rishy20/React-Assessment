import { deleteById, getAll, getById, save, update } from "./http.service";

const url = `${process.env.REACT_APP_API_URL}users`;

export const getAllTodosForUser = async (id) => {
  let requestUrl = `${url}/${id}/todos`;
  console.log(requestUrl);
  const todos = await getAll(requestUrl);
  return todos;
};
