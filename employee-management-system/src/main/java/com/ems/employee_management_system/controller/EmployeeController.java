package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.service.EmployeeService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping
    @CacheEvict(value = {"allEmployees"}, allEntries = true)
    public ResponseEntity<?> saveEmployee(@Valid @RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.saveEmployee(employeeRequestDTO), HttpStatus.OK);
    }

    @PutMapping
    @CacheEvict(value = {"allEmployees"}, allEntries = true)
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO) {
        return new ResponseEntity<>(employeeService.updateEmployee(employeeRequestDTO), HttpStatus.OK);
    }

    @DeleteMapping("/deleteEmployee/{employeeId}")
    @CacheEvict(value = {"allEmployees"}, allEntries = true)
    public ResponseEntity<?> updateEmployee(@PathVariable Integer employeeId) {
        return new ResponseEntity<>(employeeService.deleteEmployee(employeeId), HttpStatus.OK);
    }

    @GetMapping("/fetchAllEmployees")
    @Cacheable(value = "allEmployees")
    public ResponseEntity<?> fetchAllEmployees() {
        logger.info("Fetching all employees from the database...");
        return new ResponseEntity<>(employeeService.fetchAllEmployees(), HttpStatus.OK);
    }

    @GetMapping("/fetchEmployees")
    public ResponseEntity<?> fetchEmployees(@RequestParam("page") int page, @RequestParam("size") int size) {
        return new ResponseEntity<>(employeeService.fetchEmployees(page, size), HttpStatus.OK);
    }

    @GetMapping("/searchEmployees")
    @CacheEvict(value = {"allEmployees"}, allEntries = true)
    public ResponseEntity<?> searchEmployees(@RequestParam("name") String name) {
        return new ResponseEntity<>(employeeService.searchEmployees(name), HttpStatus.OK);
    }

}
