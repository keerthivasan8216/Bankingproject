package org.example;

import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usersApi")
public class MyController{

    private List<String> users = List.of("Prasunamba", "Meher", "Kom");

    @GetMapping
    public List<String> getUsers(){
        return users;
    }
}
