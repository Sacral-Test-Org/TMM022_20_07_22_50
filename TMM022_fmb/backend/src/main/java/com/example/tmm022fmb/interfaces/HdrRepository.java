package com.example.tmm022fmb.interfaces;

import com.example.tmm022fmb.models.Lov;
import java.util.List;

public interface HdrRepository {

    List<Lov> getLovForLineId(int globalParameter);

    boolean validateLineId(String lineId, String lineDesc, int globalParameter);
}

package com.example.tmm022fmb.repositories;

import com.example.tmm022fmb.interfaces.HdrRepository;
import com.example.tmm022fmb.models.Lov;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HdrRepositoryImpl implements HdrRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Lov> getLovForLineId(int globalParameter) {
        String sql;
        if (globalParameter == 0) {
            sql = "SELECT UNIQUE LINE_ID, LINE_DESC FROM HPM_LINE_MASTER WHERE UNIT_ID = ? AND GROUP_ID = ? ORDER BY 1 ASC";
        } else {
            sql = "SELECT UNIQUE B.LINE_ID, A.LINE_DESC FROM HPM_LINE_MASTER A, HPM_PART_MASTER B WHERE A.LINE_ID = B.LINE_ID AND B.UNIT_ID = ? AND B.GROUP_ID = ? ORDER BY 1 ASC";
        }
        return jdbcTemplate.query(sql, new Object[]{/* parameters */}, (rs, rowNum) -> new Lov(rs.getString("LINE_ID"), rs.getString("LINE_DESC")));
    }

    @Override
    public boolean validateLineId(String lineId, String lineDesc, int globalParameter) {
        String sql;
        if (globalParameter == 0) {
            sql = "SELECT COUNT(*) FROM (SELECT UNIQUE LINE_ID, LINE_DESC FROM HPM_LINE_MASTER WHERE UNIT_ID = ? AND GROUP_ID = ? AND LINE_ID = ? AND LINE_DESC = ?)";
        } else {
            sql = "SELECT COUNT(*) FROM (SELECT UNIQUE B.LINE_ID, A.LINE_DESC FROM HPM_LINE_MASTER A, HPM_PART_MASTER B WHERE A.LINE_ID = B.LINE_ID AND B.UNIT_ID = ? AND B.GROUP_ID = ? AND B.LINE_ID = ? AND A.LINE_DESC = ?)";
        }
        Integer count = jdbcTemplate.queryForObject(sql, new Object[]{/* parameters */}, Integer.class);
        return count != null && count > 0;
    }
}
