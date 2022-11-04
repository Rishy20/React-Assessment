import { InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Select.css";

const SelectBox = (props) => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.value != undefined && props.value.length > 0) {
      setValue(props.value);
      setSelected(true);
    }
  }, [props.value]);
  return (
    <div className="select">
      <InputLabel shrink htmlFor={props.id} className="required">
        {props.label}
      </InputLabel>
      <Select
        id="outlined-select"
        displayEmpty
        color="secondary"
        size="small"
        className={!selected ? "not-selected" : ""}
        onChange={(e) => {
          props.onChange(e);
          setValue(e.target.value);
          setSelected(true);
        }}
        value={value}
        name={props.name}
      >
        <MenuItem disabled value="">
          {props.placeholder}
        </MenuItem>
        {props.values.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
export default SelectBox;
