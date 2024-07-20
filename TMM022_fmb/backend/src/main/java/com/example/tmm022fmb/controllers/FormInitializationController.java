package com.example.tmm022fmb.controllers;

import com.example.tmm022fmb.services.FormInitializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormInitializationController {

    @Autowired
    private FormInitializationService formInitializationService;

    @GetMapping("/initialize")
    public void initializeForm() {
        formInitializationService.initializeForm();
    }
}
