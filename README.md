# Spring Boot Tutorial

## Introduction
This is a simple Spring Boot application that demonstrates how to use Spring Boot with Spring MVC. It also shows how to use Spring Data JPA with PostgreSQL as database. The application is a simple CRUD application that allows students to create new students, list all students, update students' information, and delete students.

## Technologies
* Spring Boot 2.1.3.RELEASE
* Spring 5.1.5.RELEASE
* Spring Data JPA 2.1.5.RELEASE
* PostgreSQL 42.2.5
* Maven 3
* Java 8

## Tools
* IntelliJ IDEA 2018.3.5
* pgAdmin 4

## Run
* Clone this repository
* Create a PostgreSQL database named `springbootdb`
* Change the PostgreSQL username and password in `src/main/resources/application.properties` as per your PostgreSQL installation
* Run the app using `mvn spring-boot:run`
* The app will start running at <http://localhost:8080>.

## Explore Rest APIs
The app defines following CRUD APIs.

    GET /api/v1/students
    
    POST /api/v1/students
    
    GET /api/v1/students/{studentId}
    
    PUT /api/v1/students/{studentId}
    
    DELETE /api/v1/students/{studentId}

You can test them using postman or any other rest client.

## Learn more
You can find the tutorial for this application on my blog - <https://www.callicoder.com/spring-boot-rest-api-tutorial-with-mysql-jpa-hibernate/>
