import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
