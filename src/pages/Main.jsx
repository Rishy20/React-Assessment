import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/user.service";

export default Main = () => {
  const [users, setUsers] = useState();

  useEffect(async () => {
    const data = await getAllUsers();
  }, []);
  return (
    <div className="main">
      <Grid container>
        <Grid item md={8}>
          <div className="section-heading">Users</div>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
};
