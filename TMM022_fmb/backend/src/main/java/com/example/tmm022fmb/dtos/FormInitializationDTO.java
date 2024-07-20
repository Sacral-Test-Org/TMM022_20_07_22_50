package com.example.tmm022fmb.dtos;

import java.time.LocalDate;

public class FormInitializationDTO {
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
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
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