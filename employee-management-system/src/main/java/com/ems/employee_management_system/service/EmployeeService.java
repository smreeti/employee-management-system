package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.dto.EmployeeResponseDTO;

import java.util.List;

public interface EmployeeService {

    String saveEmployee(EmployeeRequestDTO employeeRequestDTO);

    String updateEmployee(EmployeeRequestDTO employeeRequestDTO);

    String deleteEmployee(Integer employeeId);

    List<EmployeeResponseDTO> fetchAllEmployees();

    List<EmployeeResponseDTO> fetchEmployees(int page, int size);

    List<EmployeeResponseDTO> searchEmployees(String name);

}
