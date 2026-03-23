package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.DepartmentRequestDTO;
import com.ems.employee_management_system.dto.DepartmentResponseDTO;
import com.ems.employee_management_system.model.Department;
import com.ems.employee_management_system.repository.DepartmentRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    private final ModelMapper modelMapper;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository, ModelMapper modelMapper) {
        this.departmentRepository = departmentRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void saveDepartment(DepartmentRequestDTO departmentRequestDTO) {
        Department department = modelMapper.map(departmentRequestDTO, Department.class);
        departmentRepository.save(department);
    }

    @Override
    public List<DepartmentResponseDTO> fetchAllDepartments() {
        return departmentRepository.findAll()
                .stream()
                .map(dept -> new DepartmentResponseDTO(
                        dept.getId(),
                        dept.getName()))
                .collect(Collectors.toList());
    }
}
