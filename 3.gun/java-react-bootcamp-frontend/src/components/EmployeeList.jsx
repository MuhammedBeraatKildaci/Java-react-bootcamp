import { deleteEmployee } from "../service/employeeService";

function EmployeeList({ employees, setRefresh, refresh }) {
  const handleDelete = (id) => {
    deleteEmployee(id).then((resp) => {
      console.log(resp);
      setRefresh(!refresh);
    });
  };
  return (
    <div>
      EmployeeList {employees.length}
      {employees.map((emp) => (
        <div key={emp.id}>
          {`${emp.firstName} ${emp.lastName}`}
          <button onClick={() => handleDelete(emp.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
