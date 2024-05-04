package com.example.ecommerce; // Make sure to adjust the package name according to your project structure

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index"; // Assuming "index.html" is your main template file
    }
}
