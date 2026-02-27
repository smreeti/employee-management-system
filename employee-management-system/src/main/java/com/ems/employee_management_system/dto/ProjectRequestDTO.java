package com.ems.employee_management_system.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectRequestDTO {
    @NotBlank(message = "Name is required")
    private String name;
}
