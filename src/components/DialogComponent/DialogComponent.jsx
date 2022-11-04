import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import "./DialogComponent.css";

const DialogComponent = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    handleClickOpen() {
      handleClickOpen();
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOkay = () => {
    setOpen(false);
    props.handleOkay && props.handleOkay();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} className="dialog">
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{props.body}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            {props.cancelText ? props.cancelText : "Cancel"}
          </Button>
          <Button onClick={handleOkay} color="secondary">
            {props.okayText ? props.okayText : "Ok"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default DialogComponent;
