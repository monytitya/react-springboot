package com.admin.dashboard.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.dashboard.dto.DashboardStatsDto;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3001"})
public class DashboardController {

    @GetMapping("/stats")
    public ResponseEntity<DashboardStatsDto> getDashboardStats(@RequestHeader("Authorization") String token) {
        // In production, verify JWT token here
        DashboardStatsDto stats = new DashboardStatsDto(8234L, 125430.0, 4.8, 12845L);
        return ResponseEntity.ok(stats);
    }
}