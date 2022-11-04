import { Delete, Edit, Search } from "@mui/icons-material";
import { DialogContentText, Grid } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useRef, useState } from "react";
import "./Table.css";
import DialogComponent from "../DialogComponent/DialogComponent";
import { deleteUser } from "../../services/user.service";

const Table = (props) => {
  const columns = [];
  const model = useRef();
  const [deleteId, setDeleteId] = useState();
  const onDeleteClick = () => {
    deleteUser(deleteId);
  };

  columns.push({ field: "name", headerName: "Name", width: 200, headerAlign: "center", cellClassName: "table-cell", flex: 1 });
  columns.push({ field: "email", headerName: "Email", width: 300, headerAlign: "center", cellClassName: "table-cell", flex: 1 });
  columns.push({ field: "gender", headerName: "Gender", width: 150, headerAlign: "center", cellClassName: "table-cell", flex: 1 });
  columns.push({ field: "status", headerName: "Status", width: 150, headerAlign: "center", cellClassName: "table-cell", flex: 1 });

  columns.push({
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 200,
    headerAlign: "center",
    cellClassName: "table-cell",
    getActions: (params) => [
      <GridActionsCellItem icon={<Edit />} label="Edit" />,
      <GridActionsCellItem
        icon={<Delete />}
        label="Delete"
        onClick={() => {
          setDeleteId(params.row.id);
          model.current.handleClickOpen();
        }}
      />,
    ],
  });
  return (
    <div className="container" style={{ height: 650, width: "100%" }}>
      <DataGrid rows={props.rows} columns={columns} className="all-grid" disableExtendRowFullWidth={false} loading={props.loading} />
      <DialogComponent
        ref={model}
        title={"Delete Confirmation"}
        body={
          <>
            <DialogContentText>Are you sure you want to delete?</DialogContentText>
          </>
        }
        okayText="Yes"
        cancelText="No"
        handleOkay={onDeleteClick}
      />
    </div>
  );
};
export default Table;
