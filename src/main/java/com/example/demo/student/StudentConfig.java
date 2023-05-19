package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            ArrayList<Student> students = new ArrayList<Student>();

            for (int i = 1; i < 100; i++) {
                Student student = new Student(
                        "Student " + i,
                        LocalDate.of(2000, Month.JANUARY, 1),
                        "student" + i + "@example.com"
                );

                students.add(student);
            }
            repository.saveAll(students);
        };
    }
}
