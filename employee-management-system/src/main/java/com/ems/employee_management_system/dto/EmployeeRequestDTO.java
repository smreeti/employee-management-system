package com.ems.employee_management_system.dto;

import lombok.Data;

@Data
public class EmployeeRequestDTO {
    private Integer id;
    private String name;
    private String department;
    private Double salary;
}
