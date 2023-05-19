package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping()
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());

        if (studentOptional.isPresent()) {
            throw new IllegalStateException("The email '" + student.getEmail() + "' is already taken.");
        }

        if (student.getName() == null || student.getName().length() == 0) {
            throw new IllegalStateException("The name cannot be null or empty.");
        }

        if (student.getEmail() == null || student.getEmail().length() == 0) {
            throw new IllegalStateException("The email cannot be null or empty.");
        }

        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean exists = studentRepository.existsById(studentId);

        if (!exists) {
            throw new IllegalStateException("The student with id '" + studentId + "' does not exist.");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public Student updateStudent(Long studentId, String name, String email, LocalDate dob) {
        Student student = getStudentById(studentId);

        if (name != null && name.length() > 0 && !name.equals(student.getName())) {
            student.setName(name);
        }

        if (email != null && email.length() > 0 && !email.equals(student.getEmail())) {
            Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);

            if (studentOptional.isPresent()) {
                throw new IllegalStateException("The email '" + email + "' is already taken.");
            }

            student.setEmail(email);
        }

        if (dob != null && !dob.equals(student.getDob())) {
            student.setDob(dob);
        }

        studentRepository.save(student);

        return student;
    }

    public Student getStudentById(Long studentId) {
        Optional<Student> studentOptional = studentRepository.findById(studentId);

        if (studentOptional.isPresent()) {
            return studentOptional.get();
        } else {
            throw new IllegalStateException("The student with id '" + studentId + "' does not exist.");
        }
    }
}
