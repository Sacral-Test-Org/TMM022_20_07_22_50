import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartFieldsModule } from './features/part-fields/part-fields.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartFieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static importModule(module: object): void {
    // Logic to import the PartFieldsModule and add it to the imports array
    // This is a placeholder as Angular's NgModule decorator handles this automatically
  }

  static configureModules(): void {
    // Logic to import and include the new Unit ID module
    // This is a placeholder as Angular's NgModule decorator handles this automatically
  }
}