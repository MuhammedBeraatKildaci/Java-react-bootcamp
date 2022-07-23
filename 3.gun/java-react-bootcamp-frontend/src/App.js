import { useState, useEffect } from "react";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeList from "./components/EmployeeList";
import TopMenu from "./components/TopMenu";
import Search from "./components/Search";
import { getAllEmployee } from "./service/employeeService";
import Container from "@mui/material/Container";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployee().then((data) => setEmployees(data));
    console.log(employees);
  }, [refresh]);

  return (
    <>
      <TopMenu />
      <Container maxWidth="xl">
        <Search />
        <EmployeeAdd setRefresh={setRefresh} refresh={refresh} />
        <EmployeeList
          employees={employees}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </Container>
    </>
  );
}

export default App;
