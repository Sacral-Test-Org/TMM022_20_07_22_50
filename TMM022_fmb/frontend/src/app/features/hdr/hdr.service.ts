import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HdrController } from 'src/app/core/services/api/hdr.controller';
import { Lov } from 'src/app/shared/models/lov.model';

@Injectable({
  providedIn: 'root'
})
export class HdrService {
  constructor(private hdrController: HdrController) {}

  getLovForLineId(globalParameter: number): Observable<Lov[]> {
    return this.hdrController.getLovForLineId(globalParameter);
  }

  validateLineId(lineId: string, lineDesc: string, globalParameter: number): Observable<boolean> {
    return this.hdrController.validateLineId(lineId, lineDesc, globalParameter);
  }
}
