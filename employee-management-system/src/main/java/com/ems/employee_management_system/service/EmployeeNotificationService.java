package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.EmployeeNotificationResponseDTO;

import java.util.List;

public interface EmployeeNotificationService {

    List<EmployeeNotificationResponseDTO> fetchAllNotifications();
}
