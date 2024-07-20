package com.example.tmm022fmb.services;

import com.example.tmm022fmb.models.FormInitializationModel;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class FormInitializationService {

    public void initializeForm() {
        // Maximize the main window
        FormInitializationModel.setMainWindowMaximized(true);

        // Set 'PART_MASTER' window to its normal state
        FormInitializationModel.setPartMasterWindowState("normal");

        // Set the title of the main window
        FormInitializationModel.setMainWindowTitle("T K A P - [IS]");

        // Store the current form name in SCREENNAME
        FormInitializationModel.setScreenName("CurrentFormName");

        // Store the current date in SYSDATE, truncated to remove the time portion
        LocalDate currentDate = LocalDate.now();
        FormInitializationModel.setSysDate(currentDate.format(DateTimeFormatter.ISO_LOCAL_DATE));

        // Initialize global parameter PARA to 0
        int PARA = 0;
        FormInitializationModel.setPara(PARA);

        // Set mode based on the value of PARA
        if (PARA == 0) {
            FormInitializationModel.setMode("Create Mode");
        } else {
            FormInitializationModel.setMode("Edit Mode");
        }

        // Set cursor style to default
        FormInitializationModel.setCursorStyle("default");

        // Disable the 'SAVE' button
        FormInitializationModel.setSaveButtonEnabled(false);

        // Enable fields for user input
        FormInitializationModel.setFieldEnabled("GROUP_ID", true);
        FormInitializationModel.setFieldEnabled("PARTNO", true);
        FormInitializationModel.setFieldEnabled("PART_STATUS", true);
        FormInitializationModel.setFieldEnabled("PART_DESC", true);
        FormInitializationModel.setFieldEnabled("LINE_ID", true);

        // Enable 'UNIT_ID' field if not enabled
        if (!FormInitializationModel.isFieldEnabled("UNIT_ID")) {
            FormInitializationModel.setFieldEnabled("UNIT_ID", true);
        }

        // Move cursor to 'UNIT_ID' field
        FormInitializationModel.setCursorToField("UNIT_ID");
    }
}
