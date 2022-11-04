import { Grid } from "@mui/material";
import React from "react";

export default Main = () => {
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
