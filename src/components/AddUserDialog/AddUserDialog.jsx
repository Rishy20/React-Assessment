import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { addUser } from "../../services/user.service";
import Input from "../Input/Input";
import SelectBox from "../Select/SelectBox";
import "./AddUserDialog.css";

const genders = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];
const status = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];

const AddUserDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleChange = (e) => {
    let temp = {};
    temp[e.target.name] = e.target.value;
    setUser({ ...user, ...temp });
  };

  const handleSubmit = async () => {
    const response = await addUser(user);
    console.log(response);
    if (response) {
      handleClose();
      // dispatch(conceptActions.resetState());
      // setName("");
      // setPreRequisite([]);
      // setLOCount([0]);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleClickOpen() {
      handleClickOpen();
    },
  }));

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className=" dialog add-user-dialog">
        <DialogTitle>
          <Grid container justifyContent="space-between">
            <Grid item>Add User</Grid>
            <Grid item>
              <Close onClick={handleClose} />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container className="mt-0" spacing={3}>
            <Grid item md={6}>
              <Input label="Name" value={user.name} id="name" type="text" name="name" onChange={handleChange} placeholder="Please enter the user's name" />
            </Grid>
            <Grid item md={6}>
              <Input label="Email" value={user.email} id="email" type="email" name="email" onChange={handleChange} placeholder="Please enter the user's email" />
            </Grid>
          </Grid>

          <Grid container className="mt-0" spacing={3}>
            <Grid item md={6}>
              <SelectBox value={user.gender} id="gender" name="gender" label="Gender" onChange={handleChange} placeholder={"Select a Gender"} values={genders} />
            </Grid>
            <Grid item md={6}>
              <SelectBox value={user.status} id="status" name="status" label="Status" onChange={handleChange} placeholder={"Select a Status"} values={status} />
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between" className="mt-2">
            <Grid item>
              <Button className="btn grey-btn" variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button className="btn orange-btn" variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
});
export default AddUserDialog;
