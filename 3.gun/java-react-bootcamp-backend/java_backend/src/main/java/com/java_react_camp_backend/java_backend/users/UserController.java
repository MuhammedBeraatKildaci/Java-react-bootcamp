package com.java_react_camp_backend.java_backend.users;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

     private final UserRepository userRepository;

     public UserController(UserRepository _userRepository) {
          userRepository = _userRepository;

     }

     @GetMapping
     public ResponseEntity<List<User>> getAllUsers() {
          List<User> userList = userRepository.findAll();
          return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
     }

     @PostMapping("/addUser")
     public ResponseEntity<User> addUser(@RequestBody User user) {
          userRepository.save(user);
          return new ResponseEntity<User>(user, HttpStatus.CREATED);
     }

     @GetMapping("getById/{id}")
     public ResponseEntity<User> getOneUser(@PathVariable int id) {
          Optional<User> emp = userRepository.findById(id);
          if (emp.isPresent()) {
               return new ResponseEntity<User>(emp.get(), HttpStatus.OK);
          }
          throw new RuntimeException(String.format("User with %s id could not found", id));
     }

     @PutMapping("update/{id}")
     public ResponseEntity<?> updateUser(@PathVariable(name = "id", required = true) int id,
               @RequestBody User User) {
          User emp = userRepository.findById(id).orElse(null);
          if (emp != null) {
               emp.setFirstName(User.getFirstName());
               emp.setLastName(User.getLastName());
               return new ResponseEntity<>(userRepository.save(emp), HttpStatus.ACCEPTED);
          }
          throw new RuntimeException("error");
     }

     @DeleteMapping("delete/{id}")
     public ResponseEntity<?> deleteUser(@PathVariable int id) {
          User emp = userRepository.findById(id).orElse(null);
          if (emp != null) {
               userRepository.delete(emp);
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }
          throw new RuntimeException("error");
     }

     @DeleteMapping("deleteUser")
     public ResponseEntity<?> deleteOneUser(@RequestParam(name = "id") int id) {
          User emp = userRepository.findById(id).orElse(null);
          if (emp != null) {
               userRepository.delete(emp);
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }
          throw new RuntimeException("error");
     }
}
