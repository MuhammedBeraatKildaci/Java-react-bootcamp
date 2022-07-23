import fetch from "node-fetch";

// const getAllEmployee = async () => {
//   const url = "http://localhost:8080/api/employees";
//   const data = await fetch(url).then((res) => res.json());
//   return data;
// };

// const result = await getAllEmployee();
// console.log(result);

// const getById = async (id) => {
//   const url = `http://localhost:8080/api/employees/getById/${id}`;
//   const data = await fetch(url).then((res) => res.json());
//   return data;
// };

// const result = await getById(2);
// console.log(result);


const addEmployee = async (employee) => {
  const url = "http://localhost:8080/api/employees/addEmployee";
  const data = await fetch(url,{

  }).then((res) => res.json());
  return data;
};

const result = await getById(2);
console.log(result);