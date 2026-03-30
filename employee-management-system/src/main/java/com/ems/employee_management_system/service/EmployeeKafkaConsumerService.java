package com.ems.employee_management_system.service;

import com.ems.employee_management_system.model.Employee;
import com.ems.employee_management_system.model.EmployeeNotification;
import com.ems.employee_management_system.repository.EmployeeNotificationRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class EmployeeKafkaConsumerService {

    private final EmployeeNotificationRepository employeeNotificationRepository;
    private final ObjectMapper objectMapper;

    public EmployeeKafkaConsumerService(EmployeeNotificationRepository employeeNotificationRepository, ObjectMapper objectMapper) {
        this.employeeNotificationRepository = employeeNotificationRepository;
        this.objectMapper = objectMapper;
    }

    @KafkaListener(topics = "employee_topic", groupId = "generic_group", containerFactory = "employeeKafkaListenerFactory")
    public void consumeEmployee(ConsumerRecord<String, Object> record) {
        try {
            Object payload = record.value();

            if (payload instanceof Employee employee) {

                String jsonPayload = objectMapper.writeValueAsString(employee);
                EmployeeNotification employeeNotification = new EmployeeNotification();
                employeeNotification.setEmployeeId(employee.getId().longValue());
                employeeNotification.setPayload("Created employee '" + employee.getName() + "' on" + employee.getJoiningDate());
                employeeNotification.setEventType("CREATED");
                employeeNotification.setStatus("NEW");

                employeeNotificationRepository.save(employeeNotification);
                System.out.println("Notification saved for employee: " + employee.getName());
            } else {
                System.out.println("Received unknown payload type: " + payload.getClass());
            }
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
