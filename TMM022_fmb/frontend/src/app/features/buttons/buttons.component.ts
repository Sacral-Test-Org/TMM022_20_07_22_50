import { Component } from '@angular/core';
import { FormInitializationComponent } from '../form-initialization/form-initialization.component';
import { PartFieldsValidationService } from '../services/part-fields-validation.service';
import { PartFieldsService } from '../services/part-fields.service';
import { PartDTO } from '../models/part.dto';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(
    private formInitialization: FormInitializationComponent,
    private partFieldsValidationService: PartFieldsValidationService,
    private partFieldsService: PartFieldsService
  ) {}

  saveData(): void {
    const isValid = this.partFieldsValidationService.validateFields();
    if (!isValid) {
      alert('Please fill all required fields.');
      return;
    }
    const confirmSave = confirm('Do you want to save or update the record?');
    if (confirmSave) {
      const partDTO: PartDTO = this.collectFormData();
      this.partFieldsService.saveOrUpdatePart(partDTO).subscribe(
        () => {
          alert('Record saved successfully.');
          this.resetForm();
        },
        (error) => {
          alert('Error saving record: ' + error.message);
        }
      );
    }
  }

  clearData(): void {
    this.clearForm();
  }

  editData(): void {
    this.clearForm();
    this.formInitialization.reinitializeForm();
    this.setPartStatus('A');
    this.setGlobalParameter(1);
    this.setMode('Edit Mode');
    this.disableEditButton();
  }

  exitForm(): void {
    const confirmExit = confirm('Do you want to exit?');
    if (confirmExit) {
      window.close();
    }
  }

  private clearForm(): void {
    // Logic to clear all form fields without validation
    // Enable UNIT_ID field if it was disabled
    // Set PART_STATUS field to 'A'
    this.formInitialization.whenNewFormInstance();
  }

  private setPartStatus(status: string): void {
    // Logic to set PART_STATUS field
  }

  private setGlobalParameter(value: number): void {
    // Logic to set global parameter
  }

  private setMode(mode: string): void {
    // Logic to set mode
  }

  private disableEditButton(): void {
    // Logic to disable the Edit button
  }

  private collectFormData(): PartDTO {
    // Logic to collect form data and return as PartDTO
    return {} as PartDTO;
  }

  private resetForm(): void {
    // Logic to reset form fields to their default state
  }
}