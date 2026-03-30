package com.ems.employee_management_system.service;

import com.ems.employee_management_system.model.Employee;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class EmployeeKafkaProducerService {

    private static final String TOPIC = "employee_topic";
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public EmployeeKafkaProducerService(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendEmployee(Employee employee) {
        kafkaTemplate.send(TOPIC, employee);
        System.out.println("Employee sent to Kafka: " + employee.getName());
    }
}
