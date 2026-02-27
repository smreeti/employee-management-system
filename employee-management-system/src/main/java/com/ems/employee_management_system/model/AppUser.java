package com.ems.employee_management_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AppUser extends BaseEntity implements Serializable {

    private String username;

    private String password;

    private String role; //ROLE_ADMIN, ROLE_USER
}
