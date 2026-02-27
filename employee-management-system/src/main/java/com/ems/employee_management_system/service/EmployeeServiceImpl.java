package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.dto.EmployeeResponseDTO;
import com.ems.employee_management_system.model.Employee;
import com.ems.employee_management_system.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private final ModelMapper modelMapper;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public String saveEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = modelMapper.map(employeeRequestDTO, Employee.class);
        employee.setJoiningDate(LocalDate.now());
        employeeRepository.save(employee);
        return "Employee created successfully";
    }

    @Override
    public String updateEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Optional<Employee> savedEmployee = employeeRepository.findById(employeeRequestDTO.getId());

        if (savedEmployee.isEmpty()) {
            return "No employee record found";
        }

        Employee employee = savedEmployee.get();
        employee.setName(employeeRequestDTO.getName());
        employee.setDepartment(employeeRequestDTO.getDepartment());

        employeeRepository.save(employee);

        return "Employee updated successfully";
    }

    @Override
    public String deleteEmployee(Integer employeeId) {
        Optional<Employee> savedEmployee = employeeRepository.findById(employeeId);

        if (savedEmployee.isEmpty()) {
            return "No employee record found";
        }

        employeeRepository.delete(savedEmployee.get());
        return "Employee deleted successfully";
    }

    @Override
    public List<EmployeeResponseDTO> fetchAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(emp -> new EmployeeResponseDTO(
                        emp.getName(),
                        emp.getDepartment(),
                        emp.getSalary()
                ))
                .toList();
    }
}
