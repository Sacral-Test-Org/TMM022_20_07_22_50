package com.example.tmm022fmb.services;

import com.example.tmm022fmb.repositories.HdrRepository;
import com.example.tmm022fmb.models.Lov;
import com.example.tmm022fmb.models.PartNumberLookupModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HdrService {

    @Autowired
    private HdrRepository hdrRepository;

    public List<Lov> getLovForLineId(int globalParameter) {
        return hdrRepository.getLovForLineId(globalParameter);
    }

    public boolean validateLineId(String lineId, String lineDesc, int globalParameter) {
        return hdrRepository.validateLineId(lineId, lineDesc, globalParameter);
    }

    public List<PartNumberLookupModel> lookupPartNumbers(int globalParameter) {
        return hdrRepository.lookupPartNumbers(globalParameter);
    }

    public boolean validatePartNumber(String partNumber, int globalParameter) {
        return hdrRepository.validatePartNumber(partNumber, globalParameter);
    }
}
