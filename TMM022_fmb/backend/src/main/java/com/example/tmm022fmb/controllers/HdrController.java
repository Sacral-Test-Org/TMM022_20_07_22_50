package com.example.tmm022fmb.controllers;

import com.example.tmm022fmb.services.HdrService;
import com.example.tmm022fmb.dtos.Lov;
import com.example.tmm022fmb.dtos.PartNumberLookupDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HdrController {

    @Autowired
    private HdrService hdrService;

    @GetMapping("/lov/lineId")
    public List<Lov> getLovForLineId(@RequestParam int globalParameter) {
        return hdrService.getLovForLineId(globalParameter);
    }

    @GetMapping("/validate/lineId")
    public boolean validateLineId(@RequestParam String lineId, @RequestParam String lineDesc, @RequestParam int globalParameter) {
        return hdrService.validateLineId(lineId, lineDesc, globalParameter);
    }

    @GetMapping("/lookup/partNumbers")
    public List<PartNumberLookupDTO> lookupPartNumbers(@RequestParam int globalParameter) {
        return hdrService.lookupPartNumbers(globalParameter);
    }

    @GetMapping("/validate/partNumber")
    public boolean validatePartNumber(@RequestParam String partNumber, @RequestParam int globalParameter) {
        return hdrService.validatePartNumber(partNumber, globalParameter);
    }
}
