import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupIdComponent } from './group-id.component';
import { GroupIdService } from './group-id.service';
import { GroupIdValidationService } from './group-id-validation.service';

@NgModule({
  declarations: [GroupIdComponent],
  imports: [CommonModule],
  providers: [GroupIdService, GroupIdValidationService],
  exports: [GroupIdComponent]
})
export class GroupIdModule {}
