package org.example;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class Myapp{

    public static void main(String[] args){

        // here Tomcat which is embedded in spring boot runs automatically
        SpringApplication.run(Myapp.class, args);
    }
}

