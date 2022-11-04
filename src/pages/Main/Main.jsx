import { Button, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddUserDialog from "../../components/AddUserDialog/AddUserDialog";
import Table from "../../components/Table/Table";
import { getAllUsers } from "../../services/user.service";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  const [userLoading, setUserLoading] = useState(true);
  const addUserModel = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllUsers();
    setUsers(data);
    setUserLoading(false);
  };

  const onCreateUserBtnClick = () => {
    addUserModel.current.handleClickOpen();
  };
  return (
    <div className="main">
      <Grid container columnGap={8}>
        <Grid item md={8}>
          <h2 className="section-heading">Users</h2>
          <Table rows={users} loading={userLoading} />
          <Button className="btn orange-btn" variant="contained" onClick={onCreateUserBtnClick}>
            Create User
          </Button>
        </Grid>
        <Grid item md={3}>
          <h2 className="section-heading">User Todos</h2>
          <ol className="todo-list">
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
            <li>Todo 4</li>
            <li>Todo 5</li>
          </ol>
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
