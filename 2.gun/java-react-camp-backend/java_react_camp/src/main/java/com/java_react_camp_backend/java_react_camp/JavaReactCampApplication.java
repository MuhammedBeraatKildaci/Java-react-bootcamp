package com.java_react_camp_backend.java_react_camp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin
public class JavaReactCampApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaReactCampApplication.class, args);
	}

	@GetMapping
	public List<Person> hello() {
		Person person = new Person();
		person.setId(1);
		person.setFirstName("Ali");
		person.setLastName("Gültiken");
		Person person3 = new Person(3, "Ahmet", "Kaya");
		List<Person> list = new ArrayList<Person>();
		list.add(person);
		list.add(new Person(2, "Veli", "Gümüş"));
		list.add(person3);
		return list;
	}

}
