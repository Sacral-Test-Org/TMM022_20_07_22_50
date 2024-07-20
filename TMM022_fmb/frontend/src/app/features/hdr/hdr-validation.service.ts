import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdrValidationService {

  validateFields(fields: any[]): boolean {
    for (let field of fields) {
      if (field == null || field === '') {
        this.displayErrorMessage(field);
        return false;
      }
    }
    return true;
  }

  private displayErrorMessage(field: any): void {
    // Logic to display error message
    console.error(`Validation failed for field: ${field}`);
  }
}
