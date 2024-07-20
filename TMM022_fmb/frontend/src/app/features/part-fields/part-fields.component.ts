import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from '../form-initialization/form-initialization.service';
import { ButtonsComponent } from '../buttons/buttons.component';
import { MessageService } from '../../core/services/message.service';
import { PartFieldsValidationService } from './part-fields-validation.service';

@Component({
  selector: 'app-part-fields',
  templateUrl: './part-fields.component.html',
  styleUrls: ['./part-fields.component.scss']
})
export class PartFieldsComponent implements OnInit {
  currentDate: string;
  screenName: string = 'Part Fields Screen';
  modeOfOperation: string = 'Edit';
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  partStatus: string = 'A';

  constructor(
    private formInitializationService: FormInitializationService,
    private messageService: MessageService,
    private partFieldsValidationService: PartFieldsValidationService
  ) {}

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
    this.formInitializationService.getInitialData().subscribe(data => {
      // Initialize fields with data
    });
  }

  displayHints(): void {
    console.log('Press <RETURN> to run a new form or <F6> to run a new form and return back.');
  }

  handlePartDescClick(): void {
    const saveButton = document.querySelector('app-buttons .save-button') as HTMLButtonElement;
    if (saveButton && !saveButton.disabled) {
      saveButton.disabled = true;
    }
    if (this.partDesc) {
      this.partDesc = '';
    }
    const partDescField = document.querySelector('#partDesc') as HTMLInputElement;
    if (partDescField) {
      partDescField.focus();
    }
  }

  handlePartDescDoubleClick(): void {
    this.handlePartDescClick();
  }

  validateAndNavigate(): void {
    try {
      if (!this.unitId || !this.unitName) {
        this.messageService.showMessage('Unit ID and Unit Name should not be null');
        const unitIdField = document.querySelector('#unitId') as HTMLInputElement;
        if (unitIdField) {
          unitIdField.focus();
        }
        return;
      }
      if (!this.groupId || !this.groupName) {
        this.messageService.showMessage('Group ID and Group Name should not be null');
        const groupIdField = document.querySelector('#groupId') as HTMLInputElement;
        if (groupIdField) {
          groupIdField.focus();
        }
        return;
      }
      if (!this.lineId || !this.lineDesc) {
        this.messageService.showMessage('Line ID and Line Name should not be null');
        const lineIdField = document.querySelector('#lineId') as HTMLInputElement;
        if (lineIdField) {
          lineIdField.focus();
        }
        return;
      }
      const globalParameter = 0; // Assume global parameter value
      if (globalParameter === 0) {
        if (!this.partNo) {
          this.messageService.showMessage('Part No and Part Description should not be null');
          const partNoField = document.querySelector('#partNo') as HTMLInputElement;
          if (partNoField) {
            partNoField.focus();
          }
          return;
        }
      } else if (globalParameter === 1) {
        if (!this.partId) {
          this.messageService.showMessage('Kindly Choose data from LOV before changing Description');
          const partNoField = document.querySelector('#partNo') as HTMLInputElement;
          if (partNoField) {
            partNoField.focus();
          }
          return;
        }
        if (!this.partNo || !this.partDesc) {
          this.messageService.showMessage('Part No and Part Description should not be null');
          const partNoField = document.querySelector('#partNo') as HTMLInputElement;
          if (partNoField) {
            partNoField.focus();
          }
          return;
        }
      }
      this.partStatus = 'A';
    } catch (error) {
      this.messageService.showMessage('An error occurred');
    }
  }

  validatePartStatus(): boolean {
    if (!this.partStatus) {
      this.messageService.showMessage('PART_STATUS CANT BE NULL');
      const partStatusField = document.querySelector('#partStatus') as HTMLInputElement;
      if (partStatusField) {
        partStatusField.focus();
      }
      return false;
    }
    return true;
  }

  navigateToNextItem(): boolean {
    if (!this.partFieldsValidationService.validateUnitFields()) {
      this.messageService.showMessage('Unit ID and Unit Name should not be null');
      const unitIdField = document.querySelector('#unitId') as HTMLInputElement;
      if (unitIdField) {
        unitIdField.focus();
      }
      return false;
    }
    if (!this.partFieldsValidationService.validateGroupFields()) {
      this.messageService.showMessage('Group ID and Group Name should not be null');
      const groupIdField = document.querySelector('#groupId') as HTMLInputElement;
      if (groupIdField) {
        groupIdField.focus();
      }
      return false;
    }
    if (!this.partFieldsValidationService.validateLineFields()) {
      this.messageService.showMessage('Line ID and Line Name should not be null');
      const lineIdField = document.querySelector('#lineId') as HTMLInputElement;
      if (lineIdField) {
        lineIdField.focus();
      }
      return false;
    }
    if (!this.partFieldsValidationService.validatePartFields()) {
      this.messageService.showMessage('Part No and Part Description should not be null');
      const partNoField = document.querySelector('#partNo') as HTMLInputElement;
      if (partNoField) {
        partNoField.focus();
      }
      return false;
    }
    this.partStatus = 'A';
    return true;
  }
}
