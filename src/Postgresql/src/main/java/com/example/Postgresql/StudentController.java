package com.example.Postgresql;

import com.example.Postgresql.Student;
import com.example.Postgresql.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository repository;

    public StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    // Create
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    // Read all
    @GetMapping
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Read by ID
    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // Update
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                                 @RequestBody Student student) {

        Student existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(student.getName());
            existing.setAge(student.getAge());
            return repository.save(existing);
        }

        return null;
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        repository.deleteById(id);
        return "Student deleted successfully";
    }
}