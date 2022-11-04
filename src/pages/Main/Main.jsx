import { Button, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddUserDialog from "../../components/AddUserDialog/AddUserDialog";
import Table from "../../components/Table/Table";
import { getAllTodosForUser } from "../../services/todo.service";
import { getAllUsers } from "../../services/user.service";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  const [userLoading, setUserLoading] = useState(true);
  const addUserModel = useRef();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getAllUsers();
    setUsers(data);
    setUserLoading(false);
  };

  const fetchTodoData = async (userId) => {
    const data = await getAllTodosForUser(userId);
    setTodos(data);
  };

  const onCreateUserBtnClick = () => {
    addUserModel.current.handleClickOpen();
  };
  return (
    <div className="main">
      <Grid container columnGap={8}>
        <Grid item md={8}>
          <h2 className="section-heading">Users</h2>
          <Table rows={users} loading={userLoading} onRowClick={fetchTodoData} />
          <Button className="btn orange-btn" variant="contained" onClick={onCreateUserBtnClick}>
            Create User
          </Button>
        </Grid>
        <Grid item md={3}>
          <h2 className="section-heading">User Todos</h2>

          {todos.length > 0 ? (
            <ol className="todo-list">
              {todos &&
                todos.map((todo) => {
                  return <li>{todo.title}</li>;
                })}
            </ol>
          ) : (
            <h4>No Todos Found</h4>
          )}
          <Button className="btn orange-btn" variant="contained" onClick={onCreateUserBtnClick}>
            Create Todo for User
          </Button>
        </Grid>
      </Grid>
      <AddUserDialog ref={addUserModel} />
    </div>
  );
};
export default Main;
