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
    <div>
      <input
        placeholder="isminiz"
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="soyisminiz"
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={() => handleAdd(employee)}>Ekle</button>
      <div>{firstName}</div>
    </div>
  );
}

export default EmployeeAdd;
