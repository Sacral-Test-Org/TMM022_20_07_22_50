import { Component } from '@angular/core';
import { GroupIdService } from './group-id.service';
import { GroupIdValidationService } from './group-id-validation.service';

@Component({
  selector: 'app-group-id',
  templateUrl: './group-id.component.html',
  styleUrls: ['./group-id.component.scss']
})
export class GroupIdComponent {
  globalParameter: number;
  groupId: string;
  groupName: string;

  constructor(
    private groupIdService: GroupIdService,
    private groupIdValidationService: GroupIdValidationService
  ) {}

  onDoubleClick(event: MouseEvent): void {
    if (this.globalParameter === 0) {
      this.groupIdService.showLovForSelection(this.globalParameter);
    } else if (this.globalParameter === 1) {
      this.groupIdService.showLovForEditing(this.globalParameter);
    }
  }

  onClick(event: MouseEvent): void {
    this.groupIdService.disableSaveButton();
    this.groupIdService.clearFields();
  }

  onNavigateNext(event: KeyboardEvent): void {
    const isValid = this.groupIdValidationService.validateFields();
    if (!isValid) {
      // Display error message and navigate back to the respective field
      alert('Please fill all required fields.');
      return;
    }
    // Navigate to the Line ID field
  }

  onValidate(event: FocusEvent): void {
    let isValid = false;
    if (this.globalParameter === 0) {
      isValid = this.groupIdValidationService.validateGroupId(this.globalParameter, this.groupId, this.groupName);
    } else if (this.globalParameter === 1) {
      isValid = this.groupIdValidationService.validateGroupId(this.globalParameter, this.groupId, this.groupName);
    }
    if (!isValid) {
      // Display error message
      alert('Invalid Group ID or Group Name.');
    }
  }
}
