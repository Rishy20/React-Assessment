import { deleteById, getAll, getById, save, update } from "./http.service";

const url = `${process.env.REACT_APP_API_URL}users`;

export const addUser = async (data) => {
  const savedUser = await save(url, data);
  return savedUser;
};
export const getAllUsers = async () => {
  console.log(url);
  const Users = await getAll(url);
  return Users;
};
export const getUserById = async (id) => {
  const User = await getById(url, id);
  return User;
};
export const editUser = async (data, id) => {
  const updatedUser = await update(url + `/${id}`, data);
  return updatedUser;
};
export const deleteUser = async (id) => {
  const deletedUser = await deleteById(url, id);
  return deletedUser;
};
