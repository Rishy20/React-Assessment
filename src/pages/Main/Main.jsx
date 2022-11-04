import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { getAllUsers } from "../../services/user.service";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllUsers();
    setUsers(data);
    setUserLoading(false);
  };
  return (
    <div className="main">
      <Grid container>
        <Grid item md={8}>
          <h2 className="section-heading">Users</h2>
          <Table rows={users} loading={userLoading} />
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
};
export default Main;
