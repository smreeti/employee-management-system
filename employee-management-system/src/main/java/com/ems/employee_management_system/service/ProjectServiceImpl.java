package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.ProjectRequestDTO;
import com.ems.employee_management_system.model.Project;
import com.ems.employee_management_system.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    private final ModelMapper modelMapper;

    public ProjectServiceImpl(ProjectRepository projectRepository, ModelMapper modelMapper) {
        this.projectRepository = projectRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void saveProject(ProjectRequestDTO projectRequestDTO) {
        Project department = modelMapper.map(projectRequestDTO, Project.class);
        projectRepository.save(department);
    }
}
