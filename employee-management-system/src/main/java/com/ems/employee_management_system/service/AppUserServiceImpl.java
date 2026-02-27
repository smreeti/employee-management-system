package com.ems.employee_management_system.service;

import com.ems.employee_management_system.dto.AppUserRequestDTO;
import com.ems.employee_management_system.model.AppUser;
import com.ems.employee_management_system.repository.AppUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@Transactional
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;

    private final PasswordEncoder passwordEncoder;

    public AppUserServiceImpl(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void saveUser(AppUserRequestDTO requestDTO) {
        AppUser user = new AppUser();
        user.setUsername(requestDTO.getUsername());
        user.setPassword(passwordEncoder.encode(requestDTO.getPassword()));
        user.setRole(requestDTO.getRole());
        user.setJoiningDate(LocalDate.now());

        appUserRepository.save(user);
    }
}
