import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api/api.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitIdValidationService {
  private globalParameter: number = 0; // This should be set based on your application logic

  constructor(private apiService: ApiService) {}

  validateUnitId(unitId: string, unitName: string): Observable<boolean> {
    if (!unitId || !unitName) {
      alert('Unit ID and Unit Name cannot be empty.');
      return of(false);
    }

    if (this.globalParameter === 0) {
      return this.apiService.checkUnitIdExistenceInMesUnitMaster(unitId, unitName).pipe(
        map((exists: boolean) => {
          if (!exists) {
            alert('Unit ID and Unit Name do not exist in MES_UNIT_MASTER.');
            return false;
          }
          return true;
        }),
        catchError((error) => {
          console.error('Error checking Unit ID existence in MES_UNIT_MASTER', error);
          alert('An error occurred while validating the Unit ID.');
          return of(false);
        })
      );
    } else if (this.globalParameter === 1) {
      return this.apiService.checkUnitIdExistenceInBothTables(unitId, unitName).pipe(
        map((exists: boolean) => {
          if (!exists) {
            alert('Unit ID and Unit Name do not exist in MES_UNIT_MASTER or HPM_PART_MASTER.');
            return false;
          }
          return true;
        }),
        catchError((error) => {
          console.error('Error checking Unit ID existence in both tables', error);
          alert('An error occurred while validating the Unit ID.');
          return of(false);
        })
      );
    } else {
      alert('Invalid global parameter value.');
      return of(false);
    }
  }
}
