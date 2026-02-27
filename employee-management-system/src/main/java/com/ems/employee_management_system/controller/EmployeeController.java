package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/saveEmployee")
    public ResponseEntity<?> saveEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.saveEmployee(employeeRequestDTO), HttpStatus.OK);
    }
    @PostMapping("/updateEmployee")
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.updateEmployee(employeeRequestDTO), HttpStatus.OK);
    }

    @DeleteMapping("/deleteEmployee/{employeeId}")
    public ResponseEntity<?> updateEmployee(@PathVariable Integer employeeId) {
        return new ResponseEntity<>(employeeService.deleteEmployee(employeeId), HttpStatus.OK);
    }

    @GetMapping("/fetchAllEmployees")
    public ResponseEntity<?> fetchAllEmployees() {
        return new ResponseEntity<>(employeeService.fetchAllEmployees(),HttpStatus.OK);
    }

}
