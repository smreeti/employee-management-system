package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.DepartmentRequestDTO;
import com.ems.employee_management_system.service.DepartmentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping("/department")
    public ResponseEntity<?> saveDepartment(@Valid @RequestBody DepartmentRequestDTO departmentRequestDTO) {
        departmentService.saveDepartment(departmentRequestDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/departments")
    public ResponseEntity<?> fetchAllEmployees() {
        return new ResponseEntity<>(departmentService.fetchAllDepartments(), HttpStatus.OK);
    }

}
