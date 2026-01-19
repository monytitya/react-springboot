package com.admin.dashboard.service;

import com.admin.dashboard.dto.LoginRequest;
import com.admin.dashboard.dto.LoginResponse;
import com.admin.dashboard.model.User;
import com.admin.dashboard.repository.UserRepository;
import com.admin.dashboard.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public LoginResponse login(LoginRequest request) throws Exception {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new Exception("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new Exception("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponse(token, user.getEmail(), user.getName());
    }

    public void registerUser(String email, String password, String name) throws Exception {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new Exception("Email already exists");
        }

        User user = new User(email, passwordEncoder.encode(password), name);
        userRepository.save(user);
    }
}
