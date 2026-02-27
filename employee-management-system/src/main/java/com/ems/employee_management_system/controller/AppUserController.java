package com.ems.employee_management_system.controller;

import com.ems.employee_management_system.dto.AppUserRequestDTO;
import com.ems.employee_management_system.service.AppUserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/saveUser")
    public ResponseEntity<?> saveAppUser(@Valid @RequestBody AppUserRequestDTO appUserRequestDTO) {
        appUserService.saveUser(appUserRequestDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
