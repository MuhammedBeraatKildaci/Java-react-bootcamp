package com.java_react_camp_backend.java_backend.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
     @Id
     @GeneratedValue
     @Column(name = "id")
     private int id;
     @Column(name = "firstName")
     private String firstName;
     @Column(name = "lastName")
     private String lastName;
     @Column(name = "email")
     private String email;
     @Column(name = "password")
     private String password;
}
