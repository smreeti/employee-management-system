package com.ems.employee_management_system.util;

import com.ems.employee_management_system.dto.EmployeeResponseDTO;
import com.ems.employee_management_system.model.Department;
import com.ems.employee_management_system.model.Employee;
import com.ems.employee_management_system.model.Project;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class EmployeeUtil {

    public static EmployeeResponseDTO mapToEmployeeResponseDTO(Employee employee) {
        String department = Optional.ofNullable(employee.getDepartment())
                .map(Department::getName)
                .orElse(null);

        List<String> projectNames = Optional.ofNullable(employee.getProject())
                .orElse(Collections.emptyList())
                .stream()
                .map(Project::getName)
                .toList();

        return new EmployeeResponseDTO(
                employee.getId(),
                employee.getName(), employee.getEmail(), department, employee.getSalary(), projectNames);
    }
}
