package com.ems.employee_management_system.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Data
public class EmployeeRequestDTO {
    private Integer id;

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Not a valid email")
    private String email;

    private Integer departmentId;

    private List<Integer> projectIds;

    private Double salary;
}
