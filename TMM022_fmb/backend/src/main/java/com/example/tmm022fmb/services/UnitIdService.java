package com.example.tmm022fmb.services;

import com.example.tmm022fmb.repositories.UnitIdRepository;
import com.example.tmm022fmb.models.UnitId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UnitIdService {

    @Autowired
    private UnitIdRepository unitIdRepository;

    private int globalParameter = 0; // This should be set based on your application's logic

    public List<UnitId> getLov() {
        if (globalParameter == 0) {
            return unitIdRepository.getLovForSelection();
        } else if (globalParameter == 1) {
            return unitIdRepository.getLovForEditing();
        }
        return null;
    }

    public boolean checkUnitIdExistence(String unitId, String unitName) {
        if (globalParameter == 0) {
            return unitIdRepository.existsInMesUnitMaster(unitId, unitName);
        } else if (globalParameter == 1) {
            return unitIdRepository.existsInBothTables(unitId, unitName);
        }
        return false;
    }
}
