package com.example.tmm022fmb.models;

import java.time.LocalDate;

public class FormInitializationModel {
    private String screenName;
    private LocalDate sysDate;
    private int para;
    private String mode;
    private boolean saveButtonEnabled;
    private boolean groupIdEnabled;
    private boolean partNoEnabled;
    private boolean partStatusEnabled;
    private boolean partDescEnabled;
    private boolean lineIdEnabled;
    private boolean unitIdEnabled;
    private String cursorField;

    public FormInitializationModel() {
        this.para = 0;
        this.saveButtonEnabled = false;
        this.groupIdEnabled = true;
        this.partNoEnabled = true;
        this.partStatusEnabled = true;
        this.partDescEnabled = true;
        this.lineIdEnabled = true;
        this.unitIdEnabled = true;
        this.cursorField = "UNIT_ID";
    }

    // Getters and Setters
    public String getScreenName() {
        return screenName;
    }

    public void setScreenName(String screenName) {
        this.screenName = screenName;
    }

    public LocalDate getSysDate() {
        return sysDate;
    }

    public void setSysDate(LocalDate sysDate) {
        this.sysDate = sysDate;
    }

    public int getPara() {
        return para;
    }

    public void setPara(int para) {
        this.para = para;
        this.mode = (para == 0) ? "Create Mode" : "Edit Mode";
    }

    public String getMode() {
        return mode;
    }

    public boolean isSaveButtonEnabled() {
        return saveButtonEnabled;
    }

    public void setSaveButtonEnabled(boolean saveButtonEnabled) {
        this.saveButtonEnabled = saveButtonEnabled;
    }

    public boolean isGroupIdEnabled() {
        return groupIdEnabled;
    }

    public void setGroupIdEnabled(boolean groupIdEnabled) {
        this.groupIdEnabled = groupIdEnabled;
    }

    public boolean isPartNoEnabled() {
        return partNoEnabled;
    }

    public void setPartNoEnabled(boolean partNoEnabled) {
        this.partNoEnabled = partNoEnabled;
    }

    public boolean isPartStatusEnabled() {
        return partStatusEnabled;
    }

    public void setPartStatusEnabled(boolean partStatusEnabled) {
        this.partStatusEnabled = partStatusEnabled;
    }

    public boolean isPartDescEnabled() {
        return partDescEnabled;
    }

    public void setPartDescEnabled(boolean partDescEnabled) {
        this.partDescEnabled = partDescEnabled;
    }

    public boolean isLineIdEnabled() {
        return lineIdEnabled;
    }

    public void setLineIdEnabled(boolean lineIdEnabled) {
        this.lineIdEnabled = lineIdEnabled;
    }

    public boolean isUnitIdEnabled() {
        return unitIdEnabled;
    }

    public void setUnitIdEnabled(boolean unitIdEnabled) {
        this.unitIdEnabled = unitIdEnabled;
    }

    public String getCursorField() {
        return cursorField;
    }

    public void setCursorField(String cursorField) {
        this.cursorField = cursorField;
    }
}
