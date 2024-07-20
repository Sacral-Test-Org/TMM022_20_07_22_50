import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartFieldsValidationService {

  private partStatus: string = '';
  private unitId: string = '';
  private unitName: string = '';
  private groupId: string = '';
  private groupName: string = '';
  private lineId: string = '';
  private lineDescription: string = '';
  private partNo: string = '';
  private partDescription: string = '';
  private partId: string = '';
  private globalParameter: number = 0;

  validatePartStatus(): boolean {
    if (!this.partStatus) {
      alert('PART_STATUS CANT BE NULL');
      return false;
    }
    return true;
  }

  validateUnitFields(): boolean {
    if (!this.unitId || !this.unitName) {
      alert('Unit ID and Unit Name should not be null');
      return false;
    }
    return true;
  }

  validateGroupFields(): boolean {
    if (!this.groupId || !this.groupName) {
      alert('Group ID and Group Name should not be null');
      return false;
    }
    return true;
  }

  validateLineFields(): boolean {
    if (!this.lineId || !this.lineDescription) {
      alert('Line ID and Line Name should not be null');
      return false;
    }
    return true;
  }

  validatePartFields(): boolean {
    if (this.globalParameter === 0) {
      if (!this.partNo || !this.partDescription) {
        alert('Part No and Part Description should not be null');
        return false;
      }
    } else if (this.globalParameter === 1) {
      if (!this.partId) {
        alert('Kindly Choose data from LOV before changing Description....');
        return false;
      }
      if (!this.partNo || !this.partDescription) {
        alert('Part No and Part Description should not be null');
        return false;
      }
    }
    return true;
  }

  validateFields(): boolean {
    if (!this.partId || !this.unitName || !this.groupName || !this.lineDescription || !this.partNo || !this.partDescription || !this.partStatus) {
      alert('All fields must be filled');
      return false;
    }
    return true;
  }
}
