package com.java_react_camp_backend.java_backend.emp;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin
public class EmployeeController {

     private final EmployeeRepository employeeRepository;

     public EmployeeController(EmployeeRepository _employeeRepository) {
          employeeRepository = _employeeRepository;

     }

     @GetMapping
     public ResponseEntity<List<Employee>> getAllEmployees() {
          List<Employee> employeeList = employeeRepository.findAll();
          return new ResponseEntity<List<Employee>>(employeeList, HttpStatus.OK);
     }

     @PostMapping("/addEmployee")
     public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
          employeeRepository.save(employee);
          return new ResponseEntity<Employee>(employee, HttpStatus.CREATED);
     }

     @GetMapping("getById/{id}")
     public ResponseEntity<Employee> getOneEmployee(@PathVariable int id) {
          Optional<Employee> emp = employeeRepository.findById(id);
          if (emp.isPresent()) {
               return new ResponseEntity<Employee>(emp.get(), HttpStatus.OK);
          }
          throw new RuntimeException(String.format("Employee with %s id could not found", id));
     }

     @PutMapping("update/{id}")
     public ResponseEntity<?> updateEmployee(@PathVariable(name = "id", required = true) int id,
               @RequestBody Employee employee) {
          Employee emp = employeeRepository.findById(id).orElse(null);
          if (emp != null) {
               emp.setFirstName(employee.getFirstName());
               emp.setLastName(employee.getLastName());
               return new ResponseEntity<>(employeeRepository.save(emp), HttpStatus.ACCEPTED);
          }
          throw new RuntimeException("error");
     }

     @DeleteMapping("delete/{id}")
     public ResponseEntity<?> deleteEmployee(@PathVariable int id) {
          Employee emp = employeeRepository.findById(id).orElse(null);
          if (emp != null) {
               employeeRepository.delete(emp);
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }
          throw new RuntimeException("error");
     }

     @DeleteMapping("deleteEmployee")
     public ResponseEntity<?> deleteOneEmployee(@RequestParam(name = "id") int id) {
          Employee emp = employeeRepository.findById(id).orElse(null);
          if (emp != null) {
               employeeRepository.delete(emp);
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }
          throw new RuntimeException("error");
     }
}