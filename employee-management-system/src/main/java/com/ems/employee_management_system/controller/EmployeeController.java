package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.service.EmployeeService;
import jakarta.validation.Valid;
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

    @PostMapping
    public ResponseEntity<?> saveEmployee(@Valid @RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.saveEmployee(employeeRequestDTO), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.updateEmployee(employeeRequestDTO), HttpStatus.OK);
    }

    @DeleteMapping("/deleteEmployee/{employeeId}")
    public ResponseEntity<?> updateEmployee(@PathVariable Integer employeeId) {
        return new ResponseEntity<>(employeeService.deleteEmployee(employeeId), HttpStatus.OK);
    }

    @GetMapping("/fetchAllEmployees")
    public ResponseEntity<?> fetchAllEmployees() {
        return new ResponseEntity<>(employeeService.fetchAllEmployees(), HttpStatus.OK);
    }

    @GetMapping("/fetchEmployees")
    public ResponseEntity<?> fetchEmployees(@RequestParam("page") int page, @RequestParam("size") int size) {
        return new ResponseEntity<>(employeeService.fetchEmployees(page, size), HttpStatus.OK);
    }

    @GetMapping("/searchEmployees")
    public ResponseEntity<?> searchEmployees(@RequestParam("name") String name){
        return new ResponseEntity<>(employeeService.searchEmployees(name), HttpStatus.OK);
    }

}
