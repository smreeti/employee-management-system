package com.ems.employee_management_system.repository;

import com.ems.employee_management_system.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "SELECT * FROM employee WHERE name=:name ORDER BY name ASC", nativeQuery = true)
    List<Employee> findByName(@Param("name") String name);
}
