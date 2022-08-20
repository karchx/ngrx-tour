import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.BASE_URL}/heroes`);
  }
}