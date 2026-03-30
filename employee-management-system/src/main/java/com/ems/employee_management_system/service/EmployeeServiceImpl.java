package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.EmployeeRequestDTO;
import com.ems.employee_management_system.dto.EmployeeResponseDTO;
import com.ems.employee_management_system.exceptions.ResourceNotFoundException;
import com.ems.employee_management_system.model.Department;
import com.ems.employee_management_system.model.Employee;
import com.ems.employee_management_system.model.Project;
import com.ems.employee_management_system.repository.DepartmentRepository;
import com.ems.employee_management_system.repository.EmployeeRepository;
import com.ems.employee_management_system.repository.ProjectRepository;
import com.ems.employee_management_system.util.EmployeeUtil;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private final DepartmentRepository departmentRepository;

    private final ProjectRepository projectRepository;

    private final ModelMapper modelMapper;

    private final EmployeeKafkaProducerService employeeKafkaProducerService;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository,
                               DepartmentRepository departmentRepository,
                               ProjectRepository projectRepository,
                               ModelMapper modelMapper,
                               EmployeeKafkaProducerService employeeKafkaProducerService) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.projectRepository = projectRepository;
        this.modelMapper = modelMapper;
        this.employeeKafkaProducerService = employeeKafkaProducerService;
    }

    @Override
    public String saveEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = modelMapper.map(employeeRequestDTO, Employee.class);

        if (employeeRequestDTO.getDepartmentId() != null) {
            Department department = findDepartment(employeeRequestDTO.getDepartmentId());
            employee.setDepartment(department);
        }

        if (employeeRequestDTO.getProjectIds() != null && !employeeRequestDTO.getProjectIds().isEmpty()) {
            List<Project> projects = projectRepository.findAllById(employeeRequestDTO.getProjectIds());
            employee.setProject(projects);
        }

        employeeRepository.save(employee);

        employeeKafkaProducerService.sendEmployee(employee);

        return "Employee created successfully";
    }

    @Override
    public String updateEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = employeeRepository.findById(employeeRequestDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("No employee record found"));

        employee.setName(employeeRequestDTO.getName());

        if (employeeRequestDTO.getDepartmentId() != null) {
            Department department = findDepartment(employeeRequestDTO.getDepartmentId());
            employee.setDepartment(department);
        }

        employeeRepository.save(employee);

        return "Employee updated successfully";
    }

    @Override
    public String deleteEmployee(Integer employeeId) {
        Employee savedEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("No employee record found"));

        employeeRepository.delete(savedEmployee);
        return "Employee deleted successfully";
    }

    @Override
    public List<EmployeeResponseDTO> fetchAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(EmployeeUtil::mapToEmployeeResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<EmployeeResponseDTO> fetchEmployees(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("salary").descending());

        Page<Employee> employeePage = employeeRepository.findAll(pageable);

        return employeePage.stream()
                .map(EmployeeUtil::mapToEmployeeResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<EmployeeResponseDTO> searchEmployees(String name) {
        List<Employee> employees = employeeRepository.findByName(name);

        if (employees.isEmpty())
            throw new ResourceNotFoundException("No employee found");

        return employees.stream()
                .map(EmployeeUtil::mapToEmployeeResponseDTO)
                .collect(Collectors.toList());
    }

    private Department findDepartment(Integer departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found"));
    }
}
