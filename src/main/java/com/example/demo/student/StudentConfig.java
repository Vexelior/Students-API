package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student alex = new Student(
                    "Alex",
                    LocalDate.of(1994, Month.AUGUST, 19),
                    "alex@gmail.com"
            );

            Student bob = new Student(
                    "Bob",
                    LocalDate.of(2004, Month.JANUARY, 2),
                    "Bob@gmail.com"
            );

            repository.saveAll(
                    List.of(alex, bob)
            );
        };
    }
}
