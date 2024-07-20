package com.example.tmm022fmb.controllers;

import com.example.tmm022fmb.services.GroupIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GroupIdController {

    @Autowired
    private GroupIdService groupIdService;

    @GetMapping("/validateGroupId")
    public boolean validateGroupId(@RequestParam int globalParameter, 
                                   @RequestParam String groupId, 
                                   @RequestParam String groupName) {
        return groupIdService.validateGroupId(globalParameter, groupId, groupName);
    }
}
