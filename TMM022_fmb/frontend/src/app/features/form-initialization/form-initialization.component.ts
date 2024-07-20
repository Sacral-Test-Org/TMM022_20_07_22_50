import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from 'src/app/core/services/form-initialization.service';

@Component({
  selector: 'app-form-initialization',
  templateUrl: './form-initialization.component.html',
  styleUrls: ['./form-initialization.component.scss']
})
export class FormInitializationComponent implements OnInit {
  SCREENNAME: string;
  SYSDATE: Date;
  PARA: number = 0;
  mode: string;

  constructor(private formInitializationService: FormInitializationService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // Maximize the main window
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

    // Set PART_MASTER window to its normal state
    // Assuming PART_MASTER is another component or window, this would be handled accordingly

    // Set the title of the main window
    document.title = 'T K A P - [IS]';

    // Store the current form name in SCREENNAME
    this.SCREENNAME = 'FormInitializationComponent';

    // Store the current date in SYSDATE, truncated to remove the time portion
    this.SYSDATE = new Date();
    this.SYSDATE.setHours(0, 0, 0, 0);

    // Initialize global parameter PARA to 0
    this.PARA = 0;

    // Set mode based on the value of PARA
    this.mode = this.PARA === 0 ? 'Create Mode' : 'Edit Mode';

    // Set cursor style to default
    document.body.style.cursor = 'default';

    // Disable the SAVE button
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
      saveButton.setAttribute('disabled', 'true');
    }

    // Enable fields for user input
    const fieldsToEnable = ['GROUP_ID', 'PARTNO', 'PART_STATUS', 'PART_DESC', 'LINE_ID'];
    fieldsToEnable.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.removeAttribute('disabled');
      }
    });

    // Enable UNIT_ID field if not enabled
    const unitIdField = document.getElementById('UNIT_ID');
    if (unitIdField && unitIdField.hasAttribute('disabled')) {
      unitIdField.removeAttribute('disabled');
    }

    // Move cursor to UNIT_ID field
    this.setCursorToUnitId();
  }

  setCursorToUnitId(): void {
    const unitIdField = document.getElementById('UNIT_ID');
    if (unitIdField) {
      unitIdField.focus();
    }
  }

  whenNewFormInstance(): void {
    // Handle any necessary initialization logic after the form is cleared
    this.initializeForm();
  }

  reinitializeForm(): void {
    // Reset all form fields to their default values
    const formFields = ['GROUP_ID', 'PARTNO', 'PART_STATUS', 'PART_DESC', 'LINE_ID', 'UNIT_ID'];
    formFields.forEach(fieldId => {
      const field = document.getElementById(fieldId) as HTMLInputElement;
      if (field) {
        field.value = '';
      }
    });

    // Ensure that the form is in its initial state
    this.initializeForm();
  }
}
