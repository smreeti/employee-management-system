package com.ems.employee_management_system.dto;

public record EmployeeResponseDTO(
        String name,
        String department,
        Double salary
) {
}
