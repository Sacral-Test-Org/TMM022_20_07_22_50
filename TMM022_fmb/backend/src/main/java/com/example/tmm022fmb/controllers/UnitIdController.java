package com.example.tmm022fmb.controllers;

import com.example.tmm022fmb.services.UnitIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnitIdController {

    @Autowired
    private UnitIdService unitIdService;

    @GetMapping("/getLov")
    public List<String> getLov(@RequestParam int globalParameter) {
        return unitIdService.getLov(globalParameter);
    }

    @GetMapping("/checkUnitIdExistence")
    public boolean checkUnitIdExistence(@RequestParam String unitId, @RequestParam String unitName, @RequestParam int globalParameter) {
        return unitIdService.checkUnitIdExistence(unitId, unitName, globalParameter);
    }
}
