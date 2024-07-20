import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartFieldsComponent } from './part-fields.component';

@NgModule({
  declarations: [
    PartFieldsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PartFieldsComponent
  ]
})
export class PartFieldsModule { }
