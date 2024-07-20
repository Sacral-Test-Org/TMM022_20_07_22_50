package com.example.tmm022fmb.interfaces;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.sql.DataSource;

public class GroupIdRepository {
    private final DataSource dataSource;

    public GroupIdRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public boolean validateGroupIdInMesGroupMaster(String groupId, String groupName, String unitId) {
        String query = "SELECT COUNT(*) FROM (SELECT UNIQUE GROUP_ID, GROUP_NAME FROM MES_GROUP_MASTER WHERE GROUP_STATUS='O' AND GROUP_SECTION=? AND GROUP_ID=? AND GROUP_NAME=?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, unitId);
            preparedStatement.setString(2, groupId);
            preparedStatement.setString(3, groupName);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt(1) > 0;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean validateGroupIdInHpmPartMaster(String groupId, String groupName, String unitId) {
        String query = "SELECT COUNT(*) FROM (SELECT UNIQUE B.GROUP_ID, A.GROUP_NAME FROM MES_GROUP_MASTER A, HPM_PART_MASTER B WHERE B.GROUP_ID=A.GROUP_ID AND B.UNIT_ID=? AND B.GROUP_ID=? AND A.GROUP_NAME=?)";
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, unitId);
            preparedStatement.setString(2, groupId);
            preparedStatement.setString(3, groupName);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt(1) > 0;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
