package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.EmployeeNotificationResponseDTO;
import com.ems.employee_management_system.model.EmployeeNotification;
import com.ems.employee_management_system.repository.EmployeeNotificationRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeNotificationServiceImpl implements EmployeeNotificationService {
    private final EmployeeNotificationRepository notificationRepository;

    public EmployeeNotificationServiceImpl(EmployeeNotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public List<EmployeeNotificationResponseDTO> fetchAllNotifications() {
        List<EmployeeNotification> notifications = notificationRepository.findAll();

        List<EmployeeNotificationResponseDTO> responseDTOList = new ArrayList<>();

        notifications.forEach(notification -> {
            EmployeeNotificationResponseDTO responseDTO = new EmployeeNotificationResponseDTO(notification.getId(), notification.getPayload());
            responseDTOList.add(responseDTO);
        });

        return responseDTOList;
    }
}
