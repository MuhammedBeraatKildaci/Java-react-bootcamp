import { useState, useEffect } from "react";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeList from "./components/EmployeeList";
import TopMenu from "./components/TopMenu";
import Search from "./components/Search";
import { getAllEmployee} from "./service/employeeService";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [search,setSearch] = useState('')

  useEffect(() => {
    getAllEmployee().then((data) => setEmployees(data));
    console.log(employees);
  }, [refresh]);

  
  const filterData = employees.filter((employee)=>{
    const emp = `${employee.firstName}${employee.lastName}`
    return emp.toLowerCase().indexOf(search.toLowerCase())!==-1
  })
  
  return (
    <>
      <TopMenu />
      <Container maxWidth="xl">
        <Search setSearch={setSearch}/>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <EmployeeAdd  setRefresh={setRefresh} refresh={refresh} />
          </Grid>
          <Grid item xs={6}>
            <EmployeeList
            filterData={filterData}
              employees={employees}
              setRefresh={setRefresh}
              refresh={refresh}
            />

          </Grid>
        </Grid>
        
      </Container>
    </>
  );
}

export default App;
