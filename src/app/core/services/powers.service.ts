import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Power } from '../models/power.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PowersService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getPowers(): Observable<Power[]> {
    return this.httpClient.get<Power[]>(`${this.BASE_URL}/powers`);
  }
}
