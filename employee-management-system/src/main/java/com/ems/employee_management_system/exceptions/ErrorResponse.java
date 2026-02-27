package com.ems.employee_management_system.exceptions;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Map;

@Getter
@Setter
@Builder
public class ErrorResponse {
    private LocalDateTime localDateTime;
    private int status;
    private Map<String, String> errors;
}
