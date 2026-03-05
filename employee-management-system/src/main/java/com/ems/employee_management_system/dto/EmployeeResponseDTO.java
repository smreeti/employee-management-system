package com.ems.employee_management_system.dto;

import java.util.List;

public record EmployeeResponseDTO(
        int id,
        String name,
        String email,
        String department,
        Double salary,
        List<String> projectNames
) {
}
