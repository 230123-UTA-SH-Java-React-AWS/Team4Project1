package com.revature.coeproject01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.coeproject01.model.Student;
import com.revature.coeproject01.repository.StudentRepository;

@Service
public class StudentServiceImplementation implements StudentService{
    @Autowired
    private StudentRepository studentRepository;
    
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }
}
