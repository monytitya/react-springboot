package com.admin.dashboard.controller;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.dashboard.dto.LoginRequest;
import com.admin.dashboard.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3001"})
public class AuthController {
    

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
     if(request.getEmail().equals("Tityamony@gmail.com") &&
   request.getPassword().equals("12345678")) {
    return ResponseEntity.ok(Map.of("token","dummy-jwt-token"));
}
     return null;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody LoginRequest request) {
        try {
            authService.registerUser(request.getEmail(), request.getPassword(), request.getEmail());
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }
}