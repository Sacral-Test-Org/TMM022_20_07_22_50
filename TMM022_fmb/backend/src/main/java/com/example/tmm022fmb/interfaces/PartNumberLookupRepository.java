package com.example.tmm022fmb.interfaces;

import com.example.tmm022fmb.models.PartNumberLookupModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@Repository
public interface PartNumberLookupRepository extends CrudRepository<PartNumberLookupModel, Long> {

    @Query(value = "SELECT UNIQUE PART_NO, DESCRIPTION FROM EIIS_PART_MASTER WHERE SEGMENTCODE = :unitId AND PART_STATUS = 'A' ORDER BY 1 ASC", nativeQuery = true)
    List<PartNumberLookupModel> lookupPartNumbersForGlobalParameterZero(@Param("unitId") int unitId);

    @Query(value = "SELECT PART_ID, PARTNO, PART_DESC, PART_STATUS FROM HPM_PART_MASTER WHERE UNIT_ID = :unitId AND GROUP_ID = :groupId AND LINE_ID = :lineId ORDER BY 1 ASC", nativeQuery = true)
    List<PartNumberLookupModel> lookupPartNumbersForGlobalParameterOne(@Param("unitId") int unitId, @Param("groupId") int groupId, @Param("lineId") int lineId);

    default List<PartNumberLookupModel> lookupPartNumbers(int globalParameter, int unitId, int groupId, int lineId) {
        if (globalParameter == 0) {
            return lookupPartNumbersForGlobalParameterZero(unitId);
        } else if (globalParameter == 1) {
            return lookupPartNumbersForGlobalParameterOne(unitId, groupId, lineId);
        } else {
            throw new IllegalArgumentException("Invalid global parameter value");
        }
    }
}
