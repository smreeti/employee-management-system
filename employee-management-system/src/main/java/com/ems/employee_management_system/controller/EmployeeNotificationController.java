package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.EmployeeNotificationResponseDTO;
import com.ems.employee_management_system.service.EmployeeNotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class EmployeeNotificationController {

    private final EmployeeNotificationService employeeNotificationService;

    public EmployeeNotificationController(EmployeeNotificationService employeeNotificationService) {
        this.employeeNotificationService = employeeNotificationService;
    }

    @GetMapping
    public ResponseEntity<List<EmployeeNotificationResponseDTO>> getAllNotifications() {
        return ResponseEntity.ok(employeeNotificationService.fetchAllNotifications());
    }
}
