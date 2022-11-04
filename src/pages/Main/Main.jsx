import { Button, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddTodoDialog from "../../components/AddTodoDialog/AddTodoDialog";
import AddUserDialog from "../../components/AddUserDialog/AddUserDialog";
import Table from "../../components/Table/Table";
import { getAllTodosForUser } from "../../services/todo.service";
import { getAllUsers } from "../../services/user.service";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [userId, setUserId] = useState();

  const [userLoading, setUserLoading] = useState(true);
  const addUserModel = useRef();
  const editUserModel = useRef();
  const addTodoModel = useRef();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setUserLoading(true);
    const data = await getAllUsers();
    setUsers(data);
    setUserLoading(false);
  };

  const fetchTodoData = async (userId) => {
    setUserId(userId);
    const data = await getAllTodosForUser(userId);
    setTodos(data);
  };

  const onEditClick = (userId) => {
    let temp = users.filter((user) => user.id == userId);
    setSelectedUser(temp[0]);
    editUserModel.current.handleClickOpen();
  };

  const onCreateUserBtnClick = () => {
    addUserModel.current.handleClickOpen();
  };
  const onCreateTodoBtnClick = () => {
    addTodoModel.current.handleClickOpen();
  };
  return (
    <div className="main">
      <Grid container columnGap={8}>
        <Grid item md={8}>
          <h2 className="section-heading">Users</h2>
          <Table rows={users} loading={userLoading} onRowClick={fetchTodoData} onEditClick={onEditClick} onDeleteClick={fetchUserData} />
          <Button className="btn orange-btn" variant="contained" onClick={onCreateUserBtnClick}>
            Create User
          </Button>
        </Grid>
        <Grid item md={3}>
          <h2 className="section-heading">User Todos</h2>

          {userId &&
            (todos.length > 0 ? (
              <ol className="todo-list">
                {todos &&
                  todos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>;
                  })}
              </ol>
            ) : (
              <h4>No Todos Found</h4>
            ))}
          {userId && (
            <Button className="btn orange-btn" variant="contained" onClick={onCreateTodoBtnClick}>
              Create Todo for User
            </Button>
          )}
          {!userId && <h4>Please select a todo</h4>}
        </Grid>
      </Grid>
      <AddUserDialog ref={addUserModel} isEdit={false} onClose={fetchUserData} />
      <AddUserDialog ref={editUserModel} isEdit={true} user={selectedUser} onClose={fetchUserData} />

      <AddTodoDialog ref={addTodoModel} userId={userId} onClose={fetchTodoData} />
    </div>
  );
};
export default Main;
