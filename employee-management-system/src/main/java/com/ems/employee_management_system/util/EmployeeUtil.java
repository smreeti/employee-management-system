package com.ems.employee_management_system.util;

import com.ems.employee_management_system.dto.EmployeeResponseDTO;
import com.ems.employee_management_system.model.Employee;

public class EmployeeUtil {

    public static EmployeeResponseDTO mapToEmployeeResponseDTO(Employee employee) {
        return new EmployeeResponseDTO(
                employee.getName(), employee.getEmail(), employee.getDepartment(), employee.getSalary());
    }
}
