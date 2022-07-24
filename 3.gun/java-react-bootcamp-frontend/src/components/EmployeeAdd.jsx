import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { addEmployee } from "../service/employeeService";

function EmployeeAdd({ setRefresh, refresh }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const employee = {
    firstName,
    lastName,
  };
  const handleAdd = (employee) => {
    addEmployee(employee);
    setRefresh(!refresh);
    console.log(employee);
  };
  return (
    <div className="addForm">
        <TextField
          placeholder="isminiz"
          name="firstName"
          variant="filled"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          placeholder="soyisminiz"
          name="lastName"
          variant="filled"
          onChange={(e) => setLastName(e.target.value)}
        />
      <Button variant="contained" onClick={() => handleAdd(employee)}>Ekle</Button>
    </div>
  );
}

export default EmployeeAdd;
