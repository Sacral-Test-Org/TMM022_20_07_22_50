package com.example.tmm022fmb.models;

public class PartNumberLookupModel {
    private String partNumber;
    private String description;

    public PartNumberLookupModel() {}

    public PartNumberLookupModel(String partNumber, String description) {
        this.partNumber = partNumber;
        this.description = description;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
