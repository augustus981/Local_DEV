package com.bosch.dee.edata.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.dee.edata.data.UserData;

@RestController
@CrossOrigin(origins = "*")
public class PersonInfoController {

    @GetMapping("/person")
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public @ResponseBody UserData personInfo() {
        return new UserData("abir", "Dhaka", "Bangladesh", 29, "Male");
    }   
}
