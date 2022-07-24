import { deleteEmployee } from "../service/employeeService";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

function EmployeeList({ filterData, setRefresh, refresh}) {
  const handleDelete = (id) => {
    deleteEmployee(id).then((resp) => {
      console.log(resp);
      setRefresh(!refresh);
    });
  };



  return (
    <List>
      {filterData.map((emp) => (
        <ListItem key={emp.id}>
          <ListItemAvatar>
            <Avatar src={`./images/${emp.id}.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`${emp.firstName} ${emp.lastName}`}/>
          <div>
            <BorderColorIcon  color="warning">Update</BorderColorIcon>
          </div>
          <div>
            <DisabledByDefaultIcon color="error" onClick={() => handleDelete(emp.id)}>Remove</DisabledByDefaultIcon>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

export default EmployeeList;
