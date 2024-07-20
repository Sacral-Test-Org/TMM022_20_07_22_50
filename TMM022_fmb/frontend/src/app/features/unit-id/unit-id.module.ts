import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitIdComponent } from './unit-id.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UnitIdComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: UnitIdComponent }
    ])
  ],
  exports: [UnitIdComponent]
})
export class UnitIdModule {
  configureModule() {
    // Logic to define the module for the Unit ID component
  }
}