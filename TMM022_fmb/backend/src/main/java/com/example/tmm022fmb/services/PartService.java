package com.example.tmm022fmb.services;

import com.example.tmm022fmb.dtos.PartDTO;
import com.example.tmm022fmb.models.PartModel;
import com.example.tmm022fmb.repositories.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    public PartDTO savePart(PartDTO partDTO) {
        // Convert PartDTO to PartModel
        PartModel partModel = new PartModel();
        partModel.setPartId(partDTO.getPartId());
        partModel.setUnitName(partDTO.getUnitName());
        partModel.setGroupName(partDTO.getGroupName());
        partModel.setLineDescription(partDTO.getLineDescription());
        partModel.setPartNumber(partDTO.getPartNumber());
        partModel.setPartDescription(partDTO.getPartDescription());
        partModel.setPartStatus(partDTO.getPartStatus());

        // Save the new part record
        PartModel savedPart = partRepository.save(partModel);

        // Convert saved PartModel back to PartDTO
        PartDTO savedPartDTO = new PartDTO();
        savedPartDTO.setPartId(savedPart.getPartId());
        savedPartDTO.setUnitName(savedPart.getUnitName());
        savedPartDTO.setGroupName(savedPart.getGroupName());
        savedPartDTO.setLineDescription(savedPart.getLineDescription());
        savedPartDTO.setPartNumber(savedPart.getPartNumber());
        savedPartDTO.setPartDescription(savedPart.getPartDescription());
        savedPartDTO.setPartStatus(savedPart.getPartStatus());

        return savedPartDTO;
    }

    public PartDTO updatePart(PartDTO partDTO) {
        // Convert PartDTO to PartModel
        PartModel partModel = new PartModel();
        partModel.setPartId(partDTO.getPartId());
        partModel.setUnitName(partDTO.getUnitName());
        partModel.setGroupName(partDTO.getGroupName());
        partModel.setLineDescription(partDTO.getLineDescription());
        partModel.setPartNumber(partDTO.getPartNumber());
        partModel.setPartDescription(partDTO.getPartDescription());
        partModel.setPartStatus(partDTO.getPartStatus());

        // Update the existing part record
        PartModel updatedPart = partRepository.save(partModel);

        // Convert updated PartModel back to PartDTO
        PartDTO updatedPartDTO = new PartDTO();
        updatedPartDTO.setPartId(updatedPart.getPartId());
        updatedPartDTO.setUnitName(updatedPart.getUnitName());
        updatedPartDTO.setGroupName(updatedPart.getGroupName());
        updatedPartDTO.setLineDescription(updatedPart.getLineDescription());
        updatedPartDTO.setPartNumber(updatedPart.getPartNumber());
        updatedPartDTO.setPartDescription(updatedPart.getPartDescription());
        updatedPartDTO.setPartStatus(updatedPart.getPartStatus());

        return updatedPartDTO;
    }
}
