import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartFieldsComponent } from './features/part-fields/part-fields.component';
import { UnitIdComponent } from './features/unit-id/unit-id.component';
import { ButtonsComponent } from './features/buttons/buttons.component';

const routes: Routes = [
  { path: 'part-fields', component: PartFieldsComponent },
  { path: 'unit-id', component: UnitIdComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: '', redirectTo: '/part-fields', pathMatch: 'full' },
  { path: '**', redirectTo: '/part-fields' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static addRoute(routeConfig: object): void {
    routes.push(routeConfig);
  }

  static configureRoutes(): void {
    // Define the routes for the application, including the new Unit ID component.
    routes.push({ path: 'unit-id', component: UnitIdComponent });
  }
}
