import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HdrComponent } from './hdr.component';
import { HdrService } from './hdr.service';
import { HdrValidationService } from './hdr-validation.service';

@NgModule({
  declarations: [
    HdrComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HdrService,
    HdrValidationService
  ],
  exports: [
    HdrComponent
  ]
})
export class HdrModule { }
