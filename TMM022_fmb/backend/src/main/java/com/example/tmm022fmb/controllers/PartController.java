package com.example.tmm022fmb.controllers;

import com.example.tmm022fmb.dtos.PartDTO;
import com.example.tmm022fmb.services.PartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @PostMapping("/save")
    public ResponseEntity<PartDTO> savePart(@RequestBody PartDTO partDTO) {
        // Call savePart method from PartService to insert a new record
        PartDTO savedPart = partService.savePart(partDTO);
        return ResponseEntity.ok(savedPart);
    }

    @PutMapping("/update")
    public ResponseEntity<PartDTO> updatePart(@RequestBody PartDTO partDTO) {
        // Call updatePart method from PartService to update the existing record
        PartDTO updatedPart = partService.updatePart(partDTO);
        return ResponseEntity.ok(updatedPart);
    }
}
