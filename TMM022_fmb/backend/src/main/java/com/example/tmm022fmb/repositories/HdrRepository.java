package com.example.tmm022fmb.repositories;

import com.example.tmm022fmb.models.PartNumberLookupModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HdrRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<PartNumberLookupModel> lookupPartNumbers(int globalParameter) {
        String query;
        if (globalParameter == 0) {
            query = "SELECT UNIQUE PART_NO, DESCRIPTION FROM EIIS_PART_MASTER WHERE PART_STATUS = 'A' ORDER BY 1 ASC";
        } else {
            query = "SELECT PART_ID, PARTNO, PART_DESC, PART_STATUS FROM HPM_PART_MASTER ORDER BY 1 ASC";
        }
        return jdbcTemplate.query(query, (rs, rowNum) -> new PartNumberLookupModel(rs.getString("PART_NO"), rs.getString("DESCRIPTION")));
    }

    public boolean validatePartNumber(String partNumber, int globalParameter) {
        String query;
        if (globalParameter == 0) {
            query = "SELECT COUNT(*) FROM EIIS_PART_MASTER WHERE PART_STATUS = 'A' AND PART_NO = ?";
        } else {
            query = "SELECT COUNT(*) FROM HPM_PART_MASTER WHERE PARTNO = ?";
        }
        Integer count = jdbcTemplate.queryForObject(query, new Object[]{partNumber}, Integer.class);
        return count != null && count > 0;
    }
}
