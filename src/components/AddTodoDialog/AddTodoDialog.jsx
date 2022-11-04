import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { addTodoForUser } from "../../services/todo.service";
import { addUser } from "../../services/user.service";
import Input from "../Input/Input";
import SelectBox from "../Select/SelectBox";
import "./AddTodoDialog.css";

const AddTodoDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    const request = {
      user: props.userId,
      title: title,
      body: "",
      status: "pending",
    };
    const response = await addTodoForUser(props.userId, request);
    console.log(response);
    if (response) {
      setTitle("");
      handleClose();
      props.onClose(props.userId);
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
      <Dialog open={open} onClose={handleClose} className=" dialog add-todo-dialog">
        <DialogTitle>
          <Grid container justifyContent="space-between">
            <Grid item>Add Todo</Grid>
            <Grid item>
              <Close onClick={handleClose} />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Input label="Todo" value={title} id="title" type="text" name="todo" onChange={handleChange} placeholder="Please enter a todo" />

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
export default AddTodoDialog;
