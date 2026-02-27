package com.ems.employee_management_system.exceptions;

import java.time.LocalDateTime;
import java.util.Map;

public class ExceptionUtil {

    public static ErrorResponse mapToErrorResponse(int status, Map<String, String> errors){
        return ErrorResponse.builder()
                .localDateTime(LocalDateTime.now())
                .status(status)
                .errors(errors)
                .build();
    }
}
