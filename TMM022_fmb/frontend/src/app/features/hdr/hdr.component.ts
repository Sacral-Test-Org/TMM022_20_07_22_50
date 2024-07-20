import { Component } from '@angular/core';
import { HdrService } from './hdr.service';
import { HdrValidationService } from './hdr-validation.service';
import { PartNumberLookupService } from './part-number-lookup.service';
import { PartNumberValidationService } from './part-number-validation.service';
import { Observable } from 'rxjs';
import { Lov } from './models/lov.model';
import { PartNumber } from './models/part-number.model';

@Component({
  selector: 'app-hdr',
  templateUrl: './hdr.component.html',
  styleUrls: ['./hdr.component.scss']
})
export class HdrComponent {
  globalParameter: number;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  saveButtonEnabled: boolean;

  constructor(
    private hdrService: HdrService,
    private hdrValidationService: HdrValidationService,
    private partNumberLookupService: PartNumberLookupService,
    private partNumberValidationService: PartNumberValidationService
  ) {}

  onLineIdDoubleClick(): void {
    if (this.globalParameter === 0) {
      this.hdrService.getLovForLineId(0).subscribe((lovs: Lov[]) => {
        // Logic to display LOV for selecting a line ID
        // Navigate to the part number field upon selection
      });
    } else if (this.globalParameter === 1) {
      this.hdrService.getLovForLineId(1).subscribe((lovs: Lov[]) => {
        // Logic to display LOV for editing the line ID
        // Navigate to the part number field upon selection
      });
    }
  }

  onLineIdClick(): void {
    if (this.saveButtonEnabled) {
      this.saveButtonEnabled = false;
    }
    this.lineId = '';
    this.lineDesc = '';
    this.partId = '';
    this.partNo = '';
    this.partDesc = '';
    // Logic to navigate back to the line ID field
  }

  onNextItem(): void {
    const fields = [this.unitId, this.unitName, this.groupId, this.groupName, this.lineId, this.lineDesc];
    if (!this.hdrValidationService.validateFields(fields)) {
      // Display error message and navigate to the respective field
    } else {
      // Navigate to the part number field
    }
  }

  onLineIdValidate(): void {
    this.hdrService.validateLineId(this.lineId, this.lineDesc, this.globalParameter).subscribe((isValid: boolean) => {
      if (!isValid) {
        // Display error message
      }
    });
  }

  onPartNumberDoubleClick(): void {
    if (this.globalParameter === 0) {
      this.partNumberLookupService.lookupPartNumbers().subscribe((partNumbers: PartNumber[]) => {
        // Logic to display list of valid part numbers
      });
    } else if (this.globalParameter === 1) {
      this.partNumberLookupService.lookupPartNumbers().subscribe((partNumbers: PartNumber[]) => {
        // Logic to display list of part numbers available for editing
      });
    }
  }

  onPartNumberClick(): void {
    this.partNo = '';
    this.partId = '';
    this.partDesc = '';
  }

  onPartNumberFieldBlur(): void {
    const fields = [this.unitId, this.unitName, this.groupId, this.groupName, this.lineId, this.lineDesc];
    if (!this.hdrValidationService.validateFields(fields)) {
      // Display error message
    }
  }

  validatePartNumber(): void {
    this.partNumberValidationService.validatePartNumber(this.partNo, this.globalParameter).subscribe((isValid: boolean) => {
      if (!isValid) {
        // Display error message
      }
    });
  }
}
