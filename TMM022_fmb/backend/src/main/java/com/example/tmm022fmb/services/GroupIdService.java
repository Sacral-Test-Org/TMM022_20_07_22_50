package com.example.tmm022fmb.services;

import com.example.tmm022fmb.interfaces.GroupIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupIdService {

    @Autowired
    private GroupIdRepository groupIdRepository;

    public boolean validateGroupId(int globalParameter, String groupId, String groupName, String unitId) {
        boolean isValid = false;
        if (globalParameter == 0) {
            isValid = groupIdRepository.validateGroupIdInMesGroupMaster(groupId, groupName, unitId);
        } else if (globalParameter == 1) {
            isValid = groupIdRepository.validateGroupIdInHpmPartMaster(groupId, groupName, unitId);
        }
        return isValid;
    }
}
