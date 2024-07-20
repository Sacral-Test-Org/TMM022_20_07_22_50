import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PartNumber } from './part-number.model';

@Injectable({
  providedIn: 'root'
})
export class PartNumberLookupService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  lookupPartNumbers(globalParameter: number): Observable<PartNumber[]> {
    const endpoint = globalParameter === 0 ? '/eiis-part-master' : '/hpm-part-master';
    return this.http.get<PartNumber[]>(`${this.apiUrl}${endpoint}`);
  }
}
