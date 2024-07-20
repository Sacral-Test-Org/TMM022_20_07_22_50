import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api/api.service';
import { NavigationService } from '../../core/services/navigation/navigation.service';
import { ButtonService } from '../../core/services/button/button.service';
import { FieldService } from '../../core/services/field/field.service';
import { ValidationService } from '../../core/services/validation/validation.service';

@Injectable({
  providedIn: 'root'
})
export class UnitIdService {
  private globalParameter: number = 0; // This should be set based on your application logic

  constructor(
    private apiService: ApiService,
    private navigationService: NavigationService,
    private buttonService: ButtonService,
    private fieldService: FieldService,
    private validationService: ValidationService
  ) {}

  getLov() {
    if (this.globalParameter === 0) {
      return this.apiService.getLov('unitIdSelection');
    } else if (this.globalParameter === 1) {
      return this.apiService.getLov('unitIdEditing');
    }
  }

  navigateToGroupId() {
    this.navigationService.navigateToGroupId();
  }

  disableSaveButton() {
    this.buttonService.disableSaveButton();
  }

  clearFields() {
    this.fieldService.clearFields(['unitName', 'groupId', 'groupName', 'lineId', 'lineDescription', 'partId', 'partNumber', 'partDescription']);
  }

  navigateToUnitId() {
    this.navigationService.navigateToUnitId();
  }

  checkEmptyFields(unitId: string, unitName: string) {
    if (!unitId || !unitName) {
      this.validationService.showErrorMessage('Unit ID and Unit Name cannot be empty');
      this.navigateToUnitId();
      return false;
    }
    return true;
  }

  checkUnitIdExistence(unitId: string, unitName: string) {
    if (this.globalParameter === 0) {
      return this.apiService.checkUnitIdExistenceInMesUnitMaster(unitId, unitName);
    } else if (this.globalParameter === 1) {
      return this.apiService.checkUnitIdExistenceInBothTables(unitId, unitName);
    }
  }
}
