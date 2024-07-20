import { Component } from '@angular/core';
import { UnitIdService } from '../../core/services/unit-id.service';

@Component({
  selector: 'app-unit-id',
  templateUrl: './unit-id.component.html',
  styleUrls: ['./unit-id.component.scss']
})
export class UnitIdComponent {
  constructor(private unitIdService: UnitIdService) {}

  handleDoubleClick() {
    const globalParameter = this.unitIdService.getGlobalParameter();
    if (globalParameter === 0) {
      this.unitIdService.getLov('select').then(() => {
        this.unitIdService.navigateToGroupId();
      });
    } else if (globalParameter === 1) {
      this.unitIdService.getLov('edit').then(() => {
        this.unitIdService.navigateToGroupId();
      });
    }
  }

  handleClick() {
    this.unitIdService.disableSaveButton();
    this.unitIdService.clearFields(['unitName', 'groupId', 'groupName', 'lineId', 'lineDescription', 'partId', 'partNumber', 'partDescription']);
    this.unitIdService.navigateToUnitId();
  }

  handleFieldExit() {
    if (this.unitIdService.checkEmptyFields(['unitId', 'unitName'])) {
      this.unitIdService.displayErrorMessage('Unit ID and Unit Name cannot be empty');
      this.unitIdService.navigateToUnitId();
    } else {
      this.unitIdService.navigateToGroupId();
    }
  }

  validateUnitId() {
    const unitId = this.unitIdService.getFieldValue('unitId');
    const unitName = this.unitIdService.getFieldValue('unitName');
    if (unitId && unitName) {
      const globalParameter = this.unitIdService.getGlobalParameter();
      if (globalParameter === 0) {
        this.unitIdService.checkUnitIdExistence('MES_UNIT_MASTER', unitId, unitName).then(exists => {
          if (!exists) {
            this.unitIdService.displayErrorMessage('Unit ID and Unit Name do not exist');
          }
        });
      } else if (globalParameter === 1) {
        this.unitIdService.checkUnitIdExistence('MES_UNIT_MASTER', unitId, unitName).then(existsInMes => {
          if (!existsInMes) {
            this.unitIdService.checkUnitIdExistence('HPM_PART_MASTER', unitId, unitName).then(existsInHpm => {
              if (!existsInHpm) {
                this.unitIdService.displayErrorMessage('Unit ID and Unit Name do not exist');
              }
            });
          }
        });
      }
    }
  }
}
