package com.example.demo.student;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PostMapping
    public ResponseEntity<Student> registerNewStudent(@RequestBody Student student) {
        try {
            studentService.addNewStudent(student);
            return ResponseEntity.ok(student);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId) { studentService.deleteStudent(studentId); }

    @PutMapping(path = "{studentId}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable("studentId") Long studentId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) LocalDate dob
    ) {
        try {
            Student student = studentService.updateStudent(studentId, name, email, dob);
            return ResponseEntity.ok(student);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().build();
        }
    
    }


    @GetMapping(path = "{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable("studentId") Long studentId) {
        try {
            Student student = studentService.getStudentById(studentId);
            return ResponseEntity.ok(student);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
