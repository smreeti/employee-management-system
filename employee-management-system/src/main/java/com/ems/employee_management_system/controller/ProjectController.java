package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.ProjectRequestDTO;
import com.ems.employee_management_system.service.ProjectService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping("/saveProject")
    public ResponseEntity<?> saveProject(@Valid @RequestBody ProjectRequestDTO projectRequestDTO) {
        projectService.saveProject(projectRequestDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
