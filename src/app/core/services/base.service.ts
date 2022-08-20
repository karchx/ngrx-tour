import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  readonly BASE_URL = 'http://localhost:3000';

  constructor() { }
}
