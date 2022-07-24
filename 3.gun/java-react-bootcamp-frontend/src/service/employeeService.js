import axios from "axios";
const baseUrl = "http://127.0.0.1:8080/api/employees/";

export const getAllEmployee = async () => {
  const getAll = await axios.get(baseUrl);
  const employees = await getAll.data;
  return employees;
};


export const deleteEmployee = async (id) => {
  const deleteEmployee = await axios.delete(`${baseUrl}delete/${id}`);
  return deleteEmployee;
};

export const addEmployee = async (model) => {
  const addEmployee = await axios.post(`${baseUrl}addEmployee`, model);
  return addEmployee;
};
