package com.example.tmm022fmb.interfaces;

public interface UnitIdInterface {
    // Method to get List of Values (LOV) for Unit ID
    void getLov(int globalParameter);

    // Method to check the existence of Unit ID and Unit Name in the database
    boolean checkUnitIdExistence(String unitId, String unitName, int globalParameter);
}
