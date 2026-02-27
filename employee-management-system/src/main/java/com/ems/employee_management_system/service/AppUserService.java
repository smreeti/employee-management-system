package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.AppUserRequestDTO;

public interface AppUserService {
    void saveUser(AppUserRequestDTO requestDTO);
}
