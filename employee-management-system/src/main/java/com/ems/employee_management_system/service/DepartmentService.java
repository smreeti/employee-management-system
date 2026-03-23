package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.DepartmentRequestDTO;
import com.ems.employee_management_system.dto.DepartmentResponseDTO;

import java.util.List;

public interface DepartmentService {
    void saveDepartment(DepartmentRequestDTO departmentRequestDTO);

    List<DepartmentResponseDTO> fetchAllDepartments();
}
