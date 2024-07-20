import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PartDTO } from './part.dto';

@Injectable({
  providedIn: 'root'
})
export class PartFieldsService {
  private globalParameter: number = 0; // This should be set based on your application logic

  constructor(private http: HttpClient) {}

  validateFields(): boolean {
    const unitId = (document.getElementById('UNIT_ID') as HTMLInputElement).value;
    const unitName = (document.getElementById('UNIT_NAME') as HTMLInputElement).value;
    const groupId = (document.getElementById('GROUP_ID') as HTMLInputElement).value;
    const groupName = (document.getElementById('GROUP_NAME') as HTMLInputElement).value;
    const lineId = (document.getElementById('LINE_ID') as HTMLInputElement).value;
    const lineDesc = (document.getElementById('LINE_DESC') as HTMLInputElement).value;
    const partNo = (document.getElementById('PARTNO') as HTMLInputElement).value;
    const partId = (document.getElementById('PART_ID') as HTMLInputElement).value;
    const partDesc = (document.getElementById('PART_DESC') as HTMLInputElement).value;
    const partStatus = (document.getElementById('PART_STATUS') as HTMLInputElement).value;

    if (!unitId || !unitName) {
      alert('Unit ID and Unit Name should not be null');
      (document.getElementById('UNIT_ID') as HTMLInputElement).focus();
      return false;
    }
    if (!groupId || !groupName) {
      alert('Group ID and Group Name should not be null');
      (document.getElementById('GROUP_ID') as HTMLInputElement).focus();
      return false;
    }
    if (!lineId || !lineDesc) {
      alert('Line ID and Line Name should not be null');
      (document.getElementById('LINE_ID') as HTMLInputElement).focus();
      return false;
    }

    if (this.globalParameter === 0) {
      if (!partNo) {
        alert('Part No and Part Description should not be null');
        (document.getElementById('PARTNO') as HTMLInputElement).focus();
        return false;
      }
      if (unitId && unitName && groupId && groupName && lineId && lineDesc && partNo && partDesc) {
        (document.getElementById('PART_STATUS') as HTMLInputElement).value = 'A';
      }
    } else if (this.globalParameter === 1) {
      if (!partId) {
        alert('Kindly Choose data from LOV before changing Description');
        (document.getElementById('PARTNO') as HTMLInputElement).focus();
        return false;
      }
      if (!partNo || !partDesc) {
        alert('Part No and Part Description should not be null');
        (document.getElementById('PARTNO') as HTMLInputElement).focus();
        return false;
      }
      if (unitId && unitName && groupId && groupName && lineId && lineDesc && partNo && partDesc) {
        (document.getElementById('PART_STATUS') as HTMLInputElement).value = 'A';
      }
    }

    return true;
  }

  handleException(error: any): void {
    alert('An error occurred: ' + error.message);
    throwError(error);
  }

  saveOrUpdatePart(part: PartDTO): Observable<any> {
    if (this.globalParameter === 0) {
      return this.http.post('/api/parts', part).pipe(catchError(this.handleException));
    } else if (this.globalParameter === 1) {
      return this.http.put('/api/parts/' + part.partId, part).pipe(catchError(this.handleException));
    }
    return throwError('Invalid global parameter');
  }
}
