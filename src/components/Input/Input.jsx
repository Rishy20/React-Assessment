import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div class="input">
      <InputLabel shrink htmlFor={props.id} className="required">
        {props.label}
      </InputLabel>
      <OutlinedInput
        notched={false}
        color="secondary"
        fullWidth={true}
        size="small"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
