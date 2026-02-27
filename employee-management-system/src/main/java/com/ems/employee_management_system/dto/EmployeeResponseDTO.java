package com.ems.employee_management_system.dto;

public record EmployeeResponseDTO(
        String name,
        String email,
        String department,
        Double salary
) {
}
